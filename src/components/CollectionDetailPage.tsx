import React from 'react';
import { useShop } from '../context/ShopContext';
import { getCollectionById, collections } from '../data/collections';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronRight, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface CollectionDetailPageProps {
  collectionId: string;
}

export const CollectionDetailPage: React.FC<CollectionDetailPageProps> = ({ collectionId }) => {
  const { navigateTo, navigateToCollection } = useShop();
  const collection = getCollectionById(collectionId) || collections[0];

  // Get products in this collection
  const collectionProducts = products.filter(
    p =>
      collection.featuredProductIds.includes(p.id) ||
      p.collection?.toLowerCase().includes(collection.name.toLowerCase()) ||
      p.id.startsWith(collection.id)
  );

  return (
    <div className="bg-[#FDFCF9] pb-24">
      {/* Editorial Collection Hero */}
      <div className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center bg-[#2A2A2A] overflow-hidden">
        <img
          src={collection.heroImage}
          alt={collection.name}
          className="w-full h-full object-cover absolute inset-0 opacity-75 scale-100 hover:scale-102 transition-transform duration-[3000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-[#2A2A2A]/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FDFCF9] space-y-4 py-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A87C52] block">
            Signature Design Language
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
            {collection.name}
          </h1>
          <p className="text-sm sm:text-base text-[#FDFCF9]/80 font-light max-w-2xl mx-auto leading-relaxed">
            {collection.description}
          </p>
          <div className="pt-4 flex items-center justify-center space-x-4 text-[10px] text-[#FDFCF9]/70 uppercase tracking-widest font-medium">
            <span>Primary Focus: {collection.materialFocus}</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#A8A29A]">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2A2A2A]">
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigateTo('shop')} className="hover:text-[#2A2A2A]">
            Collections
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#2A2A2A] font-semibold">{collection.name}</span>
        </nav>
      </div>

      {/* Narrative & Craft Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F5F2ED] p-8 sm:p-12 border border-[#E5E0D8]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52]">
              Architectural Concept
            </span>
            <h3 className="font-serif text-3xl text-[#2A2A2A] font-light">
              Sculptural Comfort & Material Balance
            </h3>
            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light leading-relaxed">
              Every curve and proportion in the {collection.name} is engineered to harmonize tactile luxury with enduring structural integrity. Designed to create a cohesive sensory atmosphere across your room.
            </p>
            <div className="pt-2 text-xs text-[#2A2A2A] font-medium space-y-1">
              <p>• Custom hand-selected material grades</p>
              <p>• Mortise and tenon timber joinery</p>
              <p>• Tailored for seamless cross-collection pairing</p>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[16/10] overflow-hidden bg-[#F5F2ED] border border-[#E5E0D8]">
            <img
              src={collection.detailImage}
              alt={`${collection.name} In situ`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Collection Pieces Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E0D8]">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light">
                Pieces in this Collection
              </h2>
              <p className="text-xs text-[#3D352F]/70 mt-1">
                {collectionProducts.length} Silhouettes Crafted for this Suite
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collectionProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

        {/* Other Collections Carousel */}
        <div className="mt-24 pt-16 border-t border-[#E5E0D8]">
          <h3 className="font-serif text-2xl text-[#2A2A2A] font-light mb-8 text-center">
            Explore Other Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.filter(c => c.id !== collection.id).slice(0, 4).map(c => (
              <div
                key={c.id}
                onClick={() => navigateToCollection(c.id)}
                className="group cursor-pointer bg-[#F5F2ED] p-4 border border-[#E5E0D8] hover:border-[#2A2A2A] transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden mb-3">
                  <img
                    src={c.heroImage}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-serif text-lg text-[#2A2A2A] font-light group-hover:text-[#A87C52] transition-colors">
                  {c.name}
                </h4>
                <p className="text-xs text-[#3D352F]/70 line-clamp-2 mt-1 font-light">
                  {c.tagline}
                </p>
                <span className="text-[10px] uppercase tracking-wider text-[#2A2A2A] font-bold mt-3 inline-block">
                  View Suite →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
