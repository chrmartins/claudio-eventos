"use client";

import { Badge } from "@/components/ui/badge";
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
    title: "Casamento Maria & João",
    category: "Casamento",
    description:
      "Um casamento dos sonhos em um jardim encantado com mais de 200 convidados.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Conferência Tech 2025",
    category: "Corporativo",
    description:
      "Evento corporativo de tecnologia para mais de 1000 participantes.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Festa de 15 Anos",
    category: "Debutante",
    description: "Uma noite mágica para celebrar os 15 anos da Ana.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Lançamento de Produto",
    category: "Corporativo",
    description:
      "Evento de lançamento com cobertura completa e experiência imersiva.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Bodas de Ouro",
    category: "Casamento",
    description:
      "Celebração especial de 50 anos de casados em um salão clássico.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Festival de Verão",
    category: "Festival",
    description: "Festival ao ar livre com múltiplos palcos e atrações.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
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
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Portfólio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Nossos Eventos em Destaque
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Confira alguns dos eventos que tivemos o prazer de realizar. Cada
            projeto é único e reflete a personalidade de nossos clientes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
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
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold">{item.title}</h3>
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
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedItem?.title}</DialogTitle>
              <DialogDescription>{selectedItem?.description}</DialogDescription>
            </DialogHeader>
            {selectedItem && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex justify-between items-center">
              <Badge>{selectedItem?.category}</Badge>
              <Button variant="outline" onClick={() => setSelectedItem(null)}>
                Fechar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
