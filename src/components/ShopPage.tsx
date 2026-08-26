import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { collections } from '../data/collections';
import { ProductCard } from './ProductCard';
import {
  SlidersHorizontal,
  X,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  Grid3X3,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { navigation, navigateTo, navigateToCategory } = useShop();

  // Active filters
  const [selectedCategory, setSelectedCategory] = useState<string>(navigation.category || 'All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(navigation.subcategory || 'All');
  const [selectedCollection, setSelectedCollection] = useState<string>(navigation.collectionId || 'All');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState<number>(6000);
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [gridColumns, setGridColumns] = useState<3 | 4>(3);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if navigation changes
  React.useEffect(() => {
    if (navigation.category) {
      setSelectedCategory(navigation.category);
    }
    if (navigation.subcategory) {
      setSelectedSubcategory(navigation.subcategory);
    }
    if (navigation.collectionId) {
      setSelectedCollection(navigation.collectionId);
    }
  }, [navigation.category, navigation.subcategory, navigation.collectionId]);

  // Unique Materials
  const allMaterials = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      p.material.split('/').forEach(m => set.add(m.trim()));
    });
    return Array.from(set).slice(0, 10);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category filter
      if (selectedCategory !== 'All' && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      // Subcategory filter
      if (selectedSubcategory !== 'All' && selectedSubcategory !== 'New') {
        if (p.subcategory.toLowerCase() !== selectedSubcategory.toLowerCase()) {
          return false;
        }
      }
      // New arrivals special subcategory
      if (selectedSubcategory === 'New' && !p.isNew) {
        return false;
      }
      // Collection filter
      if (selectedCollection !== 'All') {
        const col = collections.find(c => c.id === selectedCollection || c.name.toLowerCase().includes(selectedCollection.toLowerCase()));
        if (col && !col.featuredProductIds.includes(p.id) && !p.collection?.toLowerCase().includes(col.name.toLowerCase())) {
          return false;
        }
      }
      // Material filter
      if (selectedMaterials.length > 0) {
        const matchesMat = selectedMaterials.some(m => p.material.toLowerCase().includes(m.toLowerCase()));
        if (!matchesMat) return false;
      }
      // Price
      if (p.price > priceMax) {
        return false;
      }
      // Min rating
      if (minRating > 0 && p.rating < minRating) {
        return false;
      }
      // Stock
      if (onlyInStock && !p.inStock) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory, selectedCollection, selectedMaterials, priceMax, minRating, onlyInStock]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return list;
  }, [filteredProducts, sortBy]);

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedSubcategory('All');
    setSelectedCollection('All');
    setSelectedMaterials([]);
    setPriceMax(6000);
    setMinRating(0);
    setOnlyInStock(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedSubcategory !== 'All' ||
    selectedCollection !== 'All' ||
    selectedMaterials.length > 0 ||
    priceMax < 6000 ||
    minRating > 0 ||
    onlyInStock;

  return (
    <div className="bg-[#FDFCF9] pt-4 pb-24 min-h-screen">
      {/* Breadcrumbs & Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#A8A29A] mb-4">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2A2A2A]">
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => resetAllFilters()} className="hover:text-[#2A2A2A]">
            Shop
          </button>
          {selectedCategory !== 'All' && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#2A2A2A] font-medium">{selectedCategory}</span>
            </>
          )}
          {selectedSubcategory !== 'All' && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#2A2A2A] font-medium">{selectedSubcategory}</span>
            </>
          )}
        </nav>

        {/* Page Title & Narrative */}
        <div className="border-b border-[#E5E0D8] pb-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
            {selectedSubcategory !== 'All'
              ? `${selectedSubcategory}`
              : selectedCategory !== 'All'
              ? `${selectedCategory} Collection`
              : 'The Complete Collection'}
          </h1>
          <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light mt-2 max-w-2xl">
            {selectedCategory === 'Living' && 'Sculptural seating, low travertine coffee tables, and architectural cabinetry designed for natural warmth.'}
            {selectedCategory === 'Dining' && 'Solid white oak trestle tables, vegetable-tanned leather seating, and monumental stone storage.'}
            {selectedCategory === 'Bedroom' && 'Quiet oak platform beds, natural linen bedding, and floating nightstands for acoustic rest.'}
            {selectedCategory === 'Outdoor' && 'Weathered teak, textured rope, and rust-resistant metals engineered with indoor elegance.'}
            {selectedCategory === 'All' && 'Handcrafted contemporary furniture made from natural wood, stone, linen, leather, and refined metals.'}
          </p>
        </div>

        {/* Action Controls Bar: Filter Toggle, Active Tags, Sort, Density */}
        <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E0D8]">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 bg-[#F5F2ED] border border-[#E5E0D8] text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
            </button>

            <span className="text-xs text-[#3D352F]/70">
              Showing <strong className="text-[#2A2A2A] font-semibold">{sortedProducts.length}</strong> handcrafted pieces
            </span>
          </div>

          {/* Sort & Grid Density */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="shop-sort" className="text-[10px] uppercase tracking-wider text-[#A8A29A] hidden sm:inline font-medium">
                Sort:
              </label>
              <select
                id="shop-sort"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-[#FDFCF9] border border-[#E5E0D8] text-xs py-2 px-3 focus:outline-none focus:border-[#2A2A2A] text-[#2A2A2A] font-medium"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Density switcher */}
            <div className="hidden lg:flex items-center space-x-1 border border-[#E5E0D8] p-0.5">
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 ${gridColumns === 3 ? 'bg-[#2A2A2A] text-[#FDFCF9]' : 'text-[#A8A29A] hover:text-[#2A2A2A]'}`}
                aria-label="3 Column Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 ${gridColumns === 4 ? 'bg-[#2A2A2A] text-[#FDFCF9]' : 'text-[#A8A29A] hover:text-[#2A2A2A]'}`}
                aria-label="4 Column Grid"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="pt-4 pb-2 flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-[#A8A29A] mr-1 font-semibold">
              Active:
            </span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center space-x-1 bg-[#F5F2ED] border border-[#E5E0D8] px-2.5 py-1 text-xs text-[#2A2A2A]">
                <span>Category: {selectedCategory}</span>
                <button onClick={() => setSelectedCategory('All')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSubcategory !== 'All' && (
              <span className="inline-flex items-center space-x-1 bg-[#F5F2ED] border border-[#E5E0D8] px-2.5 py-1 text-xs text-[#2A2A2A]">
                <span>Type: {selectedSubcategory}</span>
                <button onClick={() => setSelectedSubcategory('All')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedMaterials.map(m => (
              <span key={m} className="inline-flex items-center space-x-1 bg-[#F5F2ED] border border-[#E5E0D8] px-2.5 py-1 text-xs text-[#2A2A2A]">
                <span>{m}</span>
                <button onClick={() => toggleMaterial(m)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {priceMax < 6000 && (
              <span className="inline-flex items-center space-x-1 bg-[#F5F2ED] border border-[#E5E0D8] px-2.5 py-1 text-xs text-[#2A2A2A]">
                <span>Under ${priceMax.toLocaleString()}</span>
                <button onClick={() => setPriceMax(6000)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {onlyInStock && (
              <span className="inline-flex items-center space-x-1 bg-[#F5F2ED] border border-[#E5E0D8] px-2.5 py-1 text-xs text-[#2A2A2A]">
                <span>In Stock Only</span>
                <button onClick={() => setOnlyInStock(false)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={resetAllFilters}
              className="text-[10px] uppercase tracking-wider text-[#A87C52] underline underline-offset-4 ml-2 hover:text-[#2A2A2A]"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
          {/* Desktop Filter Sidebar (Col 3) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 pr-4">
            {/* Category Filter */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] pb-3 mb-3 border-b border-[#E5E0D8]">
                Categories
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedSubcategory('All');
                    }}
                    className={`w-full text-left py-1 transition-colors ${
                      selectedCategory === 'All' ? 'font-semibold text-[#2A2A2A]' : 'text-[#3D352F]/70 hover:text-[#2A2A2A]'
                    }`}
                  >
                    All Categories ({products.length})
                  </button>
                </li>
                {categories.map(cat => {
                  const count = products.filter(p => p.category.toLowerCase() === cat.slug.toLowerCase()).length;
                  const isCatSelected = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setSelectedSubcategory('All');
                        }}
                        className={`w-full text-left py-1 transition-colors flex items-center justify-between ${
                          isCatSelected ? 'font-semibold text-[#2A2A2A]' : 'text-[#3D352F]/70 hover:text-[#2A2A2A]'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-[#A8A29A]">({count})</span>
                      </button>

                      {/* Subcategories if category selected */}
                      {isCatSelected && (
                        <div className="pl-3 pt-1.5 pb-2 space-y-1.5 border-l border-[#E5E0D8] ml-1 mt-1">
                          {cat.subcategories.map(sub => (
                            <button
                              key={sub}
                              onClick={() => setSelectedSubcategory(sub)}
                              className={`block w-full text-left text-xs transition-colors ${
                                selectedSubcategory === sub
                                  ? 'font-semibold text-[#2A2A2A]'
                                  : 'text-[#3D352F]/70 hover:text-[#2A2A2A]'
                              }`}
                            >
                              • {sub}
                            </button>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E0D8]">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A]">
                  Max Price
                </h4>
                <span className="text-xs font-serif text-[#2A2A2A]">
                  ${priceMax.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={6000}
                step={100}
                value={priceMax}
                onChange={e => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#2A2A2A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A8A29A] mt-1">
                <span>$300</span>
                <span>$6,000+</span>
              </div>
            </div>

            {/* Materials Checkboxes */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] pb-3 mb-3 border-b border-[#E5E0D8]">
                Materials & Finishes
              </h4>
              <div className="space-y-2 text-xs">
                {allMaterials.map(mat => (
                  <label
                    key={mat}
                    className="flex items-center space-x-2.5 cursor-pointer text-[#3D352F]/70 hover:text-[#2A2A2A]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="rounded-none accent-[#2A2A2A] w-3.5 h-3.5"
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* In Stock & Fast Shipping */}
            <div className="pt-2">
              <label className="flex items-center space-x-2.5 cursor-pointer text-xs text-[#2A2A2A] font-medium">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={e => setOnlyInStock(e.target.checked)}
                  className="rounded-none accent-[#2A2A2A] w-3.5 h-3.5"
                />
                <span>In Stock for Immediate Delivery</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area (Col 9) */}
          <main className="lg:col-span-9">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-24 bg-[#F5F2ED] border border-[#E5E0D8] p-8">
                <Sparkles className="w-8 h-8 text-[#A8A29A] mx-auto mb-3" />
                <h3 className="font-serif text-2xl text-[#2A2A2A] font-light">No Pieces Match Your Criteria</h3>
                <p className="text-xs text-[#3D352F]/70 mt-2 max-w-md mx-auto">
                  Try adjusting your material, category, or price range filters to view other handcrafted items.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="mt-6 px-6 py-3 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-2 ${
                  gridColumns === 4 ? 'sm:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-3'
                } gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12`}
              >
                {sortedProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} priority={idx < 4} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#FDFCF9] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8]">
                <h3 className="font-serif text-xl text-[#2A2A2A] font-light">Filter Collection</h3>
                <button onClick={() => setMobileFilterOpen(false)}>
                  <X className="w-5 h-5 text-[#2A2A2A]" />
                </button>
              </div>

              <div className="py-6 space-y-6">
                {/* Category Mobile */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] mb-2">
                    Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...categories.map(c => c.name)].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 text-xs border ${
                          selectedCategory === cat ? 'bg-[#2A2A2A] text-[#FDFCF9]' : 'border-[#E5E0D8] text-[#3D352F]/70'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Mobile */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] mb-2">
                    Max Price: ${priceMax.toLocaleString()}
                  </h4>
                  <input
                    type="range"
                    min={300}
                    max={6000}
                    step={100}
                    value={priceMax}
                    onChange={e => setPriceMax(Number(e.target.value))}
                    className="w-full accent-[#2A2A2A]"
                  />
                </div>

                {/* Materials Mobile */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] mb-2">
                    Materials
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {allMaterials.map(mat => (
                      <button
                        key={mat}
                        onClick={() => toggleMaterial(mat)}
                        className={`px-2.5 py-1 text-xs border ${
                          selectedMaterials.includes(mat)
                            ? 'bg-[#2A2A2A] text-[#FDFCF9]'
                            : 'border-[#E5E0D8] text-[#3D352F]/70'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D8] flex space-x-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-3 border border-[#E5E0D8] text-[10px] uppercase tracking-wider font-bold text-[#A8A29A]"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                Apply ({sortedProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
