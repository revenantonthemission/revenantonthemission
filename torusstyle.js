import fs from "fs";
let text = `
.donut {
    fill: white;
    font-family: monospace;
    text-anchor: middle;
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