import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // Start FPS tracing using Chrome DevTools Protocol
  const client = await page.context().newCDPSession(page);
  await client.send('Overlay.setShowFPSCounter', { show: true });

  let frames = 0;
  let lastTime = Date.now();
  
  await page.evaluate(() => {
    window.fpsCount = 0;
    const loop = () => {
      window.fpsCount++;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  });

  console.log('Scrolling down...');
  
  // Wait 1 second to stabilize
  await page.waitForTimeout(1000);
  
  const startFps = await page.evaluate(() => window.fpsCount);
  const startTime = Date.now();

  // Scroll
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 50;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 16); // ~60fps scroll
    });
  });

  const endTime = Date.now();
  const endFps = await page.evaluate(() => window.fpsCount);
  
  const elapsedSeconds = (endTime - startTime) / 1000;
  const fps = (endFps - startFps) / elapsedSeconds;
  
  console.log(`Average FPS during scroll: ${fps.toFixed(2)}`);

  await browser.close();
})();
