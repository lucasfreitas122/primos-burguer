"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import MenuModal from "./MenuModal";

const dishes = [
  {
    name: "Primo Duplo",
    price: "R$ 39",
    desc: "Dois blends de 180g, cheddar duplo, cebola caramelizada e o molho secreto da casa.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Clássico Feirense",
    price: "R$ 32",
    desc: "Blend 180g, queijo prato, alface, tomate e maionese artesanal no pão brioche.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Smash do Chef",
    price: "R$ 36",
    desc: "Dois smash burgers finos e crocantes, cheddar derretido e picles da casa.",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Bacon Supremo",
    price: "R$ 42",
    desc: "Blend 180g, bacon artesanal em fatias, cheddar, cebola crispy e barbecue defumado.",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop",
  },
];

export default function FeaturedDishes() {
  const [open, setOpen] = useState(false);

  return (
    <section id="cardapio" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 sm:py-28">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5 text-[13px] tracking-wide text-gold">
            <span className="h-px w-6 bg-gold" /> Os favoritos
          </div>
          <h2 className="font-serif text-[clamp(30px,4.2vw,48px)]">Hambúrgueres que viram tradição.</h2>
        </div>
        <button
          onClick={() => setOpen(true)}
          data-hover
          className="inline-flex items-center rounded-xl border border-gold px-5 py-3 text-sm font-medium text-gold shadow-[0_0_30px_rgba(217,163,95,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-[#1a1208]"
        >
          Ver Cardápio Completo
        </button>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dishes.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.08}>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(198,56,46,0.14)]">
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={d.img}
                  alt={d.name}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.07]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2.5">
                  <h3 className="font-serif text-xl">{d.name}</h3>
                  <span className="whitespace-nowrap font-serif text-[19px] text-gold">{d.price}</span>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{d.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <MenuModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
