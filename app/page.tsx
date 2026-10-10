import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-16 lg:pb-0 flex items-start lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column */}
          <div className="col-span-1 lg:col-span-5 flex flex-col space-y-6 lg:space-y-8 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-brown leading-[1.1]">
              Preserving Corporate Wealth in <span className="text-brand-yellow font-light">federal Court Proceedings</span>
            </h1>
            <p className="text-lg text-brand-brown/80 max-w-lg">
              Corporate protection for regulatory claims, anti-trust litigation & takeover disputes.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="bg-brand-brown text-[#F5F0E7] px-6 lg:px-8 py-3.5 rounded-md font-medium hover:bg-brand-brown/90 transition-colors">
                Get Legal Counsel
              </Link>
              <Link href="/services" className="bg-[#E3DCD1] text-brand-brown px-6 lg:px-8 py-3.5 rounded-md font-medium hover:bg-[#D5CECD] transition-colors">
                Start Defense
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-2 lg:pt-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#F5F0E7] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Avatar 1" />
                <img className="w-10 h-10 rounded-full border-2 border-[#F5F0E7] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Avatar 2" />
                <img className="w-10 h-10 rounded-full border-2 border-[#F5F0E7] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Avatar 3" />
              </div>
              <p className="text-sm text-brand-brown/80 max-w-[200px] leading-tight">
                300+ Individuals who have trusted Ama Legal Solutions
              </p>
            </div>
          </div>

          {/* Right Column / Image Grid */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 relative mt-8 lg:mt-0">
            
            {/* Middle Main Image */}
            <div className="md:col-span-7 relative rounded-3xl overflow-hidden h-[40vh] lg:h-[65vh] max-h-[650px] shadow-lg">
              {/* Subtle cutout effect matching background */}
              <div className="absolute top-0 left-0 w-20 h-20 lg:w-24 lg:h-24 bg-[#F5F0E7] rounded-br-3xl z-10 block"></div>

              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Professional" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              
              {/* Tags */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded border border-white/30">Property law</span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded border border-white/30">Legal strategy</span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded border border-white/30">Asset protection management</span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded border border-white/30">Private counsel</span>
              </div>
            </div>

            {/* Right Section (Text + Image) */}
            <div className="md:col-span-5 flex flex-col justify-center gap-6">
              
              <div className="px-2">
                <h3 className="text-2xl font-bold text-brand-brown mb-2">You deserve peace</h3>
                <p className="text-brand-brown/80 text-sm">We offer compassionate, personalized mental health support.</p>
              </div>

              <div className="relative rounded-3xl overflow-hidden h-[30vh] lg:h-[45vh] max-h-[450px] shadow-lg hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" 
                  alt="Smiling professional" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors hover:bg-transparent duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-brand-brown/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded border border-white/10">Trusted Advice</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
