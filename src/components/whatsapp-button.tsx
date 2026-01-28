"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "5521981877459",
  message = "Olá! Gostaria de saber mais sobre os serviços de eventos.",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform hover:scale-110 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
        <span className="sr-only">Fale conosco no WhatsApp</span>
      </Button>
    </a>
  );
}
