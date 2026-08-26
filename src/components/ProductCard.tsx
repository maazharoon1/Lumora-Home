import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const {
    navigateToProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    openQuickView
  } = useShop();

  const [selectedColor, setSelectedColor] = useState(product.defaultColor || product.colors[0]?.name || '');
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, selectedColor, product.sizes?.[0]?.label, 1);
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product, selectedColor);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  const handleColorSelect = (e: React.MouseEvent, colorName: string) => {
    e.stopPropagation();
    setSelectedColor(colorName);
  };

  return (
    <div
      onClick={() => navigateToProduct(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col justify-between bg-[#FDFCF9] transition-all duration-300 relative"
    >
      {/* Image Container with secondary hover cross-fade */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F2ED] border border-[#E5E0D8]">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isHovered && product.hoverImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading={priority ? 'eager' : 'lazy'}
        />

        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={`w-full h-full object-cover object-center absolute inset-0 transition-all duration-700 ease-in-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            loading="lazy"
          />
        )}

        {/* Badges: New, Best Seller */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
          {product.isNew && (
            <span className="bg-[#2A2A2A] text-[#FDFCF9] text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-0.5 shadow-xs">
              New
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="bg-[#E5E0D8] text-[#2A2A2A] text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-0.5 shadow-xs">
              Signature
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#FDFCF9]/90 hover:bg-[#FDFCF9] backdrop-blur-xs flex items-center justify-center text-[#2A2A2A] shadow-sm hover:scale-110 transition-all border border-[#E5E0D8]"
          aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              inWishlist ? 'text-[#A87C52] fill-[#A87C52]' : 'text-[#2A2A2A]'
            }`}
          />
        </button>

        {/* Quick View and Quick Add Actions Overlay on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="flex-1 py-2.5 bg-[#FDFCF9]/95 hover:bg-[#FDFCF9] text-[#2A2A2A] text-[9px] uppercase tracking-[0.18em] font-bold flex items-center justify-center space-x-1.5 shadow-md border border-[#E5E0D8] backdrop-blur-xs transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>Quick View</span>
          </button>

          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={isAdding}
            className="flex-1 py-2.5 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[9px] uppercase tracking-[0.18em] font-bold flex items-center justify-center space-x-1.5 shadow-md transition-colors"
          >
            {isAdding ? (
              <>
                <Check className="w-3 h-3 text-[#A87C52]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-3 pb-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Material Tag */}
          <div className="flex items-center justify-between text-[10px] text-[#A8A29A] uppercase tracking-wider mb-1 font-medium">
            <span>{product.category}</span>
            <span className="truncate max-w-[140px] text-right font-light text-[#A8A29A]">
              {product.material.split('/')[0]}
            </span>
          </div>

          {/* Product Name */}
          <h4 className="font-medium text-sm sm:text-base text-[#2A2A2A] group-hover:text-[#A87C52] transition-colors leading-snug line-clamp-1 tracking-tight">
            {product.name}
          </h4>

          {/* Price & Rating */}
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <span className="text-sm font-normal text-[#2A2A2A] font-serif">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#A8A29A] line-through font-serif">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 text-xs text-[#3D352F]">
              <Star className="w-3 h-3 text-[#A87C52] fill-[#A87C52]" />
              <span className="font-medium text-[#2A2A2A] text-[11px]">{product.rating}</span>
              <span className="text-[#A8A29A] text-[10px]">({product.reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-[#E5E0D8]/60 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              {product.colors.map(color => (
                <button
                  key={color.name}
                  type="button"
                  onClick={e => handleColorSelect(e, color.name)}
                  className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                    selectedColor === color.name
                      ? 'border-[#2A2A2A] ring-1 ring-[#2A2A2A] scale-110'
                      : 'border-[#E5E0D8] hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-[#A8A29A] font-light truncate max-w-[120px]">
              {selectedColor}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
