import React from "react";
import { MessageSquare } from "lucide-react";
import { GroupSelector } from "./GroupSelector";

interface DebateProps {
  id: number;
  topic: string;
  options?: string[];
  duration?: number;
}

export const DebateSlide: React.FC<DebateProps> = ({
  id,
  topic,
  options,
  duration = 45,
}) => {
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
      <div
        style={{ position: "absolute", top: "40%", right: "10%", zIndex: 10 }}
      >
        <GroupSelector mini />
      </div>

      <div
        className="glass-card"
        style={{
          padding: "4rem",
          width: "1300px",
          textAlign: "left",
          borderTop: "8px solid var(--accent-gold)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "3rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <MessageSquare size={40} color="var(--accent-gold)" />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "1.5rem",
                color: "var(--muted)",
              }}
            >
              DEBATE DEL KERNEL #{id}
            </span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                color: "var(--accent-red)",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              {duration}s
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                textTransform: "uppercase",
              }}
            >
              TIEMPO LÍMITE
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "4.5rem",
            lineHeight: "1.2",
            marginBottom: "4rem",
          }}
        >
          {topic}
        </h2>

        {options && (
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {options.map((opt, i) => (
              <div
                key={i}
                className="fragment"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "1.5rem 2.5rem",
                  borderRadius: "12px",
                  border: "1px solid var(--line)",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--accent-gold)",
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
