"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const courses = [
  { no: "Tempo 01", title: "Bolinho de Costela", desc: "Ragu de costela desfiada, empanado crocante e maionese defumada." },
  { no: "Tempo 02", title: "Mini Smash", desc: "Smash de abertura com cheddar e picles rápido da casa." },
  { no: "Tempo 03", title: "Batata Rústica Trufada", desc: "Batata na casca, azeite trufado e parmesão curado." },
  { no: "Tempo 04 · destaque", title: "Primo Duplo", desc: "Nosso ícone: dois blends 180g, cheddar duplo e molho secreto.", feature: true },
  { no: "Tempo 05", title: "Costela no Brioche", desc: "Costela assada 12h, geleia de pimenta e brioche na manteiga." },
  { no: "Tempo 06", title: "Onion Rings", desc: "Anéis de cebola crocantes com barbecue defumado da casa." },
  { no: "Tempo 07", title: "Brownie na Chapa", desc: "Brownie quente selado, sorvete de creme e caramelo salgado." },
  { no: "Reserva antecipada", title: "Sexta & Sábado", desc: "Vagas limitadas por noite.", center: true },
];

export default function TastingMenu() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".course");
      cards.forEach((c, i) => {
        gsap.fromTo(
          c,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: (i % 3) * 0.12,
            scrollTrigger: { trigger: grid.current, start: "top 80%" },
          }
        );
      });
    }, grid);
    return () => ctx.revert();
  }, []);

  return (
    <section id="degustacao" className="border-y border-white/10 bg-white/[0.015] py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5 text-[13px] tracking-wide text-gold">
              <span className="h-px w-6 bg-gold" /> Experiência exclusiva
            </div>
            <h2 className="font-serif text-[clamp(30px,4.2vw,48px)]">Menu Degustação · 7 Tempos.</h2>
          </div>
          <p className="mt-3.5 max-w-[44ch] text-muted">
            Uma jornada guiada pela nossa cozinha: sete criações em porções generosas para provar o
            melhor da casa em uma só noite.
          </p>
        </div>

        <div ref={grid} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`course rounded-2xl border p-7 ${
                c.feature
                  ? "border-red/40 bg-gradient-to-b from-red/[0.16] to-transparent"
                  : "border-white/10 bg-white/5"
              } ${c.center ? "flex items-center justify-center text-center" : ""}`}
            >
              <div>
                <div className="mb-3.5 font-serif text-[15px] tracking-wide text-gold">{c.no}</div>
                <h4 className="mb-2 font-serif text-[21px]">{c.title}</h4>
                <p className="text-sm text-muted">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-5">
          <div className="font-serif text-3xl text-gold">
            R$ 129 <small className="block font-sans text-sm text-muted">por pessoa · 7 tempos</small>
          </div>
          <a
            href="#reservas"
            data-hover
            className="inline-flex items-center rounded-xl bg-gradient-to-br from-red to-red-2 px-6 py-3.5 text-sm font-medium text-cream shadow-[0_0_30px_rgba(198,56,46,0.14)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Reservar Degustação
          </a>
        </div>
      </div>
    </section>
  );
}
