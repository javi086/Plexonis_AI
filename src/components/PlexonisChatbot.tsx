"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

// Default fallback URL for Staging/Local if the ENV variable is not injected during build
const DEFAULT_WEBHOOK_URL =
  "https://n8n-n8n.u7ftoi.easypanel.host/webhook/3bbf4465-e049-43af-bff7-ee3c9ebf5ac3/chat";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

export default function PlexonisChatbot() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__VUE_OPTIONS_API__ = true;
      (window as any).__VUE_PROD_DEVTOOLS__ = false;
      (window as any).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }

    if (!WEBHOOK_URL) {
      console.error("PlexonisChatbot: No webhook URL configured.");
      return;
    }

    // Detect browser language (Spanish vs. English default)
    const isSpanish =
      typeof navigator !== "undefined" &&
      navigator.language.toLowerCase().startsWith("es");

    const initialMessages = isSpanish
      ? [
          "¡Hola! 👋 Te damos la bienvenida a Plexonis AI.",
          "¿En qué podemos ayudarte hoy?"
        ]
      : [
          "Hi there! 👋 Welcome to Plexonis AI.",
          "How can we help you today?"
        ];

    import("@n8n/chat")
      .then(({ createChat }) => { 
        createChat({
          webhookUrl: WEBHOOK_URL,
          mode: "window",
          showWelcomeScreen: false,
          initialMessages,
          i18n: {
            en: {
              title: isSpanish ? "Asistente Plexonis" : "Plexonis Assistant",
              subtitle: isSpanish
                ? "Automatización y Sistemas Empresariales"
                : "Enterprise Workflow & Speed-to-Lead Support",
              footer: isSpanish
                ? "Desarrollado por Plexonis AI"
                : "Powered by Plexonis AI",
              getStarted: isSpanish ? "Nueva Conversación" : "New Conversation",
              inputPlaceholder: isSpanish
                ? "Pregunta sobre servicios, precios o tiempos de entrega..."
                : "Ask about our services, pricing, or setup time...",
              closeButtonTooltip: isSpanish ? "Cerrar Chat" : "Close Chat"
            }
          }
        });
      })
      .catch((err) => {
        console.error("n8n Chatbot failed to load:", err);
      });
  }, []);

  return null;
}