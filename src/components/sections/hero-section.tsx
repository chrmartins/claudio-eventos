"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0C0C0C] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#F8A638]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F8A638]/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">

            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[#FFFFFF] block">Transformamos</span>
              <span className="text-[#F8A638] block">Ideias</span>
              <span className="text-[#FFFFFF] block">
                em <span className="text-[#F8A638]">Experiências</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-[#FFFFFF]/70 max-w-xl mb-10 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Há mais de 20 anos criando eventos corporativos que impressionam,
              engajam e geram resultados. Convenções, lançamentos, ativações e
              muito mais.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
            </div>
          </div>

          {/* YouTube Video */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#F8A638]/30 shadow-2xl shadow-[#F8A638]/10">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="OBC Produções - Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#F8A638] to-transparent" />
        <span className="text-xs text-[#FFFFFF]/40 uppercase tracking-widest rotate-90 origin-center translate-y-8">
          Scroll
        </span>
      </div>
    </section>
  );
}
