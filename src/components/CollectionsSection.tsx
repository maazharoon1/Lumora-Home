import React from 'react';
import { useShop } from '../context/ShopContext';
import { collections } from '../data/collections';
import { ArrowRight } from 'lucide-react';

export const CollectionsSection: React.FC = () => {
  const { navigateToCollection } = useShop();

  return (
    <section className="py-20 lg:py-28 bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] block mb-3">
            Architectural Curations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
            Shop by Collection
          </h2>
          <div className="w-12 h-px bg-[#E5E0D8] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light max-w-xl mx-auto leading-relaxed">
            Cohesive design languages unified by material honesty, sculptural silhouettes, and artisanal fabrication.
          </p>
        </div>

        {/* 5 Collections Grid: Top 2 large editorial hero cards + Bottom 3 cards */}
        <div className="space-y-8 lg:space-y-10">
          {/* Top 2 Primary Collections: Sienna and Calder in 2-column wide format */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.slice(0, 2).map((col) => (
              <div
                key={col.id}
                onClick={() => navigateToCollection(col.id)}
                className="group cursor-pointer bg-[#F5F2ED] border border-[#E5E0D8] hover:border-[#2A2A2A] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E0D8]">
                  <img
                    src={col.heroImage}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute bottom-4 left-4 bg-[#FDFCF9]/90 backdrop-blur-xs text-[#2A2A2A] text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1">
                    {col.materialFocus.split(',')[0]}
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between bg-[#FDFCF9]">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] group-hover:text-[#A87C52] transition-colors font-light">
                      {col.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D352F]/70 mt-2 font-light leading-relaxed">
                      {col.tagline}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E5E0D8] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] group-hover:text-[#A87C52] flex items-center space-x-2">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-[#A8A29A] font-light">
                      {col.featuredProductIds.length} Key Silhouettes
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 3 Collections: Rowan, Maren, Solara Outdoor in 3-column format */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.slice(2, 5).map((col) => (
              <div
                key={col.id}
                onClick={() => navigateToCollection(col.id)}
                className="group cursor-pointer bg-[#F5F2ED] border border-[#E5E0D8] hover:border-[#2A2A2A] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                  <img
                    src={col.heroImage}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between bg-[#FDFCF9]">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2A2A2A] group-hover:text-[#A87C52] transition-colors font-light">
                      {col.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D352F]/70 mt-2 font-light line-clamp-2 leading-relaxed">
                      {col.tagline}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#E5E0D8]">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] group-hover:text-[#A87C52] flex items-center space-x-1.5">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
