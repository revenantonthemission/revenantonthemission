import fs from "fs";

// Dark mode styles
let darkStyles = `
svg {
    background: transparent;
}

.donut {
    fill: #c9d1d9;
    font-family: monospace;
    text-anchor: middle;
}
`;

// Light mode styles
let lightStyles = `
svg {
    background: transparent;
}

.donut {
    fill: #24292f;
    font-family: monospace;
    text-anchor: middle;
}
`;

let frames = 120;
let animationCSS = '';
for (let i = 1; i <= frames; i++) {
    animationCSS += `
    .donut${i} {
        animation: donut${i} 6s linear infinite;
    }
    @keyframes donut${i} {
        0%, ${100 / frames * (i - 1)}% { opacity: 0; }
        ${100 / frames * (i - 1) + 0.00000001}%, ${100 / frames * (i)}% { opacity: 1; }
        ${100 / frames * i + 0.00000001}%, 100% { opacity: 0; }
    }
    `;
}

// Write both versions
fs.writeFileSync("./torusstyle-dark.txt", darkStyles + animationCSS);
fs.writeFileSync("./torusstyle-light.txt", lightStyles + animationCSS);