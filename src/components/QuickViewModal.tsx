import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Star, ArrowRight, Check } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct
  } = useShop();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor(quickViewProduct.defaultColor || quickViewProduct.colors[0]?.name || '');
      setSelectedSize(quickViewProduct.sizes?.[0]?.label || '');
      setSelectedImg(0);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const inWishlist = isInWishlist(product.id);

  const selectedSizeObj = product.sizes?.find(s => s.label === selectedSize);
  const currentPrice = product.price + (selectedSizeObj?.priceOffset || 0);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product, selectedColor, selectedSize, quantity);
    setTimeout(() => {
      setIsAdding(false);
      closeQuickView();
    }, 400);
  };

  const handleViewFullDetails = () => {
    closeQuickView();
    navigateToProduct(product.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FDFCF9] max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D8] z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 p-2 text-[#A8A29A] hover:text-[#2A2A2A] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Product Images */}
          <div className="space-y-3">
            <div className="aspect-[4/3] bg-[#F5F2ED] border border-[#E5E0D8] overflow-hidden">
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`aspect-[4/3] border overflow-hidden ${
                      selectedImg === i ? 'border-[#2A2A2A]' : 'border-[#E5E0D8] opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Form */}
          <div className="space-y-4">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A8A29A]">
                {product.category} • {product.collection || 'Signature Piece'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light mt-1">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-serif text-[#2A2A2A]">
                  ${currentPrice.toLocaleString()}
                </span>
                <div className="flex items-center space-x-1 text-xs text-[#3D352F]/70">
                  <Star className="w-3.5 h-3.5 text-[#A87C52] fill-current" />
                  <span className="font-semibold text-[#2A2A2A]">{product.rating}</span>
                  <span className="text-[#A8A29A]">({product.reviewCount})</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#3D352F]/70 font-light leading-relaxed line-clamp-3">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#2A2A2A] block mb-1.5">
                  Finish / Upholstery: <span className="font-normal text-[#A8A29A]">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center space-x-1.5 px-2.5 py-1 text-xs border ${
                        selectedColor === c.name
                          ? 'border-[#2A2A2A] bg-[#F5F2ED] font-semibold text-[#2A2A2A]'
                          : 'border-[#E5E0D8] text-[#3D352F]/70'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#2A2A2A] block mb-1.5">
                  Configuration:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map(s => (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize(s.label)}
                      className={`p-2 text-left text-xs border ${
                        selectedSize === s.label
                          ? 'border-[#2A2A2A] bg-[#F5F2ED] font-semibold text-[#2A2A2A]'
                          : 'border-[#E5E0D8] text-[#3D352F]/70'
                      }`}
                    >
                      <span className="block text-[#2A2A2A]">{s.label}</span>
                      <span className="text-[10px] text-[#A8A29A]">{s.dimensions}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleAdd}
                  disabled={isAdding}
                  className="flex-1 py-3.5 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  {isAdding ? (
                    <>
                      <Check className="w-4 h-4 text-[#A87C52]" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add To Bag — ${(currentPrice * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product, selectedColor)}
                  className="p-3.5 border border-[#E5E0D8] hover:border-[#2A2A2A] bg-[#FDFCF9] text-[#2A2A2A]"
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'text-[#A87C52] fill-[#A87C52]' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleViewFullDetails}
                className="w-full py-2 text-[10px] uppercase tracking-wider font-semibold text-[#2A2A2A] hover:text-[#A87C52] underline underline-offset-4 text-center"
              >
                View Full Specifications & Craft Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
