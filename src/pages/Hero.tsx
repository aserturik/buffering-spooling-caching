import React from "react";
import { Slide } from "@revealjs/react";
import { motion } from "framer-motion";
import { Activity, Cpu, Layers, RotateCcw } from "lucide-react";
import { MechanismCard } from "../components/MechanismCard";

export default function Hero() {
  return (
    <>
        {/* ── PORTADA ACADÉMICA ── */}
        <Slide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 8%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: "left", position: "relative", zIndex: 1 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Cpu size={32} color="var(--accent-buf)" />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "1.2rem",
                    color: "var(--accent-buf)",
                    letterSpacing: "0.4em",
                  }}
                >
                  SISTEMAS OPERATIVOS
                </span>
              </div>

              <h1
                style={{
                  fontSize: "7.5rem",
                  margin: "0.5rem 0 2rem 0",
                  fontWeight: "900",
                  letterSpacing: "-0.03em",
                  lineHeight: "0.95",
                }}
              >
                Métodos de Optimización
                <br />
                <span style={{ color: "var(--accent-gold)" }}>
                  De Entrada - Salida
                </span>
              </h1>

              <div
                style={{
                  height: "4px",
                  width: "120px",
                  background: "var(--accent-gold)",
                  marginBottom: "3.5rem",
                  borderRadius: "2px",
                }}
              ></div>

              <div className="presenter-tag">
                ALEX HERNÁNDEZ • LAURA FIGUEREDO • DIEGO GIL
              </div>

              <p
                style={{
                  fontSize: "2.4rem !important",
                  maxWidth: "900px",
                  lineHeight: "1.4",
                  marginBottom: "4rem",
                  color: "var(--fg)",
                  fontFamily: "var(--serif)",
                  fontWeight: 300,
                }}
              >
                Optimización de throughput mediante{" "}
                <strong>Buffering, Spooling</strong> y <strong>Caching</strong>.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2rem",
                  width: "100%",
                }}
              >
                <MechanismCard
                  icon={<Layers size={20} />}
                  label="01. BUFFERING"
                  description="Sincronización de flujos asíncronos."
                />
                <MechanismCard
                  icon={<RotateCcw size={20} />}
                  label="02. SPOOLING"
                  description="Virtualización de dispositivos exclusivos."
                />
                <MechanismCard
                  icon={<Activity size={20} />}
                  label="03. CACHING"
                  description="Localidad heurística de datos."
                />
              </div>
            </motion.div>

            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                width: "400px",
                height: "400px",
                background: "var(--accent-buf)",
                filter: "blur(150px)",
                opacity: 0.05,
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </Slide>

    </>
  );
}
