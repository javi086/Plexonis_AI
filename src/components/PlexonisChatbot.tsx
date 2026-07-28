"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function PlexonisChatbot() {
  useEffect(() => {
    // 0. Define Vue feature flags globally on the window object to silence the ESM bundler warnings
    if (typeof window !== "undefined") {
      (window as any).__VUE_OPTIONS_API__ = true;
      (window as any).__VUE_PROD_DEVTOOLS__ = false;
      (window as any).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }

    // 1. Intercept fetch calls to mock the chatbot for testing when webhook is a placeholder
    const originalFetch = window.fetch;
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || "";
    const isPlaceholder = webhookUrl.includes("your-n8n-instance") || webhookUrl.includes("YOUR-CHAT-ID") || !webhookUrl;

    window.fetch = async (input, init) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.href : (input as Request).url;
      
      if (isPlaceholder && url.includes(webhookUrl)) {
        try {
          let bodyData: Record<string, any> = {};
          if (init?.body) {
            if (typeof init.body === "string") {
              bodyData = JSON.parse(init.body);
            } else if (init.body instanceof FormData) {
              bodyData = Object.fromEntries(init.body.entries());
            }
          }

          if (bodyData.action === "loadPreviousSession") {
            return new Response(JSON.stringify({ data: [] }), {
              status: 200,
              headers: { "Content-Type": "application/json" }
            });
          }

          if (bodyData.action === "sendMessage") {
            const userMsg = bodyData.message || bodyData.chatInput || "hello";
            const responseText = `Hello! This is a simulated response from the Plexonis Assistant. You said: "${userMsg}". To link this chatbot to your live workflows, please update NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL in your .env.local file.`;
            return new Response(JSON.stringify({ text: responseText }), {
              status: 200,
              headers: { "Content-Type": "application/json" }
            });
          }
        } catch (e) {
          console.error("n8n Chatbot: mock fetch intercept error:", e);
        }

        return new Response(JSON.stringify({}), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }

      return originalFetch(input, init);
    };

    // 2. Handle actual network errors (downtime, CORS, etc.) gracefully
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason instanceof Error &&
        (event.reason.message.includes("Failed to fetch") || event.reason.message.includes("fetch"))
      ) {
        console.warn("n8n Chatbot: network error handled gracefully:", event.reason.message);
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    // 3. Initialize n8n chat
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: webhookUrl || "https://localhost/placeholder-webhook",
        mode: "window",
        showWelcomeScreen: false,
        initialMessages: [
          "Hi there! 👋 Welcome to Plexonis AI.",
          "How can I help you automate your business workflows today?"
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
    });

    return () => {
      window.fetch = originalFetch;
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
}
