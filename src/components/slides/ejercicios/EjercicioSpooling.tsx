import React from "react";
import { Slide } from "@revealjs/react";
import { Printer } from "lucide-react";

const EjercicioSpooling: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <Printer size={40} color="var(--accent-spool)" />
          <h2 style={{ fontSize: "3rem", margin: 0 }}>Ejercicio 2: Cola de Impresión</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div className="glass-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-spool)", marginBottom: "1rem" }}>Enunciado</h4>
            <p style={{ fontSize: "1.1rem" }}>
              3 usuarios envían simultáneamente:<br/>
              A (15s), B (30s), C (6s).<br/>
              Escritura a spool: A(2s), B(4s), C(1s).
            </p>
          </div>

          <div className="technical-note" style={{ borderColor: "var(--accent-cache)", background: "rgba(168, 224, 99, 0.05)" }}>
            <h4 style={{ color: "var(--accent-cache)" }}>Solución (Bloqueo)</h4>
            <table style={{ width: "100%", fontSize: "1rem", color: "var(--subtext)" }}>
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Sin Spool</th>
                  <th>Con Spool</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>15s</td>
                  <td style={{ color: "var(--accent-cache)" }}>2s</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>45s</td>
                  <td style={{ color: "var(--accent-cache)" }}>4s</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>51s</td>
                  <td style={{ color: "var(--accent-cache)" }}>1s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: "2rem", fontSize: "1.2rem", fontStyle: "italic", textAlign: "left" }}>
          El Spooling libera al usuario casi de inmediato (tiempo de escritura a disco), mientras la impresión ocurre en background.
        </div>
      </div>
    </Slide>
  );
};

export default EjercicioSpooling;
