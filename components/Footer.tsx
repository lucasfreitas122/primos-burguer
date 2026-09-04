import { site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <a href="#top" data-hover className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-gradient-to-br from-red to-red-2 text-lg">
                P
              </span>
              <span className="font-serif text-[22px] font-semibold">Primos Burguer</span>
            </a>
            <p className="mt-4 max-w-[34ch] text-[14.5px] text-muted">
              Hambúrguer artesanal feito com capricho de família. Blend na hora, pão na chapa e
              ingredientes frescos, em Feira de Santana.
            </p>
          </div>

          <div>
            <h5 className="mb-[18px] text-xs uppercase tracking-[0.16em] text-beige">Navegação</h5>
            {[
              ["#cardapio", "Cardápio"],
              ["#sobre", "Sobre"],
              ["#degustacao", "Degustação"],
              ["#reservas", "Reservas"],
            ].map(([href, label]) => (
              <a key={href} href={href} data-hover className="mb-2.5 block text-[14.5px] text-muted transition-colors hover:text-cream">
                {label}
              </a>
            ))}
          </div>

          <div>
            <h5 className="mb-[18px] text-xs uppercase tracking-[0.16em] text-beige">Contato</h5>
            <p className="mb-2.5 text-[14.5px] text-muted">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <p className="mb-2.5 text-[14.5px] text-muted">{site.phoneDisplay}</p>
            <p className="mb-2.5 text-[14.5px] text-muted">{site.hours}</p>
          </div>

          <div>
            <h5 className="mb-[18px] text-xs uppercase tracking-[0.16em] text-beige">Novidades</h5>
            <p className="mb-2.5 text-[14.5px] text-muted">Promoções e combos no seu e-mail.</p>
            <div className="mt-3.5 flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                aria-label="E-mail"
                className="flex-1 rounded-xl border border-white/10 bg-[#121212] px-3.5 py-3 text-sm text-cream outline-none focus:border-gold"
              />
              <button data-hover aria-label="Assinar" className="rounded-xl bg-red px-4 text-lg text-white">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-muted">
          <span>© 2026 Primos Burguer · Hamburgueria em Feira de Santana.</span>
          <span>Feito com fome e capricho.</span>
        </div>
      </div>
    </footer>
  );
}
