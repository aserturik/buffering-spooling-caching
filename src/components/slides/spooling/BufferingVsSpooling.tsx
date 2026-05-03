import React from "react";
import { Slide } from "@revealjs/react";
import { GitCompare } from "lucide-react";

const BufferingVsSpooling: React.FC = () => {
  return (
    <Slide data-transition="convex">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <GitCompare size={40} color="var(--accent-spool)" />
          <h2 style={{ fontSize: "3.5rem", margin: 0 }}>Diferencia Crítica</h2>
        </div>

        <table className="comp-table" style={{ fontSize: "1.4rem" }}>
          <thead>
            <tr>
              <th>Criterio</th>
              <th style={{ color: "var(--accent-buf)" }}>Buffering</th>
              <th style={{ color: "var(--accent-spool)" }}>Spooling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row-label">¿Qué desacopla?</td>
              <td>E/S y cómputo (mismo proceso)</td>
              <td>Generación y consumo (procesos distintos)</td>
            </tr>
            <tr>
              <td className="row-label">Almacenamiento</td>
              <td>RAM (Volátil, ns)</td>
              <td>Disco (Persistente, ms)</td>
            </tr>
            <tr>
              <td className="row-label">Unidad de Datos</td>
              <td>Fragmentos de flujo</td>
              <td>Trabajos completos (documentos)</td>
            </tr>
            <tr>
              <td className="row-label">Fallo de Energía</td>
              <td style={{ color: "var(--accent-red)" }}>Pérdida Total</td>
              <td style={{ color: "var(--accent-cache)" }}>Recuperación Completa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Slide>
  );
};

export default BufferingVsSpooling;
