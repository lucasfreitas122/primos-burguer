import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="mb-3.5 flex items-center gap-2.5 text-[13px] tracking-wide text-gold">
            <span className="h-px w-6 bg-gold" /> Nossa história
          </div>
          <h2 className="mb-6 font-serif text-[clamp(30px,4vw,46px)]">
            A visão de dois primos apaixonados por chapa.
          </h2>
          <p className="mb-4 text-[16.5px] text-muted">
            A <strong className="font-normal text-beige">Primos Burguer</strong> nasceu dos churrascos
            de domingo, quando João e Rafael perceberam que o segredo de um bom lanche não estava só na
            carne — estava no cuidado de servir quem a gente ama.
          </p>
          <p className="mb-4 text-[16.5px] text-muted">
            Levamos essa filosofia para dentro da hamburgueria: moemos a carne todos os dias, testamos
            cada molho na cozinha e escolhemos{" "}
            <strong className="font-normal text-beige">ingredientes frescos</strong> de fornecedores
            daqui de Feira de Santana. Nada de atalho, só técnica e capricho.
          </p>
          <p className="mb-4 text-[16.5px] text-muted">
            Hoje somos ponto de encontro de quem procura hambúrguer de verdade — honesto, generoso e
            feito com alma.
          </p>
          <div className="mt-3 font-serif text-[40px] italic text-beige opacity-80">Os Primos</div>
          <small className="mt-1 block text-[13px] text-muted">João &amp; Rafael — fundadores</small>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[420px]">
          <div className="aspect-square overflow-hidden rounded-full border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
            <Image
              src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=900&auto=format&fit=crop"
              alt="Preparo artesanal"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[6%] -left-6 rounded-2xl border border-white/10 bg-ink/50 px-6 py-4 text-center backdrop-blur-md shadow-[0_0_30px_rgba(217,163,95,0.10)]">
            <b className="block font-serif text-3xl text-gold">+8</b>
            <small className="text-xs text-muted">anos de casa</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
