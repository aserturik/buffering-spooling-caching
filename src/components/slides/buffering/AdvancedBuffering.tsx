import React from "react";
import { Slide } from "@revealjs/react";
import { Network, ArrowRight } from "lucide-react";

const AdvancedBuffering: React.FC = () => {
  return (
    <Slide data-transition="fade">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem" }}>
          <div style={{ textAlign: "left" }}>
            <span className="presenter-tag" style={{ color: "var(--accent-spool)" }}>CASOS AVANZADOS</span>
            <h2 style={{ fontSize: "3.5rem" }}>Buffering en Redes (DCTCP)</h2>
          </div>
          <Network size={60} color="var(--accent-spool)" style={{ opacity: 0.5 }} />
        </div>

        <div className="grid-2" style={{ gap: "3rem" }}>
          <div className="technical-note" style={{ background: "rgba(79, 195, 247, 0.05)", borderColor: "var(--accent-spool)" }}>
            <h4 style={{ color: "var(--accent-spool)" }}>Evitando el Colapso</h4>
            <p style={{ fontSize: "1.4rem !important" }}>
              En Data Centers, los buffers de los switches se llenan rápido. <strong>DCTCP</strong> usa notificaciones tempranas (ECN) para reducir la velocidad <em>antes</em> de que el buffer desborde.
            </p>
          </div>

          <div style={{ textAlign: "left" }}>
            <h4 style={{ marginBottom: "1rem" }}>Flujo de Lectura con Buffer:</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <div className="presenter-tag" style={{ fontSize: "1rem" }}>1. Syscall read()</div>
              <div style={{ paddingLeft: "2rem" }}><ArrowRight size={16} /> <span style={{ color: "var(--accent-buf)" }}>¿Dato en Kernel Buffer?</span></div>
              <div className="presenter-tag" style={{ fontSize: "1rem", background: "rgba(168, 224, 99, 0.1)", color: "var(--accent-cache)" }}>SÍ: Copia directa a App RAM (Rápido)</div>
              <div className="presenter-tag" style={{ fontSize: "1rem", background: "rgba(255, 107, 107, 0.1)", color: "var(--accent-red)" }}>NO: Leer de Disco → Llenar Buffer → Copiar</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AdvancedBuffering;
