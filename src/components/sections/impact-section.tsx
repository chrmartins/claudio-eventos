"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ImpactSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Big Text */}
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-none">
              <span className="text-foreground block">Tenha</span>
              <span className="text-primary block">Impacto</span>
              <span className="text-foreground block">com</span>
              <span className="text-primary block">Eventos</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-md">
              Descubra como nossos serviços resolvem suas maiores dores:{" "}
              <strong className="text-foreground">falta de tempo</strong>,{" "}
              <strong className="text-foreground">orçamentos apertados</strong>,{" "}
              <strong className="text-foreground">demandas complexas</strong> e
              a necessidade de{" "}
              <strong className="text-foreground">
                resultados que impressionem
              </strong>
              .
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="font-bold uppercase tracking-wider"
              >
                <Link href="/contato">Fale Conosco!</Link>
              </Button>
            </div>
          </div>

          {/* Right - Benefits Cards */}
          <div className="space-y-4">
            {[
              {
                number: 1,
                title: "Planejamento Completo",
                description:
                  "Sem tempo para planejar seu evento corporativo? Nós cuidamos de absolutamente tudo.",
              },
              {
                number: 2,
                title: "Custos Otimizados",
                description:
                  "Produção de alto impacto, com custos otimizados que realmente fazem sentido.",
              },
              {
                number: 3,
                title: "20 Anos de Mercado",
                description:
                  "Com mais de 20 anos no mercado, não improvisamos nem deixamos falhas.",
              },
              {
                number: 4,
                title: "Soluções Completas",
                description:
                  "Precisa de stands, convenções, ativações e muito mais? Resolvemos cada detalhe.",
              },
              {
                number: 5,
                title: "Sucesso Garantido",
                description:
                  "Seu evento será lembrado por todos! Garantimos que seja um sucesso.",
              },
            ].map((item) => (
              <div key={item.number} className="flex items-stretch gap-3">
                {/* Number */}
                <div className="shrink-0 w-14 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-black text-primary-foreground">
                    {item.number}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 bg-primary rounded-lg p-4 flex items-center">
                  <div>
                    <p className="text-primary-foreground text-sm sm:text-base">
                      <strong>{item.title}:</strong> {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="font-black text-foreground uppercase">
              Sem desculpas,
            </span>{" "}
            <span className="font-black text-primary uppercase">
              nós fazemos acontecer.
            </span>
          </p>
          <p className="mt-4 text-muted-foreground">
            Chega de complicação para eventos corporativos. A OBC Produções é a
            parceira que resolve, entrega e impressiona.
          </p>
        </div>
      </div>
    </section>
  );
}
