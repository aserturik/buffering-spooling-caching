const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, 'src/pages/SpoolingCritico.tsx');
let content1 = fs.readFileSync(file1, 'utf-8');
content1 = content1.replace('<Slide data-transition="zoom">', '<Stack>\n          <Slide data-transition="zoom">');
fs.writeFileSync(file1, content1);

const file2 = path.join(__dirname, 'src/pages/Impresion.tsx');
let content2 = fs.readFileSync(file2, 'utf-8');
content2 = content2.replace('          </Slide>\r\n\r\n    </>\r\n  );', '          </Slide>\r\n        </Stack>\r\n    </>\r\n  );');
content2 = content2.replace('          </Slide>\n\n    </>\n  );', '          </Slide>\n        </Stack>\n    </>\n  );'); // in case it is unix endings
fs.writeFileSync(file2, content2);
console.log('Fixed syntax again');
