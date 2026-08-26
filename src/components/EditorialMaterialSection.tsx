import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

interface MaterialStory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  lifestyleImage: string;
  detailImage: string;
  origin: string;
  patinaNote: string;
}

const materialsData: MaterialStory[] = [
  {
    id: 'travertine',
    name: 'Roman Travertine',
    subtitle: 'Sedimentary subterranean limestone from Tivoli, Italy',
    description: 'Formed across millennia by geothermal mineral springs, Roman travertine displays velvety open pores, subtle cloud-like veining, and a grounded architectural weight.',
    lifestyleImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    origin: 'Tivoli & Tuscany, Italy',
    patinaNote: 'Deepens in subtle warmth with natural indoor ambient lighting'
  },
  {
    id: 'oak',
    name: 'Solid European White Oak',
    subtitle: 'Sustainably harvested from certified managed forests',
    description: 'Slow-grown for dense grain structure and exceptional dimensional stability. Finished with breathable botanical oils that preserve the raw tactile warmth of organic timber.',
    lifestyleImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    origin: 'Burgundy & Bavaria, Europe',
    patinaNote: 'Develops a soft honey luster and enriched character over decades'
  },
  {
    id: 'linen',
    name: 'Belgian Performance Flax',
    subtitle: 'Heavyweight organic linen treated for stain resistance',
    description: 'Spun from long-staple European flax fibers, our performance linen combines the relaxed slouch and breathable luxury of natural flax with advanced nano-shield stain resistance.',
    lifestyleImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    origin: 'Flanders, Belgium',
    patinaNote: 'Grows progressively softer with every seated hour'
  },
  {
    id: 'leather',
    name: 'Italian Saddle Leather',
    subtitle: 'Vegetable-tanned full-grain hides from Santa Croce',
    description: 'Tanned using chestnut and mimosa barks according to centuries-old Tuscan heritage. Supple yet rugged, with all natural range markings preserved as hallmarks of authenticity.',
    lifestyleImage: 'https://images.unsplash.com/photo-1580481077112-9214d9be2535?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
    origin: 'Tuscany, Italy',
    patinaNote: 'Gains a rich, lustrous amber sheen that records your life story'
  }
];

export const EditorialMaterialSection: React.FC = () => {
  const { navigateTo } = useShop();
  const [activeMaterial, setActiveMaterial] = useState<MaterialStory>(materialsData[0]);

  return (
    <section className="py-24 lg:py-32 bg-[#F5F2ED] border-y border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Material Selector Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#A87C52]" />
              <span>Materiality & Provenance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
              Natural Forms
            </h2>
          </div>

          {/* Interactive Material Story Selector */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {materialsData.map(mat => (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
                  activeMaterial.id === mat.id
                    ? 'bg-[#2A2A2A] text-[#FDFCF9] font-bold shadow-xs'
                    : 'bg-[#FDFCF9] text-[#3D352F]/70 hover:text-[#2A2A2A] border border-[#E5E0D8]'
                }`}
              >
                {mat.name.split(' ')[0]} {mat.name.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* Dramatic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Lifestyle Image + Inset Macro Detail Image */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#E5E0D8] border border-[#E5E0D8] shadow-sm">
              <img
                src={activeMaterial.lifestyleImage}
                alt={`${activeMaterial.name} Lifestyle setting`}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {/* Smaller Material / Detail Inset Image */}
            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-44 sm:w-56 aspect-square overflow-hidden bg-[#FDFCF9] p-2 border border-[#E5E0D8] shadow-lg hidden sm:block">
              <img
                src={activeMaterial.detailImage}
                alt={`${activeMaterial.name} Macro grain texture`}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-[#2A2A2A]/90 text-[#FDFCF9] text-[8px] uppercase tracking-widest px-2 py-0.5 backdrop-blur-xs font-bold">
                Tactile Grain
              </span>
            </div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-5 space-y-6 sm:pl-4">
            <div className="inline-block bg-[#FDFCF9] px-3 py-1 text-[10px] uppercase tracking-widest text-[#3D352F]/80 border border-[#E5E0D8] font-medium">
              {activeMaterial.subtitle}
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#2A2A2A] font-light leading-tight">
              {activeMaterial.name}
            </h3>

            {/* Main Editorial Text Required by Prompt */}
            <blockquote className="font-serif text-lg sm:text-xl text-[#3D352F] italic leading-relaxed border-l-2 border-[#A87C52] pl-5 font-light">
              “Material has a language of its own. From richly grained oak to softly veined stone, each piece begins with materials chosen for their character, texture, and ability to grow more beautiful with time.”
            </blockquote>

            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light leading-relaxed">
              {activeMaterial.description}
            </p>

            {/* Provenance & Patina Specs */}
            <div className="pt-6 border-t border-[#E5E0D8] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#A8A29A] uppercase tracking-wider block text-[10px]">
                  Region of Origin
                </span>
                <span className="text-[#2A2A2A] font-medium mt-0.5 block text-xs">
                  {activeMaterial.origin}
                </span>
              </div>
              <div>
                <span className="text-[#A8A29A] uppercase tracking-wider block text-[10px]">
                  Aging & Character
                </span>
                <span className="text-[#2A2A2A] font-medium mt-0.5 block text-xs">
                  {activeMaterial.patinaNote}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4">
              <button
                onClick={() => navigateTo('shop')}
                className="px-8 py-3.5 bg-[#2A2A2A] text-[#FDFCF9] hover:bg-[#3D352F] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 flex items-center space-x-2 group shadow-xs"
              >
                <span>Shop Natural Materials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
