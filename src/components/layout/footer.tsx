"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

const services = [
  "Eventos Corporativos",
  "Convenções",
  "Stands e Feiras",
  "Ativações de Marca",
  "Lançamentos",
];

export function Footer() {
  return (
    <footer className="bg-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-light.png"
                alt="OBC Produções"
                width={150}
                height={50}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/logo-dark.png"
                alt="OBC Produções"
                width={150}
                height={50}
                className="h-12 w-auto hidden dark:block"
              />
            </Link>
            <p className="mt-4 text-sm text-foreground/70 max-w-xs">
              Mais que uma produtora, somos o hub criativo que transforma ideias
              em experiências memoráveis.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5521999999999"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  (21) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@obcproducoes.com.br"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  contato@obcproducoes.com.br
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-foreground/70">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>
                    Rio de Janeiro, RJ
                    <br />
                    Brasil
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/50 text-center sm:text-left">
              © {new Date().getFullYear()} OBC Produções LTDA. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-foreground/50">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
