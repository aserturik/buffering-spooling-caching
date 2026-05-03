import React from "react";
import { Slide } from "@revealjs/react";
import { Printer, Users, Lock, FastForward, Save } from "lucide-react";

const PrinterCase: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ textAlign: "left", marginBottom: "3rem" }}>
          <span className="presenter-tag" style={{ color: "var(--accent-spool)" }}>CASO DE ESTUDIO</span>
          <h2 style={{ fontSize: "3.5rem" }}>¿Por qué las impresoras?</h2>
        </div>

        <div className="grid-2" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          <div className="metric-card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <Lock size={20} color="var(--accent-spool)" />
              <h4 style={{ margin: 0, color: "var(--accent-spool)" }}>Exclusividad</h4>
            </div>
            <p style={{ fontSize: "1.2rem" }}>Evita mezclar bytes de documentos distintos. Garantiza atomicidad.</p>
          </div>

          <div className="metric-card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <FastForward size={20} color="var(--accent-spool)" />
              <h4 style={{ margin: 0, color: "var(--accent-spool)" }}>Velocidad</h4>
            </div>
            <p style={{ fontSize: "1.2rem" }}>La CPU genera a GB/s; la impresora consume a MB/s. El spooler evita el bloqueo.</p>
          </div>

          <div className="metric-card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <Users size={20} color="var(--accent-spool)" />
              <h4 style={{ margin: 0, color: "var(--accent-spool)" }}>Multiusuario</h4>
            </div>
            <p style={{ fontSize: "1.2rem" }}>Serializa trabajos en cola FIFO para múltiples usuarios simultáneos.</p>
          </div>

          <div className="metric-card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <Save size={20} color="var(--accent-spool)" />
              <h4 style={{ margin: 0, color: "var(--accent-spool)" }}>Persistencia</h4>
            </div>
            <p style={{ fontSize: "1.2rem" }}>Si el sistema se reinicia, el trabajo sobrevive en disco y se retoma.</p>
          </div>
        </div>
        <div style={{ marginTop: "2rem", opacity: 0.2 }}>
           <Printer size={100} style={{ position: "absolute", right: "5%", bottom: "5%" }} />
        </div>
      </div>
    </Slide>
  );
};

export default PrinterCase;
