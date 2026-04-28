import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export const Scoreboard: React.FC = () => {
  const teams = [
    { name: "Kernel Panic", points: 4, color: "var(--accent-red)" },
    { name: "Team Linux", points: 3, color: "var(--accent-buf)" },
    { name: "Deadlockers", points: 2, color: "var(--accent-gold)" },
  ];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10%",
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="glass-card"
        style={{ padding: "4rem", width: "800px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          <Trophy size={60} color="var(--accent-gold)" />
          <h2 style={{ fontSize: "5rem", margin: 0 }}>Scoreboard</h2>
        </div>

        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 1.5rem" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", fontSize: "1.5rem", color: "var(--muted)", paddingBottom: "1rem" }}>GRUPO</th>
              <th style={{ textAlign: "right", fontSize: "1.5rem", color: "var(--muted)", paddingBottom: "1rem" }}>PUNTOS</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => (
              <motion.tr
                key={team.name}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <td style={{ padding: "2rem", borderRadius: "12px 0 0 12px", borderLeft: `6px solid ${team.color}` }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--fg)" }}>{team.name}</span>
                </td>
                <td style={{ padding: "2rem", textAlign: "right", borderRadius: "0 12px 12px 0" }}>
                  <span style={{ fontSize: "3rem", fontWeight: "800", fontFamily: "var(--mono)", color: team.color }}>{team.points}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};
