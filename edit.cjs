const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add isMobile state
code = code.replace(
  "const [scrolled, setScrolled] = useState(false);",
  "const [scrolled, setScrolled] = useState(false);\n  const [isMobile, setIsMobile] = useState(false);"
);

// 2. Add resize listener
code = code.replace(
  "    const handleScroll = () => setScrolled(window.scrollY > 50);\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, []);",
  "    const handleScroll = () => setScrolled(window.scrollY > 50);\n    const handleResize = () => setIsMobile(window.innerWidth < 1024);\n    \n    handleResize();\n    window.addEventListener('scroll', handleScroll);\n    window.addEventListener('resize', handleResize);\n    \n    return () => {\n      window.removeEventListener('scroll', handleScroll);\n      window.removeEventListener('resize', handleResize);\n    };\n  }, []);"
);

// 3. Extract Experience and Showcase to variables
const experienceMatch = code.match(/<BentoCard delay={0\.3}>[\s\S]*?<\/BentoCard>/);
const showcaseMatch = code.match(/<BentoCard delay={0\.4} className="h-full" innerClassName="flex flex-col h-full">[\s\S]*?<\/BentoCard>/);

if (experienceMatch && showcaseMatch) {
  const varsStr = `
  const experienceContent = (
    ${experienceMatch[0]}
  );

  const showcaseContent = (
    ${showcaseMatch[0]}
  );

  return (`;
  
  code = code.replace("  return (", varsStr);
}

// 4. Replace their usage in the grid
if (experienceMatch && showcaseMatch) {
  code = code.replace(experienceMatch[0], `{isMobile && experienceContent}\n\n            {/* Desktop: Showcase sits under Education */}\n            {!isMobile && (\n              <div id="showcase" className="flex flex-col gap-6 scroll-mt-32 h-full">\n                {showcaseContent}\n              </div>\n            )}`);
  
  const showcaseParentRegex = /<div id="showcase" className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">[\s\S]*?<\/div>\s*<\!-- Contact \(12\) -->/;
  
  code = code.replace(
    showcaseParentRegex,
    `<div className="lg:col-span-6 flex flex-col gap-6">\n            {/* Desktop: Experience is on the right */}\n            {!isMobile && experienceContent}\n            {/* Mobile: Showcase sits under Experience */}\n            {isMobile && (\n              <div id="showcase" className="flex flex-col gap-6 scroll-mt-32 h-full">\n                {showcaseContent}\n              </div>\n            )}\n          </div>\n\n          {/* Contact (12) */}`
  );
}

fs.writeFileSync('src/App.jsx', code);
console.log('Done!');
