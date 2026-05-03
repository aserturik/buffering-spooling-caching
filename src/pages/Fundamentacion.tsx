import React from "react";
import { Slide } from "@revealjs/react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, HardDrive, ShieldAlert, Zap, Printer } from "lucide-react";

export default function Fundamentacion() {
  return (
    <>
      {/* ── FUNDAMENTACIÓN CONCEPTUAL ── */}
      <Slide data-transition="zoom">
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 8%",
          }}
        >
          <div
            style={{
              maxWidth: "1600px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <Database size={40} color="var(--accent-gold)" />
              <span
                style={{
                  color: "var(--accent-gold)",
                  fontFamily: "var(--mono)",
                  fontSize: "1.2rem",
                  letterSpacing: "0.2em",
                }}
              >
                INTRODUCCIÓN TEÓRICA
              </span>
            </div>

            <h2
              style={{
                fontSize: "5.5rem",
                marginBottom: "4rem",
                lineHeight: "1.1",
              }}
            >
              1. Fundamentación Conceptual
            </h2>

            <div
              className="grid-2"
              style={{ gap: "6rem", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2.4rem !important",
                    lineHeight: "1.6",
                    color: "var(--fg)",
                    fontFamily: "var(--serif)",
                    fontWeight: 300,
                  }}
                >
                  La gestión de entrada/salida (E/S) constituye uno de los
                  subsistemas críticos en la arquitectura de sistemas
                  operativos contemporáneos. Según{" "}
                  <strong>Holcombe (2023)</strong>, el subsistema de E/S
                  representa la interfaz definitiva entre el núcleo y los
                  dispositivos periféricos.
                </p>

                <div
                  className="technical-note"
                  style={{
                    borderColor: "var(--accent-red)",
                    background: "rgba(203, 124, 148, 0.05)",
                  }}
                >
                  <p style={{ fontSize: "2rem !important", margin: 0 }}>
                    La <strong>"brecha de velocidad"</strong> (speed gap) es
                    el motor arquitectónico que justifica la existencia de
                    estos mecanismos (Univ. de Cambridge, 2022-2023).
                  </p>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "4rem",
                  borderLeft: "8px solid var(--accent-gold)",
                }}
              >
                <p
                  style={{
                    fontSize: "2.2rem !important",
                    lineHeight: "1.5",
                    marginBottom: "3rem",
                    fontStyle: "italic",
                  }}
                >
                  "La optimización de E/S no es meramente una mejora de
                  rendimiento, sino un requisito arquitectónico para la
                  correctitud y eficiencia del sistema operativo."
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: "2rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      color: "var(--accent-gold)",
                      fontSize: "1.2rem",
                    }}
                  >
                    — Teoría de Jerarquías de Memoria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ── TAXONOMÍA DEL GAP DE VELOCIDAD ── */}
      <Slide data-transition="zoom">
        <div style={{ padding: "0 8%" }}>
          <div style={{ textAlign: "left", marginBottom: "4rem" }}>
            <span
              style={{
                color: "var(--accent-red)",
                fontFamily: "var(--mono)",
                fontSize: "1.1rem",
                letterSpacing: "0.2em",
              }}
            >
              01 · RENDIMIENTO DEL SISTEMA
            </span>
            <h2 style={{ fontSize: "4.5rem", marginTop: "0.5rem" }}>
              El problema de la Latencia
            </h2>
            <p style={{ fontSize: "2.2rem !important", lineHeight: "1.5", marginBottom: "3rem", fontStyle: "italic" }}>
              La arquitectura de cualquier computadora enfrenta una paradoja: los componentes que procesan datos son órdenes de magnitud más rápidos que los que los almacenan o transmiten.
            </p>
          </div>

          <div className="grid-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  label: "Acceso a registros de CPU",
                  val: "~1 ns",
                  color: "var(--accent-cache)",
                  icon: <Cpu size={24} />,
                  power: "10⁰",
                },
                {
                  label: "Acceso a caché L1",
                  val: "~4 ns",
                  color: "var(--accent-red)",
                  icon: <HardDrive size={24} />,
                  power: "10¹",
                },
                {
                  label: "Memoria Principal RAM",
                  val: "~100 ns",
                  color: "var(--accent-spool)",
                  icon: <Database size={24} />,
                  power: "10²",
                },
                {
                  label: "Almacenamiento NVMe SSD",
                  val: "~100 μs",
                  color: "var(--accent-buf)",
                  icon: <Zap size={24} />,
                  power: "10⁵",
                },
                {
                  label: "Disco duro (HDD) Legado",
                  val: "~10 ms",
                  color: "var(--accent-red)",
                  icon: <HardDrive size={24} />,
                  power: "10⁷",
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="metric-card"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderLeft: `4px solid ${item.color}`,
                    padding: "1.5rem 2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                    }}
                  >
                    <div style={{ color: item.color }}>{item.icon}</div>
                    <div style={{ textAlign: "center" }}>
                      <div className="metric-label">{item.label}</div>
                      <div
                        className="metric-val"
                        style={{ color: item.color, textAlign: "center" }}
                      >
                        {item.val}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right", opacity: 0.4 }}>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      MAGNITUD
                    </div>
                    <div style={{ fontSize: "2rem", fontWeight: 800 }}>
                      {item.power}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: "3.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
              >
                <ShieldAlert
                  size={48}
                  color="var(--accent-red)"
                  style={{ flexShrink: 0 }}
                />
                <div>
                  <h4 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                    Impacto Arquitectónico
                  </h4>
                  <p
                    style={{
                      fontSize: "2.2rem !important",
                      lineHeight: "1.4",
                    }}
                  >
                    Esta disparidad de <strong>7 órdenes de magnitud</strong>{" "}
                    implica que la CPU pasa el 99.9% de sus ciclos en{" "}
                    <code>I/O WAIT</code> sin capas de abstracción.
                  </p>
                  <div
                    style={{
                      marginTop: "2.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        color: "var(--accent-gold)",
                      }}
                    >
                      <ArrowRight size={20} />
                      <span
                        style={{
                          fontSize: "1.8rem",
                          fontFamily: "var(--mono)",
                        }}
                      >
                        Desacoplamiento Productor-Consumidor
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        color: "var(--accent-gold)",
                      }}
                    >
                      <ArrowRight size={20} />
                      <span
                        style={{
                          fontSize: "1.8rem",
                          fontFamily: "var(--mono)",
                        }}
                      >
                        Independencia de Dispositivo (VFS)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ── VISUALIZACIÓN DEL GAP DE VELOCIDAD ── */}
      <Slide data-transition="zoom">
        <div style={{ padding: "0 8%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ fontSize: "4.5rem", marginBottom: "2rem" }}>
            Pirámide de Latencias
          </h2>
          <img 
            src="/Velocidad vs Tamaño Dispositivos I-O.jpeg" 
            alt="Velocidad vs Tamaño" 
            style={{ maxWidth: "100%", maxHeight: "700px", borderRadius: "12px", border: "1px solid var(--line)" }} 
          />
        </div>
      </Slide>
    </>
  );
}
