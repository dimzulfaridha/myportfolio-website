const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const expStart = code.indexOf('<BentoCard delay={0.3}>');
const expEnd = code.indexOf('</BentoCard>', expStart) + 12;
const experienceBlock = code.substring(expStart, expEnd);

const showcaseStart = code.indexOf('<BentoCard delay={0.4}');
const showcaseEnd = code.indexOf('</BentoCard>', showcaseStart) + 12;
const showcaseBlock = code.substring(showcaseStart, showcaseEnd);

// Remove experience from left col
code = code.replace(experienceBlock, '');
// And remove empty lines that were left behind
code = code.replace(/\n\s*\n\s*$/, '\n'); 

const rightColIdStart = code.indexOf('<div id="showcase"');
const rightColEnd = code.indexOf('</div>', showcaseEnd) + 6;
const oldRightCol = code.substring(rightColIdStart, rightColEnd);

// Create new right column with experience inside
const newRightCol = `<div className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">\n            ${experienceBlock}\n          </div>`;

// Replace the old right column with the new right column
code = code.replace(oldRightCol, newRightCol);

const leftColEnd = code.indexOf('          {/* Right Column (Showcase) */}');

// The new showcase needs to retain the id="showcase" for the anchor link to work
const newShowcaseBlock = `<div id="showcase" className="scroll-mt-32">\n              ${showcaseBlock}\n            </div>\n\n`;

// Insert the showcase block before the end of the left col (which is a </div> right before leftColEnd)
const actualLeftColEnd = code.lastIndexOf('</div>', leftColEnd);
const beforeLeftColEnd = code.substring(0, actualLeftColEnd);
const afterLeftColEnd = code.substring(actualLeftColEnd);

code = beforeLeftColEnd + newShowcaseBlock + '          ' + afterLeftColEnd;

// Rename the comment
code = code.replace('{/* Right Column (Showcase) */}', '{/* Right Column (Experience) */}');

fs.writeFileSync('src/App.jsx', code);
