import { wa } from "@/lib/config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={wa("Olá! Quero fazer um pedido no Primos Burguer.")}
      target="_blank"
      rel="noopener"
      data-hover
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 rounded-full bg-[#1FA855] px-5 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_40px_rgba(31,168,85,0.4)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Pedir pelo WhatsApp</span>
    </a>
  );
}
