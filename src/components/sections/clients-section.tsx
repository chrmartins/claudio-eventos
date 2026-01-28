"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

// Logos dos clientes - imagens na pasta public/logos
const clients = [
  { name: "Globo Filmes", logo: "/logos/globo-filmes.svg" },
  { name: "Prime Video", logo: "/logos/prime-video.png" },
  { name: "Amazon Studios", logo: "/logos/amazon-studios.svg" },
  { name: "Foxton", logo: "/logos/foxton.svg" },
  { name: "Canal Brasil", logo: "/logos/canal-brasil.svg" },
  { name: "Telecine", logo: "/logos/telecine.svg" },
];

export function ClientsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#0C0C0C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl uppercase">
            <span className="text-[#FFFFFF]">Nossos </span>
            <span className="text-[#F8A638]">Clientes</span>
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto">
          {clients.map((client) => (
            <Card
              key={client.name}
              className="bg-[#FFFFFF] rounded-lg p-4 flex items-center justify-center aspect-square hover:shadow-xl transition-all hover:scale-105 border-0"
            >
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="object-contain max-h-[60px] w-auto"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
