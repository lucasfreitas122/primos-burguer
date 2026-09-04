import Image from "next/image";
import Reveal from "./Reveal";

const imgs = [
  "photo-1568901346375-23c9450c58cd",
  "photo-1550317138-10000687a72b",
  "photo-1594212699903-ec8a3eca50f5",
  "photo-1552566626-52f8b828add9",
  "photo-1586190848861-99aa4a171e90",
  "photo-1571091718767-18b5b1457add",
  "photo-1520072959219-c595dc870360",
  "photo-1607013251379-e6eecfffe234",
  "photo-1610614819513-58e34989e371",
];

export default function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 sm:py-28">
      <Reveal className="mb-14">
        <div className="mb-3.5 flex items-center gap-2.5 text-[13px] tracking-wide text-gold">
          <span className="h-px w-6 bg-gold" /> Nossa cozinha
        </div>
        <h2 className="font-serif text-[clamp(30px,4.2vw,48px)]">Um pouco do que servimos.</h2>
      </Reveal>

      <Reveal className="masonry">
        {imgs.map((id) => (
          <figure key={id} className="group overflow-hidden rounded-[14px] border border-white/10">
            <Image
              src={`https://images.unsplash.com/${id}?q=80&w=700&auto=format&fit=crop`}
              alt="Prato da Primos Burguer"
              width={700}
              height={900}
              className="w-full grayscale-[0.1] transition-all duration-[1000ms] ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
            />
          </figure>
        ))}
      </Reveal>
    </section>
  );
}
