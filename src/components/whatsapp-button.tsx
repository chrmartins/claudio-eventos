"use client";

import { getWhatsAppUrl, WHATSAPP_CONFIG } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({
  message = WHATSAPP_CONFIG.defaultMessage,
}: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppUrl(message);

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
