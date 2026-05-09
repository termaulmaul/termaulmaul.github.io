import { test, expect } from '@playwright/test'

const EXPECTED = {
  email: 'mailto:maulana.rafi1717@gmail.com',
  github: 'https://github.com/termaulmaul',
  linkedin: 'https://www.linkedin.com/in/maulanarafi/',
  credly: 'https://www.credly.com/users/maulanarafi/badges',
}

test.describe('Portfolio links QA', () => {
  test.beforeEach(async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    page.on('pageerror', err => errors.push(err.message))
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    ;(page as any)._consoleErrors = errors
  })

  test('no console errors on load', async ({ page }) => {
    const errors = (page as any)._consoleErrors as string[]
    const fatal = errors.filter(e => !e.includes('favicon'))
    expect(fatal, `Console errors: ${fatal.join('\n')}`).toHaveLength(0)
  })

  test('email CTA correct', async ({ page }) => {
    const hrefs = await page.locator(`a[href="${EXPECTED.email}"]`).all()
    expect(hrefs.length, 'email link missing').toBeGreaterThan(0)
  })

  test('github CTA correct', async ({ page }) => {
    const hrefs = await page.locator(`a[href="${EXPECTED.github}"]`).all()
    expect(hrefs.length, 'github link missing').toBeGreaterThan(0)
  })

  test('linkedin CTA correct', async ({ page }) => {
    const hrefs = await page.locator(`a[href="${EXPECTED.linkedin}"]`).all()
    expect(hrefs.length, 'linkedin link missing').toBeGreaterThan(0)
  })

  test('credly CTA exact URL', async ({ page }) => {
    const credlyLinks = await page.locator('a[href*="credly.com/users/maulanarafi"]').all()
    expect(credlyLinks.length, 'credly contact link missing or wrong username').toBeGreaterThan(0)

    for (const link of credlyLinks) {
      const href = await link.getAttribute('href')
      expect(href).toContain('www.credly.com')
      expect(href).toContain('maulanarafi')
      expect(href, `wrong: ${href}`).not.toContain('maulana-rafi')
    }
  })

  test('all external links have https://', async ({ page }) => {
    const anchors = await page.locator('a[href]').all()
    for (const anchor of anchors) {
      const href = await anchor.getAttribute('href')
      if (!href) continue
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('/')) continue
      expect(href, `non-https external link: ${href}`).toMatch(/^https:\/\//)
    }
  })

  test('no placeholder # links', async ({ page }) => {
    const hashLinks = await page.locator('a[href="#"]').all()
    // only logo link to "#" is allowed (scroll to top)
    expect(hashLinks.length, 'unexpected # placeholder links').toBeLessThanOrEqual(1)
  })

  test('nav scroll anchors exist on page', async ({ page }) => {
    const navLinks = await page.locator('nav a[href^="#"]').all()
    for (const link of navLinks) {
      const href = await link.getAttribute('href')
      if (!href || href === '#') continue
      const id = href.slice(1)
      const target = page.locator(`#${id}`)
      await expect(target, `anchor target missing: ${id}`).toBeAttached()
    }
  })

  test('no profile picture img present (intentionally removed)', async ({ page }) => {
    const img = page.locator('img[alt="Maulana Rafi Nurdiansyah"]')
    await expect(img).toHaveCount(0)
  })

  test('cert Credly links are valid', async ({ page }) => {
    const certLinks = await page.locator('a[href*="credly.com/badges/"]').all()
    expect(certLinks.length, 'cert credly links missing').toBeGreaterThanOrEqual(8)
    for (const link of certLinks) {
      const href = await link.getAttribute('href')
      expect(href).toMatch(/^https:\/\/www\.credly\.com\/badges\/[a-f0-9-]+/)
    }
  })
})
