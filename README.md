# Primos Burguer — Site institucional

Hamburgueria artesanal premium em Feira de Santana. Construído com a stack pedida:
**Next.js (App Router) · Tailwind CSS v4 · TypeScript · GSAP · Framer Motion · Lenis · next/image**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

Para build de produção:

```bash
npm run build
npm start
```

> Requer Node.js 18.18+ (recomendado 20+).

## Estrutura

```
app/
  layout.tsx        # fontes (Playfair + Inter), cursor e smooth scroll globais
  page.tsx          # monta todas as seções
  globals.css       # Tailwind v4 + tokens (@theme) + estilos base
components/
  SmoothScroll.tsx  # Lenis + sincronização com GSAP ScrollTrigger
  CustomCursor.tsx  # cursor customizado (Framer Motion)
  Navbar.tsx        # navbar glassmorphism sticky
  Hero.tsx          # hero + card de vídeo flutuante (timeline GSAP)
  FeaturedDishes.tsx# grid de 4 + abre o modal
  MenuModal.tsx     # cardápio full-screen, trava scroll, linhas pontilhadas
  About.tsx         # sobre com imagem circular e assinatura
  TastingMenu.tsx   # menu degustação 7 tempos, reveal escalonado
  Immersive.tsx     # seção parallax fixo
  Testimonials.tsx  # carrossel interativo
  Reservations.tsx  # formulário -> WhatsApp
  Gallery.tsx       # masonry
  Footer.tsx / WhatsAppButton.tsx
lib/
  config.ts         # WhatsApp, endereço, telefone, vídeo do hero
  Reveal (component) # wrapper de reveal com GSAP ScrollTrigger
```

## O que trocar antes de publicar

Tudo centralizado em **`lib/config.ts`**:

- `whatsapp` — número no formato `55 + DDD + número` (só dígitos)
- `phoneDisplay`, `email`, `address`, `hours`
- `heroVideo` — troque pela URL do **seu** vídeo de hambúrguer (o atual é um placeholder)

As fotos usam o Unsplash (já configurado em `next.config.ts`). Para usar imagens próprias,
coloque-as em `/public` e troque os `src`, ou adicione o domínio em `remotePatterns`.

## Paleta

Base preta `#070707` (literal do brief original) com acentos em **vermelho** (`#C6382E`) e
**bege** (`#E7D4B3`). O dourado (`#D9A35F`) aparece só no gradiente da palavra em destaque do hero,
como o brief pede. Os tokens ficam em `app/globals.css` no bloco `@theme`.

## Acessibilidade / performance

- `prefers-reduced-motion` respeitado (desliga reveals, float e parallax)
- Cursor customizado só em dispositivos com ponteiro fino; toque mantém o cursor nativo
- `next/image` para otimização automática das fotos
