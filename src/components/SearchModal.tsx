import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { collections } from '../data/collections';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    closeSearch,
    navigateToProduct,
    navigateToCategory,
    navigateToCollection
  } = useShop();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = trimmed
    ? products.filter(
        p =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.subcategory.toLowerCase().includes(trimmed) ||
          p.material.toLowerCase().includes(trimmed) ||
          p.collection?.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      ).slice(0, 6)
    : [];

  const matchingCategories = trimmed
    ? categories.filter(
        c =>
          c.name.toLowerCase().includes(trimmed) ||
          c.subcategories.some(s => s.toLowerCase().includes(trimmed))
      )
    : [];

  const matchingCollections = trimmed
    ? collections.filter(
        col =>
          col.name.toLowerCase().includes(trimmed) ||
          col.materialFocus.toLowerCase().includes(trimmed)
      )
    : [];

  const popularSearches = [
    'Sienna Curved Sofa',
    'Roman Travertine Coffee Table',
    'Oak Dining Table',
    'Bouclé Lounge Chair',
    'Rowan Platform Bed',
    'Italian Saddle Leather'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={closeSearch}
      />

      {/* Search Modal Box */}
      <div className="relative bg-[#FDFCF9] max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D8] z-10 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b-2 border-[#2A2A2A] pb-4">
          <Search className="w-6 h-6 text-[#2A2A2A] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by piece name, category, oak, travertine, linen..."
            className="w-full bg-transparent text-lg sm:text-xl font-serif text-[#2A2A2A] placeholder:text-[#A8A29A] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#A8A29A] hover:text-[#2A2A2A] mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="text-[10px] uppercase tracking-widest text-[#A8A29A] hover:text-[#2A2A2A] pl-3 border-l border-[#E5E0D8]"
          >
            ESC
          </button>
        </div>

        {/* Dynamic Search Results */}
        {query ? (
          <div className="mt-8 space-y-8">
            {/* Matching Products */}
            {matchingProducts.length > 0 && (
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-3">
                  Furniture & Objects ({matchingProducts.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {matchingProducts.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        closeSearch();
                        navigateToProduct(prod.id);
                      }}
                      className="group cursor-pointer p-3 bg-[#F5F2ED] border border-[#E5E0D8] hover:border-[#2A2A2A] flex items-center space-x-3 transition-all"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-16 h-16 object-cover bg-[#FDFCF9] flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#A8A29A] block">
                          {prod.category} • {prod.material.split('/')[0]}
                        </span>
                        <h5 className="font-serif text-sm text-[#2A2A2A] group-hover:text-[#A87C52] font-medium truncate">
                          {prod.name}
                        </h5>
                        <p className="text-xs font-semibold text-[#2A2A2A] mt-0.5">
                          ${prod.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Categories and Collections */}
            {(matchingCategories.length > 0 || matchingCollections.length > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E0D8]">
                {matchingCategories.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-2">
                      Matching Rooms
                    </span>
                    <ul className="space-y-1.5 text-xs">
                      {matchingCategories.map(c => (
                        <li key={c.id}>
                          <button
                            onClick={() => {
                              closeSearch();
                              navigateToCategory(c.slug);
                            }}
                            className="text-[#2A2A2A] hover:text-[#A87C52] font-medium"
                          >
                            Explore {c.name} Collection →
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {matchingCollections.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-2">
                      Design Collections
                    </span>
                    <ul className="space-y-1.5 text-xs">
                      {matchingCollections.map(col => (
                        <li key={col.id}>
                          <button
                            onClick={() => {
                              closeSearch();
                              navigateToCollection(col.id);
                            }}
                            className="text-[#2A2A2A] hover:text-[#A87C52] font-medium"
                          >
                            {col.name} ({col.materialFocus}) →
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {matchingProducts.length === 0 && matchingCategories.length === 0 && matchingCollections.length === 0 && (
              <div className="py-12 text-center text-[#3D352F]/70">
                <p className="font-serif text-lg text-[#2A2A2A]">No results found for "{query}"</p>
                <p className="text-xs mt-1">Try searching for oak, travertine, linen, leather, or sofa.</p>
              </div>
            )}
          </div>
        ) : (
          /* Default Popular Searches & Curations */
          <div className="mt-8 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-3">
                Suggested Curations
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 bg-[#F5F2ED] hover:bg-[#E5E0D8] text-xs text-[#2A2A2A] border border-[#E5E0D8] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D8]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-3">
                Explore by Materiality
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {['European White Oak', 'Roman Travertine', 'Belgian Performance Flax', 'Italian Saddle Leather'].map(m => (
                  <button
                    key={m}
                    onClick={() => setQuery(m)}
                    className="p-3 bg-[#F5F2ED] text-left border border-[#E5E0D8] hover:border-[#2A2A2A] font-medium text-[#2A2A2A]"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
