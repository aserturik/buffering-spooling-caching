import React from "react";
import { Slide } from "@revealjs/react";
import { Database, Globe, Network, Server } from "lucide-react";

export default function SistemasDistribuidos() {
  return (
    <>
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
              padding: "0 8%",
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

    </>
  );
}
