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

const fundamentacion = extractSection('{/* ── FUNDAMENTACIÓN CONCEPTUAL ── */}', '{/* ── MATRIZ COMPARATIVA ── */}');
const matriz = extractSection('{/* ── MATRIZ COMPARATIVA ── */}');
const escenarios = extractSection('{/* ── ESCENARIOS DE APLICACIÓN ── */}');
const impresion = extractSection('{/* ── [NUEVO] IMPRESIÓN: ANTES vs AHORA ── */}');
const spoolingCritico = extractSection('{/* ── [MOVED] CASO CRÍTICO: SPOOLING ── */}');
const distribuidosBuffering = extractSection('{/* ── [NUEVO] SISTEMAS DISTRIBUIDOS: BUFFERING ── */}');
const distribuidosCaching = extractSection('{/* ── [NUEVO] SISTEMAS DISTRIBUIDOS: CACHING ── */}');
const conclusion = extractSection('{/* ── CONCLUSIÓN ── */}');

// Let's combine buffering & caching distribuidos into one page.
const distribuidos = distribuidosBuffering.extracted + '\n' + distribuidosCaching.extracted;

const makePage = (name, code, extraImports = '') => {
    return `${imports}${extraImports}\nexport default function ${name}() {\n  return (\n    <>\n${code}\n    </>\n  );\n}\n`;
};

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Fundamentacion.tsx'), makePage('Fundamentacion', fundamentacion.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'MatrizComparativa.tsx'), makePage('MatrizComparativa', matriz.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Escenarios.tsx'), makePage('Escenarios', escenarios.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Impresion.tsx'), makePage('Impresion', impresion.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'SpoolingCritico.tsx'), makePage('SpoolingCritico', spoolingCritico.extracted));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'SistemasDistribuidos.tsx'), makePage('SistemasDistribuidos', distribuidos));
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Conclusion.tsx'), makePage('Conclusion', conclusion.extracted));

// Now replace in App.tsx
let newAppContent = content;
newAppContent = newAppContent.replace(fundamentacion.extracted, '<Fundamentacion />\n');
newAppContent = newAppContent.replace(matriz.extracted, '<MatrizComparativa />\n');
newAppContent = newAppContent.replace(escenarios.extracted, '<Escenarios />\n');
newAppContent = newAppContent.replace(impresion.extracted, '<Impresion />\n');
newAppContent = newAppContent.replace(spoolingCritico.extracted, '<SpoolingCritico />\n');
newAppContent = newAppContent.replace(distribuidosBuffering.extracted + '\n' + distribuidosCaching.extracted, '<SistemasDistribuidos />\n');
newAppContent = newAppContent.replace(conclusion.extracted, '<Conclusion />\n');

// Add imports
const importStatements = `import Fundamentacion from "./pages/Fundamentacion";
import MatrizComparativa from "./pages/MatrizComparativa";
import Escenarios from "./pages/Escenarios";
import Impresion from "./pages/Impresion";
import SpoolingCritico from "./pages/SpoolingCritico";
import SistemasDistribuidos from "./pages/SistemasDistribuidos";
import Conclusion from "./pages/Conclusion";
`;
newAppContent = newAppContent.replace('import { GameIntro }', importStatements + 'import { GameIntro }');

fs.writeFileSync(appPath, newAppContent);
console.log('Done refactoring part 2');
