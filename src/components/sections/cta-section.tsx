"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight text-primary-foreground">
            Pronto para criar
            <br />
            <span className="relative inline-block">
              algo incrível?
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4C50 0 150 8 200 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary-foreground/30"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            A OBC Produções está pronta para transformar suas ideias em
            experiências memoráveis. Vamos conversar?
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold text-lg px-8 py-6 group"
            >
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              { number: "20+", label: "Anos de Experiência" },
              { number: "200+", label: "Eventos Realizados" },
              { number: "50+", label: "Grandes Marcas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
