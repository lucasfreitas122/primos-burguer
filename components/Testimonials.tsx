"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const items = [
  {
    quote:
      "Melhor hambúrguer que já comi em Feira. O pão na chapa faz toda a diferença e o atendimento é impecável.",
    name: "Camila Andrade",
    role: "Cliente desde 2021",
  },
  {
    quote:
      "O menu degustação foi uma experiência à parte. Sete tempos e cada um melhor que o outro. Vale cada centavo.",
    name: "Diego Ramos",
    role: "Crítico gastronômico local",
  },
  {
    quote:
      "Ambiente acolhedor, sabor de casa com cara de restaurante. Virou parada obrigatória da família toda semana.",
    name: "Patrícia Nunes",
    role: "Frequentadora",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (n: number) => setI((n + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="depoimentos" className="mx-auto max-w-[1280px] px-5 py-24 text-center sm:px-10 sm:py-28">
      <Reveal className="mb-14">
        <div className="mb-3.5 flex items-center justify-center gap-2.5 text-[13px] tracking-wide text-gold">
          <span className="h-px w-6 bg-gold" /> Quem prova, volta
        </div>
        <h2 className="font-serif text-[clamp(30px,4.2vw,48px)]">O que dizem sobre a Primos.</h2>
      </Reveal>

      <Reveal>
        <div
          className="relative mx-auto min-h-[230px] max-w-[760px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-700 ${
                idx === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <div className="mb-5 tracking-[4px] text-red">★★★★★</div>
              <blockquote className="mb-6 font-serif text-[clamp(21px,3vw,30px)] italic leading-[1.4] text-cream">
                “{t.quote}”
              </blockquote>
              <div>
                <b className="text-base font-medium">{t.name}</b>
                <small className="mt-0.5 block text-[13.5px] text-muted">{t.role}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-[22px]">
          <button
            onClick={() => go(i - 1)}
            data-hover
            aria-label="Anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-lg transition-colors hover:border-red hover:bg-red"
          >
            ←
          </button>
          <div className="flex gap-2.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Depoimento ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-[22px] bg-gold" : "w-2 bg-white/10"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(i + 1)}
            data-hover
            aria-label="Próximo"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-lg transition-colors hover:border-red hover:bg-red"
          >
            →
          </button>
        </div>
      </Reveal>
    </section>
  );
}
