import React from "react";
import { Slide, Stack } from "@revealjs/react";
import { RotateCcw } from "lucide-react";

export default function Spooling() {
  return (
    <>
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

              <div
                className="grid-2"
                style={{ gap: "4rem", alignItems: "stretch" }}
              >
                <div
                  className="glass-card"
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--accent-spool)",
                      fontSize: "2.5rem" }}
                  >
                    Spooling vs Buffering
                  </h3>
                  <p
                    style={{
                      fontSize: "2.2rem !important",
                      marginTop: "1.5rem",
                      flexGrow: 1,
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
                      marginTop: "auto",
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
                  <div
                    className="glass-card"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "2.2rem",
                        color: "var(--fg)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Componentes (Microsoft Learn)
                    </h4>
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1.5rem",
                        flexGrow: 1,
                      }}
                    >
                      <li
                        style={{
                          fontSize: "2rem !important",
                          listStyle: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span style={{ color: "var(--accent-spool)" }}>•</span>{" "}
                        <code>spoolsv.exe</code>
                      </li>
                      <li
                        style={{
                          fontSize: "2rem !important",
                          listStyle: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span style={{ color: "var(--accent-spool)" }}>•</span>{" "}
                        Procesador de Impresión
                      </li>
                      <li
                        style={{
                          fontSize: "2rem !important",
                          listStyle: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span style={{ color: "var(--accent-spool)" }}>•</span>{" "}
                        Interfaz de Control
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
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      color: "var(--accent-spool)",
                      marginBottom: "1rem",
                    }}
                  >
                    1. spoolsv.exe
                  </h2>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "1.4rem !important",
                      margin: "0 0 1rem 0",
                      color: "var(--fg)",
                    }}
                  >
                    <strong>Proceso anfitrión</strong> que intercepta cada
                    solicitud de impresión.
                  </p>
                  <ul
                    style={{
                      fontSize: "1.1rem !important",
                      paddingLeft: "1.2rem",
                      color: "var(--subtext)",
                    }}
                  >
                    <li style={{ marginBottom: "0.5rem" }}>
                      Crea archivos <code>.SHD</code> y <code>.SPL</code>.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                      Mantiene la cola tras fallos.
                    </li>
                    <li>Rutea al procesador adecuado.</li>
                  </ul>
                </div>

                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      color: "var(--accent-spool)",
                      marginBottom: "1rem",
                    }}
                  >
                    2. Procesador
                  </h2>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "1.4rem !important",
                      margin: "0 0 1rem 0",
                      color: "var(--fg)",
                    }}
                  >
                    Motor de renderizado y
                    <strong>traductor de formatos</strong> software/hardware.
                  </p>
                  <ul
                    style={{
                      fontSize: "1.1rem !important",
                      paddingLeft: "1.2rem",
                      color: "var(--subtext)",
                    }}
                  >
                    <li style={{ marginBottom: "0.5rem" }}>
                      Transforma <strong>EMF</strong> a <strong>RAW</strong>.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                      Gestiona N-up y orden inverso.
                    </li>
                    <li>Permite el "término" virtual.</li>
                  </ul>
                </div>

                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      color: "var(--accent-spool)",
                      marginBottom: "1rem",
                    }}
                  >
                    3. Interfaz
                  </h2>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "1.4rem !important",
                      margin: "0 0 1rem 0",
                      color: "var(--fg)",
                    }}
                  >
                    Capa de software (<code>Winspool.drv</code>) de
                    administración y control.
                  </p>
                  <ul
                    style={{
                      fontSize: "1.1rem !important",
                      paddingLeft: "1.2rem",
                      color: "var(--subtext)",
                    }}
                  >
                    <li style={{ marginBottom: "0.5rem" }}>
                      Supervisa ciclo de vida (Pausa/Canc).
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                      Valida permisos ACL de cola.
                    </li>
                    <li>Canaliza feedback del hardware.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slide>
          <Slide
            data-background-iframe="./doc_spooling.html"
            data-background-interactive
            data-transition="fade"
          />
        </Stack>
    </>
  );
}
