"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { site } from "@/lib/config";

const words = ["Criando", "experiências", "de sabor", "memoráveis."];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".hero-eyebrow", { y: 60, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".hero-word", { y: 100, opacity: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 }, "-=0.6")
        .from(".hero-lead", { y: 60, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .from(".hero-cta", { y: 60, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".hero-video", { y: 60, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1");

      gsap.to(".hero-video", { y: -16, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.6 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
          alt="Hambúrguer artesanal Primos Burguer"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 80% 30%, transparent 40%, rgba(7,7,7,0.85) 100%), linear-gradient(90deg, rgba(7,7,7,0.72) 0%, rgba(7,7,7,0.25) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-[3] mx-auto grid w-full grid-cols-1 items-center gap-10 px-5 pt-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="hero-eyebrow mb-7 inline-flex items-center gap-3 text-[13px] tracking-wide text-beige">
            <span className="h-[7px] w-[7px] rounded-full bg-red shadow-[0_0_12px_#c6382e]" />
            Hamburgueria artesanal · Feira de Santana
          </span>

          <h1 className="mb-6 font-serif text-[clamp(40px,5.2vw,62px)] leading-[1.06]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
                <span
                  className={`hero-word inline-block ${
                    i === 1
                      ? "bg-gradient-to-br from-gold to-gold-2 bg-clip-text italic text-transparent"
                      : ""
                  }`}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-lead mb-9 max-w-[40ch] text-lg text-muted">
            Blend de 180g moído no dia, pão brioche selado na chapa e ingredientes frescos. Cada
            hambúrguer é uma experiência montada na hora, com técnica e capricho de família.
          </p>

          <div className="hero-cta flex flex-wrap gap-3.5">
            <a
              href="#reservas"
              data-hover
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-red to-red-2 px-6 py-3.5 text-sm font-medium text-cream shadow-[0_0_30px_rgba(198,56,46,0.14)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Reservar Mesa
            </a>
            <a
              href="#cardapio"
              data-hover
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-medium text-beige transition-all duration-300 hover:-translate-y-0.5 hover:border-beige"
            >
              Ver o Cardápio
            </a>
          </div>
        </div>

        <div className="hero-video w-full max-w-[450px] justify-self-start lg:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.8)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
              className="h-full w-full object-cover"
            >
              <source src={site.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-[13px] border border-white/10 bg-ink/50 px-4 py-3 backdrop-blur-md">
              <span className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-gradient-to-br from-red to-red-2 text-lg">
                🔥
              </span>
              <div>
                <b className="font-serif text-[15px]">Destaque da Casa</b>
                <small className="block text-xs text-muted">Primo Duplo · blend 180g</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
