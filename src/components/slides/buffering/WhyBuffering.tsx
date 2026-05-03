import React from "react";
import { Slide } from "@revealjs/react";
import { Zap, Droplets } from "lucide-react";

const WhyBuffering: React.FC = () => {
  return (
    <Slide data-transition="convex">
      <div style={{ padding: "0 8%" }}>
        <div style={{ textAlign: "left", marginBottom: "4rem" }}>
          <span style={{ color: "var(--accent-buf)", fontFamily: "var(--mono)", letterSpacing: "0.2em" }}>
            EL PROBLEMA: SPEED GAP
          </span>
          <h2 style={{ fontSize: "4.5rem" }}>¿Por qué es necesario?</h2>
        </div>

        <div className="grid-2">
          <div className="technical-note" style={{ borderLeft: "8px solid var(--accent-red)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Zap color="var(--accent-red)" />
              <h4 style={{ margin: 0, color: "var(--accent-red)" }}>Eficiencia de CPU</h4>
            </div>
            <p style={{ fontSize: "1.8rem !important" }}>
              Sin buffer, la CPU esperaría milisegundos a que el disco entregue cada byte. 
              <strong> El buffer permite leer bloques enteros a velocidad de RAM (ns).</strong>
            </p>
          </div>

          <div className="def-box" style={{ borderColor: "var(--accent-buf)", background: "rgba(245, 166, 35, 0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Droplets color="var(--accent-buf)" />
              <h4 style={{ margin: 0, color: "var(--accent-buf)" }}>La Analogía del Pozo</h4>
            </div>
            <p style={{ fontSize: "1.6rem", fontStyle: "italic" }}>
              "No vayas al pozo por cada sorbo de agua. Trae un balde lleno (buffer) y bebe de él tranquilamente mientras alguien más llena el siguiente."
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default WhyBuffering;
