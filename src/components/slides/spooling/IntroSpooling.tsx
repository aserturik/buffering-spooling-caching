import React from "react";
import { Slide } from "@revealjs/react";
import { HardDrive } from "lucide-react";

const IntroSpooling: React.FC = () => {
  return (
    <Slide data-transition="fade">
      <div style={{ padding: "0 8%" }}>
        <div
          className="glass-card"
          style={{ borderLeft: "12px solid var(--accent-spool)" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <div>
              <span
                className="presenter-tag"
                style={{
                  background: "rgba(79, 195, 247, 0.1)",
                  color: "var(--accent-spool)",
                }}
              >
                MECANISMO 02 // SPOOLING
              </span>
              <h2 style={{ fontSize: "5rem", marginTop: "0.5rem" }}>
                ¿Qué es el Spooling?
              </h2>
            </div>
            <HardDrive size={80} color="var(--accent-spool)" style={{ opacity: 0.2 }} />
          </div>

          <div className="grid-2" style={{ gap: "4rem" }}>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "1.8rem", lineHeight: "1.6" }}>
                <strong>Simultaneous Peripheral Operation On-Line</strong>. Es una especialización del buffering que utiliza el <em>disco secundario</em> como buffer de gran capacidad.
              </p>
              <div className="def-box spool" style={{ marginTop: "2rem" }}>
                <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  Busca el <strong>desacoplamiento completo</strong> entre el proceso que genera los datos y el dispositivo lento que los consume.
                </p>
              </div>
            </div>
            <div
              className="metric-card"
              style={{ background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <h4 style={{ color: "var(--accent-spool)", marginBottom: "1rem" }}>MEDIO DE ALMACENAMIENTO</h4>
              <div style={{ fontSize: "4rem", fontWeight: 900, color: "var(--accent-spool)" }}>
                DISCO
              </div>
              <p style={{ opacity: 0.6, marginTop: "1rem" }}>
                Permite que múltiples trabajos coexistan en cola.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default IntroSpooling;
