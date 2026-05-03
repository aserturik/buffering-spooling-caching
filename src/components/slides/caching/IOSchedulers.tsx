import React from "react";
import { Slide } from "@revealjs/react";
import { Activity } from "lucide-react";

const IOSchedulers: React.FC = () => {
  return (
    <Slide data-transition="fade">
      <div style={{ padding: "0 5%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem" }}>
          <div style={{ textAlign: "left" }}>
            <span className="presenter-tag" style={{ color: "var(--accent-cache)" }}>OPTIMIZACIÓN FINAL</span>
            <h2 style={{ fontSize: "3.5rem" }}>Planificadores de E/S de Linux</h2>
          </div>
          <Activity size={60} color="var(--accent-cache)" style={{ opacity: 0.5 }} />
        </div>

        <table className="comp-table" style={{ fontSize: "1.2rem" }}>
          <thead>
            <tr>
              <th>Scheduler</th>
              <th>Estrategia</th>
              <th>Ideal para...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row-label">BFQ</td>
              <td>Ancho de banda proporcional</td>
              <td>Escritorio / Discos HDD</td>
            </tr>
            <tr>
              <td className="row-label">MQ-Deadline</td>
              <td>Garantiza plazos máximos</td>
              <td>Servidores / Cargas mixtas</td>
            </tr>
            <tr>
              <td className="row-label">Kyber</td>
              <td>Control de peticiones en vuelo</td>
              <td>NVMe / Baja latencia</td>
            </tr>
            <tr>
              <td className="row-label">None (noop)</td>
              <td>FIFO puro (Sin reordenar)</td>
              <td>Entornos virtualizados</td>
            </tr>
          </tbody>
        </table>

        <div className="technical-note" style={{ marginTop: "2rem", borderColor: "var(--accent-cache)" }}>
          Deciden el orden en que las peticiones salen del caché hacia el hardware.
        </div>
      </div>
    </Slide>
  );
};

export default IOSchedulers;
