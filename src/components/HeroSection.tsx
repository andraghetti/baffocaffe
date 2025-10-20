"use client";

import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { siteConfig } from "@/config/site";
import { Download } from "lucide-react";

const HeroSection = () => {
    return (
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/background.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-cream">
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
          
          <h1 className="font-bold text-black drop-shadow-lg bg-gradient-to-b to-gray-900 from-gray-800 bg-clip-text text-transparent
            portrait:text-3xl portrait:sm:text-4xl portrait:md:text-6xl portrait:lg:text-8xl
            landscape:text-2xl landscape:sm:text-3xl landscape:md:text-5xl landscape:lg:text-8xl
          ">
            {siteConfig.name}
          </h1>
          
          <div className="text-coffee-dark max-w-2xl mx-auto drop-shadow-md leading-relaxed
            portrait:text-base portrait:sm:text-lg portrait:md:text-xl portrait:lg:text-2xl
            landscape:text-sm landscape:sm:text-base landscape:md:text-lg landscape:lg:text-2xl
          ">
            <p>Dove il caffè incontra il piacere di posarsi su un baffo.</p>
          </div>
        
          
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="btn-primary
                portrait:px-6 portrait:py-3 portrait:sm:px-8 portrait:sm:py-4 portrait:md:px-10 portrait:md:py-5 portrait:text-base portrait:sm:text-lg portrait:md:text-xl
                landscape:px-4 landscape:py-2 landscape:sm:px-6 landscape:sm:py-3 landscape:md:px-8 landscape:md:py-4 landscape:lg:px-10 landscape:lg:py-5 landscape:text-sm landscape:sm:text-base landscape:md:text-lg landscape:lg:text-xl
              "
              onClick={() => {
                document.getElementById(siteConfig.cta.targetId)?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              {siteConfig.cta.text}
            </Button>
          </div>

          <div className="flex justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-primary
                portrait:px-6 portrait:py-3 portrait:sm:px-8 portrait:sm:py-4 portrait:md:px-10 portrait:md:py-5 portrait:text-base portrait:sm:text-lg portrait:md:text-xl
                landscape:px-4 landscape:py-2 landscape:sm:px-6 landscape:sm:py-3 landscape:md:px-8 landscape:md:py-4 landscape:lg:px-10 landscape:lg:py-5 landscape:text-sm landscape:sm:text-base landscape:md:text-lg landscape:lg:text-xl
              "
            >
              <a 
                href="/listino-baffo.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Visualizza il listino
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
