import React from "react";
import { Slide } from "@revealjs/react";
import { Trash2, RotateCw } from "lucide-react";

const ReplacementAlgos: React.FC = () => {
  return (
    <Slide data-transition="slide">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
          <Trash2 size={40} color="var(--accent-red)" />
          <h2 style={{ fontSize: "3.5rem", margin: 0 }}>Algoritmos de Reemplazo</h2>
        </div>

        <div className="grid-2" style={{ gap: "2rem" }}>
          <div className="metric-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-cache)" }}>LRU (Least Recently Used)</h4>
            <p style={{ fontSize: "1.2rem" }}>Expulsa el que lleva más tiempo sin usarse. Estándar en ext4/XFS.</p>
          </div>
          <div className="metric-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--accent-buf)" }}>LFU (Least Frequently Used)</h4>
            <p style={{ fontSize: "1.2rem" }}>Expulsa el menos frecuentemente accedido. Útil para datos "calientes" a largo plazo.</p>
          </div>
          <div className="metric-card" style={{ textAlign: "left", padding: "1.5rem" }}>
            <h4 style={{ color: "var(--text-muted)" }}>FIFO (First In First Out)</h4>
            <p style={{ fontSize: "1.2rem" }}>El primero en entrar es el primero en salir. Ignora patrones de acceso.</p>
          </div>
          <div className="metric-card" style={{ textAlign: "left", padding: "1.5rem", borderLeftColor: "var(--accent-spool)" }}>
            <h4 style={{ color: "var(--accent-spool)" }}>ARC (Adaptive)</h4>
            <p style={{ fontSize: "1.2rem" }}>Combina LRU y LFU dinámicamente. Usado en ZFS.</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", fontSize: "1.2rem", fontStyle: "italic", opacity: 0.6 }}>
           ¿Qué bloque se expulsa cuando el caché está lleno?
        </div>
      </div>
    </Slide>
  );
};

export default ReplacementAlgos;
