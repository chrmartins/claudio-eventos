"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  videoId?: string;
}

export function HeroSection({ videoId = "dQw4w9WgXcQ" }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Transformamos seus
              <span className="text-primary block">sonhos em realidade</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-xl">
              Somos especialistas em criar eventos memoráveis. De casamentos
              íntimos a grandes celebrações corporativas, cuidamos de cada
              detalhe para você.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/sobre">Conheça Nosso Trabalho</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t pt-8">
              <div>
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">
                  Eventos Realizados
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  10+
                </p>
                <p className="text-sm text-muted-foreground">
                  Anos de Experiência
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  98%
                </p>
                <p className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl lg:aspect-square xl:aspect-video">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none rounded-xl" />
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Vídeo institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
