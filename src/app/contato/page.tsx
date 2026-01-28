import { ContactForm } from "@/components/sections/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a OBC Produções. Solicite seu orçamento ou tire suas dúvidas.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(21) 99999-9999",
    description: "Segunda a Sexta, 9h às 18h",
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "contato@obcproducoes.com.br",
    description: "Resposta em até 24h",
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rio de Janeiro, RJ",
    description: "Atendemos em todo o Brasil",
  },
  {
    icon: Clock,
    title: "Horário",
    info: "Seg - Sex: 9h às 18h",
    description: "Sábados com agendamento",
  },
];

export default function ContatoPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Fale Conosco
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para transformar seu evento em realidade. Preencha o
            formulário abaixo ou entre em contato pelos nossos canais.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm font-medium">{item.info}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardContent className="p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Prefere WhatsApp?</h3>
                <p className="text-muted-foreground">
                  Resposta rápida pelo nosso WhatsApp
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de eventos."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ContactForm />
      </section>

      {/* Map Section (placeholder) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-[21/9] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Mapa será adicionado aqui
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Integração com Google Maps ou outro serviço de mapas será
                  configurada futuramente.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
