let A = -Math.PI/60, B = -Math.PI/60, M = Math, fs = require("fs"), text = "";
let frameNumber = 0;

const asciiframe = () => {
    let b = [], z = [];
    A += Math.PI/60;
    B += Math.PI/60;
    const cA = M.cos(A);
    const sA = M.sin(A);
    const cB = M.cos(B);
    const sB = M.sin(B);

    for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 == 79 ? "\n" : " ";
        z[k] = 0;
    }

    for (let j = 0; j < 6.28; j += 0.07) {
        const ct = M.cos(j);
        const st = M.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
            const sp = M.sin(i);
            const cp = M.cos(i);
            const h = ct + 2;
            const D = 1 / (sp * h * sA + st * cA + 5);
            const t = sp * h * cA - st * sA;
            const x = M.floor(40 + 30 * D * (cp * h * cB - t * sB));
            const y = M.floor(12 + 15 * D * (cp * h * sB + t * cB));
            const o = x + 80 * y;
            const N = M.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
            if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o]) {
                z[o] = D;
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
        }
    }
    frameNumber++;
    let frames = b.join("").split("\n");
    text += `<text x="300" y="120" class="donut donut${frameNumber}" xml:space="preserve">\n`
    for (let frame of frames) {
        text += '<tspan x="300" dy="1.2em">' + frame.replaceAll(" ", "&#32;") + '</tspan>\n'
    }
    text += '</text>\n'
};

for (let i = 0; i < 120; i++) {
    asciiframe()
}

fs.writeFileSync("./torus.txt", text)