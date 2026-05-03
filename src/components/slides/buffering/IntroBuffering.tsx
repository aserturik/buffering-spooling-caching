import React from "react";
import { Slide } from "@revealjs/react";
import { Layers } from "lucide-react";

const IntroBuffering: React.FC = () => {
  return (
    <Slide data-transition="fade">
      <div style={{ padding: "0 8%" }}>
        <div
          className="glass-card"
          style={{ borderLeft: "12px solid var(--accent-buf)" }}
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
                  background: "rgba(245, 166, 35, 0.1)",
                  color: "var(--accent-buf)",
                }}
              >
                MECANISMO 01 // DEFINICIÓN
              </span>
              <h2 style={{ fontSize: "5rem", marginTop: "0.5rem" }}>
                ¿Qué es el Buffering?
              </h2>
            </div>
            <Layers size={80} color="var(--accent-buf)" style={{ opacity: 0.2 }} />
          </div>

          <div className="grid-2" style={{ gap: "4rem" }}>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "2rem", lineHeight: "1.6" }}>
                Es una técnica donde el <strong>Sistema Operativo</strong> reserva una región de RAM para almacenar datos <em>transitoriamente</em>.
              </p>
              <div className="def-box" style={{ marginTop: "2rem" }}>
                <p style={{ fontSize: "1.6rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  Actúa como una <strong>zona de amortiguación</strong> entre un productor y un consumidor que operan a velocidades distintas.
                </p>
              </div>
            </div>
            <div
              className="metric-card"
              style={{ background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <h4 style={{ color: "var(--accent-buf)", marginBottom: "1rem" }}>ESTADO DEL DATO</h4>
              <div style={{ fontSize: "4rem", fontWeight: 900, color: "var(--accent-buf)" }}>
                EN TRÁNSITO
              </div>
              <p style={{ opacity: 0.6, marginTop: "1rem" }}>
                El buffer desacopla el ritmo del productor y el consumidor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default IntroBuffering;
