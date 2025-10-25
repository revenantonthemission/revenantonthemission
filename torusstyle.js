import fs from "fs";
let text = `
/* Default: Dark mode (with background) */
svg {
    background: #0d1117;
}

.donut {
    fill: #c9d1d9;
    font-family: monospace;
    text-anchor: middle;
}

/* Light mode using media query */
@media (prefers-color-scheme: light) {
    svg {
        background: #ffffff;
    }

    .donut {
        fill: #24292f;
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