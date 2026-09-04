"use client";

import { useEffect } from "react";

type Item = { name: string; note: string; price: string };
type Cat = { title: string; items: Item[] };

const menu: Cat[] = [
  {
    title: "Entradas",
    items: [
      { name: "Batata Rústica", note: "na casca, alecrim e parmesão", price: "R$ 22" },
      { name: "Onion Rings", note: "anéis crocantes + barbecue da casa", price: "R$ 24" },
      { name: "Bolinho de Costela", note: "ragu desfiado, maionese defumada", price: "R$ 28" },
    ],
  },
  {
    title: "Hambúrgueres",
    items: [
      { name: "Clássico Feirense", note: "blend 180g, prato, salada, maionese", price: "R$ 32" },
      { name: "Smash do Chef", note: "duplo smash, cheddar, picles", price: "R$ 36" },
      { name: "Primo Duplo", note: "2× blend 180g, cheddar duplo, molho secreto", price: "R$ 39" },
      { name: "Bacon Supremo", note: "bacon artesanal, cheddar, cebola crispy", price: "R$ 42" },
      { name: "Costela no Brioche", note: "costela 12h, geleia de pimenta", price: "R$ 45" },
    ],
  },
  {
    title: "Sobremesas",
    items: [
      { name: "Brownie na Chapa", note: "sorvete de creme, caramelo salgado", price: "R$ 24" },
      { name: "Petit Gateau", note: "calda quente de chocolate belga", price: "R$ 26" },
      { name: "Milkshake Artesanal", note: "ovomaltine, doce de leite ou morango", price: "R$ 20" },
    ],
  },
];

export default function MenuModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto bg-ink/70 px-5 py-10 backdrop-blur-xl"
    >
      <div className="m-auto w-full max-w-[900px] rounded-[22px] border border-white/10 bg-[#0f0c0a]/70 p-7 shadow-[0_40px_120px_rgba(0,0,0,0.7)] sm:p-12">
        <div className="mb-9 flex items-start justify-between gap-6">
          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)]">Cardápio Completo</h2>
            <p className="mt-2 text-sm text-muted">
              Todos os hambúrgueres com blend de 180g moído no dia e pão brioche na chapa.
            </p>
          </div>
          <button
            onClick={onClose}
            data-hover
            aria-label="Fechar"
            className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border border-white/10 text-xl transition-all duration-300 hover:rotate-90 hover:bg-red"
          >
            ✕
          </button>
        </div>

        {menu.map((cat) => (
          <div key={cat.title} className="mb-8">
            <h3 className="mb-5 text-[15px] font-medium uppercase tracking-[0.16em] text-gold">{cat.title}</h3>
            {cat.items.map((it) => (
              <div key={it.name} className="mb-4 flex items-baseline">
                <span className="text-[16.5px] text-cream">
                  {it.name}
                  <small className="mt-0.5 block text-[12.5px] text-muted">{it.note}</small>
                </span>
                <span className="leader" />
                <span className="whitespace-nowrap font-serif text-[17px] text-gold">{it.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
