import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { LaptopMockup } from '@/components/laptop-mockup';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute left-1/2 top-[40%] -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/30 blur-3xl filter md:h-[1200px] md:w-[1200px]"></div>

      <Hero />
      <LaptopMockup />
      <FAQ />
      <Footer />
    </main>
  );
}
