"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground block">Transformamos</span>
              <span className="text-primary block">Ideias</span>
              <span className="text-foreground block">
                em <span className="text-primary">Experiências</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`text-base sm:text-lg text-foreground/80 max-w-xl mb-10 space-y-4 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p>Não somos uma agência, tão pouco uma produtora.</p>
              <p>
                A{" "}
                <span className="text-primary font-semibold">
                  OBC Produções
                </span>{" "}
                é um hub criativo com mais de 20 anos de experiência no segmento
                de eventos corporativos.
              </p>
              <p>
                A nossa missão é criar um amplo espectro de experiências e
                fornecer serviços criativos para todo tipo de cliente.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            ></div>
          </div>

          {/* YouTube Video */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-3xl blur-2xl opacity-60" />

            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />

            {/* Video container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm ring-1 ring-white/10 shadow-2xl shadow-primary/20">
              <iframe
                src="https://www.youtube.com/embed/TRJRKlhHVUQ?autoplay=1&mute=1&loop=1&playlist=TRJRKlhHVUQ"
                title="OBC Produções - Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
