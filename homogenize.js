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

  // Find used icons
  const usedIcons = ALL_ICONS.filter(icon => content.includes(`<${icon}`) || content.includes(`${icon} `) || content.includes(`{${icon}}`) || content.includes(`${icon},`) || content.includes(`${icon}size`));
  // Actually, searching for <IconName is more reliable for React components
  const strictlyUsedIcons = ALL_ICONS.filter(icon => content.match(new RegExp('<' + icon + '[^a-zA-Z]')));
  
  // Special case for Outro.tsx where icons are used in a map or list maybe? 
  // Let's just check if the name appears at all in the body
  const body = content.split('export default')[1] || '';
  const finalUsedIcons = ALL_ICONS.filter(icon => body.includes(icon));

  // Build new import block
  const iconImport = finalUsedIcons.length > 0 
    ? `import { ${finalUsedIcons.sort().join(', ')} } from "lucide-react";`
    : '';

  // Replace the old icon import block
  content = content.replace(/import {[\s\S]*?} from "lucide-react";/, iconImport);
  
  // Remove unused MechanismCard import
  if (!body.includes('MechanismCard')) {
    content = content.replace(/import { MechanismCard } from "..\/components\/MechanismCard";\r?\n?/, '');
  }

  // Remove unused motion import if not used
  if (!body.includes('motion.')) {
    content = content.replace(/import { motion } from "framer-motion";\r?\n?/, '');
  }

  // Standardize Padding (search for padding: "0 X%")
  content = content.replace(/padding:\s*"0\s+\d+%"/g, 'padding: "0 8%"');

  // Final trim
  content = content.trim() + '\n';

  fs.writeFileSync(filePath, content);
  console.log(`Homogenized ${file}`);
});
