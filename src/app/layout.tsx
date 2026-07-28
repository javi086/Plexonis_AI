import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import PlexonisChatbot from "@/components/PlexonisChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plexonis AI | Enterprise AI Agents & Intelligent Automations",
  description: "Plexonis AI designs, builds, and integrates custom AI agents, workflow automations, and strategic consulting to transform modern business operations.",
  keywords: ["AI Agency", "Custom AI Agents", "AI Automation", "AI Consulting", "Workflow Automation", "Intelligent Systems"],
  authors: [{ name: "Plexonis AI" }],
  openGraph: {
    title: "Plexonis AI | Enterprise AI Agents & Intelligent Automations",
    description: "Transform your business operations with high-performance custom AI agents and workflow automation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__VUE_OPTIONS_API__ = true;
              window.__VUE_PROD_DEVTOOLS__ = false;
              window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030303] text-gray-100 font-sans">
        <LanguageProvider>
          {children}
          <PlexonisChatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}

