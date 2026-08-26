import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateTo, navigateToCategory, navigateToCollection, navigateToProduct, openConsultationModal } = useShop();

  return (
    <section className="w-full bg-[#FDFCF9] border-b border-[#E5E0D8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] xl:min-h-[720px]">
        {/* Main Editorial Hero Section (8 cols on desktop) */}
        <div className="lg:col-span-8 relative group bg-[#E5E0D8] min-h-[480px] lg:min-h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background image with multiply overlay & ambient gradient */}
          <div
            className="absolute inset-0 bg-[#A8A29A] bg-center bg-cover transition-transform duration-[3000ms] group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600')`,
              mixBlendMode: 'multiply',
              opacity: 0.92
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Editorial Content */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#DDD5C7]" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white font-semibold">
                The Autumn Collection
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-5 tracking-tight">
              Designed for Living Beautifully
            </h1>

            <p className="text-white/85 text-xs sm:text-sm lg:text-base leading-relaxed mb-8 max-w-md font-light">
              Thoughtfully crafted furniture, natural materials, and enduring forms designed to make every room feel distinctly yours.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigateTo('shop', { subcategory: 'New' })}
                className="px-8 py-3.5 bg-white text-[#2A2A2A] text-[10px] sm:text-[11px] tracking-[0.2em] font-bold uppercase transition-all hover:bg-[#FDFCF9] hover:shadow-lg text-center"
              >
                Shop New Arrivals
              </button>
              <button
                onClick={() => navigateToCollection('sienna')}
                className="px-8 py-3.5 border border-white text-white text-[10px] sm:text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white/15 transition-all text-center"
              >
                Explore Collection
              </button>
            </div>

            {/* Quiet Material Badges */}
            <div className="mt-8 pt-6 border-t border-white/20 hidden sm:flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] text-white/80 uppercase tracking-widest font-light">
              <span>• Honed Roman Travertine</span>
              <span>• European White Oak</span>
              <span>• Belgian Performance Linen</span>
              <span>• Full-Grain Leather</span>
            </div>
          </div>
        </div>

        {/* Editorial Aside Panel (4 cols on desktop) */}
        <div className="lg:col-span-4 bg-[#F5F2ED] lg:border-l border-[#E5E0D8] flex flex-col justify-between overflow-hidden">
          {/* Top Card: Featured Arrival Spotlight */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E5E0D8]">
            <div className="flex justify-between items-end mb-5">
              <h3 className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold text-[#3D352F]">
                Featured Arrival
              </h3>
              <span className="text-[10px] text-[#A8A29A] italic">01 / 12</span>
            </div>

            <div
              onClick={() => navigateToProduct('sienna-curved-sofa')}
              className="bg-white p-4 sm:p-5 shadow-xs border border-[#E5E0D8] group cursor-pointer hover:border-[#2A2A2A] transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-[#F9F7F2] mb-4 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600')`
                  }}
                />
                <span className="absolute top-2 left-2 bg-[#2A2A2A] text-[#FDFCF9] text-[8px] uppercase tracking-[0.2em] font-bold px-2 py-0.5">
                  Spotlight
                </span>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium tracking-tight text-[#2A2A2A] group-hover:text-[#A87C52] transition-colors">
                    Sienna Curved Sofa
                  </h4>
                  <p className="text-[10px] text-[#A8A29A] uppercase tracking-widest mt-1 font-light">
                    Performance Linen · Natural Oat
                  </p>
                </div>
                <span className="text-sm font-normal text-[#2A2A2A] font-serif">$3,895</span>
              </div>

              <div className="mt-3.5 pt-3 border-t border-[#E5E0D8]/60 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div className="flex text-[#A87C52] text-xs">
                    <Star className="w-3 h-3 fill-[#A87C52]" />
                    <Star className="w-3 h-3 fill-[#A87C52]" />
                    <Star className="w-3 h-3 fill-[#A87C52]" />
                    <Star className="w-3 h-3 fill-[#A87C52]" />
                    <Star className="w-3 h-3 fill-[#A87C52]" />
                  </div>
                  <span className="text-[9px] text-[#A8A29A] uppercase tracking-tight ml-1 font-medium">
                    (86 Reviews)
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#2A2A2A] font-bold group-hover:translate-x-0.5 transition-transform">
                  View Piece →
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Card: Bespoke Environments / Design Services Banner */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[#FDFCF9] flex-1">
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#A8A29A] mb-3 block font-semibold">
              Bespoke Environments
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-light mb-3 text-[#2A2A2A] leading-tight">
              Your Vision. Our Expertise.
            </h3>
            <p className="text-xs sm:text-sm text-[#3D352F]/70 leading-relaxed mb-6 font-light">
              From a single room refresh to an entire home, our design team helps bring your ideas together through thoughtful curation and custom floor plans.
            </p>
            <button
              onClick={() => openConsultationModal('Bespoke Consultation')}
              className="inline-block border-b border-[#3D352F] pb-1 text-[10px] sm:text-[11px] tracking-[0.2em] font-bold uppercase text-[#2A2A2A] hover:text-[#A87C52] hover:border-[#A87C52] transition-colors self-start"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

