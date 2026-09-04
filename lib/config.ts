// ============================================================
// Troque estes dados pelos reais antes de publicar
// ============================================================
export const site = {
  name: "Primos Burguer",
  city: "Feira de Santana · BA",
  // WhatsApp no formato internacional, só dígitos (55 + DDD + número)
  whatsapp: "5575999999999",
  phoneDisplay: "(75) 99999-9999",
  email: "contato@primosburguer.com.br",
  address: {
    line1: "Av. Getúlio Vargas, 1234",
    line2: "Centro · Feira de Santana · BA, 44001-000",
  },
  hours: "Terça a domingo · 18h às 23h30 · Segunda: fechado",
  // Vídeo do hero — troque pela URL do SEU vídeo de hambúrguer
  heroVideo:
    "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_food_video.mp4",
};

export function wa(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
