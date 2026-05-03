import React from "react";
import { Slide } from "@revealjs/react";
import { Search } from "lucide-react";

const EjercicioEscenarios: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
          <Search size={40} color="var(--accent-gold)" />
          <h2 style={{ fontSize: "3rem", margin: 0 }}>Ejercicio 5: Identificación</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div style={{ textAlign: "left", fontSize: "1rem" }}>
            <p><strong>a) Netflix precarga 30s:</strong></p>
            <span className="presenter-tag" style={{ fontSize: "0.8rem", padding: "0.2rem 0.8rem" }}>BUFFERING</span>
            
            <p style={{ marginTop: "1rem" }}><strong>b) Servidor web RAM:</strong></p>
            <span className="presenter-tag" style={{ fontSize: "0.8rem", padding: "0.2rem 0.8rem", color: "var(--accent-cache)", background: "rgba(183, 204, 133, 0.1)", borderColor: "var(--accent-cache)" }}>CACHING</span>

            <p style={{ marginTop: "1rem" }}><strong>c) Word imprime y queda libre:</strong></p>
            <span className="presenter-tag" style={{ fontSize: "0.8rem", padding: "0.2rem 0.8rem", color: "var(--accent-spool)", background: "rgba(222, 186, 135, 0.1)", borderColor: "var(--accent-spool)" }}>SPOOLING</span>
          </div>

          <div style={{ textAlign: "left", fontSize: "1rem" }}>
            <p><strong>d) GCC lee bloque a bloque:</strong></p>
            <span className="presenter-tag" style={{ fontSize: "0.8rem", padding: "0.2rem 0.8rem" }}>BUFFERING + CACHING</span>
            
            <p style={{ marginTop: "1rem" }}><strong>e) Navegador guarda imágenes:</strong></p>
            <span className="presenter-tag" style={{ fontSize: "0.8rem", padding: "0.2rem 0.8rem", color: "var(--accent-cache)", background: "rgba(183, 204, 133, 0.1)", borderColor: "var(--accent-cache)" }}>CACHING (Browser)</span>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default EjercicioEscenarios;
