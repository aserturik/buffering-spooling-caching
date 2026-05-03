import React from "react";
import { motion } from "framer-motion";

interface MechanismProps {
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export const MechanismCard: React.FC<MechanismProps> = ({
  label,
  description,
  icon,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{
      textAlign: "left",
      background: "rgba(255,255,255,0.03)",
      padding: "1.5rem",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.8rem",
      }}
    >
      {icon && <div style={{ color: "var(--accent-buf)" }}>{icon}</div>}
      <span
        style={{
          color: "var(--accent-buf)",
          fontFamily: "var(--mono)",
          fontSize: "1.1rem",
          fontWeight: "700",
        }}
      >
        {label}
      </span>
    </div>
    <p
      style={{
        margin: 0,
        fontSize: "1.4rem !important",
        color: "var(--subtext)",
      }}
    >
      {description}
    </p>
  </motion.div>
);
