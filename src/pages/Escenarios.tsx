import React from "react";
import { Slide, Stack } from "@revealjs/react";
import { motion } from "framer-motion";
import {
  Zap, Layers, RotateCcw, ShieldAlert, Cpu, Database, HardDrive,
  Clock, ArrowRight, Activity, Printer, Network, Globe, Server,
  AlignCenter, MessageSquare, Gamepad2, Trophy, HelpCircle, CheckCircle2
} from "lucide-react";
import { MechanismCard } from "../components/MechanismCard";

export default function Escenarios() {
  return (
    <>
      {/* ── ESCENARIOS DE APLICACIÓN ── */}
      <Slide data-transition="convex">
        <div style={{
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

    </>
  );
}
