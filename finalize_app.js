const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf-8');
const lines = content.split('\n');

const startIndexGame = lines.findIndex(l => l.includes('{/* ── 🎮 BLOQUE FINAL: KERNEL CHALLENGE ── */}'));
const endIndexGame = lines.findIndex(l => l.includes('</Deck>')); // right before Deck ends
if (startIndexGame !== -1) {
    const toRemove = lines.slice(startIndexGame, endIndexGame).join('\n');
    content = content.replace(toRemove, '<GameSection />\n<Outro />\n');
}

// remove unused imports
content = content.replace('import { GameIntro } from "./components/game/GameIntro";', '');
content = content.replace('import { QuestionSlides } from "./components/game/QuestionSlides";', '');
content = content.replace('import {\n  Zap,\n  Layers,\n  RotateCcw,\n  ShieldAlert,\n  Cpu,\n  Database,\n  HardDrive,\n  Clock,\n  ArrowRight,\n  Activity,\n  Printer,\n  Network,\n  Globe,\n  Server,\n  AlignCenter,\n  MessageSquare,\n  Gamepad2,\n  Trophy,\n  HelpCircle,\n  CheckCircle2,\n} from "lucide-react";', '');
content = content.replace('import { Deck, Slide, Stack, Code } from "@revealjs/react";', 'import { Deck, Slide } from "@revealjs/react";');
content = content.replace('import { motion } from "framer-motion";', '');

// Add GameSection and Outro imports
content = content.replace('import Conclusion from "./pages/Conclusion";', 'import Conclusion from "./pages/Conclusion";\nimport GameSection from "./pages/GameSection";\nimport Outro from "./pages/Outro";');

fs.writeFileSync(appPath, content);
console.log('App.tsx finalized');
