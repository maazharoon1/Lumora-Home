import React from 'react';
import { useShop } from '../context/ShopContext';
import { showrooms } from '../data/showrooms';
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, Navigation, ArrowRight } from 'lucide-react';

export const ShowroomsPage: React.FC = () => {
  const { openConsultationModal } = useShop();

  return (
    <div className="bg-[#FAF8F5] pb-28">
      {/* Editorial Showroom Hero */}
      <div className="relative min-h-[55vh] flex items-center justify-center bg-[#1C1A18] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Lumora Home Flagship Showroom"
          className="w-full h-full object-cover absolute inset-0 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18] via-[#1C1A18]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FAF8F5] space-y-4 py-16">
          <div className="inline-flex items-center space-x-2 bg-[#FAF8F5]/10 px-3.5 py-1.5 border border-[#FAF8F5]/20 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-[#DDD5C7]" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#FAF8F5]">
              Experience In Person
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Come See It In Person
          </h1>
          <p className="text-base sm:text-lg text-[#DDD5C7] font-light max-w-2xl mx-auto leading-relaxed">
            Step inside our architectural gallery spaces in New York, Los Angeles, and Chicago. Feel the dense grain of our oak tables, the soft depth of Belgian linens, and the grounded heft of Roman travertine.
          </p>
        </div>
      </div>

      {/* Showroom Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-16">
          {showrooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-[#F5F2EB] border border-[#EBE6DE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-lg"
            >
              {/* Image Col (7 cols) */}
              <div className={`lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#EBE6DE] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Info Col (5 cols) */}
              <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#78726A] block mb-1">
                      Gallery & Design Suite 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] font-normal">
                      {room.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78726A] mt-2 font-light leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Contact & Address */}
                  <div className="space-y-2.5 text-xs text-[#1C1A18] pt-4 border-t border-[#DDD5C7]">
                    <div className="flex items-start space-x-2.5">
                      <MapPin className="w-4 h-4 text-[#78726A] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{room.street}</p>
                        <p className="text-[#78726A]">{room.cityStateZip}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-[#78726A] flex-shrink-0" />
                      <span>{room.phone}</span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-4 h-4 text-[#78726A] flex-shrink-0" />
                      <span>{room.email}</span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="pt-3 border-t border-[#DDD5C7] text-xs">
                    <span className="text-[10px] uppercase tracking-wider text-[#78726A] font-semibold block mb-1">
                      Gallery Visiting Hours
                    </span>
                    {room.hours.map((h, i) => (
                      <p key={i} className="text-[#1C1A18] text-xs">
                        <strong className="font-medium">{h.days}:</strong> {h.time}
                      </p>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="pt-3 border-t border-[#DDD5C7]">
                    <span className="text-[10px] uppercase tracking-wider text-[#78726A] font-semibold block mb-1.5">
                      Studio Amenities
                    </span>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-[#78726A]">
                      {room.features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#3C2F2F] rounded-full" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-[#DDD5C7] flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openConsultationModal(`Showroom Visit — ${room.city}`)}
                    className="flex-1 py-3 bg-[#1C1A18] hover:bg-[#3C2F2F] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Studio Visit</span>
                  </button>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(room.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 border border-[#DDD5C7] hover:border-[#1C1A18] text-xs uppercase tracking-wider font-semibold text-[#1C1A18] flex items-center justify-center space-x-1.5 bg-[#FAF8F5]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
