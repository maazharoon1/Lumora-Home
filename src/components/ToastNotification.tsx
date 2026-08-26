import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Heart, Info, X, ShoppingBag } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toasts, removeToast, openCart } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 pointer-events-none max-w-sm w-full px-4">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#2A2A2A] text-[#FDFCF9] p-4 shadow-2xl border border-[#3D352F] flex items-start space-x-3 transition-all duration-300 transform translate-y-0"
        >
          {toast.image ? (
            <img
              src={toast.image}
              alt=""
              className="w-12 h-12 object-cover rounded-none flex-shrink-0 border border-[#FDFCF9]/10"
            />
          ) : (
            <div className="p-2 bg-[#3D352F] flex-shrink-0">
              {toast.type === 'cart' && <ShoppingBag className="w-5 h-5 text-[#FDFCF9]" />}
              {toast.type === 'wishlist' && <Heart className="w-5 h-5 text-[#A87C52] fill-[#A87C52]" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-[#FDFCF9]" />}
            </div>
          )}

          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A87C52]" />
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#FDFCF9]">
                {toast.message}
              </p>
            </div>
            {toast.subtext && (
              <p className="text-xs text-[#FDFCF9]/80 mt-0.5 truncate font-light">
                {toast.subtext}
              </p>
            )}
            {toast.type === 'cart' && (
              <button
                onClick={() => {
                  removeToast(toast.id);
                  openCart();
                }}
                className="mt-2 text-[10px] uppercase tracking-wider text-[#A87C52] underline underline-offset-4 hover:text-[#FDFCF9] transition-colors font-bold"
              >
                View Shopping Bag
              </button>
            )}
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#FDFCF9]/50 hover:text-[#FDFCF9] transition-colors p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
