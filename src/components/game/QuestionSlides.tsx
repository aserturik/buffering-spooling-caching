import React from "react";
import { Slide } from "@revealjs/react";
import { GameTimer } from "./GameTimer";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { GroupSelector } from "./GroupSelector";

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
  explanation?: string;
  color?: string;
  isTrap?: boolean;
}

export const QuestionSlides: React.FC<QuestionProps> = ({
  id,
  question,
  answer,
  explanation,
  color = "var(--accent-buf)",
  isTrap = false,
}) => {
  return (
    <Slide>
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
        <div style={{ position: "absolute", top: "10%", right: "10%", zIndex: 10, display: "flex", flexDirection: "column", gap: "2rem", alignItems: "flex-end" }}>
          <GameTimer duration={20} />
          <GroupSelector mini />
        </div>

        <div className="glass-card" style={{ padding: "4rem", width: "1300px", textAlign: "left", minHeight: "600px", display: "flex", flexDirection: "column" }}>
          
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
              <HelpCircle size={40} color={isTrap ? "#cb7c94" : "#e0c15a"} />
              <span style={{ fontFamily: "var(--mono)", fontSize: "1.5rem", color: "#8394A3" }}>
                PREGUNTA {id} {isTrap && "— ¡TRAMPA!"}
              </span>
            </div>
            <h2 style={{ fontSize: "4.5rem", lineHeight: "1.2", margin: 0 }}>
              {question}
            </h2>
          </div>

          <div 
            style={{ 
              marginTop: "auto",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <div className="fragment" data-fragment-index="1">
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <CheckCircle2 size={40} color={color} />
                <span style={{ fontFamily: "var(--mono)", fontSize: "1.5rem", color: color, fontWeight: "bold" }}>
                  RESPUESTA
                </span>
              </div>
              
              <h2 style={{ fontSize: "5.5rem", color: color, marginBottom: "1.5rem", margin: 0 }}>
                {answer}
              </h2>

              {explanation && (
                <div className="technical-note" style={{ borderColor: color, background: "rgba(255,255,255,0.02)", marginTop: "2rem" }}>
                  <p style={{ fontSize: "2rem !important", margin: 0 }}>
                    {explanation}
                  </p>
                </div>
              )}
            </div>

            <div className="fragment fade-out" data-fragment-index="1" style={{ color: "#e0c15a", fontFamily: "var(--mono)", fontSize: "1.4rem" }}>
              (La ruleta decide el grupo... Esperando respuesta...)
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
