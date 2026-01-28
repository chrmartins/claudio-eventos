import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat para corpo de texto
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Bebas Neue para títulos (similar ao Geometos)
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "OBC Produções - Transformando Ideias em Experiências",
    template: "%s | OBC Produções",
  },
  description:
    "Hub criativo especializado em eventos corporativos, convenções, stands, ativações e muito mais. Mais de 20 anos de experiência.",
  keywords: [
    "eventos corporativos",
    "produção de eventos",
    "convenções",
    "stands",
    "ativações de marca",
    "lançamentos",
    "Rio de Janeiro",
  ],
  authors: [{ name: "OBC Produções" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "OBC Produções",
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
        className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased min-h-screen flex flex-col`}
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
