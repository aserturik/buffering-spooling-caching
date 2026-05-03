
import React from "react";
import { Deck, Slide } from "@revealjs/react";
import RevealHighlight from "reveal.js/plugin/highlight";
import "reveal.js/reveal.css";
import "reveal.js/theme/dracula.css";
import "reveal.js/plugin/highlight/monokai.css";

import Hero from "./pages/Hero";
import Buffering from "./pages/Buffering";
import Spooling from "./pages/Spooling";
import Caching from "./pages/Caching";
import Fundamentacion from "./pages/Fundamentacion";
import MatrizComparativa from "./pages/MatrizComparativa";
import Escenarios from "./pages/Escenarios";
import Impresion from "./pages/Impresion";
import SpoolingCritico from "./pages/SpoolingCritico";
import Ejercicios from "./pages/Ejercicios";
import SistemasDistribuidos from "./pages/SistemasDistribuidos";
import Conclusion from "./pages/Conclusion";
import GameSection from "./pages/GameSection";
import Outro from "./pages/Outro";



export default function App() {
  return (
    <>
      <style>{`
        :root {
          --bg: #06080f;
          --bg-dark: #06080f;
          --gray1: #1c212c;
          --gray2: #232a36;
          --line: #313342;
          --fg: #f3f6f9;
          --subtext: #A1AABB;
          --muted: #8394A3;
          --accent-buf: #7fb4ca;
          --accent-spool: #deba87;
          --accent-cache: #b7cc85;
          --accent-red: #cb7c94;
          --accent-gold: #e0c15a;
          --mono: 'IBM Plex Mono', monospace;
          --serif: 'Source Serif 4', serif;
        }
        body {
          background-color: var(--bg) !important;
        }
        .reveal {
          background-color: var(--bg) !important;
        }
        .reveal .controls { color: var(--accent-buf) !important; }
        .reveal .progress { height: 6px !important; background: rgba(255,255,255,0.1) !important; }
        .reveal .progress span { background: var(--accent-buf) !important; }
        
        .glass-card {
          background: rgba(28, 33, 44, 0.7) !important;
          backdrop-filter: blur(12px);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          box-sizing: border-box !important;
        }

        .presenter-tag {
          font-family: var(--mono);
          font-size: 1.1rem;
          color: var(--accent-gold);
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          background: rgba(224, 193, 90, 0.1);
          padding: 0.5rem 1.5rem;
          display: inline-block;
          border-radius: 99px;
          border: 1px solid rgba(224, 193, 90, 0.2);
        }
        .technical-note {
          border-left: 4px solid var(--accent-buf);
          background: rgba(127, 180, 202, 0.05);
          padding: 1.5rem;
          margin-top: 1.5rem;
          text-align: left;
          border-radius: 0 12px 12px 0;
        }
        .reveal p, .reveal li, .reveal td {
          font-size: 2.2rem !important;
          line-height: 1.6 !important;
          color: var(--subtext);
        }
        .reveal h1, .reveal h2, .reveal h3, .reveal h4 {
          color: var(--fg) !important;
          text-transform: none !important;
          font-weight: 700 !important;
        }
        .reveal .metric-val {
          font-size: 2.5rem !important;
          font-weight: 800;
          font-family: var(--mono);
        }
        .reveal .metric-label {
          font-size: 1.1rem !important;
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        .metric-card {
          background: var(--gray2);
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--line);
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--line); border-radius: 4px; }
        
        .reveal .slides section {
          padding: 0 !important;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.02);
        }
        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.6rem;
        }
        .era-badge {
          font-family: var(--mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          display: inline-block;
          margin-bottom: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.15em;
        }
      `}</style>
      <Deck
        config={{
          hash: true,
          center: true,
          transition: "fade",
          transitionSpeed: "default",
          width: 1920,
          height: 1080,
          margin: 0.05,
          minScale: 0.2,
          maxScale: 2,
          controls: true,
          progress: true,
        }}
        plugins={[RevealHighlight]}
        onSlideChange={(event: any) => {
          // Disparamos un evento personalizado que los componentes pueden escuchar
          const customEvent = new CustomEvent("slideChanged", {
            detail: { indexh: event.indexh },
          });
          globalThis.dispatchEvent(customEvent);
        }}
      >
        <Hero />

        <Fundamentacion />

        <Buffering />

        <Spooling />

        <Caching />

        <MatrizComparativa />

        <Escenarios />

        <Impresion />

        <SpoolingCritico />

        <Ejercicios />

        <SistemasDistribuidos />

        <Conclusion />

        <GameSection />
        <Outro />

      </Deck>
    </>
  );
}
