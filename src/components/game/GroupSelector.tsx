import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Shuffle } from "lucide-react";

export const GroupSelector: React.FC<{ mini?: boolean }> = ({ mini }) => {
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const pickRandomGroup = () => {
    setIsSpinning(true);
    setSelectedGroup(null);

    let iterations = 0;
    const maxIterations = 12;
    const interval = setInterval(() => {
      setSelectedGroup(Math.floor(Math.random() * 7) + 1);
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  if (mini) {
    return (
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "1.5rem",
        background: "rgba(255,255,255,0.05)",
        padding: "1rem 2rem",
        borderRadius: "16px",
        border: "1px solid var(--line)",
        width: "fit-content",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}>
        <button
          onClick={pickRandomGroup}
          disabled={isSpinning}
          style={{
            background: "var(--accent-gold)",
            color: "var(--bg)",
            border: "none",
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            cursor: isSpinning ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            boxShadow: isSpinning ? "none" : "0 4px 15px rgba(224, 193, 90, 0.3)"
          }}
        >
          <Shuffle size={30} />
        </button>

        <div style={{ width: "100px", textAlign: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGroup || "none"}
              initial={{ y: 15, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              style={{ 
                fontSize: "3.5rem", 
                fontWeight: "900", 
                color: isSpinning ? "var(--muted)" : "var(--accent-gold)",
                fontFamily: "var(--mono)",
                lineHeight: 1
              }}
            >
              {selectedGroup ? `G${selectedGroup}` : "--"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "1.5rem",
      background: "rgba(255,255,255,0.03)",
      padding: "2rem",
      borderRadius: "20px",
      border: "1px solid var(--line)",
      marginTop: "2rem"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--accent-gold)" }}>
        <Users size={24} />
        <span style={{ fontFamily: "var(--mono)", fontWeight: "bold", letterSpacing: "0.1em" }}>SELECTOR DE GRUPOS</span>
      </div>

      <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <AnimatePresence mode="wait">
          {selectedGroup ? (
            <motion.div
              key={selectedGroup}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              style={{ 
                fontSize: "5rem", 
                fontWeight: "900", 
                color: isSpinning ? "var(--muted)" : "var(--accent-gold)",
                textShadow: isSpinning ? "none" : "0 0 20px rgba(224, 193, 90, 0.4)"
              }}
            >
              G{selectedGroup}
            </motion.div>
          ) : (
            <div style={{ fontSize: "1.2rem", color: "var(--muted)", fontFamily: "var(--mono)" }}>
              ¿Quién responde?
            </div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={pickRandomGroup}
        disabled={isSpinning}
        style={{
          background: isSpinning ? "var(--gray2)" : "var(--accent-gold)",
          color: "var(--bg)",
          border: "none",
          padding: "1rem 2rem",
          borderRadius: "12px",
          fontFamily: "var(--mono)",
          fontWeight: "bold",
          fontSize: "1.1rem",
          cursor: isSpinning ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          transition: "all 0.2s ease"
        }}
      >
        <Shuffle size={20} />
        {isSpinning ? "SORTEANDO..." : "ELEGIR GRUPO ALEATORIO"}
      </button>
    </div>
  );
};
