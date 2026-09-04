"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#degustacao", label: "Degustação" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#galeria", label: "Galeria" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[120] flex justify-center">
      <nav
        className={`mx-4 my-3 flex w-full max-w-[1280px] items-center justify-between rounded-2xl border border-white/10 px-5 py-3 backdrop-blur-md transition-colors duration-500 sm:mx-10 sm:px-6 ${
          scrolled ? "bg-ink/85" : "bg-ink/50"
        } shadow-[0_0_30px_rgba(217,163,95,0.08)]`}
      >
        <a href="#top" data-hover className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-gradient-to-br from-red to-red-2 text-lg shadow-[0_0_30px_rgba(198,56,46,0.14)]">
            P
          </span>
          <span className="font-serif text-[22px] font-semibold tracking-wide">Primos Burguer</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-beige lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-hover className="group relative opacity-80 transition-opacity hover:opacity-100">
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#reservas"
          data-hover
          className="inline-flex items-center rounded-xl border border-gold px-5 py-3 text-sm font-medium text-gold shadow-[0_0_30px_rgba(217,163,95,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-[#1a1208]"
        >
          Reservar Mesa
        </a>
      </nav>
    </header>
  );
}
