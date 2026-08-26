import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, ChevronRight, Sparkles, MapPin, PhoneCall, User } from 'lucide-react';
import { categories } from '../data/categories';
import { collections } from '../data/collections';

export const Header: React.FC = () => {
  const {
    navigation,
    navigateTo,
    navigateToCategory,
    navigateToCollection,
    openCart,
    openWishlist,
    openSearch,
    cartCount,
    wishlistCount,
    cartTotal,
    openConsultationModal
  } = useShop();

  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut ⌘K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openSearch]);

  const handleCategoryClick = (catSlug: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    navigateToCategory(catSlug);
  };

  const handleSubcategoryClick = (catSlug: string, sub: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    navigateToCategory(catSlug, sub);
  };

  const handleCollectionClick = (collectionId: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    navigateToCollection(collectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#2A2A2A] text-[#FDFCF9] py-2 px-4 text-[10px] tracking-[0.2em] uppercase border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-6 text-[10px] text-[#A8A29A]">
            <button
              onClick={() => navigateTo('showrooms')}
              className="hover:text-[#FDFCF9] transition-colors flex items-center space-x-1.5"
            >
              <MapPin className="w-3 h-3 text-[#A87C52]" />
              <span>Showrooms: New York • Los Angeles • Chicago</span>
            </button>
          </div>

          <div className="w-full md:w-auto text-center font-medium tracking-[0.2em] text-[10px]">
            <span>Complimentary White-Glove Delivery on Orders Over $3,500</span>
          </div>

          <div className="hidden md:flex items-center space-x-5 text-[10px] text-[#A8A29A]">
            <button
              onClick={() => openConsultationModal('Complimentary Design Consultation')}
              className="hover:text-[#FDFCF9] transition-colors flex items-center space-x-1"
            >
              <Sparkles className="w-3 h-3 text-[#A87C52]" />
              <span>Bespoke Design Studio</span>
            </button>
            <span className="text-[#3D352F]">|</span>
            <button
              onClick={() => navigateTo('journal')}
              className="hover:text-[#FDFCF9] transition-colors tracking-widest"
            >
              The Journal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FDFCF9]/95 backdrop-blur-md shadow-xs border-b border-[#E5E0D8]'
            : 'bg-[#FDFCF9] border-b border-[#E5E0D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#2A2A2A] hover:text-[#A8A29A] transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={openSearch}
                className="p-2 ml-1 text-[#2A2A2A] hover:text-[#A8A29A] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex flex-col items-center lg:items-start group text-left"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.15em] font-light text-[#2A2A2A] uppercase leading-none group-hover:text-[#3D352F] transition-colors">
                  LUMORA HOME
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-[#A8A29A] font-light mt-1">
                  Furniture With a Sense of Place
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              <button
                onClick={() => navigateTo('shop', { subcategory: 'New' })}
                className="text-[10px] xl:text-[11px] uppercase tracking-widest font-semibold text-[#3D352F] hover:opacity-50 transition-opacity py-2"
                onMouseEnter={() => setActiveMegaMenu(null)}
              >
                New Arrivals
              </button>

              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('living')}
              >
                <button
                  onClick={() => handleCategoryClick('living')}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-widest font-semibold py-2 flex items-center space-x-1 transition-all ${
                    activeMegaMenu === 'living' || navigation.category === 'Living'
                      ? 'text-[#2A2A2A] border-b border-[#2A2A2A]'
                      : 'text-[#3D352F] hover:opacity-50'
                  }`}
                >
                  <span>Living</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('dining')}
              >
                <button
                  onClick={() => handleCategoryClick('dining')}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-widest font-semibold py-2 flex items-center space-x-1 transition-all ${
                    activeMegaMenu === 'dining' || navigation.category === 'Dining'
                      ? 'text-[#2A2A2A] border-b border-[#2A2A2A]'
                      : 'text-[#3D352F] hover:opacity-50'
                  }`}
                >
                  <span>Dining</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('bedroom')}
              >
                <button
                  onClick={() => handleCategoryClick('bedroom')}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-widest font-semibold py-2 flex items-center space-x-1 transition-all ${
                    activeMegaMenu === 'bedroom' || navigation.category === 'Bedroom'
                      ? 'text-[#2A2A2A] border-b border-[#2A2A2A]'
                      : 'text-[#3D352F] hover:opacity-50'
                  }`}
                >
                  <span>Bedroom</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              </div>

      
             

              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('collections')}
              >
                <button
                  onClick={() => navigateTo('shop')}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-widest font-semibold py-2 flex items-center space-x-1 transition-all text-[#A87C52] hover:opacity-75 ${
                    activeMegaMenu === 'collections'
                      ? 'border-b border-[#A87C52]'
                      : ''
                  }`}
                >
                  <span>Collections</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>
              </div>

              
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search Trigger */}
              <button
                onClick={openSearch}
                className="hidden lg:flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors p-1"
                aria-label="Search Lumora Home"
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline text-[#A8A29A]">Search (⌘K)</span>
              </button>

              {/* Account Button */}
              <button
                onClick={() => setIsAccountModalOpen(true)}
                className="p-1 text-[#2A2A2A] hover:text-[#A87C52] transition-colors relative"
                aria-label="My Account"
              >
                <User className="w-4 h-4" />
              </button>

              {/* Wishlist Trigger */}
              <button
                onClick={openWishlist}
                className="p-1 text-[#2A2A2A] hover:text-[#A87C52] transition-colors relative"
                aria-label={`Wishlist (${wishlistCount} items)`}
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-[#2A2A2A] text-[#FDFCF9] text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Trigger */}
              <button
                onClick={openCart}
                className="flex items-center space-x-2 p-1 text-[#2A2A2A] hover:text-[#A87C52] transition-colors group"
                aria-label={`Shopping Bag (${cartCount} items)`}
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-[#2A2A2A] text-[#FDFCF9] text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[11px] tracking-widest uppercase font-medium">
                  Bag ({cartCount})
                </span>
                {cartCount > 0 && (
                  <span className="hidden xl:inline text-[11px] font-semibold tracking-wide text-[#3D352F]">
                    ${cartTotal.toLocaleString()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Overlay */}
        {activeMegaMenu && (
          <div
            className="absolute top-full left-0 w-full bg-[#FDFCF9] border-b border-[#E5E0D8] shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-200"
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              {activeMegaMenu === 'living' && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Col 1: Seating */}
                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Seating
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      {['Sofas', 'Sectionals', 'Lounge Chairs', 'Recliners', 'Ottomans'].map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubcategoryClick('living', sub)}
                            className="hover:text-[#2A2A2A] hover:translate-x-1 transition-all duration-150"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2: Tables */}
                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Tables
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      {['Coffee Tables', 'Side Tables', 'Console Tables', 'Desks'].map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubcategoryClick('living', sub)}
                            className="hover:text-[#2A2A2A] hover:translate-x-1 transition-all duration-150"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 mt-6 border-b border-[#E5E0D8]">
                      Shop by Style
                    </h4>
                    <ul className="space-y-2 text-xs text-[#3D352F]/80">
                      {['Modern', 'Organic', 'Classic', 'Contemporary'].map(style => (
                        <li key={style}>
                          <button
                            onClick={() => {
                              setActiveMegaMenu(null);
                              navigateTo('shop', { category: 'Living' });
                            }}
                            className="hover:text-[#2A2A2A] text-xs transition-colors"
                          >
                            {style}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: Featured Collections */}
                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Featured
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      <li>
                        <button
                          onClick={() => handleCollectionClick('sienna')}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          The Sienna Collection
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">Curved profiles & tactile linen</p>
                      </li>
                      <li className="pt-2">
                        <button
                          onClick={() => handleCollectionClick('calder')}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          The Calder Collection
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">Architectural oak & leather</p>
                      </li>
                      <li className="pt-2">
                        <button
                          onClick={() => handleSubcategoryClick('living', 'New')}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          New Living Arrivals
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">The Autumn release</p>
                      </li>
                    </ul>
                  </div>

                  {/* Col 4: Visual Story Card */}
                  <div className="col-span-3 bg-[#F5F2ED] p-4 border border-[#E5E0D8] flex flex-col justify-between">
                    <div>
                      <div className="overflow-hidden mb-3 aspect-[4/3] bg-[#F9F7F2]">
                        <img
                          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                          alt="Sienna Living Collection"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#A8A29A] font-bold">
                        Spotlight
                      </span>
                      <h5 className="font-serif text-lg text-[#2A2A2A] mt-0.5 font-normal">The Sienna Curved Sofa</h5>
                      <p className="text-xs text-[#3D352F]/70 mt-1 line-clamp-2 leading-relaxed">
                        Deep bench seating wrapped in organic Belgian performance linen.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveMegaMenu(null);
                        navigateTo('product', { productId: 'sienna-curved-sofa' });
                      }}
                      className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] border-b border-[#2A2A2A] pb-0.5 hover:text-[#A87C52] hover:border-[#A87C52] text-left self-start transition-colors"
                    >
                      Explore Piece →
                    </button>
                  </div>
                </div>
              )}

              {activeMegaMenu === 'dining' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Tables & Storage
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      {['Dining Tables', 'Sideboards & Storage', 'Benches'].map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubcategoryClick('dining', sub)}
                            className="hover:text-[#2A2A2A] hover:translate-x-1 transition-all duration-150"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Seating
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      {['Dining Chairs', 'Bar Stools', 'Leather Chairs'].map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubcategoryClick('dining', sub)}
                            className="hover:text-[#2A2A2A] hover:translate-x-1 transition-all duration-150"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Featured In Dining
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      <li>
                        <button
                          onClick={() => handleCollectionClick('calder')}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          The Calder Oak Series
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">Solid white oak with pillared trestles</p>
                      </li>
                      <li className="pt-2">
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            navigateTo('product', { productId: 'avery-leather-dining-chair' });
                          }}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          Avery Saddle Leather Chairs
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">Full-grain vegetable tanned</p>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-3 bg-[#F5F2ED] p-4 border border-[#E5E0D8]">
                    <div className="aspect-[4/3] overflow-hidden mb-3 bg-[#F9F7F2]">
                      <img
                        src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80"
                        alt="Calder Dining Room"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#A8A29A] font-bold">
                      Featured Suite
                    </span>
                    <h5 className="font-serif text-lg text-[#2A2A2A] mt-0.5 font-normal">The Calder Dining Table</h5>
                    <button
                      onClick={() => {
                        setActiveMegaMenu(null);
                        navigateTo('product', { productId: 'calder-oak-dining-table' });
                      }}
                      className="mt-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] border-b border-[#2A2A2A] pb-0.5 hover:text-[#A87C52] hover:border-[#A87C52] inline-block transition-colors"
                    >
                      View Table Specs →
                    </button>
                  </div>
                </div>
              )}

              {activeMegaMenu === 'bedroom' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Beds & Frameworks
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      {['Beds', 'Platform Beds', 'Headboards'].map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubcategoryClick('bedroom', sub)}
                            className="hover:text-[#2A2A2A] hover:translate-x-1 transition-all duration-150"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Bedside & Storage
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      {['Nightstands', 'Dressers', 'Bedding'].map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubcategoryClick('bedroom', sub)}
                            className="hover:text-[#2A2A2A] hover:translate-x-1 transition-all duration-150"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3D352F] pb-3 mb-3 border-b border-[#E5E0D8]">
                      Bedroom Stories
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#3D352F]/80">
                      <li>
                        <button
                          onClick={() => handleCollectionClick('rowan')}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          The Rowan Bedroom Collection
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">Quiet solid oak & organic linen</p>
                      </li>
                      <li className="pt-2">
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            navigateTo('journal-article', { articleId: 'creating-a-calm-bedroom' });
                          }}
                          className="font-medium text-[#2A2A2A] hover:text-[#A87C52] transition-colors"
                        >
                          Journal: Creating a Calm Bedroom
                        </button>
                        <p className="text-[11px] text-[#A8A29A] mt-0.5">5 min read on acoustic rest</p>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-3 bg-[#F5F2ED] p-4 border border-[#E5E0D8]">
                    <div className="aspect-[4/3] overflow-hidden mb-3 bg-[#F9F7F2]">
                      <img
                        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                        alt="Rowan Bed"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#A8A29A] font-bold">
                      Signature Rest
                    </span>
                    <h5 className="font-serif text-lg text-[#2A2A2A] mt-0.5 font-normal">Rowan Platform Bed</h5>
                    <button
                      onClick={() => {
                        setActiveMegaMenu(null);
                        navigateTo('product', { productId: 'rowan-platform-bed' });
                      }}
                      className="mt-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] border-b border-[#2A2A2A] pb-0.5 hover:text-[#A87C52] hover:border-[#A87C52] inline-block transition-colors"
                    >
                      Configure Bed →
                    </button>
                  </div>
                </div>
              )}

              {activeMegaMenu === 'collections' && (
                <div className="grid grid-cols-5 gap-6">
                  {collections.map(col => (
                    <div
                      key={col.id}
                      onClick={() => handleCollectionClick(col.id)}
                      className="group cursor-pointer bg-[#F5F2ED] p-3.5 border border-[#E5E0D8] hover:border-[#2A2A2A] transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden mb-2.5 bg-[#F9F7F2]">
                        <img
                          src={col.heroImage}
                          alt={col.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h5 className="font-serif text-base text-[#2A2A2A] font-medium group-hover:text-[#A87C52]">
                        {col.name}
                      </h5>
                      <p className="text-[11px] text-[#3D352F]/70 line-clamp-2 mt-1">
                        {col.tagline}
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#2A2A2A] font-bold mt-2.5 inline-block">
                        Explore Collection →
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Slide-Out Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-sm w-full bg-[#FDFCF9] shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            <div>
              {/* Header inside mobile drawer */}
              <div className="p-5 border-b border-[#E5E0D8] flex items-center justify-between">
                <div>
                  <span className="font-serif text-xl tracking-[0.15em] font-light text-[#2A2A2A] uppercase">
                    LUMORA HOME
                  </span>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#A8A29A]">
                    Sense of Place
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#2A2A2A] hover:text-[#A8A29A]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="p-4 space-y-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo('shop', { subcategory: 'New' });
                  }}
                  className="w-full text-left py-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#2A2A2A] hover:bg-[#F5F2ED] rounded-none flex items-center justify-between"
                >
                  <span>New Arrivals</span>
                  <span className="text-[9px] bg-[#2A2A2A] text-[#FDFCF9] px-2 py-0.5 font-bold tracking-widest">NEW</span>
                </button>

                {categories.map(cat => (
                  <div key={cat.id} className="border-b border-[#E5E0D8]/60">
                    <div className="flex items-center justify-between py-3 px-3 hover:bg-[#F5F2ED]">
                      <button
                        onClick={() => handleCategoryClick(cat.slug)}
                        className="text-xs font-semibold uppercase tracking-widest text-[#3D352F] text-left flex-1"
                      >
                        {cat.name}
                      </button>
                      <button
                        onClick={() => setMobileExpandedCat(mobileExpandedCat === cat.id ? null : cat.id)}
                        className="p-1 text-[#A8A29A]"
                        aria-label={`Toggle ${cat.name} subcategories`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileExpandedCat === cat.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileExpandedCat === cat.id && (
                      <div className="pl-6 pr-3 pb-3 space-y-2 bg-[#F5F2ED]/50">
                        {cat.subcategories.map(sub => (
                          <button
                            key={sub}
                            onClick={() => handleSubcategoryClick(cat.slug, sub)}
                            className="block w-full text-left text-xs text-[#3D352F]/80 hover:text-[#2A2A2A] py-1"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo('design-services');
                  }}
                  className="w-full text-left py-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#3D352F] hover:bg-[#F5F2ED]"
                >
                  Design Services
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo('showrooms');
                  }}
                  className="w-full text-left py-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#3D352F] hover:bg-[#F5F2ED]"
                >
                  Showrooms & Studios
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo('journal');
                  }}
                  className="w-full text-left py-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#3D352F] hover:bg-[#F5F2ED]"
                >
                  The Lumora Journal
                </button>
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="p-5 border-t border-[#E5E0D8] bg-[#F5F2ED] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                className="w-full py-3 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold text-center hover:bg-[#3D352F] transition-colors"
              >
                Book Design Consultation
              </button>
              <div className="text-center text-xs text-[#A8A29A]">
                <p>Client Concierge: +1 (800) 586-6721</p>
                <p className="text-[10px] mt-1 text-[#A8A29A] tracking-wider uppercase">White-Glove On $3,500+</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Account Info Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsAccountModalOpen(false)}
          />
          <div className="relative bg-[#FDFCF9] max-w-md w-full p-8 shadow-2xl border border-[#E5E0D8] z-10">
            <button
              onClick={() => setIsAccountModalOpen(false)}
              className="absolute top-4 right-4 text-[#A8A29A] hover:text-[#2A2A2A]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8A29A] font-bold">
                Client Portal
              </span>
              <h3 className="font-serif text-2xl text-[#2A2A2A] mt-1 font-light">Lumora Signature Account</h3>
              <p className="text-xs text-[#3D352F]/70 mt-2 leading-relaxed">
                Manage your orders, custom finish specs, and interior design projects.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F5F2ED] p-4 border border-[#E5E0D8]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#2A2A2A] uppercase tracking-wider">
                      Demo VIP Client
                    </p>
                    <p className="text-xs text-[#A8A29A]">client@lumorahome.com</p>
                  </div>
                  <span className="text-[9px] bg-[#2A2A2A] text-[#FDFCF9] px-2 py-1 uppercase tracking-widest font-bold">
                    Trade Platinum
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-[#E5E0D8] text-xs text-[#3D352F]/80 space-y-1">
                  <p>• Saved Design Projects: 2</p>
                  <p>• Complimentary White-Glove Status: Active</p>
                  <p>• Dedicated Designer: Elena Vance</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setIsAccountModalOpen(false);
                    openWishlist();
                  }}
                  className="flex-1 py-2.5 border border-[#2A2A2A] text-[10px] uppercase tracking-[0.18em] font-bold text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#FDFCF9] transition-colors"
                >
                  View Saved Pieces ({wishlistCount})
                </button>
                <button
                  onClick={() => {
                    setIsAccountModalOpen(false);
                    openConsultationModal();
                  }}
                  className="flex-1 py-2.5 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.18em] font-bold hover:bg-[#3D352F] transition-colors"
                >
                  Consult Designer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
