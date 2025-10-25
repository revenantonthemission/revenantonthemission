const fs = require("fs");
const { execSync } = require("child_process");

console.log("Generating styles...");
execSync("node torusstyle.js");
const darkStyles = fs.readFileSync("./torusstyle-dark.txt", "utf-8");
const lightStyles = fs.readFileSync("./torusstyle-light.txt", "utf-8");

console.log("Generating torus content...");
execSync("node torus.js");
const content = fs.readFileSync("./torus.txt", "utf-8");

console.log("Assembling dark mode SVG...");
const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <style>
${darkStyles}
  </style>
${content}
</svg>`;

console.log("Assembling light mode SVG...");
const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <style>
${lightStyles}
  </style>
${content}
</svg>`;

fs.writeFileSync("./torus-dark.svg", darkSvg);
fs.writeFileSync("./torus-light.svg", lightSvg);
console.log("✓ torus-dark.svg generated successfully!");
console.log("✓ torus-light.svg generated successfully!");
