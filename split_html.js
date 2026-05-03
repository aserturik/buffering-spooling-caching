const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, 'mecanismos_io_completo.html');
const content = fs.readFileSync(htmlFile, 'utf-8');

const headMatch = content.match(/([\s\S]*?<body>)/);
const head = headMatch ? headMatch[1] : '';
const footerMatch = content.match(/(<\/body>[\s\S]*)/);
const footer = footerMatch ? footerMatch[1] : '';

const sections = [
    { name: 'doc_intro', regex: /<!-- HERO -->([\s\S]*?)<hr class="section-break">/ },
    { name: 'doc_buffering', regex: /<!-- ════════════════════════════════════\s*CAPÍTULO 1: BUFFERING\s*════════════════════════════════════ -->\s*(<section[\s\S]*?)<hr class="section-break">/ },
    { name: 'doc_spooling', regex: /<!-- ════════════════════════════════════\s*CAPÍTULO 2: SPOOLING\s*════════════════════════════════════ -->\s*(<section[\s\S]*?)<hr class="section-break">/ },
    { name: 'doc_caching', regex: /<!-- ════════════════════════════════════\s*CAPÍTULO 3: CACHING\s*════════════════════════════════════ -->\s*(<section[\s\S]*?)<hr class="section-break">/ },
    { name: 'doc_comparativa', regex: /<!-- ════════════════════════════════════\s*CAPÍTULO 4: COMPARATIVA\s*════════════════════════════════════ -->\s*(<section[\s\S]*?)<hr class="section-break">/ },
    { name: 'doc_ejercicios', regex: /<!-- ════════════════════════════════════\s*CAPÍTULO 5: EJERCICIOS RESUELTOS\s*════════════════════════════════════ -->\s*(<section[\s\S]*?)<!-- FOOTER -->/ }
];

sections.forEach(sec => {
    const match = content.match(sec.regex);
    if (match) {
        const bodyContent = match[1];
        const outContent = head + '\n' + bodyContent + '\n<script>\n  function toggle(btn) {\n    const solution = btn.nextElementSibling;\n    const isOpen = solution.classList.contains(\'open\');\n    solution.classList.toggle(\'open\');\n    btn.textContent = isOpen ? \'▶ Ver solución completa\' : \'▼ Ocultar solución\';\n  }\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(e => {\n      if (e.isIntersecting) {\n        e.target.classList.add(\'visible\');\n        observer.unobserve(e.target);\n      }\n    });\n  }, { threshold: 0.08 });\n  document.querySelectorAll(\'.fade-in\').forEach(el => observer.observe(el));\n</script>\n' + footer;
        fs.writeFileSync(path.join(__dirname, 'public', sec.name + '.html'), outContent);
        console.log('Created ' + sec.name + '.html');
    } else {
        console.log('Could not find section for ' + sec.name);
    }
});
