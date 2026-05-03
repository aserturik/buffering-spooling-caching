import React from "react";
import { Slide } from "@revealjs/react";
import { Layers, Database } from "lucide-react";
import { ZoomableImage } from "../../ZoomableImage";

const LinuxPageCache: React.FC = () => {
  return (
    <>
    <Slide data-transition="zoom">
      <div style={{ padding: "0 5%" }}>
        <div style={{ textAlign: "left", marginBottom: "3rem" }}>
          <span className="presenter-tag" style={{ color: "var(--accent-cache)" }}>SISTEMA OPERATIVO</span>
          <h2 style={{ fontSize: "3.5rem" }}>Linux Page Cache</h2>
          <p style={{ fontSize: "1.8rem", color: "var(--text-muted)" }}>El SO usa la RAM como caché de disco</p>
        </div>

        <div className="grid-2">
          <div className="technical-note">
            <h4 style={{ color: "var(--accent-cache)" }}>Lectura (read)</h4>
            <div style={{ fontSize: "1.3rem" }}>
              <p><strong>Hit:</strong> El kernel sirve desde RAM. Latencia: ~100ns.</p>
              <p><strong>Miss:</strong> Lee de disco → Carga en RAM. Latencia: ~100µs.</p>
            </div>
          </div>
          <div className="technical-note" style={{ borderColor: "var(--accent-buf)" }}>
            <h4 style={{ color: "var(--accent-buf)" }}>Escritura (write)</h4>
            <p style={{ fontSize: "1.3rem" }}>
              Los datos van al caché (<strong>Páginas Dirty</strong>). <br/>
              El proceso continúa inmediatamente; el kernel sincroniza al disco en segundo plano (pdflush).
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem", opacity: 0.5 }}>
           <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Layers size={20}/> RAM</div>
           <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Database size={20}/> DISCO</div>
        </div>
      </div>
    </Slide>
    <Slide data-transition="zoom">
      <div style={{ padding: "0 5%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>
          Flujo de Page Cache
        </h2>
        <ZoomableImage 
          src="/Flujo de Lectura y escritura del kernel Linux utilizando la Page Caché.jpeg" 
          alt="Flujo Page Cache Linux" 
          style={{ maxWidth: "100%", maxHeight: "700px", borderRadius: "12px", border: "1px solid var(--line)" }} 
        />
      </div>
    </Slide>
    </>
  );
};

export default LinuxPageCache;
