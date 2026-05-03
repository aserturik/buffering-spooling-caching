import React from "react";
import { Slide } from "@revealjs/react";
import { Zap } from "lucide-react";

const IntroCaching: React.FC = () => {
  return (
    <Slide data-transition="fade">
      <div style={{ padding: "0 8%" }}>
        <div
          className="glass-card"
          style={{ borderLeft: "12px solid var(--accent-cache)" }}
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
                  background: "rgba(168, 224, 99, 0.1)",
                  color: "var(--accent-cache)",
                }}
              >
                MECANISMO 03 // CACHING
              </span>
              <h2 style={{ fontSize: "5rem", marginTop: "0.5rem" }}>
                ¿Qué es el Caching?
              </h2>
            </div>
            <Zap size={80} color="var(--accent-cache)" style={{ opacity: 0.2 }} />
          </div>

          <div className="grid-2" style={{ gap: "4rem" }}>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "1.8rem", lineHeight: "1.6" }}>
                Práctica de mantener <strong>copias</strong> de datos frecuentemente accedidos en un nivel de almacenamiento más rápido.
              </p>
              <div className="def-box cache" style={{ marginTop: "2rem" }}>
                <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  A diferencia del buffer, el caché <strong>duplica</strong> un dato que ya existe en otro nivel. Es completamente <em>transparente</em> al proceso.
                </p>
              </div>
            </div>
            <div
              className="metric-card"
              style={{ background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <h4 style={{ color: "var(--accent-cache)", marginBottom: "1rem" }}>FILOSOFÍA</h4>
              <div style={{ fontSize: "4rem", fontWeight: 900, color: "var(--accent-cache)" }}>
                COPIA
              </div>
              <p style={{ opacity: 0.6, marginTop: "1rem" }}>
                Aprovecha la localidad de los datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default IntroCaching;
