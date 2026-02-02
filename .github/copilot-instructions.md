# Instruções para agentes de IA

## Visão geral do projeto

- App Next.js (App Router) com páginas em [src/app](src/app). A página inicial compõe seções modulares em [src/app/page.tsx](src/app/page.tsx) usando componentes em [src/components/sections](src/components/sections).
- Layout global em [src/app/layout.tsx](src/app/layout.tsx) injeta Header/Footer, ThemeProvider e JSON‑LD (SEO estruturado) do diretório [src/components/seo](src/components/seo).
- SEO é tratado via `metadata` por página (ex.: [src/app/contato/page.tsx](src/app/contato/page.tsx), [src/app/sobre/page.tsx](src/app/sobre/page.tsx)) e scripts JSON‑LD em [src/components/seo/json-ld.tsx](src/components/seo/json-ld.tsx).

## Padrões e convenções do código

- Componentes interativos usam `"use client"` e hooks React (ex.: [src/components/sections/hero-section.tsx](src/components/sections/hero-section.tsx), [src/components/layout/header.tsx](src/components/layout/header.tsx)).
- UI base fica em [src/components/ui](src/components/ui); combine classes com `cn()` de [src/lib/utils.ts](src/lib/utils.ts).
- Seções são componentes independentes (ex.: [src/components/sections/about-section.tsx](src/components/sections/about-section.tsx)) e a home apenas orquestra a ordem.

## Estado e formulários

- Estado global simples via Zustand em [src/store](src/store). Ex.: formulário de contato usa [src/store/contact-store.ts](src/store/contact-store.ts) e validação Zod em [src/lib/validations/contact.ts](src/lib/validations/contact.ts).
- O formulário em [src/components/sections/contact-form.tsx](src/components/sections/contact-form.tsx) é React Hook Form + Zod; hoje simula envio (sem API real).

## Integrações e utilitários

- Botão de WhatsApp usa helper centralizado em [src/lib/whatsapp.ts](src/lib/whatsapp.ts) e componente em [src/components/whatsapp-button.tsx](src/components/whatsapp-button.tsx).
- Imagens remotas permitidas apenas de `images.unsplash.com` em [next.config.ts](next.config.ts). Ajuste aqui se adicionar novas origens.

## Estilos e tema

- Tailwind CSS v4 com tokens de marca em [src/app/globals.css](src/app/globals.css). Tema claro/escuro via `next-themes` em [src/components/providers/theme-provider.tsx](src/components/providers/theme-provider.tsx) e toggle em [src/components/theme-toggle.tsx](src/components/theme-toggle.tsx).

## Fluxos de desenvolvimento

- Comandos principais: `npm run dev`, `npm run build`, `npm run start`, `npm run lint` (ver [package.json](package.json)).

## Boas pistas para mudanças

- Para alterar conteúdo da home, edite seções em [src/components/sections](src/components/sections) e a composição em [src/app/page.tsx](src/app/page.tsx).
- Para ajustes de SEO, atualize `metadata` por página e, se necessário, JSON‑LD em [src/components/seo/json-ld.tsx](src/components/seo/json-ld.tsx).
