import { Crown, Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B1C16] dark:bg-[#0B1C16]">
      {/* Grid sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B0B0B0" strokeWidth="0.5" opacity="0.13" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Radial gradient inferior */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[120%] h-[22vh] z-0 pointer-events-none select-none" style={{background: "radial-gradient(ellipse 70% 100% at 50% 100%, #00B894cc 0%, #00B89455 40%, #00B89400 100%)"}} />
      {/* Fondo hero.png solo en el centro */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="relative w-full max-w-7xl h-[100vh]">
          <Image
            src="/hero.png"
            alt="Hero background"
            fill
            className="object-contain object-center rounded-3xl"
            priority
          />
        </div>
      </div>
      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl px-2 sm:px-4 text-center gap-6">
        <span className="flex items-center justify-center px-3 sm:px-4 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-2 border border-white/20 backdrop-blur">
        <Crown className="w-4 h-4 mr-2" />
        Featured Design Platform</span>
        <h1 className="tems-center justify-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          <span className="text-emerald-400 font-semibold">Grow</span> 
          <span> with Great</span>
          <br />
          <span>Designs</span>
        </h1>
        <p className="text-base sm:text-lg text-[#E3E3E3] max-w-xl mx-auto">
          Skip the long hiring process and start working with vetted designers instantly.
        </p>
        <form className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto gap-3 sm:gap-4 mt-4">
          <div className="flex items-center flex-1 bg-transparent border border-emerald-400 rounded-full px-3 sm:px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-400 transition">
            <Search className="w-5 h-5 text-[#B0B0B0] mr-3" />
            <input
              type="text"
              placeholder="What do you need designed?"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[#B0B0B0] text-base"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-2 rounded-full font-semibold transition shadow-none whitespace-nowrap cursor-pointer"
          >
            Get a design
          </button>
        </form>
      </div>
    </section>
  );
} 