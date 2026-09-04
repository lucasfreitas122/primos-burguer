import Reveal from "./Reveal";

const tags = ["Salão climatizado", "Área para grupos", "Cervejas artesanais", "Espaço família"];

export default function Immersive() {
  return (
    <section className="relative flex h-[560px] items-center overflow-hidden">
      <div
        className="parallax-fixed absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,7,7,0.9), rgba(7,7,7,0.45) 60%, rgba(7,7,7,0.2))",
          }}
        />
      </div>

      <Reveal className="relative z-[2] mx-auto w-full max-w-[1280px] px-5 sm:px-10">
        <div className="max-w-[560px]">
          <div className="mb-3.5 flex items-center gap-2.5 text-[13px] tracking-wide text-gold">
            <span className="h-px w-6 bg-gold" /> O ambiente
          </div>
          <h2 className="mb-5 font-serif text-[clamp(30px,4.4vw,50px)]">
            Mais que um lanche. Um lugar para ficar.
          </h2>
          <p className="mb-7 text-[17px] text-muted">
            Salão climatizado, área para grupos e uma seleção de cervejas artesanais geladas. O clima
            certo para reunir a família e os amigos em torno de uma boa mesa.
          </p>
          <div className="flex flex-wrap gap-3.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-ink/50 px-[18px] py-2.5 text-[13.5px] text-beige backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
