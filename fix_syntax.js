const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, 'src/pages/SpoolingCritico.tsx');
let content1 = fs.readFileSync(file1, 'utf-8');
content1 = content1.replace('import { Slide, Stack } from "@revealjs/react";', 'import { Slide, Stack, Code } from "@revealjs/react";');
content1 = content1.replace('{/* ── [MOVED] CASO CRÍTICO: SPOOLING ── */}\n          <Slide data-transition="zoom">', '{/* ── [MOVED] CASO CRÍTICO: SPOOLING ── */}\n          <Stack>\n          <Slide data-transition="zoom">');
fs.writeFileSync(file1, content1);

const file2 = path.join(__dirname, 'src/pages/Impresion.tsx');
let content2 = fs.readFileSync(file2, 'utf-8');
content2 = content2.replace('          </Slide>\n\n    </>\n  );', '          </Slide>\n        </Stack>\n    </>\n  );');
fs.writeFileSync(file2, content2);
console.log('Fixed');
