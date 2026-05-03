import React from "react";
import { Slide } from "@revealjs/react";
import { ShieldAlert, HardDrive } from "lucide-react";

const CopySemantics: React.FC = () => {
  return (
    <Slide data-transition="zoom">
      <div style={{ padding: "0 8%" }}>
        <div
          className="glass-card"
          style={{ borderLeft: "12px solid var(--accent-red)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
            <ShieldAlert size={60} color="var(--accent-red)" />
            <h2 style={{ fontSize: "4rem", margin: 0 }}>Semántica de Copia</h2>
          </div>

          <p style={{ fontSize: "2rem", textAlign: "left", marginBottom: "2rem" }}>
            Un detalle crítico para la <strong>integridad del sistema</strong>.
          </p>

          <div className="grid-2">
            <div className="technical-note">
              <h4 style={{ color: "var(--accent-red)", fontSize: "1.8rem" }}>El Riesgo</h4>
              <p style={{ fontSize: "1.6rem !important" }}>
                Si el proceso modifica su buffer <em>mientras</em> el kernel está escribiendo al disco, el dato final sería inconsistente.
              </p>
            </div>
            <div className="technical-note" style={{ borderColor: "var(--accent-cache)" }}>
              <h4 style={{ color: "var(--accent-cache)", fontSize: "1.8rem" }}>La Solución</h4>
              <p style={{ fontSize: "1.6rem !important" }}>
                El SO <strong>copia</strong> los datos al <strong>Kernel Buffer</strong>. La aplicación puede seguir trabajando sin arruinar la operación de E/S.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "left", opacity: 0.6, fontSize: "1.5rem", fontFamily: "var(--mono)" }}>
            <HardDrive size={16} style={{ marginRight: "0.5rem" }} />
            TRANSFERENCIA SEGURA: App RAM → Kernel Buffer → Dispositivo
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CopySemantics;
