const fs = require('fs');
const files = [
  'src/index.css',
  'src/components/About.tsx',
  'src/components/Certifications.tsx',
  'src/components/Contact.tsx',
  'src/components/CurrentFocus.tsx',
  'src/components/DomainExperience.tsx',
  'src/components/ExpertiseCards.tsx',
  'src/components/GitHubInsights.tsx',
  'src/components/Hero.tsx',
  'src/components/Navbar.tsx',
  'src/components/Projects.tsx',
  'src/components/TechStack.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Update CSS globally
  content = content.replace('@apply bg-slate-900/40 border border-slate-800 backdrop-blur-md transition-all duration-300 relative overflow-hidden;', '@apply bg-slate-900/40 border border-slate-800/60 backdrop-blur-md transition-all duration-300 relative overflow-hidden rounded-2xl shadow-xl shadow-black/40;');
  content = content.replace('@apply inline-flex items-center px-[10px] py-[4px] rounded-sm text-[10px] font-mono font-medium bg-slate-800/80 border border-slate-700 text-slate-300 transition-colors duration-200;', '@apply inline-flex items-center px-[10px] py-[4px] rounded-xl text-[10px] font-mono font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300 transition-colors duration-200 shadow-sm;');
  
  // Global replace of rounded-sm
  content = content.replace(/rounded-sm/g, 'rounded-xl');
  
  // Fix button borders in Hero
  if (f.includes('Hero.tsx')) {
    content = content.replace('inline-flex items-center justify-center px-[26px] py-[10px] text-[16px] font-bold transition-all', 'inline-flex items-center justify-center px-[26px] py-[10px] text-[16px] font-bold transition-all rounded-full shadow-lg');
  }

  // Fix button borders in Contact
  if (f.includes('Contact.tsx')) {
    content = content.replace('className="flex items-center gap-[26px] p-[16px] bg-slate-900/50 border border-slate-800 hover:border-highlight-400/50 hover:bg-highlight-400/5 transition-all group font-mono"', 'className="flex items-center gap-[26px] p-[16px] bg-slate-900/50 border border-slate-800/60 hover:border-highlight-400/50 hover:bg-highlight-400/5 transition-all group font-mono rounded-2xl shadow-md"');
  }

  fs.writeFileSync(f, content);
});
console.log('UI softened successfully!');
