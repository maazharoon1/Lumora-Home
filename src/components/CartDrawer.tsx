import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Truck, Sparkles, Check } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    closeCart,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    qualifiesForFreeDelivery,
    freeDeliveryProgress,
    freeDeliveryRemaining,
    navigateToProduct,
    navigateTo
  } = useShop();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [promoInput, setPromoInput] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoInput.trim().toUpperCase() === 'LUMORA10') {
      setDiscountAmount(Math.round(cartTotal * 0.1));
      setPromoApplied(true);
    } else if (promoInput.trim().toUpperCase() === 'WELCOME') {
      setDiscountAmount(200);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid promotion code. Try LUMORA10 or WELCOME');
    }
  };

  const finalSubtotal = Math.max(0, cartTotal - discountAmount);

  return (
    <>
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={closeCart}
        />

        {/* Drawer Panel */}
        <div className="fixed inset-y-0 right-0 max-w-md sm:max-w-lg w-full bg-[#FDFCF9] shadow-2xl z-10 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#E5E0D8] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-[#2A2A2A]" />
              <h3 className="font-serif text-2xl text-[#2A2A2A] font-light">
                Shopping Bag
              </h3>
              <span className="text-xs text-[#A8A29A] font-light">
                ({cartCount} {cartCount === 1 ? 'piece' : 'pieces'})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#A8A29A] hover:text-[#2A2A2A] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Meter Bar */}
          <div className="px-6 py-3.5 bg-[#F5F2ED] border-b border-[#E5E0D8]">
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center space-x-1.5 font-medium text-[#2A2A2A]">
                <Truck className="w-3.5 h-3.5 text-[#A87C52]" />
                <span className="text-[11px]">
                  {qualifiesForFreeDelivery
                    ? 'You have unlocked Complimentary White-Glove Delivery!'
                    : `Add $${freeDeliveryRemaining.toLocaleString()} for Complimentary White-Glove Delivery`}
                </span>
              </div>
            </div>
            <div className="w-full bg-[#E5E0D8] h-1.5 overflow-hidden">
              <div
                className="bg-[#2A2A2A] h-full transition-all duration-500"
                style={{ width: `${freeDeliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E5E0D8]">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <ShoppingBag className="w-10 h-10 text-[#A8A29A] mx-auto" />
                <h4 className="font-serif text-2xl text-[#2A2A2A] font-light">Your Bag Is Empty</h4>
                <p className="text-xs text-[#3D352F]/70 font-light max-w-xs mx-auto">
                  Explore our handcrafted collections to furnish your living, dining, and bedroom spaces.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    navigateTo('shop');
                  }}
                  className="mt-4 px-6 py-3 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F]"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map(item => {
                let itemPrice = item.product.price;
                if (item.size && item.product.sizes) {
                  const sz = item.product.sizes.find(s => s.label === item.size);
                  if (sz?.priceOffset) itemPrice += sz.priceOffset;
                }

                return (
                  <div key={item.id} className="py-5 flex space-x-4 first:pt-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      onClick={() => {
                        closeCart();
                        navigateToProduct(item.product.id);
                      }}
                      className="w-20 h-24 object-cover bg-[#F5F2ED] border border-[#E5E0D8] cursor-pointer flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h5
                            onClick={() => {
                              closeCart();
                              navigateToProduct(item.product.id);
                            }}
                            className="font-medium text-sm text-[#2A2A2A] hover:text-[#A87C52] cursor-pointer truncate"
                          >
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#A8A29A] hover:text-[#2A2A2A] p-1 ml-2"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-xs text-[#3D352F]/70 mt-0.5 font-light">
                          Finish: <strong className="font-medium text-[#2A2A2A]">{item.color}</strong>
                        </p>
                        {item.size && (
                          <p className="text-xs text-[#3D352F]/70 font-light">
                            Size: <strong className="font-medium text-[#2A2A2A]">{item.size}</strong>
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#E5E0D8] bg-[#FDFCF9]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-[#A8A29A] hover:text-[#2A2A2A]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-[#2A2A2A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-[#A8A29A] hover:text-[#2A2A2A]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line Total */}
                        <span className="text-sm font-serif text-[#2A2A2A]">
                          ${(itemPrice * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#F5F2ED] border-t border-[#E5E0D8] space-y-4">
              {/* Promo Code Input */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Promotion code (e.g. LUMORA10)"
                    value={promoInput}
                    onChange={e => setPromoInput(e.target.value)}
                    className="flex-1 px-3 py-2 bg-[#FDFCF9] border border-[#E5E0D8] text-xs uppercase placeholder:normal-case focus:outline-none focus:border-[#2A2A2A]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.18em] font-bold hover:bg-[#3D352F]"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between text-xs bg-[#FDFCF9] p-2 border border-[#E5E0D8]">
                  <span className="text-[#A87C52] font-semibold flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Promotion Applied (-${discountAmount.toLocaleString()})</span>
                  </span>
                  <button
                    onClick={() => {
                      setPromoApplied(false);
                      setDiscountAmount(0);
                    }}
                    className="text-[#A8A29A] hover:text-[#2A2A2A] underline"
                  >
                    Remove
                  </button>
                </div>
              )}
              {promoError && (
                <p className="text-[11px] text-red-700">{promoError}</p>
              )}

              {/* Subtotal Breakdown */}
              <div className="space-y-1.5 text-xs text-[#3D352F]/70 font-light">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="text-[#2A2A2A] font-medium font-serif">${cartTotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#A87C52] font-medium">
                    <span>Special Savings</span>
                    <span className="font-serif">-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>White-Glove Delivery</span>
                  <span className="text-[#2A2A2A] font-medium">
                    {qualifiesForFreeDelivery ? 'COMPLIMENTARY' : 'Calculated at Checkout'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-normal text-[#2A2A2A] pt-2 border-t border-[#E5E0D8]">
                  <span>Estimated Total</span>
                  <span className="font-serif font-medium">${finalSubtotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full py-4 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Proceed to White-Glove Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          closeCart();
        }}
      />
    </>
  );
};
