import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Paixão pelo Detalhe",
    description:
      "Cada evento é único e merece atenção especial em todos os aspectos.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais experientes dedicados a tornar seu evento perfeito.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Trabalhamos apenas com os melhores fornecedores e parceiros.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Comprometimento com prazos e cronogramas rigorosos.",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Sobre Nós
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              Criando Momentos
              <span className="text-primary block">Inesquecíveis</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Há mais de 10 anos no mercado de eventos, nossa missão é
                transformar sonhos em realidade. Acreditamos que cada celebração
                merece ser única e especial.
              </p>
              <p>
                Nossa equipe de profissionais apaixonados trabalha
                incansavelmente para garantir que cada detalhe do seu evento
                seja perfeito. Desde o planejamento inicial até a execução
                final, estamos ao seu lado em cada passo.
              </p>
              <p>
                Seja um casamento intimista, uma grande festa corporativa ou uma
                celebração de aniversário, tratamos cada projeto com o mesmo
                nível de dedicação e profissionalismo.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
