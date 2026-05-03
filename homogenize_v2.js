const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const ALL_ICONS = [
  'Zap', 'Layers', 'RotateCcw', 'ShieldAlert', 'Cpu', 'Database', 'HardDrive',
  'Clock', 'ArrowRight', 'Activity', 'Printer', 'Network', 'Globe', 'Server',
  'AlignCenter', 'MessageSquare', 'Gamepad2', 'Trophy', 'HelpCircle', 'CheckCircle2'
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find what's actually used in the JSX
  const usedSlides = content.includes('<Slide') || content.includes('Slide ');
  const usedStacks = content.includes('<Stack') || content.includes('Stack ');
  const usedCodes = content.includes('<Code') || content.includes('Code ');
  const usedMotion = content.includes('motion.');
  const usedMechanismCard = content.includes('<MechanismCard') || content.includes('MechanismCard ');
  
  const usedIcons = ALL_ICONS.filter(icon => {
    const regex = new RegExp('<' + icon + '[^a-zA-Z0-9]');
    return regex.test(content);
  });

  // Reconstruct imports
  let newImports = 'import React from "react";\n';
  
  const revealImports = [];
  if (usedSlides) revealImports.push('Slide');
  if (usedStacks) revealImports.push('Stack');
  if (usedCodes) revealImports.push('Code');
  if (revealImports.length > 0) {
    newImports += `import { ${revealImports.join(', ')} } from "@revealjs/react";\n`;
  }

  if (usedMotion) {
    newImports += 'import { motion } from "framer-motion";\n';
  }

  if (usedIcons.length > 0) {
    newImports += `import { ${usedIcons.sort().join(', ')} } from "lucide-react";\n`;
  }

  if (usedMechanismCard) {
    newImports += 'import { MechanismCard } from "../components/MechanismCard";\n';
  }

  // Remove ALL old imports at the top (everything before the first export or function)
  const parts = content.split(/export\s+default\s+function/);
  if (parts.length < 2) return; // skip if not a component
  
  let body = parts[1];
  
  // Assemble final content
  let finalContent = newImports + '\nexport default function' + body;

  // Standardize Padding
  finalContent = finalContent.replace(/padding:\s*"0\s+\d+%"/g, 'padding: "0 8%"');

  // Fix common syntax error: accidental leaked tags at the end
  const leakedTags = ['<Buffering />', '<Spooling />', '<Caching />', '<MatrizComparativa />', '<Escenarios />', '<Impresion />', '<SpoolingCritico />', '<SistemasDistribuidos />', '<Conclusion />'];
  leakedTags.forEach(tag => {
    finalContent = finalContent.replace(new RegExp(tag.replace('/', '\\/'), 'g'), '');
  });

  // Trim and save
  fs.writeFileSync(filePath, finalContent.trim() + '\n');
  console.log(`Re-Homogenized ${file}`);
});
