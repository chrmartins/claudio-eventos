import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Clock, Heart, Lightbulb, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nós - Conheça Nossa História e Valores",
  description:
    "Conheça a OBC Produções: +20 anos de experiência em eventos corporativos no Rio de Janeiro. Nossa história, valores, missão e a equipe por trás de cada evento de sucesso.",
  keywords: [
    "sobre obc produções",
    "história produtora eventos",
    "equipe eventos corporativos",
    "produtora eventos rio de janeiro",
    "empresa de eventos experiência",
  ],
  alternates: {
    canonical: "https://obcproducoes.com.br/sobre",
  },
  openGraph: {
    title: "Sobre a OBC Produções - Nossa História e Valores",
    description:
      "Há mais de 20 anos transformando ideias em experiências inesquecíveis. Conheça a equipe e valores da OBC Produções.",
    url: "https://obcproducoes.com.br/sobre",
    type: "website",
  },
};

const values = [
  {
    icon: Heart,
    title: "Paixão",
    description: "Amamos o que fazemos e isso se reflete em cada detalhe.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos lado a lado com nossos clientes.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos a perfeição em tudo que entregamos.",
  },
  {
    icon: Clock,
    title: "Comprometimento",
    description: "Cumprimos prazos e superamos expectativas.",
  },
  {
    icon: Target,
    title: "Foco no Cliente",
    description: "Suas necessidades são nossa prioridade.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Sempre buscando as melhores tendências do mercado.",
  },
];

export default function SobrePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: "https://obcproducoes.com.br" },
          { name: "Sobre Nós", url: "https://obcproducoes.com.br/sobre" },
        ]}
      />
      <div className="py-16 sm:py-24">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Nossa História
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Sobre a <span className="text-primary">OBC Produções</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Há mais de 20 anos transformando ideias em experiências
              inesquecíveis. Conheça nossa história, valores e a equipe por trás
              de cada evento de sucesso.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
                alt="Equipe OBC Produções em ação"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Jornada</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A OBC Produções nasceu há mais de 20 anos de uma paixão por
                  criar experiências memoráveis. O que começou como um pequeno
                  escritório se transformou em um hub criativo referencia no
                  mercado de eventos corporativos.
                </p>
                <p>
                  Ao longo dos anos, tivemos o privilégio de participar de mais
                  de 500 eventos, cada um único e especial. De convenções a
                  grandes lançamentos, cada projeto nos ensinou algo novo e nos
                  ajudou a evoluir.
                </p>
                <p>
                  Hoje, contamos com uma equipe de profissionais experientes e
                  apaixonados, prontos para transformar suas ideias em
                  realidade. Trabalhamos com grandes marcas como Amazon, Globo e
                  Telecine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Values */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Nossos Valores
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              O Que Nos Move
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nossos valores são a base de tudo que fazemos. Eles guiam nossas
              decisões e definem como tratamos cada projeto e cliente.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Team */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Nossa Equipe
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Conheça Quem Faz Acontecer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Por trás de cada evento de sucesso existe uma equipe dedicada e
              apaixonada pelo que faz.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/foto-equipe.png"
              alt="Equipe OBC Produções"
              width={1400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">200+</p>
                <p className="text-primary-foreground/80">Eventos Realizados</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">20+</p>
                <p className="text-primary-foreground/80">
                  Anos de Experiência
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-primary-foreground/80">Parceiros</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
