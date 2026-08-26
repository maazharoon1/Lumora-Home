import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

export const FeaturedGrid: React.FC = () => {
  const { navigateTo } = useShop();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Living' | 'Dining' | 'Bedroom' | 'Lighting' | 'Rugs'>('All');

  // The exact 12 products specified in the prompt
  const featuredProductIds = [
    'sienna-curved-sofa',
    'calder-oak-dining-table',
    'elara-boucle-lounge-chair',
    'maren-travertine-coffee-table',
    'rowan-platform-bed',
    'avery-leather-dining-chair',
    'noor-walnut-sideboard',
    'celia-linen-accent-chair',
    'atlas-stone-console',
    'milo-oak-nightstand',
    'arden-modular-sectional',
    'liora-handwoven-rug'
  ];

  const featuredProducts = featuredProductIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as typeof products;

  const filteredProducts = activeFilter === 'All'
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#FDFCF9] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] block mb-2">
              Enduring Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
              Furniture Worth Gathering Around
            </h2>
            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light mt-2 max-w-xl">
              Sculptural forms crafted from solid oak, natural travertine, full-grain leather, and tactile Belgian flax.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Living', 'Dining', 'Bedroom', 'Rugs'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-[#2A2A2A] text-[#FDFCF9] font-bold'
                    : 'bg-[#F5F2ED] text-[#3D352F]/70 hover:text-[#2A2A2A] hover:bg-[#E5E0D8] border border-[#E5E0D8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Desktop Grid / 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to Full Catalog */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-flex items-center space-x-3 px-10 py-3.5 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F] transition-colors group shadow-md"
          >
            <span>Explore All {products.length}+ Handcrafted Pieces</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
