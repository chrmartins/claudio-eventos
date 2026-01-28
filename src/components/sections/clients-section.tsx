"use client";

import Image from "next/image";

export function ClientsSection() {
  return (
    <section>
      {/* Header com fundo preto */}
      <div className="py-12 sm:py-16 bg-[#0C0C0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl uppercase">
              <span className="text-[#FFFFFF]">Nossos </span>
              <span className="text-[#F8A638]">Clientes</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Clients Banner com fundo branco */}
      <div className="py-6 sm:py-8 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Image
              src="/clientes.png"
              alt="Nossos Clientes - Prime Video, Globo Filmes, JB FM, Sony Music, Froneri, 100 Anos de Globo, Canal Brasil, Senac, Festival do Rio, Virtugnl, Amazon MGM Studios, Telecine, Sesc, Foxton, BAT Brasil"
              width={1400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
