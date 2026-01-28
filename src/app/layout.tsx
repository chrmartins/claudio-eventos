import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claudio Eventos - Transformando Sonhos em Eventos Inesquecíveis",
    template: "%s | Claudio Eventos",
  },
  description:
    "Somos especialistas em criar eventos memoráveis. Casamentos, corporativos, aniversários e muito mais. Solicite seu orçamento!",
  keywords: [
    "eventos",
    "casamento",
    "festa",
    "corporativo",
    "aniversário",
    "debutante",
    "formatura",
    "São Paulo",
  ],
  authors: [{ name: "Claudio Eventos" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Claudio Eventos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
