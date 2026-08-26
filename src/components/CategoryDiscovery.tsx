import React from 'react';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/categories';
import { ArrowRight } from 'lucide-react';

export const CategoryDiscovery: React.FC = () => {
  const { navigateToCategory } = useShop();

  // Highlight the primary 6 major categories with large editorial presence, plus extended
  const displayCategories = categories.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] block mb-3">
            Room Environments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
            Create Your Space
          </h2>
          <div className="w-12 h-px bg-[#E5E0D8] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light max-w-xl mx-auto leading-relaxed">
            Explore furniture and objects designed to bring warmth, character, and comfort to every room.
          </p>
        </div>

        {/* Large Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayCategories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => navigateToCategory(cat.slug)}
              className="group cursor-pointer bg-[#F5F2ED] overflow-hidden flex flex-col justify-between border border-[#E5E0D8] hover:border-[#2A2A2A] transition-all duration-500 hover:shadow-lg"
            >
              {/* Large Editorial Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#E5E0D8]">
                <img
                  src={cat.heroImage}
                  alt={`${cat.name} Collection by Lumora Home`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.2em] font-bold text-[#FDFCF9] bg-[#2A2A2A]/80 backdrop-blur-xs px-2.5 py-1">
                  0{idx + 1}
                </span>
              </div>

              {/* Editorial Card Footer */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#FDFCF9]">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light group-hover:text-[#A87C52] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D352F]/70 mt-2 font-light line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E5E0D8] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] group-hover:text-[#A87C52] flex items-center space-x-2">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-[#A8A29A] tracking-wider uppercase font-light">
                    {cat.subcategories.length} Silhouettes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
