import { Award, Building2, Clock, DollarSign, Star } from "lucide-react";

const benefits = [
  {
    number: 1,
    icon: Clock,
    title: "Planejamento Completo",
    description:
      "Sem tempo para planejar seu evento corporativo? Nós cuidamos de absolutamente tudo.",
  },
  {
    number: 2,
    icon: DollarSign,
    title: "Custos Otimizados",
    description:
      "Produção de alto impacto, com custos otimizados que realmente fazem sentido.",
  },
  {
    number: 3,
    icon: Award,
    title: "20 Anos de Mercado",
    description:
      "Com mais de 20 anos no mercado, não improvisamos nem deixamos falhas.",
  },
  {
    number: 4,
    icon: Building2,
    title: "Soluções Completas",
    description:
      "Precisa de stands, convenções, ativações e muito mais? Resolvemos cada detalhe.",
  },
  {
    number: 5,
    icon: Star,
    title: "Sucesso Garantido",
    description:
      "Seu evento será lembrado por todos! Garantimos que seja um sucesso.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl mb-4">
            <span className="text-foreground">Sem surpresas, aqui está</span>
            <span className="text-primary block">tudo que oferecemos</span>
          </h2>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="flex items-stretch gap-4 group"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-12 sm:w-16 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-primary-foreground">
                  {benefit.number}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-primary rounded-lg p-4 sm:p-5 flex items-center gap-4">
                <div className="hidden sm:flex h-10 w-10 rounded-lg bg-primary-foreground/20 items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-foreground text-sm sm:text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/90 text-xs sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
