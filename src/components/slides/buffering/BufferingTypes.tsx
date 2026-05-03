import React from "react";
import { Slide } from "@revealjs/react";
import { RotateCw, Repeat } from "lucide-react";
import { ZoomableImage } from "../../ZoomableImage";

const BufferingTypes: React.FC = () => {
  return (
    <>
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <h2 style={{ fontSize: "3.5rem", marginBottom: "3rem", textAlign: "center" }}>
          Estrategias de Implementación
        </h2>

        <div className="grid-2" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div className="metric-card" style={{ textAlign: "left", padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Repeat color="var(--accent-buf)" />
              <h3 style={{ margin: 0, fontSize: "1.8rem" }}>Single vs Double</h3>
            </div>
            <ul style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
              <li><strong>Single:</strong> Un bloque. El productor espera a que el consumidor termine.</li>
              <li><strong>Double (Ping-Pong):</strong> Dos bloques. Mientras uno se vacía, el otro se llena. <strong>¡Cero tiempo muerto!</strong></li>
            </ul>
          </div>

          <div className="metric-card" style={{ textAlign: "left", padding: "2rem", borderLeftColor: "var(--accent-cache)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <RotateCw color="var(--accent-cache)" />
              <h3 style={{ margin: 0, fontSize: "1.8rem", color: "var(--accent-cache)" }}>Circular Buffer</h3>
            </div>
            <p style={{ fontSize: "1.4rem" }}>
              N bloques en anillo. Estándar de la industria para <strong>Streaming</strong>, drivers de red y audio.
            </p>
            <div className="ascii" style={{ fontSize: "1rem", marginTop: "1rem", padding: "1rem" }}>
              [ R ] → [   ] → [   ] → [ W ]
                ↑       (Anillo)        ↓
              [   ] ← [   ] ← [   ] ← [   ]
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>
          Single vs Double Buffering
        </h2>
        <ZoomableImage 
          src="/Doble Buffering vs Único bufering.jpeg" 
          alt="Doble Buffering vs Único bufering" 
          style={{ maxWidth: "100%", maxHeight: "700px", borderRadius: "12px", border: "1px solid var(--line)" }} 
        />
      </div>
    </Slide>
    </>
  );
};

export default BufferingTypes;
