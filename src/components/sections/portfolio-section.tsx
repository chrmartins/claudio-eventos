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
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Convenção Amazon",
    category: "Corporativo",
    description:
      "Grande convenção corporativa com mais de 500 participantes e experiências imersivas.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Festival Globo",
    category: "Festival",
    description:
      "Produção completa de festival com múltiplos palcos e atrações.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Lançamento Telecine",
    category: "Lançamento",
    description:
      "Evento de lançamento com cobertura completa e experiência cinematográfica.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Stand Feira ABAV",
    category: "Stands",
    description:
      "Criação e montagem de stand de destaque para feira de turismo.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Ativação de Marca",
    category: "Ativação",
    description:
      "Ativação de marca inovadora que conquistou o público e gerou engajamento.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Evento Corporativo Tech",
    category: "Corporativo",
    description:
      "Conferência de tecnologia de alto padrão com networking e palestras.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
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
    <section id="portfolio" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase mb-4">
            <span className="text-secondary-foreground">Nossos </span>
            <span className="text-primary">Eventos</span>
            <span className="text-secondary-foreground"> em Destaque</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
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
                  : "border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
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
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
