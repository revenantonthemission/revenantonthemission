import fs from "fs";
let text = `
/* Transparent background to inherit from page */
svg {
    background: transparent;
}

/* Default: Light mode (GitHub profile default) */
.donut {
    fill: #24292f;
    font-family: monospace;
    text-anchor: middle;
}

/* Dark mode using media query */
@media (prefers-color-scheme: dark) {
    .donut {
        fill: #c9d1d9;
    }
}
`

let frames = 120;
for (let i = 1; i <= frames; i++) {
    text += `
    .donut${i} {
        animation: donut${i} 6s linear infinite;
    }
    @keyframes donut${i} {
        0%, ${100 / frames * (i - 1)}% { opacity: 0; }
        ${100 / frames * (i - 1) + 0.00000001}%, ${100 / frames * (i)}% { opacity: 1; }
        ${100 / frames * i + 0.00000001}%, 100% { opacity: 0; }
    }
    `
}

fs.writeFileSync("./torusstyle.txt", text)