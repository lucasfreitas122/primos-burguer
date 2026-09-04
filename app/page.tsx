import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import About from "@/components/About";
import TastingMenu from "@/components/TastingMenu";
import Immersive from "@/components/Immersive";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="mx-auto max-w-[1280px]">
        <Hero />
        <FeaturedDishes />
        <About />
        <TastingMenu />
        <Immersive />
        <Testimonials />
        <Reservations />
        <Gallery />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}
