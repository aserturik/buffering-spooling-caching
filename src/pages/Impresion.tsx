import React from "react";
import { Slide, Stack } from "@revealjs/react";
import { Printer } from "lucide-react";

export default function Impresion() {
  return (
    <>
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

          {/* ── VISUALIZACIÓN DEL PIPELINE DE IMPRESIÓN ── */}
          <Slide data-transition="zoom">
            <div style={{ padding: "0 8%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 style={{ fontSize: "4.5rem", marginBottom: "2rem" }}>
                Flujo de Impresión en Windows
              </h2>
              <img 
                src="/Flujo de Impresión en Windows: Desde la Aplicación hastal a Impresora Física.jpeg" 
                alt="Flujo de Impresión" 
                style={{ maxWidth: "100%", maxHeight: "700px", borderRadius: "12px", border: "1px solid var(--line)" }} 
              />
            </div>
          </Slide>
        </Stack>

    </>
  );
}
