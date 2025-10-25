const fs = require("fs");
const { execSync } = require("child_process");

console.log("Generating styles...");
execSync("node torusstyle.js");
const styles = fs.readFileSync("./torusstyle.txt", "utf-8");

console.log("Generating torus content...");
execSync("node torus.js");
const content = fs.readFileSync("./torus.txt", "utf-8");

console.log("Assembling final SVG...");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <style>
${styles}
  </style>
${content}
</svg>`;

fs.writeFileSync("./torus.svg", svg);
console.log("✓ torus.svg generated successfully!");
