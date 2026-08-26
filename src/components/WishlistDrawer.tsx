import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    closeWishlist,
    wishlist,
    removeFromWishlist,
    addToCart,
    navigateToProduct,
    navigateTo
  } = useShop();

  if (!isWishlistOpen) return null;

  const handleMoveAllToBag = () => {
    wishlist.forEach(item => {
      addToCart(item.product, item.selectedColor, item.product.sizes?.[0]?.label, 1);
    });
    closeWishlist();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeWishlist}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md sm:max-w-lg w-full bg-[#FDFCF9] shadow-2xl z-10 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#E5E0D8] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Heart className="w-5 h-5 text-[#A87C52] fill-[#A87C52]" />
            <h3 className="font-serif text-2xl text-[#2A2A2A] font-light">
              Saved Pieces
            </h3>
            <span className="text-xs text-[#A8A29A] font-light">
              ({wishlist.length})
            </span>
          </div>
          <button
            onClick={closeWishlist}
            className="p-1.5 text-[#A8A29A] hover:text-[#2A2A2A]"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E5E0D8]">
          {wishlist.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <Heart className="w-10 h-10 text-[#A8A29A] mx-auto" />
              <h4 className="font-serif text-2xl text-[#2A2A2A] font-light">No Saved Pieces Yet</h4>
              <p className="text-xs text-[#3D352F]/70 font-light max-w-xs mx-auto">
                Save your favorite dining tables, sectionals, and stone accents as you explore.
              </p>
              <button
                onClick={() => {
                  closeWishlist();
                  navigateTo('shop');
                }}
                className="mt-4 px-6 py-3 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F]"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            wishlist.map(item => (
              <div key={item.product.id} className="py-5 flex space-x-4 first:pt-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  onClick={() => {
                    closeWishlist();
                    navigateToProduct(item.product.id);
                  }}
                  className="w-20 h-24 object-cover bg-[#F5F2ED] border border-[#E5E0D8] cursor-pointer flex-shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h5
                        onClick={() => {
                          closeWishlist();
                          navigateToProduct(item.product.id);
                        }}
                        className="font-medium text-sm text-[#2A2A2A] hover:text-[#A87C52] cursor-pointer truncate"
                      >
                        {item.product.name}
                      </h5>
                      <button
                        onClick={() => removeFromWishlist(item.product.id)}
                        className="text-[#A8A29A] hover:text-[#2A2A2A] p-1 ml-2"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-[#3D352F]/70 mt-0.5">
                      Finish: <strong className="font-medium text-[#2A2A2A]">{item.selectedColor || item.product.defaultColor}</strong>
                    </p>
                    <p className="text-sm font-serif text-[#2A2A2A] mt-1">
                      ${item.product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="pt-3 flex space-x-2">
                    <button
                      onClick={() => {
                        addToCart(item.product, item.selectedColor, item.product.sizes?.[0]?.label, 1);
                      }}
                      className="flex-1 py-2 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {wishlist.length > 0 && (
          <div className="p-6 bg-[#F5F2ED] border-t border-[#E5E0D8] space-y-3">
            <button
              onClick={handleMoveAllToBag}
              className="w-full py-4 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Add All ({wishlist.length}) To Shopping Bag</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
