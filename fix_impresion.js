const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/pages/Impresion.tsx');
let lines = fs.readFileSync(file, 'utf-8').split(/\r?\n/);

if (lines[304].includes('</Slide>')) {
    lines.splice(305, 0, '        </Stack>');
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Fixed Impresion stack');
