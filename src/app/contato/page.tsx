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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
