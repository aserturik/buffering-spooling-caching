import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TimerProps {
  duration: number;
  onComplete?: () => void;
}

export const GameTimer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(duration);
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // 1. Iniciar al montar
    resetTimer();

    // 2. Escuchar el evento de cambio de slide de Reveal.js
    const handleSlideChange = () => {
      resetTimer();
    };

    window.addEventListener("slideChanged", handleSlideChange);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener("slideChanged", handleSlideChange);
    };
  }, [duration]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = duration > 0 ? (timeLeft / duration) * circumference : 0;
  const isUrgent = timeLeft <= 5;

  return (
    <div style={{ position: "relative", width: "120px", height: "120px" }}>
      <svg width="120" height="120" style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={isUrgent ? "#cb7c94" : "#e0c15a"}
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ strokeDashoffset: circumference - progress }}
          style={{ strokeDasharray: circumference }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--mono), monospace",
          fontSize: "2.5rem",
          fontWeight: "900",
          color: isUrgent ? "#cb7c94" : "#f3f6f9",
          textShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        {timeLeft}
      </div>
    </div>
  );
};
