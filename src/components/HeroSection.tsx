"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-coffee">
        <div className="absolute inset-0 bg-coffee-dark/60"></div>
      </div>
      
      {/* Filippo Image - Always anchored bottom-left */}
      <div className="absolute left-0 bottom-0 z-5 pointer-events-none">
        <Image
          src="/filippo.png"
          alt="Filippo"
          width={400}
          height={600}
          className="
            portrait:h-[50vh] portrait:w-auto 
            landscape:h-[50vh] landscape:w-[25vw] 
            object-cover object-top opacity-60
          "
          priority
        />
      </div>
      
      {/* Content - Portrait: top centered, Landscape: centered */}
      <div className="
        relative z-10 h-full flex flex-col justify-center items-center
        portrait:justify-start portrait:pt-[10vh]
        landscape:justify-center
        px-4 sm:px-6 md:px-8
      ">
        <div className="animate-float text-center w-full max-w-4xl mx-auto 
          portrait:space-y-3 portrait:sm:space-y-4 portrait:md:space-y-6
          landscape:space-y-0 landscape:sm:space-y-1 landscape:md:space-y-3 landscape:lg:space-y-6
        ">
          <div className="landscape:scale-60 landscape:sm:scale-70 landscape:md:scale-80 landscape:lg:scale-90">
            <Logo />
          </div>
          
          <h1 className="font-bold text-cream drop-shadow-lg
            portrait:text-3xl portrait:sm:text-4xl portrait:md:text-6xl portrait:lg:text-8xl
            landscape:text-2xl landscape:sm:text-3xl landscape:md:text-5xl landscape:lg:text-8xl
          ">
            Baffo Caffè
          </h1>
          
          <p className="text-cream/90 max-w-2xl mx-auto drop-shadow-md leading-relaxed
            portrait:text-base portrait:sm:text-lg portrait:md:text-xl portrait:lg:text-2xl
            landscape:text-sm landscape:sm:text-base landscape:md:text-lg landscape:lg:text-2xl
          ">
            Il nuovo punto di ritrovo per gli amanti del caffè ad Alfonsine. 
            Dove tradizione e passione si incontrano in ogni tazza.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-coffee-dark font-semibold shadow-warm transition-all duration-300 hover:shadow-lg hover:scale-105
              portrait:px-6 portrait:py-3 portrait:sm:px-8 portrait:sm:py-4 portrait:md:px-10 portrait:md:py-5 portrait:text-base portrait:sm:text-lg portrait:md:text-xl
              landscape:px-4 landscape:py-2 landscape:sm:px-6 landscape:sm:py-3 landscape:md:px-8 landscape:md:py-4 landscape:lg:px-10 landscape:lg:py-5 landscape:text-sm landscape:sm:text-base landscape:md:text-lg landscape:lg:text-xl
            "
            onClick={() => {
              document.getElementById('story')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Scopri la Nostra Storia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
