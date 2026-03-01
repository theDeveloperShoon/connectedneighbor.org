import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="w-full h-[500px] overflow-hidden">
            <div>
              <Image 
                src="https://placehold.co/1200x600/4A5568/FFFFFF/png?text=Product+Showcase+1" 
                alt="Description" 
                layout="fill" 
                className="object-cover"/>
            </div>
          </div>
          <section>
            
          </section>
      </main>
    </div>
  );
}
