"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imagePosition?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Globo - Juri PPA",
    category: "Corporativo",
    description:
      "Evento de votação com salas de reunião, auditório, happy hour e coquetel.",
    image: "/portfolio/globo-juri.png",
  },
  {
    id: 2,
    title: "Salão do Turismo 2024",
    category: "Feiras",
    description:
      "Realização da edição de 2024 do Salão do Turismo ocupou os pavilhões 03, 04 e o anfiteatro do Riocentro.",
    image: "/portfolio/salao-turismo.png",
  },
  {
    id: 3,
    title: "Show de Lançamento Ripiei",
    category: "Show",
    description:
      "Realização de show no Mirante do Pedrão com estrutura completa de cenografia, sonorização, iluminação e buffet.",
    image: "/portfolio/ripiei.png",
    imagePosition: "object-bottom",
  },
  {
    id: 4,
    title: "Virtu - Stand Rio Oil Gas",
    category: "Stand",
    description:
      "Realização de stand vitrine com exposição do caminhão da empresa que é movido a gás, uma inovação no setor.",
    image: "/portfolio/virtu.png",
  },
  {
    id: 5,
    title: "Pré-Estreia Amazon",
    category: "Lançamento",
    description:
      "Evento de première de cinema com tapete vermelho, cenografia, cobertura fotográfica, e presenças vips.",
    image: "/portfolio/pre-estreia-amazon.png",
  },
  {
    id: 6,
    title: "Festa 25 Anos Canal Brasil e Globo Filmes",
    category: "Festa",
    description:
      "Celebração do aniversário das duas empresas realizado no Circo Voador para 1500 convidados.",
    image: "/portfolio/globo-filmes.png",
  },
];

const categories = [
  "Todos",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase mb-4">
            <span className="text-foreground">Nossos </span>
            <span className="text-primary">Eventos</span>
            <span className="text-foreground"> em Destaque</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Confira alguns dos eventos que tivemos o prazer de realizar. Cada
            projeto é único e reflete a excelência da OBC Produções.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "font-bold"
                  : "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${item.imagePosition || "object-center"}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-white text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent className="max-w-3xl bg-background">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">
                {selectedItem?.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {selectedItem?.description}
              </DialogDescription>
            </DialogHeader>
            {selectedItem && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border-4 border-primary">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex justify-between items-center pt-2">
              <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full">
                {selectedItem?.category}
              </span>
              <Button onClick={() => setSelectedItem(null)}>Fechar</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
