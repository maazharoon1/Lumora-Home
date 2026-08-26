import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { roomScenes } from '../data/rooms';
import { getProductById } from '../data/products';
import { RoomScene, RoomHotspot } from '../types';
import { Sparkles, Eye, ShoppingBag, Plus, Check, ArrowRight, X } from 'lucide-react';

export const RoomInspiration: React.FC = () => {
  const { navigateToProduct, addToCart, openCart, showToast } = useShop();
  const [selectedRoom, setSelectedRoom] = useState<RoomScene>(roomScenes[0]);
  const [activeHotspot, setActiveHotspot] = useState<RoomHotspot | null>(null);
  const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
  const [bundleAdded, setBundleAdded] = useState(false);

  const roomProducts = selectedRoom.hotspots
    .map(h => getProductById(h.productId))
    .filter(Boolean);

  const roomTotal = selectedRoom.hotspots.reduce((sum, h) => sum + h.price, 0);

  const handleAddAllToCart = () => {
    roomProducts.forEach(prod => {
      if (prod) {
        addToCart(prod, prod.defaultColor, prod.sizes?.[0]?.label, 1);
      }
    });
    setBundleAdded(true);
    showToast(
      'Complete Room Bundle Added',
      `${selectedRoom.title} (${roomProducts.length} pieces)`,
      'cart'
    );
    setTimeout(() => {
      setBundleAdded(false);
      setIsBundleModalOpen(false);
      openCart();
    }, 1000);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F5F2ED] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A87C52]" />
              <span>Interactive Spaces</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
              See It Come Together
            </h2>
            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light mt-2 max-w-xl">
              Hover over pins to discover individual silhouettes, or shop the harmonious complete room scheme.
            </p>
          </div>

          {/* Room Selection Tabs */}
          <div className="flex flex-wrap gap-2">
            {roomScenes.map(room => (
              <button
                key={room.id}
                onClick={() => {
                  setSelectedRoom(room);
                  setActiveHotspot(null);
                }}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
                  selectedRoom.id === room.id
                    ? 'bg-[#2A2A2A] text-[#FDFCF9] font-bold shadow-xs'
                    : 'bg-[#FDFCF9] text-[#3D352F]/70 hover:text-[#2A2A2A] border border-[#E5E0D8]'
                }`}
              >
                {room.title.replace('The ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Room Canvas */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#2A2A2A] shadow-md border border-[#E5E0D8]">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.title}
            className="w-full h-full object-cover"
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Interactive Hotspot Pins */}
          {selectedRoom.hotspots.map(hotspot => {
            const isSelected = activeHotspot?.id === hotspot.id;
            return (
              <div
                key={hotspot.id}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Pulsing Pin Button */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(isSelected ? null : hotspot)}
                  onMouseEnter={() => setActiveHotspot(hotspot)}
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg ${
                    isSelected
                      ? 'bg-[#2A2A2A] text-[#FDFCF9] scale-125 ring-4 ring-[#FDFCF9]/80'
                      : 'bg-[#FDFCF9]/95 hover:bg-[#FDFCF9] text-[#2A2A2A] hover:scale-110'
                  }`}
                  aria-label={`Explore ${hotspot.label}`}
                >
                  <Plus className={`w-3.5 h-3.5 ${isSelected ? 'rotate-45' : ''} transition-transform`} />
                  {/* Subtle Pulse Ring */}
                  <span className="absolute -inset-1 rounded-full border border-white/60 animate-ping opacity-40 pointer-events-none" />
                </button>

                {/* Floating Hotspot Card */}
                {isSelected && (
                  <div
                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-[#FDFCF9] p-3.5 shadow-2xl border border-[#E5E0D8] z-30 animate-in fade-in zoom-in-95 duration-200 text-left"
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div className="flex items-start space-x-3">
                      {getProductById(hotspot.productId)?.images[0] && (
                        <img
                          src={getProductById(hotspot.productId)!.images[0]}
                          alt={hotspot.label}
                          className="w-14 h-14 object-cover flex-shrink-0 border border-[#E5E0D8]"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-sm text-[#2A2A2A] font-light truncate">
                          {hotspot.label}
                        </p>
                        <p className="text-xs font-serif text-[#2A2A2A] mt-0.5 font-normal">
                          ${hotspot.price.toLocaleString()}
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <button
                            onClick={() => navigateToProduct(hotspot.productId)}
                            className="text-[9px] uppercase tracking-wider font-bold text-[#2A2A2A] underline underline-offset-2 hover:text-[#A87C52]"
                          >
                            Details
                          </button>
                          <span className="text-[#E5E0D8]">|</span>
                          <button
                            onClick={() => {
                              const prod = getProductById(hotspot.productId);
                              if (prod) {
                                addToCart(prod, prod.defaultColor, prod.sizes?.[0]?.label, 1);
                              }
                            }}
                            className="text-[9px] uppercase tracking-wider font-bold text-[#A87C52] hover:underline"
                          >
                            + Quick Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Floating Bar inside Canvas */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#2A2A2A]/90 backdrop-blur-md p-4 sm:p-5 text-[#FDFCF9] border border-white/20 gap-3">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#A87C52] font-semibold">
                Room Architecture
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-light text-[#FDFCF9]">
                {selectedRoom.title}
              </h4>
              <p className="text-xs text-[#A8A29A] font-light mt-0.5 hidden md:block max-w-lg">
                {selectedRoom.subtitle}
              </p>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-right">
                <span className="text-[9px] uppercase tracking-widest text-[#A8A29A] block">
                  Complete Suite ({selectedRoom.hotspots.length} items)
                </span>
                <span className="text-sm sm:text-base font-serif text-[#FDFCF9]">
                  ${roomTotal.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => setIsBundleModalOpen(true)}
                className="px-5 py-2.5 bg-[#FDFCF9] text-[#2A2A2A] hover:bg-[#E5E0D8] text-[9px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center space-x-1.5 shadow-md flex-shrink-0"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Shop This Room</span>
              </button>
            </div>
          </div>
        </div>

        {/* Room Product List Thumbnails Below Canvas */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {selectedRoom.hotspots.map(hotspot => {
            const prod = getProductById(hotspot.productId);
            if (!prod) return null;
            return (
              <div
                key={hotspot.id}
                onClick={() => navigateToProduct(prod.id)}
                className="cursor-pointer group bg-[#FDFCF9] p-3 border border-[#E5E0D8] hover:border-[#2A2A2A] transition-all flex items-center space-x-3"
              >
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  className="w-12 h-12 object-cover bg-[#F5F2ED]"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-xs text-[#2A2A2A] group-hover:text-[#A87C52] truncate">
                    {prod.name}
                  </p>
                  <p className="text-xs font-serif text-[#2A2A2A] mt-0.5">
                    ${prod.price.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shop This Complete Room Modal */}
      {isBundleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setIsBundleModalOpen(false)}
          />

          <div className="relative bg-[#FDFCF9] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D8] z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsBundleModalOpen(false)}
              className="absolute top-4 right-4 text-[#A8A29A] hover:text-[#2A2A2A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A87C52]">
                Curated Room Suite
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] mt-1 font-light">
                {selectedRoom.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#3D352F]/70 mt-1 font-light">
                {selectedRoom.description}
              </p>
            </div>

            {/* Included Pieces List */}
            <div className="divide-y divide-[#E5E0D8] border-y border-[#E5E0D8] mb-6">
              {roomProducts.map(prod => {
                if (!prod) return null;
                return (
                  <div key={prod.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-14 h-14 object-cover bg-[#F5F2ED]"
                      />
                      <div>
                        <h5 className="font-medium text-sm text-[#2A2A2A]">
                          {prod.name}
                        </h5>
                        <p className="text-xs text-[#A8A29A]">
                          {prod.defaultColor} • {prod.material.split('/')[0]}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-serif text-[#2A2A2A] whitespace-nowrap">
                      ${prod.price.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Summary & Add All Action */}
            <div className="bg-[#F5F2ED] p-4 border border-[#E5E0D8] mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A8A29A] block">
                  Suite Subtotal ({roomProducts.length} Items)
                </span>
                <span className="text-xl font-serif text-[#2A2A2A] font-light">
                  ${roomTotal.toLocaleString()}
                </span>
                <p className="text-[11px] text-[#A87C52] mt-0.5 font-medium">
                  ✓ Qualifies for Complimentary White-Glove Delivery
                </p>
              </div>

              <button
                onClick={handleAddAllToCart}
                disabled={bundleAdded}
                className="px-6 py-3 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center space-x-2 shadow-md"
              >
                {bundleAdded ? (
                  <>
                    <Check className="w-4 h-4 text-[#A87C52]" />
                    <span>Added Complete Suite</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add All To Bag</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
