import React from "react";
import { Slide } from "@revealjs/react";
import { motion } from "framer-motion";
import { Activity, Layers, RotateCcw } from "lucide-react";

export default function Conclusion() {
  return (
    <>
        {/* ── CONCLUSIÓN ── */}
        <Slide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 8%",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="glass-card"
              style={{
                maxWidth: "1400px",
                textAlign: "left",
                padding: "4rem",
              }}
            >
              <h2
                style={{
                  fontSize: "4.5rem",
                  marginBottom: "2.5rem",
                  color: "var(--accent-gold) !important",
                }}
              >
                Conclusión Arquitectónica
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2.2rem !important",
                    lineHeight: "1.4",
                    color: "var(--fg)",
                    margin: 0,
                  }}
                >
                  Una CPU rápida no necesita esperar a dispositivos lentos
                  gracias a tres mecanismos clave del sistema operativo:
                  <span style={{ color: "var(--accent-buf)" }}> buffering</span>
                  ,
                  <span style={{ color: "var(--accent-spool)" }}>
                    {" "}
                    spooling
                  </span>{" "}
                  y
                  <span style={{ color: "var(--accent-cache)" }}> caching</span>
                  .
                </p>

                <div
                  className="grid-3"
                  style={{ gap: "1.5rem", marginTop: "1rem" }}
                >
                  <div
                    className="technical-note"
                    style={{ borderColor: "var(--accent-buf)", margin: 0 }}
                  >
                    <p style={{ fontSize: "1.6rem !important", margin: 0 }}>
                      <strong>Buffering:</strong> RAM para equilibrar
                      diferencias de velocidad.
                    </p>
                  </div>
                  <div
                    className="technical-note"
                    style={{ borderColor: "var(--accent-spool)", margin: 0 }}
                  >
                    <p style={{ fontSize: "1.6rem !important", margin: 0 }}>
                      <strong>Spooling:</strong> Colas para compartir
                      dispositivos exclusivos.
                    </p>
                  </div>
                  <div
                    className="technical-note"
                    style={{ borderColor: "var(--accent-cache)", margin: 0 }}
                  >
                    <p style={{ fontSize: "1.6rem !important", margin: 0 }}>
                      <strong>Caching:</strong> Datos frecuentes en memoria
                      rápida.
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "2.2rem !important",
                    lineHeight: "1.4",
                    color: "var(--subtext)",
                    margin: 0,
                  }}
                >
                  Estos principios siguen vigentes en la computación moderna.
                  Tecnologías como{" "}
                  <strong>Kafka, Redis, RabbitMQ y los CDN</strong> aplican las
                  mismas ideas a gran escala.
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    padding: "2rem",
                    borderRadius: "16px",
                    borderLeft: "8px solid var(--accent-gold)",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "2.4rem !important",
                      fontWeight: 700,
                      color: "var(--fg)",
                      margin: 0,
                    }}
                  >
                    La eficiencia no depende solo del hardware, sino de cómo se
                    administra inteligentemente la latencia y los recursos del
                    sistema.
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  paddingTop: "2rem",
                  marginTop: "3rem",
                  opacity: 0.5,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem !important",
                    fontFamily: "var(--mono)",
                    margin: 0,
                  }}
                >
                  SISTEMAS OPERATIVOS // 2026
                </p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <Layers size={20} color="var(--accent-buf)" />
                  <RotateCcw size={20} color="var(--accent-spool)" />
                  <Activity size={20} color="var(--accent-cache)" />
                </div>
              </div>
            </motion.div>
          </div>
        </Slide>

    </>
  );
}
