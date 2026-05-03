const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf-8');

// I will output line numbers of the sections:
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes('{/* ──')) {
        console.log(`${i + 1}: ${line.trim()}`);
    }
});
