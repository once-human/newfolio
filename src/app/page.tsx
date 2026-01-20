import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid/bento-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <BentoGrid />
    </main>
  );
}
