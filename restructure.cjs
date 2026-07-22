const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Find the 2 Column Layout block
const layoutStartStr = '{/* Bento Grid - 2 Column Layout */}';
const contactStartStr = '{/* Contact (12) */}';

const layoutStart = code.indexOf(layoutStartStr);
const contactStart = code.indexOf(contactStartStr);

if (layoutStart === -1 || contactStart === -1) {
  console.error("Could not find layout bounds");
  process.exit(1);
}

// 2. Extract About Me, Education, Showcase, Experience blocks
const aboutStart = code.indexOf('<div id="about" className="scroll-mt-32">', layoutStart);
const educationStart = code.indexOf('<BentoCard delay={0.2}>', layoutStart);
const showcaseStart = code.indexOf('<div id="showcase" className="scroll-mt-32">', layoutStart);
// Find the closing div of the left column (which is after showcaseContent)
let leftEnd = code.indexOf('</div>', showcaseStart + 100); 
// showcaseContent is enclosed in <div id="showcase" className="scroll-mt-32">{showcaseContent}</div>
// so showcaseStart is the outer div, the inner one closes right after {showcaseContent}.
// wait, the left column closes after the showcase div. Let's just find the exact string:
//             <div id="showcase" className="scroll-mt-32">
//               {showcaseContent}
//             </div>
//
//           </div>
const showcaseDivEnd = code.indexOf('</div>', code.indexOf('{showcaseContent}', showcaseStart)) + '</div>'.length;


const experienceStart = code.indexOf('<div className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">', layoutStart);
// Actually, Experience block inside right column:
const expInnerStart = code.indexOf('<BentoCard delay={0.3}>', experienceStart);
const expInnerEnd = code.indexOf('</BentoCard>', expInnerStart) + '</BentoCard>'.length;
const experienceBlock = code.substring(expInnerStart, expInnerEnd);

// About block ends where Education starts
const aboutBlock = code.substring(aboutStart, educationStart).trim();
const educationBlock = code.substring(educationStart, showcaseStart).trim();
const showcaseBlock = code.substring(showcaseStart, showcaseDivEnd).trim(); // This contains {showcaseContent}

// 3. Create the new dynamic layout
const newLayout = `
        {/* Bento Grid - Responsive Layout */}
        <div className="relative z-10">
          {isMobile ? (
            <div className="flex flex-col gap-6">
              {/* Mobile Order: About -> Education -> Experience -> Showcase */}
              ${aboutBlock}
              ${educationBlock}
              <div id="experience" className="scroll-mt-32">
                ${experienceBlock}
              </div>
              ${showcaseBlock}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column (About Me, Education, Showcase) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                ${aboutBlock}
                ${educationBlock}
                ${showcaseBlock}
              </div>

              {/* Right Column (Experience) */}
              <div className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">
                ${experienceBlock}
              </div>
            </div>
          )}
        </div>

        `;

const finalCode = code.substring(0, layoutStart) + newLayout + code.substring(contactStart);
fs.writeFileSync('src/App.jsx', finalCode);
console.log("App.jsx restructured successfully for mobile order.");
