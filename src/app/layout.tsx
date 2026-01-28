import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/components/seo/json-ld";
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
  metadataBase: new URL("https://obcproducoes.com.br"),
  title: {
    default:
      "OBC Produções | Eventos Corporativos no Rio de Janeiro - Hub Criativo",
    template: "%s | OBC Produções - Eventos Corporativos RJ",
  },
  description:
    "OBC Produções: Hub criativo com +20 anos de experiência em eventos corporativos no Rio de Janeiro. Convenções, stands, ativações de marca, lançamentos e produção completa. Solicite orçamento!",
  keywords: [
    "eventos corporativos rio de janeiro",
    "produção de eventos rj",
    "empresa de eventos corporativos",
    "convenções empresariais",
    "stands para feiras",
    "ativações de marca",
    "lançamentos de produtos",
    "eventos empresariais rio de janeiro",
    "produtora de eventos rj",
    "organização de eventos corporativos",
    "hub criativo eventos",
    "OBC Produções",
    "eventos prime video",
    "eventos globo filmes",
    "eventos telecine",
  ],
  authors: [{ name: "OBC Produções" }],
  creator: "OBC Produções",
  publisher: "OBC Produções",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://obcproducoes.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://obcproducoes.com.br",
    siteName: "OBC Produções",
    title: "OBC Produções | Eventos Corporativos no Rio de Janeiro",
    description:
      "Hub criativo com +20 anos de experiência em eventos corporativos. Convenções, stands, ativações de marca e muito mais. Globo Filmes, Prime Video, Telecine confiam em nós!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OBC Produções - Eventos Corporativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBC Produções | Eventos Corporativos no Rio de Janeiro",
    description:
      "Hub criativo com +20 anos de experiência em eventos corporativos. Solicite seu orçamento!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione seus códigos de verificação quando tiver
    // google: "seu-codigo-google",
    // yandex: "seu-codigo-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
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
