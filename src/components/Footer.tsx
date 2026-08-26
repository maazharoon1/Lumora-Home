import React from 'react';
import { useShop } from '../context/ShopContext';
import { MapPin, Phone, Sparkles, ShieldCheck, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, navigateToCategory, openConsultationModal } = useShop();

  return (
    <footer className="bg-[#2A2A2A] text-[#FDFCF9] pt-16 pb-12 border-t border-[#3D352F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#E5E0D8]/15 text-xs">
          <div className="flex items-start space-x-3.5">
            <Truck className="w-5 h-5 text-[#A87C52] flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold uppercase tracking-[0.15em] text-[#FDFCF9] text-[11px]">
                Complimentary White-Glove Delivery
              </h5>
              <p className="text-[#A8A29A] font-light mt-1 text-[11px] leading-relaxed">
                Room-of-choice placement, full assembly, and packaging recycling on orders over $3,500.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Sparkles className="w-5 h-5 text-[#A87C52] flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold uppercase tracking-[0.15em] text-[#FDFCF9] text-[11px]">
                Complimentary Design Studio
              </h5>
              <p className="text-[#A8A29A] font-light mt-1 text-[11px] leading-relaxed">
                Collaborate 1-on-1 with our interior designers for spatial planning and tailored swatch boxes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <ShieldCheck className="w-5 h-5 text-[#A87C52] flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold uppercase tracking-[0.15em] text-[#FDFCF9] text-[11px]">
                30-Day In-Home Trial
              </h5>
              <p className="text-[#A8A29A] font-light mt-1 text-[11px] leading-relaxed">
                Experience the beauty and proportion of each piece in your natural home lighting.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-14">
          {/* Brand Identity & Newsletter */}
          <div className="col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-light text-[#FDFCF9] uppercase block">
              LUMORA HOME
            </span>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A87C52] font-semibold">
              Furniture With a Sense of Place
            </p>
            <p className="text-xs text-[#A8A29A] font-light leading-relaxed max-w-sm pt-1">
              Contemporary furniture handcrafted from natural wood, stone, linen, leather, and refined metals. Designed for homes that celebrate texture, light, and enduring calm.
            </p>

            <div className="pt-2 text-xs text-[#A8A29A] space-y-1 font-light">
              <p className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#A87C52]" />
                <span>Studios: New York • Los Angeles • Chicago</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#A87C52]" />
                <span>Concierge: +1 (800) 586-6721</span>
              </p>
            </div>
          </div>

          {/* Col 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FDFCF9] pb-2 border-b border-[#E5E0D8]/15">
              Furniture & Rooms
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29A] font-light">
              <li>
                <button onClick={() => navigateToCategory('living')} className="hover:text-[#FDFCF9] transition-colors">
                  Living Room
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('dining')} className="hover:text-[#FDFCF9] transition-colors">
                  Dining Room
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('bedroom')} className="hover:text-[#FDFCF9] transition-colors">
                  Bedroom
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('outdoor')} className="hover:text-[#FDFCF9] transition-colors">
                  Solara Outdoor
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('lighting')} className="hover:text-[#FDFCF9] transition-colors">
                  Sculptural Lighting
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('decor')} className="hover:text-[#FDFCF9] transition-colors">
                  Objects & Décor
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('rugs')} className="hover:text-[#FDFCF9] transition-colors">
                  Handwoven Rugs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#A87C52] transition-colors font-medium text-[#FDFCF9]">
                  All Collections
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Services & Studios */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FDFCF9] pb-2 border-b border-[#E5E0D8]/15">
              Design & Studios
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29A] font-light">
              <li>
                <button onClick={() => navigateTo('design-services')} className="hover:text-[#FDFCF9] transition-colors">
                  Complimentary Design
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('showrooms')} className="hover:text-[#FDFCF9] transition-colors">
                  Showroom Locations
                </button>
              </li>
              <li>
                <button onClick={() => openConsultationModal('Swatch Box Request')} className="hover:text-[#FDFCF9] transition-colors">
                  Order Material Swatches
                </button>
              </li>
              <li>
                <button onClick={() => openConsultationModal('Trade & Architect Program')} className="hover:text-[#FDFCF9] transition-colors">
                  Trade & Contract Program
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('journal')} className="hover:text-[#FDFCF9] transition-colors">
                  The Lumora Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Care */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FDFCF9] pb-2 border-b border-[#E5E0D8]/15">
              Client Care
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29A] font-light">
              <li>
                <button onClick={() => openConsultationModal('Order Status Assistance')} className="hover:text-[#FDFCF9] transition-colors">
                  Order Tracking
                </button>
              </li>
              <li>
                <button onClick={() => openConsultationModal('White-Glove Logistics Inquiry')} className="hover:text-[#FDFCF9] transition-colors">
                  White-Glove Delivery
                </button>
              </li>
              <li>
                <button onClick={() => openConsultationModal('Care & Repair Assistance')} className="hover:text-[#FDFCF9] transition-colors">
                  Care & Maintenance
                </button>
              </li>
              <li>
                <button onClick={() => openConsultationModal('30-Day Trial Question')} className="hover:text-[#FDFCF9] transition-colors">
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => openConsultationModal('General Client Concierge')} className="hover:text-[#FDFCF9] transition-colors">
                  Contact Concierge
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Disclaimer */}
        <div className="pt-8 border-t border-[#E5E0D8]/15 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#A8A29A] font-light gap-4">
          <p>© {new Date().getFullYear()} LUMORA HOME Inc. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => openConsultationModal('Privacy Policy')} className="hover:text-[#FDFCF9]">
              Privacy Policy
            </button>
            <button onClick={() => openConsultationModal('Terms of Service')} className="hover:text-[#FDFCF9]">
              Terms of Service
            </button>
            <button onClick={() => openConsultationModal('Accessibility Statement')} className="hover:text-[#FDFCF9]">
              Accessibility
            </button>
            <span>United States (USD $)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

