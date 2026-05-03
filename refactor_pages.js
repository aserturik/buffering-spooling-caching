const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf-8');
const lines = content.split('\n');

const imports = `import React from "react";
import { Slide, Stack } from "@revealjs/react";
import { motion } from "framer-motion";
import {
  Zap, Layers, RotateCcw, ShieldAlert, Cpu, Database, HardDrive,
  Clock, ArrowRight, Activity, Printer, Network, Globe, Server,
  AlignCenter, MessageSquare, Gamepad2, Trophy, HelpCircle, CheckCircle2
} from "lucide-react";
import { MechanismCard } from "../components/MechanismCard";
`;

function extractSection(startComment, endComment) {
    let startIndex = lines.findIndex(l => l.includes(startComment));
    let endIndex = endComment ? lines.findIndex((l, i) => i > startIndex && l.includes(endComment)) : -1;
    if (startIndex === -1) return { extracted: '', modifiedLines: lines };
    
    // find the start of the next section if endComment is not provided
    if (!endComment) {
        endIndex = lines.findIndex((l, i) => i > startIndex && l.includes('{/* ──'));
    }

    if (endIndex === -1) endIndex = lines.length;

    const extracted = lines.slice(startIndex, endIndex).join('\n');
    return { extracted, startIndex, endIndex };
}

const hero = extractSection('{/* ── PORTADA ACADÉMICA ── */}');
const buffering = extractSection('{/* ── BUFFERING ── */}');
const spooling = extractSection('{/* ── SPOOLING ── */}');
const caching = extractSection('{/* ── CACHING ── */}');

// MechanismCard code from App.tsx
const mechanismCardCode = `import React from "react";
import { motion } from "framer-motion";

interface MechanismProps {
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export const MechanismCard: React.FC<MechanismProps> = ({
  label,
  description,
  icon,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{
      textAlign: "left",
      background: "rgba(255,255,255,0.03)",
      padding: "1.5rem",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.8rem",
      }}
    >
      {icon && <div style={{ color: "var(--accent-buf)" }}>{icon}</div>}
      <span
        style={{
          color: "var(--accent-buf)",
          fontFamily: "var(--mono)",
          fontSize: "1.1rem",
          fontWeight: "700",
        }}
      >
        {label}
      </span>
    </div>
    <p
      style={{
        margin: 0,
        fontSize: "1.4rem !important",
        color: "var(--subtext)",
      }}
    >
      {description}
    </p>
  </motion.div>
);
`;

fs.writeFileSync(path.join(__dirname, 'src', 'components', 'MechanismCard.tsx'), mechanismCardCode);

const makePage = (name, code) => {
    return `${imports}\nexport default function ${name}() {\n  return (\n    <>\n${code}\n    </>\n  );\n}\n`;
};

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Hero.tsx'), makePage('Hero', hero.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Buffering.tsx'), makePage('Buffering', buffering.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Spooling.tsx'), makePage('Spooling', spooling.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Caching.tsx'), makePage('Caching', caching.extracted));

// Remove MechanismCard from App.tsx
let newAppContent = content;
newAppContent = newAppContent.replace(/interface MechanismProps[\s\S]*?\);\n/g, '');

// Replace the sections with components
newAppContent = newAppContent.replace(hero.extracted, '<Hero />\n');
newAppContent = newAppContent.replace(buffering.extracted, '<Buffering />\n');
newAppContent = newAppContent.replace(spooling.extracted, '<Spooling />\n');
newAppContent = newAppContent.replace(caching.extracted, '<Caching />\n');

// Add imports to App.tsx
const importStatements = `import Hero from "./pages/Hero";
import Buffering from "./pages/Buffering";
import Spooling from "./pages/Spooling";
import Caching from "./pages/Caching";
`;
newAppContent = newAppContent.replace('import { GameIntro }', importStatements + 'import { GameIntro }');

fs.writeFileSync(appPath, newAppContent);
console.log('Done refactoring');
