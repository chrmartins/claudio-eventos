// Configuração centralizada do WhatsApp
export const WHATSAPP_CONFIG = {
  phoneNumber: "5521981877459",
  defaultMessage: "Olá! Gostaria de saber mais sobre os serviços de eventos.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}
