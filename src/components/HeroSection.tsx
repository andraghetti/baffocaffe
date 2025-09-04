"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 gradient-coffee bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-coffee-dark/60"></div>
      </div>
      
      {/* Filippo Overlay - Bottom Left Anchored on all screens */}
      <div className="absolute left-0 bottom-0 z-5 pointer-events-none">
        <Image
          src="/filippo.png"
          alt="Filippo"
          width={400}
          height={600}
          className="w-auto h-48 md:h-[500px] object-cover object-top opacity-60 md:opacity-80"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pb-20 md:pb-0">
        <div className="animate-float">
          <Logo />
          
          <h1 className="text-6xl md:text-8xl font-bold text-cream mb-6">
            Baffo Caffè
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Il nuovo punto di ritrovo per gli amanti del caffè ad Alfonsine. 
            Dove tradizione e passione si incontrano in ogni tazza.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-coffee-dark font-semibold px-8 py-6 text-lg shadow-warm transition-all duration-300 hover:shadow-lg hover:scale-105"
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
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cream/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
