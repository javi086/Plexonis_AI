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

    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: WEBHOOK_URL,
        mode: "window",
        showWelcomeScreen: false,
        initialMessages: [
          "Hi there! 👋 Welcome to Plexonis AI.",
          "How can I help you today?"
        ],
        i18n: {
          en: {
            title: "Plexonis Assistant",
            subtitle: "Enterprise Workflow & Speed-to-Lead Support",
            footer: "Powered by Plexonis AI",
            getStarted: "New Conversation",
            inputPlaceholder: "Ask about our services, pricing, or setup time...",
            closeButtonTooltip: "Close Chat"
          }
        }
      });
    }).catch((err) => {
      console.error("n8n Chatbot failed to load:", err);
    });
  }, []);

  return null;
}
