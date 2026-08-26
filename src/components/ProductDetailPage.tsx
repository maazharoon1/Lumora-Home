import React, { useState, useEffect } from 'react';
import { Product, ProductReview } from '../types';
import { useShop } from '../context/ShopContext';
import { getRelatedProducts, products } from '../data/products';
import { ProductCard } from './ProductCard';
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Check,
  Layers,
  Ruler,
  Clock,
  Share2,
  ZoomIn
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToCategory,
    navigateTo,
    openConsultationModal,
    recentlyViewed,
    showToast
  } = useShop();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.defaultColor || product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.label || '');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('details');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, title: '', comment: '' });
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(product.reviews || [
    {
      id: 'rev-1',
      author: 'Victoria Sterling',
      rating: 5,
      date: 'January 18, 2026',
      title: 'Architectural masterpiece for our living room',
      comment: 'The curves are even more majestic in person. The performance linen has an exquisite heavy hand that feels indestructible yet looks softly tailored. White-glove delivery was flawless.',
      verified: true,
      location: 'Greenwich, CT'
    },
    {
      id: 'rev-2',
      author: 'Marcus Vance',
      rating: 5,
      date: 'December 2, 2025',
      title: 'Supreme comfort meets sculptural beauty',
      comment: 'Deep enough for weekend afternoon reading, supportive enough for formal evening drinks. The craftsmanship on the beech frame joinery is impeccable.',
      verified: true,
      location: 'Pacific Palisades, CA'
    }
  ]);

  // Calculate dynamic price based on size offset
  const selectedSizeObj = product.sizes?.find(s => s.label === selectedSize);
  const currentPrice = product.price + (selectedSizeObj?.priceOffset || 0);

  const inWishlist = isInWishlist(product.id);
  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.title || !reviewForm.comment) return;
    const newRev: ProductReview = {
      id: `rev-${Date.now()}`,
      author: reviewForm.name,
      rating: reviewForm.rating,
      date: 'Just now',
      title: reviewForm.title,
      comment: reviewForm.comment,
      verified: true,
      location: 'Verified Client'
    };
    setReviewsList(prev => [newRev, ...prev]);
    setIsWriteReviewOpen(false);
    setReviewForm({ name: '', rating: 5, title: '', comment: '' });
    showToast('Review Submitted', 'Thank you for your valuable feedback.', 'info');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Product link copied to your clipboard.', 'info');
    }
  };

  return (
    <div className="bg-[#FDFCF9] pt-4 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#A8A29A]">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2A2A2A]">
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigateToCategory(product.category.toLowerCase())} className="hover:text-[#2A2A2A]">
            {product.category}
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigateToCategory(product.category.toLowerCase(), product.subcategory)} className="hover:text-[#2A2A2A]">
            {product.subcategory}
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#2A2A2A] font-semibold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Main Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Image Gallery & Zoom (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div
              className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#F5F2ED] border border-[#E5E0D8] overflow-hidden group cursor-zoom-in"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 group-hover:scale-105'
                }`}
              />
              <button
                type="button"
                className="absolute bottom-4 right-4 bg-[#FDFCF9]/90 backdrop-blur-xs p-2 text-[#2A2A2A] shadow-xs hover:bg-[#FDFCF9]"
                aria-label="Toggle zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`aspect-[4/3] overflow-hidden bg-[#F5F2ED] border transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#2A2A2A] ring-1 ring-[#2A2A2A]'
                        : 'border-[#E5E0D8] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Material & Craft Assurance Banner */}
            <div className="bg-[#F5F2ED] p-5 border border-[#E5E0D8] flex items-center justify-between mt-6">
              <div className="flex items-center space-x-3">
                <Layers className="w-5 h-5 text-[#A8A29A]" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A]">
                    Order Material Swatches
                  </h5>
                  <p className="text-xs text-[#3D352F]/70 font-light">
                    Experience this fabric, leather, or stone sample in your home lighting.
                  </p>
                </div>
              </div>
              <button
                onClick={() => openConsultationModal('Material Swatch Box Request')}
                className="px-4 py-2 bg-[#FDFCF9] border border-[#E5E0D8] hover:border-[#2A2A2A] text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] transition-colors"
              >
                Request Swatches
              </button>
            </div>
          </div>

          {/* Right Column: Configuration & Purchase Specs (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header: Collection, Title, Rating, Price */}
            <div>
              {product.collection && (
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-1">
                  {product.collection}
                </span>
              )}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#2A2A2A] font-light leading-tight">
                {product.name}
              </h1>

              {/* Price & Reviews */}
              <div className="mt-3 flex items-center justify-between pb-5 border-b border-[#E5E0D8]">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-serif text-[#2A2A2A]">
                    ${currentPrice.toLocaleString()}
                  </span>
                  {selectedSizeObj?.priceOffset !== undefined && selectedSizeObj.priceOffset !== 0 && (
                    <span className="text-xs text-[#A8A29A]">
                      ({selectedSizeObj.priceOffset > 0 ? '+' : ''}${selectedSizeObj.priceOffset})
                    </span>
                  )}
                </div>

                <a
                  href="#reviews"
                  className="flex items-center space-x-1.5 text-xs text-[#3D352F]/70 hover:text-[#2A2A2A] transition-colors"
                >
                  <div className="flex items-center text-[#A87C52]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'opacity-40'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-[#2A2A2A]">{product.rating}</span>
                  <span>({reviewsList.length} reviews)</span>
                </a>
              </div>
            </div>

            {/* Description Excerpt */}
            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Color Option Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider font-semibold text-[#2A2A2A] text-[10px]">
                    Upholstery / Finish:
                  </span>
                  <span className="text-[#3D352F]/70 font-medium">{selectedColor}</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center space-x-2 px-3 py-1.5 border text-xs transition-all ${
                        selectedColor === color.name
                          ? 'border-[#2A2A2A] bg-[#FDFCF9] font-semibold ring-1 ring-[#2A2A2A]'
                          : 'border-[#E5E0D8] bg-[#FDFCF9] text-[#3D352F]/70 hover:border-[#2A2A2A]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size / Dimension Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider font-semibold text-[#2A2A2A] text-[10px]">
                    Size / Dimension:
                  </span>
                  <span className="text-[#3D352F]/70">{selectedSizeObj?.dimensions}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size.label)}
                      className={`p-2.5 text-left border text-xs transition-all ${
                        selectedSize === size.label
                          ? 'border-[#2A2A2A] bg-[#FDFCF9] font-semibold ring-1 ring-[#2A2A2A]'
                          : 'border-[#E5E0D8] bg-[#FDFCF9] text-[#3D352F]/70 hover:border-[#2A2A2A]'
                      }`}
                    >
                      <span className="block font-medium text-[#2A2A2A]">{size.label}</span>
                      <span className="block text-[10px] text-[#A8A29A] mt-0.5">{size.dimensions}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Specs Quick-Look: Dimensions & Material */}
            <div className="p-4 bg-[#F5F2ED] border border-[#E5E0D8] grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#A8A29A] uppercase tracking-wider block text-[10px] font-medium">
                  Overall Dimensions
                </span>
                <span className="font-medium text-[#2A2A2A] mt-0.5 block">
                  {selectedSizeObj?.dimensions || product.dimensions}
                </span>
              </div>
              {product.seatHeight && (
                <div>
                  <span className="text-[#A8A29A] uppercase tracking-wider block text-[10px] font-medium">
                    Seat Height
                  </span>
                  <span className="font-medium text-[#2A2A2A] mt-0.5 block">
                    {product.seatHeight}
                  </span>
                </div>
              )}
            </div>

            {/* Quantity and Primary Actions */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center space-x-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#E5E0D8] bg-[#FDFCF9]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-[#2A2A2A] hover:bg-[#F5F2ED] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-semibold text-[#2A2A2A]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-[#2A2A2A] hover:bg-[#F5F2ED] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag — ${(currentPrice * quantity).toLocaleString()}</span>
                </button>

                {/* Wishlist Heart */}
                <button
                  onClick={() => toggleWishlist(product, selectedColor)}
                  className="p-4 border border-[#E5E0D8] hover:border-[#2A2A2A] bg-[#FDFCF9] text-[#2A2A2A] transition-colors"
                  aria-label="Save to wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      inWishlist ? 'text-[#A87C52] fill-[#A87C52]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* White-Glove Guarantee Pill */}
              <div className="p-3.5 bg-[#FDFCF9] border border-[#E5E0D8] flex items-start space-x-3">
                <Truck className="w-4 h-4 text-[#A87C52] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#2A2A2A]">
                    {currentPrice >= 3500
                      ? 'Complimentary White-Glove Delivery Included'
                      : 'White-Glove In-Home Delivery Available'}
                  </p>
                  <p className="text-[#3D352F]/70 mt-0.5 font-light">
                    Includes room of choice placement, full assembly, and packaging removal by specialists.
                  </p>
                </div>
              </div>
            </div>

            {/* Collapsible Accordions: Details, Care, Dimensions, Delivery */}
            <div className="border-t border-[#E5E0D8] pt-4 divide-y divide-[#E5E0D8]">
              {/* Accordion 1: Product Details */}
              <div className="py-3">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'details' ? null : 'details')}
                  className="w-full flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] py-1 text-left"
                >
                  <span>Product Details & Joinery</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'details' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === 'details' && (
                  <div className="pt-3 pb-2 text-xs text-[#3D352F]/70 space-y-2 leading-relaxed font-light">
                    <ul className="list-disc pl-4 space-y-1.5">
                      {product.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 2: Materials & Care */}
              <div className="py-3">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'care' ? null : 'care')}
                  className="w-full flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] py-1 text-left"
                >
                  <span>Materials & Care Guide</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'care' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === 'care' && (
                  <div className="pt-3 pb-2 text-xs text-[#3D352F]/70 space-y-2 leading-relaxed font-light">
                    <p className="font-medium text-[#2A2A2A]">
                      Primary Material: {product.material}
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5">
                      {product.careGuide.map((care, i) => (
                        <li key={i}>{care}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 3: Dimensions & Fit Guide */}
              <div className="py-3">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'dimensions' ? null : 'dimensions')}
                  className="w-full flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] py-1 text-left"
                >
                  <span>Dimensions & Hallway Clearance</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'dimensions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === 'dimensions' && (
                  <div className="pt-3 pb-2 text-xs text-[#3D352F]/70 space-y-2 leading-relaxed font-light">
                    <p>• Standard Dimensions: {product.dimensions}</p>
                    {product.seatHeight && <p>• Seat Height: {product.seatHeight}</p>}
                    {product.weight && <p>• Product Weight: {product.weight}</p>}
                    <p>• Minimum Doorway Width: 32" required for standard transit.</p>
                  </div>
                )}
              </div>

              {/* Accordion 4: White-Glove Delivery & Returns */}
              <div className="py-3">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'delivery' ? null : 'delivery')}
                  className="w-full flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#2A2A2A] py-1 text-left"
                >
                  <span>White-Glove Delivery & Returns</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'delivery' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === 'delivery' && (
                  <div className="pt-3 pb-2 text-xs text-[#3D352F]/70 space-y-2 leading-relaxed font-light">
                    <p>{product.shippingInfo}</p>
                    <p className="mt-2">
                      30-Day In-Home Trial: We want you to love living with your piece. Return within 30 days for a full refund or exchange.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Design Help & Share */}
            <div className="flex items-center justify-between pt-4 text-xs text-[#3D352F]/70">
              <button
                onClick={() => openConsultationModal(`Design Consultation for ${product.name}`)}
                className="underline underline-offset-4 hover:text-[#2A2A2A] text-[11px]"
              >
                Ask a Design Specialist
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-1 hover:text-[#2A2A2A] text-[11px]"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Piece</span>
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div id="reviews" className="mt-24 pt-16 border-t border-[#E5E0D8]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A87C52] block mb-2">
                Client Experiences
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2A2A] font-light">
                Customer Reviews
              </h2>
              <div className="flex items-center space-x-3 mt-3">
                <div className="flex text-[#A87C52]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#2A2A2A]">{product.rating} Out of 5.0</span>
                <span className="text-xs text-[#3D352F]/70">Based on {reviewsList.length} verified purchases</span>
              </div>
            </div>

            <button
              onClick={() => setIsWriteReviewOpen(!isWriteReviewOpen)}
              className="px-6 py-3 border border-[#2A2A2A] text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#FDFCF9] transition-colors"
            >
              Write a Review
            </button>
          </div>

          {/* Write Review Form */}
          {isWriteReviewOpen && (
            <form
              onSubmit={handleReviewSubmit}
              className="bg-[#F5F2ED] p-6 sm:p-8 border border-[#E5E0D8] mb-12 max-w-2xl animate-in fade-in duration-300"
            >
              <h4 className="font-serif text-xl text-[#2A2A2A] font-light mb-4">Share Your Experience</h4>
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.name}
                    onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                    placeholder="e.g. Katherine L."
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    Rating
                  </label>
                  <select
                    value={reviewForm.rating}
                    onChange={e => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                    className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                  >
                    <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                    <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                    <option value={3}>★★★☆☆ (3 Stars - Satisfactory)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    Headline
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.title}
                    onChange={e => setReviewForm({ ...reviewForm, title: e.target.value })}
                    className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                    placeholder="e.g. Beyond expectations in quality"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    Review Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={reviewForm.comment}
                    onChange={e => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                    placeholder="Describe the comfort, materials, and delivery experience..."
                  />
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-wider font-bold hover:bg-[#3D352F]"
                  >
                    Post Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewOpen(false)}
                    className="px-6 py-2.5 border border-[#E5E0D8] text-[#A8A29A] text-[10px] uppercase tracking-wider hover:text-[#2A2A2A]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reviewsList.map(rev => (
              <div key={rev.id} className="p-6 bg-[#F5F2ED] border border-[#E5E0D8] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#A87C52]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#A8A29A]">{rev.date}</span>
                </div>

                <h4 className="font-serif text-lg text-[#2A2A2A] font-light">
                  {rev.title}
                </h4>

                <p className="text-xs text-[#3D352F]/70 font-light leading-relaxed">
                  "{rev.comment}"
                </p>

                <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs text-[#3D352F]/70">
                  <span className="font-medium text-[#2A2A2A]">{rev.author}</span>
                  {rev.verified && (
                    <span className="text-[10px] text-[#A87C52] flex items-center space-x-1 font-semibold uppercase tracking-wider">
                      <Check className="w-3 h-3 text-[#A87C52]" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E5E0D8]">
            <div className="mb-10 text-center">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A87C52] block mb-2">
                Harmonious Pairings
              </span>
              <h3 className="font-serif text-3xl text-[#2A2A2A] font-light">
                Complete The Setting
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Products */}
        {recentlyViewed.filter(p => p.id !== product.id).length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5E0D8]">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A87C52] block mb-1">
                Your Browsing History
              </span>
              <h3 className="font-serif text-2xl text-[#2A2A2A] font-light">
                Recently Viewed
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {recentlyViewed
                .filter(p => p.id !== product.id)
                .slice(0, 4)
                .map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
