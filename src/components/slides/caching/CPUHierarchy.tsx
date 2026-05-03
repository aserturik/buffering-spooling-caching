import React from "react";
import { Slide } from "@revealjs/react";
import { Cpu } from "lucide-react";

import { ZoomableImage } from "../../ZoomableImage";

const CPUHierarchy: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <Cpu size={40} color="var(--accent-cache)" />
          <h2 style={{ fontSize: "3.5rem", margin: 0 }}>Jerarquía de Memoria</h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <ZoomableImage
            src="/velocidad_vs_tamaño_dispositivos_io.jpeg"
            alt="Jerarquía de Memoria"
            style={{
              maxWidth: "100%",
              maxHeight: "550px",
              borderRadius: "12px",
              border: "1px solid var(--line)",
            }}
          />
        </div>

        <div className="technical-note" style={{ marginTop: "2rem", textAlign: "center" }}>
          <strong>Regla de oro:</strong> Cada nivel actúa como caché del nivel inferior.
        </div>
      </div>
    </Slide>
  );
};

export default CPUHierarchy;
