import React from "react";
import { Slide } from "@revealjs/react";
import { AlertTriangle, Cpu } from "lucide-react";

const NVMeBottleneck: React.FC = () => {
  return (
    <Slide data-transition="convex">
      <div style={{ padding: "0 8%" }}>
        <div
          className="glass-card"
          style={{ borderLeft: "12px solid var(--accent-red)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
            <AlertTriangle size={60} color="var(--accent-red)" />
            <h2 style={{ fontSize: "4rem", margin: 0 }}>El Problema NVMe</h2>
          </div>

          <p style={{ fontSize: "2rem", textAlign: "left", marginBottom: "2rem" }}>
            El cuello de botella <strong>migró al software</strong>.
          </p>

          <div className="grid-2">
            <div className="technical-note">
              <h4 style={{ color: "var(--accent-red)" }}>Sobrecarga del Kernel</h4>
              <p style={{ fontSize: "1.4rem !important" }}>
                Con SSDs ultra-rápidos, el kernel gasta hasta un <strong>36% de CPU</strong> gestionando el page cache. El SW es ahora más lento que el HW.
              </p>
            </div>
            <div className="technical-note" style={{ borderColor: "var(--accent-cache)" }}>
              <h4 style={{ color: "var(--accent-cache)" }}>E/S Directa (O_DIRECT)</h4>
              <p style={{ fontSize: "1.4rem !important" }}>
                Bases de datos (PostgreSQL/MySQL) saltan el caché del SO para evitar dobles copias y recuperar ciclos de CPU.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "left", opacity: 0.6, fontSize: "1.2rem", fontFamily: "var(--mono)" }}>
            <Cpu size={16} style={{ marginRight: "0.5rem" }} />
            REALIDAD 2025: USENIX FAST revela límites en el escalado del kernel.
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default NVMeBottleneck;
