import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Calendar, Layers, MapPin, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export const DesignServicesPage: React.FC = () => {
  const { openConsultationModal, showToast } = useShop();

  const [formStep, setFormStep] = useState(1);
  const [selectedRoomType, setSelectedRoomType] = useState('Living Room');
  const [selectedFormat, setSelectedFormat] = useState<'virtual' | 'showroom' | 'in-home'>('virtual');
  const [selectedShowroom, setSelectedShowroom] = useState('New York Flagship');
  const [preferredStyle, setPreferredStyle] = useState('Warm Minimalist');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-09-15',
    time: '2:00 PM EST',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast(
      'Consultation Confirmed',
      `We have scheduled your session with an interior design specialist for ${bookingDetails.date} at ${bookingDetails.time}.`,
      'info'
    );
  };

  return (
    <div className="bg-[#FAF8F5] pb-28">
      {/* Editorial Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-[#1C1A18] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Lumora Home Interior Design Studio"
          className="w-full h-full object-cover absolute inset-0 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18] via-[#1C1A18]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FAF8F5] space-y-4 py-16">
          <div className="inline-flex items-center space-x-2 bg-[#FAF8F5]/10 px-3.5 py-1.5 border border-[#FAF8F5]/20 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DDD5C7]" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#FAF8F5]">
              Complimentary Studio Services
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Your Vision. Our Expertise.
          </h1>
          <p className="text-base sm:text-lg text-[#DDD5C7] font-light max-w-2xl mx-auto leading-relaxed">
            Collaborate with our senior interior designers to transform floor plans, balance natural materials, and tailor bespoke furniture configurations for your home.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* The 4 Core Design Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="bg-[#F5F2EB] p-8 border border-[#EBE6DE] flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#78726A]">
                01 / Strategy
              </span>
              <h3 className="font-serif text-xl text-[#1C1A18] mt-2 mb-3">
                1-on-1 Consultation
              </h3>
              <p className="text-xs text-[#78726A] font-light leading-relaxed">
                A dedicated 45-minute discussion reviewing your architecture, aesthetic aspirations, lifestyle needs, and spatial flow.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#1C1A18] mt-6 block uppercase tracking-wider">
              Complimentary Service
            </span>
          </div>

          <div className="bg-[#F5F2EB] p-8 border border-[#EBE6DE] flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#78726A]">
                02 / Spatial Design
              </span>
              <h3 className="font-serif text-xl text-[#1C1A18] mt-2 mb-3">
                Floor Plans & 3D Spatial Renders
              </h3>
              <p className="text-xs text-[#78726A] font-light leading-relaxed">
                Precise scaled layouts ensuring proper traffic clearance, proportional furniture scales, and acoustic warmth.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#1C1A18] mt-6 block uppercase tracking-wider">
              Full CAD Schematics
            </span>
          </div>

          <div className="bg-[#F5F2EB] p-8 border border-[#EBE6DE] flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#78726A]">
                03 / Materiality
              </span>
              <h3 className="font-serif text-xl text-[#1C1A18] mt-2 mb-3">
                Curated Material Swatch Box
              </h3>
              <p className="text-xs text-[#78726A] font-light leading-relaxed">
                Custom sample box dispatched to your doorstep containing selected oak stains, natural travertine cutaways, linens, and leathers.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#1C1A18] mt-6 block uppercase tracking-wider">
              Dispatched in 48 Hours
            </span>
          </div>

          <div className="bg-[#F5F2EB] p-8 border border-[#EBE6DE] flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#78726A]">
                04 / Concierge
              </span>
              <h3 className="font-serif text-xl text-[#1C1A18] mt-2 mb-3">
                White-Glove Installation
              </h3>
              <p className="text-xs text-[#78726A] font-light leading-relaxed">
                Direct coordination with our logistics team for seamless scheduled room-of-choice placement and packaging recycling.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#1C1A18] mt-6 block uppercase tracking-wider">
              Seamless Execution
            </span>
          </div>
        </div>

        {/* Interactive Booking Experience */}
        <div className="bg-[#FAF8F5] border border-[#DDD5C7] shadow-2xl p-8 sm:p-12 max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#3C2F2F] mx-auto" />
              <h3 className="font-serif text-3xl text-[#1C1A18]">
                Your Consultation is Confirmed
              </h3>
              <p className="text-sm text-[#78726A] max-w-md mx-auto font-light">
                Elena Vance, Senior Interior Design Lead, has received your project briefing. You will receive calendar invites and sample tracking via {bookingDetails.email || 'email'}.
              </p>
              <div className="bg-[#F5F2EB] p-4 max-w-md mx-auto text-xs text-[#1C1A18] border border-[#EBE6DE] space-y-1 text-left mt-6">
                <p><strong>Format:</strong> {selectedFormat.toUpperCase()} ({selectedFormat === 'showroom' ? selectedShowroom : 'HD Video Studio'})</p>
                <p><strong>Date & Time:</strong> {bookingDetails.date} at {bookingDetails.time}</p>
                <p><strong>Primary Space:</strong> {selectedRoomType}</p>
                <p><strong>Style Focus:</strong> {preferredStyle}</p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-8 py-3 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#3C2F2F]"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#78726A]">
                  Reserve Your Session
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] mt-1">
                  Schedule A Design Appointment
                </h2>
                <p className="text-xs sm:text-sm text-[#78726A] mt-2 font-light">
                  Select your preferred consultation format, room focus, and design specialist meeting time.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-8">
                {/* Step 1: Format Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-3">
                    1. Choose Consultation Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedFormat('virtual')}
                      className={`p-4 text-left border text-xs transition-all ${
                        selectedFormat === 'virtual'
                          ? 'border-[#1C1A18] bg-[#F5F2EB] font-semibold ring-1 ring-[#1C1A18]'
                          : 'border-[#DDD5C7] text-[#78726A] hover:border-[#1C1A18]'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 mb-2 text-[#1C1A18]" />
                      <span className="block font-medium text-[#1C1A18]">Virtual Video Studio</span>
                      <span className="block text-[10px] text-[#78726A] mt-0.5">Live screen sharing & moodboards</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedFormat('showroom')}
                      className={`p-4 text-left border text-xs transition-all ${
                        selectedFormat === 'showroom'
                          ? 'border-[#1C1A18] bg-[#F5F2EB] font-semibold ring-1 ring-[#1C1A18]'
                          : 'border-[#DDD5C7] text-[#78726A] hover:border-[#1C1A18]'
                      }`}
                    >
                      <MapPin className="w-4 h-4 mb-2 text-[#1C1A18]" />
                      <span className="block font-medium text-[#1C1A18]">Showroom Studio</span>
                      <span className="block text-[10px] text-[#78726A] mt-0.5">NY • LA • Chicago In Person</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedFormat('in-home')}
                      className={`p-4 text-left border text-xs transition-all ${
                        selectedFormat === 'in-home'
                          ? 'border-[#1C1A18] bg-[#F5F2EB] font-semibold ring-1 ring-[#1C1A18]'
                          : 'border-[#DDD5C7] text-[#78726A] hover:border-[#1C1A18]'
                      }`}
                    >
                      <Layers className="w-4 h-4 mb-2 text-[#1C1A18]" />
                      <span className="block font-medium text-[#1C1A18]">In-Home Specialist</span>
                      <span className="block text-[10px] text-[#78726A] mt-0.5">Full on-site spatial assessment</span>
                    </button>
                  </div>
                </div>

                {/* Step 2: Room & Aesthetic */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-2">
                      2. Primary Room Focus
                    </label>
                    <select
                      value={selectedRoomType}
                      onChange={e => setSelectedRoomType(e.target.value)}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none focus:border-[#1C1A18]"
                    >
                      <option value="Living Room">Living Room & Seating</option>
                      <option value="Dining Room">Dining Room & Entertaining</option>
                      <option value="Primary Bedroom">Primary Bedroom Suite</option>
                      <option value="Home Office">Architectural Home Office</option>
                      <option value="Complete Residence">Whole-Home Interior Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-2">
                      3. Aesthetic Direction
                    </label>
                    <select
                      value={preferredStyle}
                      onChange={e => setPreferredStyle(e.target.value)}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none focus:border-[#1C1A18]"
                    >
                      <option value="Warm Minimalist">Warm Minimalist (Natural Stone, Belgian Flax, Raw Oak)</option>
                      <option value="Contemporary Architectural">Contemporary Architectural (Low Profiles, Travertine)</option>
                      <option value="Organic Modern">Organic Modern (Curved Shapes, Bouclé, Walnut)</option>
                      <option value="Refined Classic">Refined Classic (Saddle Leather, Trestle Timber)</option>
                    </select>
                  </div>
                </div>

                {/* Step 3: Contact & Date Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingDetails.name}
                      onChange={e => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingDetails.email}
                      onChange={e => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                      placeholder="eleanor@domain.com"
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDetails.date}
                      onChange={e => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none focus:border-[#1C1A18]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={bookingDetails.time}
                      onChange={e => setBookingDetails({ ...bookingDetails, time: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none"
                    >
                      <option value="10:00 AM EST">10:00 AM EST (Morning)</option>
                      <option value="1:00 PM EST">1:00 PM EST (Early Afternoon)</option>
                      <option value="3:30 PM EST">3:30 PM EST (Late Afternoon)</option>
                      <option value="5:30 PM EST">5:30 PM EST (Evening Session)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18] mb-1">
                    Project Notes & Dimensions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={bookingDetails.notes}
                    onChange={e => setBookingDetails({ ...bookingDetails, notes: e.target.value })}
                    placeholder="Tell us about your room dimensions, existing finishes, timeline, or specific pieces you love..."
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C7] text-xs focus:outline-none focus:border-[#1C1A18]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C1A18] text-[#FAF8F5] hover:bg-[#3C2F2F] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Complimentary Appointment</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
