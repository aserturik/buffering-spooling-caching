import React from "react";
import { Slide } from "@revealjs/react";
import { Zap } from "lucide-react";

const EjercicioAMAT: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <Zap size={40} color="var(--accent-cache)" />
          <h2 style={{ fontSize: "3rem", margin: 0 }}>Ejercicio 3: Hit Rate y AMAT</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div className="glass-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-cache)", marginBottom: "1rem" }}>Enunciado</h4>
            <p style={{ fontSize: "1.1rem" }}>
              T_caché = 5 ns | T_RAM = 100 ns<br/>
              Hit rate base (h) = 90%
            </p>
            <div className="formula" style={{ fontSize: "1rem", marginTop: "1rem" }}>
              AMAT = h × T_caché + (1-h) × T_RAM
            </div>
          </div>

          <div className="technical-note" style={{ borderColor: "var(--accent-gold)", background: "rgba(224, 193, 90, 0.05)" }}>
            <h4 style={{ color: "var(--accent-gold)" }}>Solución</h4>
            <div style={{ fontSize: "1.1rem" }}>
              <p><strong>a) AMAT (90%):</strong> 0.9×5 + 0.1×100 = <strong>14.5 ns</strong></p>
              <p><strong>b) Para AMAT ≤ 15 ns:</strong> h ≥ <strong>89.47%</strong></p>
              <p><strong>c) Si h = 60%:</strong> AMAT = <strong>43 ns</strong> (Degradación del 196%)</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", fontSize: "1.2rem", fontStyle: "italic", opacity: 0.6 }}>
          Muestra la sensibilidad exponencial: una caída del 30% en hit rate triplica el tiempo de acceso.
        </div>
      </div>
    </Slide>
  );
};

export default EjercicioAMAT;
