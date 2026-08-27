import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductPreview } from "@/components/ProductPreview";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductPreview />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
