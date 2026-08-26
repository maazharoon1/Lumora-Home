import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Sparkles, CheckCircle2, Calendar, MapPin, Layers } from 'lucide-react';

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, consultationTopic, closeConsultationModal, showToast } = useShop();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [format, setFormat] = useState<'virtual' | 'showroom' | 'swatches'>('virtual');
  const [showroom, setShowroom] = useState('New York Flagship');
  const [notes, setNotes] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (consultationTopic) {
      setNotes(`Inquiry regarding: ${consultationTopic}`);
    }
  }, [consultationTopic]);

  if (!isConsultationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
    showToast(
      'Consultation Request Received',
      'Our Senior Design Lead will reach out within 24 business hours.',
      'info'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={closeConsultationModal} />

      <div className="relative bg-[#FDFCF9] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D8] z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeConsultationModal}
          className="absolute top-4 right-4 text-[#A8A29A] hover:text-[#2A2A2A]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#A87C52] mx-auto" />
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light">
              Request Received
            </h3>
            <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light leading-relaxed max-w-sm mx-auto">
              Thank you, {name}. A dedicated Lumora Home interior design specialist will review your space requirements and reach out via {email}.
            </p>
            <div className="pt-4">
              <button
                onClick={closeConsultationModal}
                className="px-8 py-3 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A87C52]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary Service</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light mt-1">
                Consult With A Designer
              </h3>
              <p className="text-xs text-[#3D352F]/70 mt-1 font-light">
                {consultationTopic || 'Spatial floor planning, finish curation, and bespoke furniture advice.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Format selection */}
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1.5 text-[10px]">
                  Consultation Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormat('virtual')}
                    className={`p-2.5 text-center border text-xs ${
                      format === 'virtual'
                        ? 'border-[#2A2A2A] bg-[#F5F2ED] font-semibold text-[#2A2A2A]'
                        : 'border-[#E5E0D8] text-[#3D352F]/70'
                    }`}
                  >
                    Virtual Studio
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('showroom')}
                    className={`p-2.5 text-center border text-xs ${
                      format === 'showroom'
                        ? 'border-[#2A2A2A] bg-[#F5F2ED] font-semibold text-[#2A2A2A]'
                        : 'border-[#E5E0D8] text-[#3D352F]/70'
                    }`}
                  >
                    In Showroom
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('swatches')}
                    className={`p-2.5 text-center border text-xs ${
                      format === 'swatches'
                        ? 'border-[#2A2A2A] bg-[#F5F2ED] font-semibold text-[#2A2A2A]'
                        : 'border-[#E5E0D8] text-[#3D352F]/70'
                    }`}
                  >
                    Swatch Box
                  </button>
                </div>
              </div>

              {format === 'showroom' && (
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    Select Gallery Location
                  </label>
                  <select
                    value={showroom}
                    onChange={e => setShowroom(e.target.value)}
                    className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                  >
                    <option value="New York Flagship">New York Flagship (Mercer St, SoHo)</option>
                    <option value="Los Angeles Design Studio">Los Angeles Design Studio (Melrose Ave, West Hollywood)</option>
                    <option value="Chicago Gallery">Chicago Gallery (Clybourn Ave, Lincoln Park)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Helena Wright"
                  className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="helena@example.com"
                  className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Share details about your room dimensions or style preferences..."
                  className="w-full p-2.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors shadow-md"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
