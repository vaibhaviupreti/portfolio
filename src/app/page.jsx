import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex h-[400px] flex-col items-center justify-between p-10 bg-gray-500 text-white">
      <div>
        <Hero/>
      </div>
    </main>
  );
}


// min-h-screen