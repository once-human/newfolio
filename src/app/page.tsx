import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="h-[200vh] w-full bg-black"></div> {/* Dummy scroll space */}
    </main>
  );
}
