import React from "react";
import { Slide } from "@revealjs/react";
import { Clock, MoveHorizontal } from "lucide-react";

const CachePrinciples: React.FC = () => {
  return (
    <Slide data-transition="convex">
      <div style={{ padding: "0 8%" }}>
        <div style={{ textAlign: "left", marginBottom: "4rem" }}>
          <span style={{ color: "var(--accent-cache)", fontFamily: "var(--mono)", letterSpacing: "0.2em" }}>
            FUNDAMENTOS
          </span>
          <h2 style={{ fontSize: "4.5rem" }}>Principios de Localidad</h2>
        </div>

        <div className="grid-2">
          <div className="technical-note" style={{ borderLeft: "8px solid var(--accent-cache)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Clock color="var(--accent-cache)" />
              <h4 style={{ margin: 0, color: "var(--accent-cache)" }}>Localidad Temporal</h4>
            </div>
            <p style={{ fontSize: "1.6rem !important" }}>
              Si un dato fue accedido recientemente, <strong>probablemente volverá a accederse pronto</strong>. 
              <em> Ejemplo: variables en un bucle for.</em>
            </p>
          </div>

          <div className="technical-note" style={{ borderLeft: "8px solid var(--accent-buf)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <MoveHorizontal color="var(--accent-buf)" />
              <h4 style={{ margin: 0, color: "var(--accent-buf)" }}>Localidad Espacial</h4>
            </div>
            <p style={{ fontSize: "1.6rem !important" }}>
              Si un dato fue accedido, los datos <strong>cercanos en memoria</strong> probablemente también se accederán.
              <em> Ejemplo: elementos contiguos de un array.</em>
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CachePrinciples;
