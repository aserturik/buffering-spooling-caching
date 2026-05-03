import React from "react";
import { Slide } from "@revealjs/react";
import { RotateCw } from "lucide-react";

const EjercicioLRU: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <RotateCw size={40} color="var(--accent-cache)" />
          <h2 style={{ fontSize: "3rem", margin: 0 }}>Ejercicio 4: Algoritmo LRU</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div className="glass-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-cache)", marginBottom: "1rem" }}>Secuencia</h4>
            <p style={{ fontSize: "1.2rem", fontFamily: "var(--mono)" }}>
              1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
            </p>
            <p style={{ fontSize: "1rem" }}>Capacidad: 3 marcos.</p>
          </div>

          <div className="technical-note" style={{ borderColor: "var(--accent-red)", background: "rgba(203, 124, 148, 0.05)" }}>
            <h4 style={{ color: "var(--accent-red)" }}>Resultados</h4>
            <div style={{ fontSize: "1.1rem" }}>
              <p><strong>Misses:</strong> 10</p>
              <p><strong>Hits:</strong> 2 (Pasos 8 y 9: [1, 2])</p>
              <p><strong>Hit Rate:</strong> 2 / 12 = <strong>16.67%</strong></p>
            </div>
          </div>
        </div>

        <div className="ascii" style={{ fontSize: "0.8rem", marginTop: "1rem", overflowX: "auto" }}>
{`Paso: 1  2  3  4  5  6  7  8  9  10 11 12
Pág:  1  2  3  4  1  2  5  1  2  3  4  5
Res:  M  M  M  M  M  M  M  H  H  M  M  M`}
        </div>
      </div>
    </Slide>
  );
};

export default EjercicioLRU;
