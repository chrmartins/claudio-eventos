import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Planejamento estratégico completo",
  "Produção executiva de alta qualidade",
  "Gestão de fornecedores e logística",
  "Criação de experiências memoráveis",
  "Cobertura completa do evento",
  "Atendimento personalizado",
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3">
              <svg
                viewBox="0 0 60 70"
                className="h-14 w-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C10 12 16 6 24 6H36C44 6 50 12 50 20V55C50 60 46 64 41 64H19C14 64 10 60 10 55V20Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M15 22C15 16 19 12 25 12H35C41 12 45 16 45 22V52C45 56 42 59 38 59H22C18 59 15 56 15 52V22Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                />
                <rect
                  x="22"
                  y="6"
                  width="16"
                  height="12"
                  rx="2"
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                />
                <path
                  d="M26 28V38M30 30V40M34 26V36"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M24 48V52M28 46V54M32 48V52M36 47V51"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-3xl font-black">
                <span className="text-foreground">OBC</span>
                <span className="text-primary block text-base font-semibold tracking-widest">
                  PRODUÇÕES
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight mb-6">
              <span className="text-foreground">Mais que uma produtora, </span>
              <span className="text-primary">somos o hub criativo</span>
              <span className="text-foreground"> que </span>
              <span className="text-primary">transforma ideias</span>
              <span className="text-foreground"> em </span>
              <span className="text-primary">experiências.</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base sm:text-lg">
                Com mais de{" "}
                <strong className="text-primary">20 anos de experiência</strong>{" "}
                e uma trajetória consolidada no mercado de eventos, a OBC
                Produções combina criatividade, planejamento estratégico e
                execução impecável.
              </p>
              <p className="text-base sm:text-lg">
                Trabalhamos ao lado de{" "}
                <strong className="text-foreground">grandes marcas</strong> como
                Amazon, Globo e Telecine, entregando eventos que não só
                impressionam, mas ficam marcados na memória de todos os
                participantes.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button asChild size="lg" className="font-bold">
                <Link href="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="bg-secondary rounded-2xl p-8 sm:p-10">
            <h3 className="text-xl font-bold text-secondary-foreground mb-6">
              O que fazemos por você:
            </h3>
            <ul className="space-y-4">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 text-secondary-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Bottom CTA */}
            <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
              <p className="text-secondary-foreground/70 mb-4">
                Não somos uma agência, nem apenas uma produtora. Somos o{" "}
                <strong className="text-secondary-foreground">parceiro</strong>{" "}
                que faz o que é preciso para que seu evento seja um{" "}
                <strong className="text-primary">sucesso absoluto</strong>.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de ser parceiro da OBC Produções.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Seja Nosso Parceiro!
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
