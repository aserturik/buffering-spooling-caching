import React from "react";
import { Slide } from "@revealjs/react";
import { Cpu } from "lucide-react";

const CPUHierarchy: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <Cpu size={40} color="var(--accent-cache)" />
          <h2 style={{ fontSize: "3.5rem", margin: 0 }}>Jerarquía de Memoria</h2>
        </div>

        <div className="ascii" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
{`  NIVEL             LATENCIA     TAMAÑO TÍPICO
  ────────────────────────────────────────────
  Registros CPU     ~0.3 ns      < 2 KB
  Caché L1          ~1 ns        32-64 KB
  Caché L2          ~4 ns        256 KB - 1 MB
  Caché L3          ~15 ns       8-64 MB
  RAM Principal     ~100 ns      8-128 GB
  SSD NVMe          ~100 µs      512 GB - 4 TB
  HDD               ~10 ms       1-20 TB`}
        </div>

        <div className="technical-note" style={{ marginTop: "2rem", textAlign: "center" }}>
          <strong>Regla de oro:</strong> Cada nivel actúa como caché del nivel inferior.
        </div>
      </div>
    </Slide>
  );
};

export default CPUHierarchy;
