import React from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { GroupSelector } from "./GroupSelector";

export const GameIntro: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10%",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="glass-card"
        style={{ padding: "4rem", maxWidth: "1200px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Gamepad2 size={80} color="var(--accent-gold)" />
          <h1 style={{ fontSize: "6rem", margin: 0 }}>Kernel Challenge</h1>
        </div>
        
        <h2 style={{ fontSize: "3rem", color: "var(--accent-buf)", marginBottom: "3rem" }}>
          Buffering vs Spooling vs Caching
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", textAlign: "left" }}>
          <div>
            <h3 style={{ fontSize: "2.2rem", color: "var(--fg)", marginBottom: "1.5rem" }}>Reglas del Juego</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li>Cada grupo tiene 3 tarjetas de color.</li>
              <li>El selector en cada slide decidirá quién responde.</li>
              <li><span style={{ color: "var(--accent-cache)" }}>Acierto: +1 punto</span></li>
              <li><span style={{ color: "var(--accent-red)" }}>Fallo: Rebote a otro grupo.</span></li>
            </ul>
          </div>

          <div style={{ background: "rgba(255,255,255,0.02)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: "2.2rem", color: "var(--fg)", marginBottom: "1.5rem", textAlign: "center" }}>Tus Tarjetas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: "40px", height: "60px", background: "var(--accent-buf)", borderRadius: "6px", border: "2px solid white" }}></div>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Azul = Buffering</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: "40px", height: "60px", background: "var(--accent-red)", borderRadius: "6px", border: "2px solid white" }}></div>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Rojo = Spooling</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: "40px", height: "60px", background: "var(--accent-cache)", borderRadius: "6px", border: "2px solid white" }}></div>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Verde = Caching</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
