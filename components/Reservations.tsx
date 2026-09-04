"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { wa } from "@/lib/config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2 pessoas",
    type: "Jantar",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    const msg =
      `Olá! Quero reservar uma mesa na Primos Burguer.\n\n` +
      `Nome: ${form.name || "—"}\n` +
      `Telefone: ${form.phone || "—"}\n` +
      `Data: ${form.date || "—"} às ${form.time}\n` +
      `Pessoas: ${form.guests}\n` +
      `Ocasião: ${form.type}\n` +
      `Observações: ${form.notes || "—"}`;
    setSent(true);
    setTimeout(() => window.open(wa(msg), "_blank"), 600);
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3.5 text-[14.5px] font-light text-cream outline-none focus:border-gold";

  return (
    <section id="reservas" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(217,163,95,0.14), transparent 55%)",
        }}
      />
      <Reveal className="relative z-[2] mx-auto max-w-[820px] px-5 text-center sm:px-10">
        <div className="mb-3.5 flex items-center justify-center gap-2.5 text-[13px] tracking-wide text-gold">
          <span className="h-px w-6 bg-gold" /> Reservas
        </div>
        <h2 className="mb-4 font-serif text-[clamp(30px,4.4vw,48px)]">Garanta a sua mesa.</h2>
        <p className="mb-10 text-muted">
          Preencha os dados abaixo e confirmamos sua reserva pelo WhatsApp em instantes.
        </p>

        <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm sm:p-9">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[13px] text-beige">Nome</label>
              <input className={inputCls} value={form.name} onChange={set("name")} placeholder="Seu nome completo" />
            </div>
            <div>
              <label className="mb-2 block text-[13px] text-beige">Telefone</label>
              <input className={inputCls} value={form.phone} onChange={set("phone")} placeholder="(75) 99999-9999" />
            </div>
            <div>
              <label className="mb-2 block text-[13px] text-beige">Data</label>
              <input type="date" className={inputCls} value={form.date} onChange={set("date")} />
            </div>
            <div>
              <label className="mb-2 block text-[13px] text-beige">Horário</label>
              <select className={inputCls} value={form.time} onChange={set("time")}>
                {["18:00", "19:00", "20:00", "21:00", "22:00"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[13px] text-beige">Nº de pessoas</label>
              <select className={inputCls} value={form.guests} onChange={set("guests")}>
                {["2 pessoas", "3 pessoas", "4 pessoas", "5 pessoas", "6+ pessoas"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[13px] text-beige">Ocasião</label>
              <select className={inputCls} value={form.type} onChange={set("type")}>
                {["Jantar", "Menu Degustação", "Aniversário", "Confraternização"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-[13px] text-beige">Pedidos especiais</label>
              <textarea
                className={`${inputCls} min-h-[90px] resize-y`}
                value={form.notes}
                onChange={set("notes")}
                placeholder="Restrições, preferências, comemoração..."
              />
            </div>
          </div>

          <button
            onClick={submit}
            data-hover
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-red to-red-2 px-6 py-4 text-sm font-medium text-cream shadow-[0_0_30px_rgba(198,56,46,0.14)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Confirmar Reserva pelo WhatsApp
          </button>

          {sent && (
            <p className="mt-4 text-center text-[14.5px] text-gold">
              Reserva pronta! Abrindo o WhatsApp para confirmação…
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
