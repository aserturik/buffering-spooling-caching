import React from "react";
import { Slide, Stack } from "@revealjs/react";
import { Activity } from "lucide-react";

export default function Caching() {
  return (
    <>
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
          <Slide
            data-background-iframe="./doc_caching.html"
            data-background-interactive
            data-transition="fade"
          />
        </Stack>

    </>
  );
}
