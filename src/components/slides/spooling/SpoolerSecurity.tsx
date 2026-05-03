import React from "react";
import { Slide } from "@revealjs/react";
import { ShieldAlert, Terminal } from "lucide-react";

const SpoolerSecurity: React.FC = () => {
  return (
    <Slide data-transition="zoom">
      <div style={{ padding: "0 8%" }}>
        <div
          className="glass-card"
          style={{ borderLeft: "12px solid var(--accent-red)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
            <ShieldAlert size={60} color="var(--accent-red)" />
            <h2 style={{ fontSize: "4rem", margin: 0 }}>Riesgos de Seguridad</h2>
          </div>

          <div className="grid-2">
            <div style={{ textAlign: "left" }}>
              <h4 style={{ color: "var(--accent-red)" }}>PrintNightmare (CVE-2021-34527)</h4>
              <p style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
                El spooler opera con privilegios <strong>SYSTEM</strong>. Un error en la carga de drivers permitió ejecución de código remoto (RCE) en todas las versiones de Windows.
              </p>
            </div>
            <div className="technical-note" style={{ borderColor: "var(--accent-red)", background: "rgba(255,107,107,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Terminal size={20} color="var(--accent-red)" />
                <h5 style={{ margin: 0 }}>Lección Arquitectónica</h5>
              </div>
              <p style={{ fontSize: "1.2rem !important" }}>
                Alta privilegiación + Superficie de ataque amplia (Drivers) = Riesgo Estructural profundo.
              </p>
            </div>
          </div>

          <div className="ascii" style={{ fontSize: "0.8rem", marginTop: "2rem", opacity: 0.6 }}>
            RPC Call → Spooler (SYSTEM) → LoadDriver(malicious.dll) = PWNED
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default SpoolerSecurity;
