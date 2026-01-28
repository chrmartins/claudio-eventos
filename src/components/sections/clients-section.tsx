"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";

export function ClientsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#1a1a1a] to-[#0C0C0C]" />

      {/* Padrão de pontos decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F8A638_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Gradiente laranja sutil nos cantos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Parceiros de Sucesso
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl uppercase mb-4">
                <span className="text-white">Nossos </span>
                <span className="text-primary">Clientes</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Grandes marcas confiam na OBC Produções para criar experiências
                memoráveis e eventos de alto impacto
              </p>
            </motion.div>
          </div>
        </div>

        {/* Clients Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Borda superior com gradiente */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="py-10 sm:py-14 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                {/* Título na área branca */}
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                  Marcas que confiam em nosso trabalho
                </p>

                <Image
                  src="/clientes.png"
                  alt="Nossos Clientes - Prime Video, Globo Filmes, JB FM, Sony Music, Froneri, 100 Anos de Globo, Canal Brasil, Senac, Festival do Rio, Virtugnl, Amazon MGM Studios, Telecine, Sesc, Foxton, BAT Brasil"
                  width={1400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Borda inferior com gradiente */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-gray-400 mb-6">
              Sua marca também pode fazer parte dessa lista
            </p>
            <a
              href={getWhatsAppUrl(
                "Olá! Vi que vocês trabalham com grandes marcas e gostaria de saber mais.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com a gente
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
