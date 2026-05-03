import React from "react";
import { Slide } from "@revealjs/react";
import { Calculator } from "lucide-react";

const EjercicioBuffering: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <Calculator size={40} color="var(--accent-buf)" />
          <h2 style={{ fontSize: "3rem", margin: 0 }}>Ejercicio 1: Cálculo de Buffering</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div className="glass-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-buf)", marginBottom: "1rem" }}>Enunciado</h4>
            <p style={{ fontSize: "1.2rem" }}>
              Archivo: 10 MB (10 bloques de 1 MB).<br/>
              Disco: 50 ms/bloque.<br/>
              CPU: 30 ms/bloque.
            </p>
            <ul style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
              <li><strong>a)</strong> Tiempo con Single Buffering.</li>
              <li><strong>b)</strong> Tiempo con Double Buffering.</li>
              <li><strong>c)</strong> Ahorro porcentual.</li>
            </ul>
          </div>

          <div className="technical-note" style={{ borderColor: "var(--accent-cache)", background: "rgba(168, 224, 99, 0.05)" }}>
            <h4 style={{ color: "var(--accent-cache)" }}>Solución</h4>
            <div style={{ fontSize: "1.1rem" }}>
              <p><strong>a) Single:</strong> 10 × (50 + 30) = <strong>800 ms</strong></p>
              <p><strong>b) Double:</strong> 50 + 9 × max(50, 30) + 30 = <strong>530 ms</strong></p>
              <p><strong>c) Ahorro:</strong> (800 - 530) / 800 = <strong>33.75%</strong></p>
            </div>
          </div>
        </div>
        
        <div className="ascii" style={{ fontSize: "0.8rem", marginTop: "2rem", opacity: 0.6 }}>
          Double Buffering: [D1] [D2] [D3] ... <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[C1] [C2] ... (Solapado)
        </div>
      </div>
    </Slide>
  );
};

export default EjercicioBuffering;
