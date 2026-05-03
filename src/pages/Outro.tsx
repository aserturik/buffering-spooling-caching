import React from "react";
import { Slide } from "@revealjs/react";
import { motion } from "framer-motion";
import { Activity, Layers, RotateCcw } from "lucide-react";

export default function Outro() {
  return (
    <>
        {/* CIERRE FINAL */}

        <Slide data-transition="zoom" data-background="var(--bg-dark)">
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                style={{
                  fontSize: "10rem",
                  color: "var(--accent-gold)",
                  marginBottom: "2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                ¡Gracias!
              </h1>
              <div
                style={{
                  width: "200px",
                  height: "4px",
                  background: "var(--accent-gold)",
                  margin: "0 auto 4rem",
                  borderRadius: "2px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "3rem !important",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  Sistemas Operativos - 2026
                </p>
                <p
                  style={{
                    fontSize: "1.8rem !important",
                    color: "var(--muted)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  Alex Hernández - Diego Gil - Laura Figueredo
                </p>
              </div>

              <div
                style={{
                  marginTop: "6rem",
                  display: "flex",
                  gap: "3rem",
                  justifyContent: "center",
                  opacity: 0.4,
                }}
              >
                <Layers size={40} />
                <RotateCcw size={40} />
                <Activity size={40} />
              </div>
            </motion.div>
          </div>
        </Slide>
    </>
  );
}
