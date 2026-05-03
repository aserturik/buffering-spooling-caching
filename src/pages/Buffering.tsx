import React from "react";
import { Slide, Stack } from "@revealjs/react";
import { Layers } from "lucide-react";

export default function Buffering() {
  return (
    <>
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
            <div style={{ padding: "0 8%" }}>
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
          <Slide
            data-background-iframe="./doc_buffering.html"
            data-background-interactive
            data-transition="fade"
          />
        </Stack>

    </>
  );
}
