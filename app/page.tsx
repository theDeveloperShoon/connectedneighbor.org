import Header from "@/components/Header";
import ImageSlideshow from "@/components/ImageSlideshow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex-grow ui-bg-secondary dark:bg-background-2">
      <Header />
      <main className="py-16">
          <div className="relative">
            <div className="h-[80svh] lg:pb-6">
              <section className="overflow-hidden h-full z-20 relative">
                <Image 
                  src="https://8dmjj7pdiy9r34m1.public.blob.vercel-storage.com/public-site/test.png" 
                  alt="Description" 
                  layout="fill" 
                  className="relative object-cover lg:rounded-b-xl w-full object-[50%_65%]"
                />
                <div className="absolute inset-0 bg-opacity-40">
                  <div className="mt-40 px-4 lg:px-16 text-center md:text-left">
                    <h1 className="text-8xl tracking ui-bg-gradient-to-tr bg-clip-text text-transparent">
                      Defined.
                      <br />
                      Digital.
                      <br />
                      Distinct 
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <ImageSlideshow /> */}
          <div className="relative min-h-full">
            <section className="py-8 px-8 overflow-hidden">
              <div>
                <h2 className="ui-fg-primary-2 font-staatliches ui-leading-normal text-4xl">THE NEW STANDARD</h2>
                <div className="py-6">
                  <h3 className="ui-fg-primary-2 font-sans text-2xl md:text-4xl lg:text-6xl font-extralight">
                    Reusable, shareable, and sustainable resources for a stronger community.
                  </h3>
                </div>
              </div>
              <div className="mt-8">
                <a className="rounded-full ui-bg-primary ui-fg-primary px-6 py-3" href="/how-it-works">
                  <span>
                    How It Works
                  </span>
                </a>
              </div>
            </section>
          </div>
      </main>
    </div>
  );
}
