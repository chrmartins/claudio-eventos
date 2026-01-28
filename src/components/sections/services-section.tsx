import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Cake,
  Calendar,
  GraduationCap,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: PartyPopper,
    title: "Casamentos",
    description:
      "Realize o casamento dos seus sonhos com uma organização impecável.",
  },
  {
    icon: Building2,
    title: "Eventos Corporativos",
    description:
      "Conferências, lançamentos e celebrações empresariais de alto nível.",
  },
  {
    icon: Cake,
    title: "Aniversários",
    description:
      "Festas de aniversário para todas as idades, do infantil ao adulto.",
  },
  {
    icon: GraduationCap,
    title: "Formaturas",
    description: "Bailes e cerimônias de formatura memoráveis.",
  },
  {
    icon: Sparkles,
    title: "Debutantes",
    description: "A festa de 15 anos perfeita para marcar essa data especial.",
  },
  {
    icon: Calendar,
    title: "Eventos Especiais",
    description: "Bodas, batizados, chás e outras celebrações únicas.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            O Que Fazemos de Melhor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para tornar qualquer evento
            em uma experiência inesquecível.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
