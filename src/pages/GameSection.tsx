import React from "react";
import { Slide, Stack } from "@revealjs/react";

export default function GameSection() {
  return (
    <>
        {/* ── 🎮 BLOQUE FINAL: KERNEL CHALLENGE ── */}

        {/* Slide 1 — Introducción */}
        <Slide data-background="var(--bg-dark)">
          <GameIntro />
        </Slide>

        {/* FASE 1 — PREGUNTAS DINÁMICAS */}
        <QuestionSlides
          id={1}
          question="YouTube sigue reproduciendo aunque el internet fluctúa..."
          answer="Buffering"
          explanation="Se almacenan temporalmente datos en RAM para compensar variaciones de velocidad de red."
          color="var(--accent-buf)"
        />

        <QuestionSlides
          id={2}
          question="Cinco usuarios imprimen al mismo tiempo una tesis."
          answer="Spooling"
          explanation="Los trabajos se guardan en cola persistente y se procesan secuencialmente."
          color="var(--accent-spool)"
        />

        <QuestionSlides
          id={3}
          question="Linux vuelve a abrir una librería ya usada hace segundos."
          answer="Caching"
          explanation="Aprovecha localidad temporal manteniendo copias rápidas en memoria."
          color="var(--accent-cache)"
        />

        <QuestionSlides
          id={4}
          question="El productor genera datos más rápido que el consumidor."
          answer="Buffering"
          explanation="Absorbe la asincronía entre velocidades de producción y consumo."
          color="var(--accent-buf)"
        />

        <QuestionSlides
          id={5}
          question="El sistema debe conservar trabajos aunque se apague."
          answer="Spooling"
          explanation="A diferencia del buffer, el spooling reside en almacenamiento no volátil."
          color="var(--accent-spool)"
        />

        <QuestionSlides
          id={6}
          question="Se quiere evitar leer repetidamente del SSD."
          answer="Caching"
          explanation="Mantiene los datos calientes en RAM. El buffer ayuda a transferir; la caché ayuda a reutilizar."
          color="var(--accent-cache)"
        />

        <QuestionSlides
          id={7}
          question="Kafka se parece más a..."
          answer="Spooling Distribuido"
          explanation="Predomina el spooling: usa disco persistente, desacopla componentes y mantiene colas duraderas."
          color="var(--accent-spool)"
          isTrap={true}
        />

        <QuestionSlides 
          id={8}
          question="Con discos NVMe ultra rápidos, ¿sigue siendo vital el Caching?"
          answer="Sí, incluso más"
          explanation="Al reducirse el cuello de botella del disco, la ineficiencia del software se vuelve más visible."
          color="var(--accent-cache)"
          isTrap={true}
        />

        <QuestionSlides 
          id={9}
          question="¿Podría un sistema moderno funcionar SOLO con Buffering, eliminando Caching y Spooling?"
          answer="Técnicamente sí, pero sería inviable"
          explanation="Sin caché el rendimiento colapsaría por redundancia, y sin spooling, el acceso a recursos exclusivos sería caótico."
          color="var(--accent-gold)"
          isTrap={true}
        />

        <QuestionSlides 
          id={10}
          question="¿Es el 'Cloud Computing' solo un Spooling gigante a escala global?"
          answer="Arquitectónicamente, tiene mucho de eso"
          explanation="El Cloud desacopla la ejecución del usuario del hardware físico, gestionando colas de trabajos y recursos como un spooler masivo."
          color="var(--accent-gold)"
          isTrap={true}
        />
    </>
  );
}
