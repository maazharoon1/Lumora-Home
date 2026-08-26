import React, { useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const NewArrivalsCarousel: React.FC = () => {
  const { navigateTo } = useShop();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // The 6 specific new arrivals requested by the prompt
  const newArrivalIds = [
    'sienna-curved-sofa',
    'calder-oak-dining-table',
    'elara-boucle-lounge-chair',
    'maren-travertine-coffee-table',
    'rowan-platform-bed',
    'isla-ceramic-pendant'
  ];

  const newArrivalProducts = newArrivalIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as typeof products;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FDFCF9] border-t border-[#E5E0D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] block mb-2">
              Curated Releases
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light mt-2 max-w-lg">
              Fresh forms, natural materials, and considered details.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <button
              onClick={() => navigateTo('shop', { subcategory: 'New' })}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] hover:text-[#A87C52] flex items-center space-x-1.5 transition-colors group mr-2"
            >
              <span>View All Releases</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Desktop Left / Right Scroll Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-[#E5E0D8] hover:border-[#2A2A2A] bg-[#FDFCF9] text-[#2A2A2A] flex items-center justify-center transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-[#E5E0D8] hover:border-[#2A2A2A] bg-[#FDFCF9] text-[#2A2A2A] flex items-center justify-center transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {newArrivalProducts.map((product, idx) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[360px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} priority={idx < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
