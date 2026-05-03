import React from "react";
import { Slide } from "@revealjs/react";
import { ShieldAlert } from "lucide-react";

const EjercicioSeguridad: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <ShieldAlert size={40} color="var(--accent-red)" />
          <h2 style={{ fontSize: "3rem", margin: 0 }}>Ejercicio 6: PrintNightmare</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div className="glass-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-red)", marginBottom: "1rem" }}>Análisis Técnico</h4>
            <p style={{ fontSize: "1rem" }}>
              <strong>Función:</strong> <code>RpcAddPrinterDriverEx()</code><br/>
              <strong>Fallo:</strong> Carga de drivers maliciosos vía RPC sin validación de privilegios.<br/>
              <strong>Privilegios:</strong> SYSTEM (Necesario para drivers y rutas del sistema).
            </p>
          </div>

          <div className="technical-note" style={{ borderColor: "var(--accent-cache)", background: "rgba(168, 224, 99, 0.05)" }}>
            <h4 style={{ color: "var(--accent-cache)" }}>Solución Arquitectónica</h4>
            <p style={{ fontSize: "1rem" }}>
              <strong>Privilege Separation:</strong> Aislar la gestión de colas (Spooler Broker) de la carga de drivers (Driver Host) en un Sandbox.
            </p>
          </div>
        </div>
        
        <div style={{ marginTop: "2rem", opacity: 0.6, fontSize: "1rem", fontStyle: "italic" }}>
          "El principio de mínimo privilegio es la defensa fundamental contra vulnerabilidades sistémicas."
        </div>
      </div>
    </Slide>
  );
};

export default EjercicioSeguridad;
