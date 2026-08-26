import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2ED] border-t border-[#E5E0D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A8A29A] block mb-2">
          The Lumora Dispatch
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2A2A] font-light tracking-tight">
          Make Room for Inspiration
        </h2>
        <p className="text-xs sm:text-sm text-[#3D352F]/70 font-light mt-3 max-w-xl mx-auto leading-relaxed">
          Subscribe to receive editorial stories, new collection previews, private archival releases, and invitations to gallery evenings.
        </p>

        {isSubscribed ? (
          <div className="mt-8 p-6 bg-[#FDFCF9] border border-[#E5E0D8] max-w-md mx-auto flex items-center justify-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-[#2A2A2A] font-bold animate-in fade-in">
            <Check className="w-4 h-4 text-[#A87C52]" />
            <span>Thank you for subscribing to Lumora Home Dispatch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3.5 bg-[#FDFCF9] border border-[#E5E0D8] text-xs text-[#2A2A2A] placeholder:text-[#A8A29A] focus:outline-none focus:border-[#2A2A2A]"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#2A2A2A] text-[#FDFCF9] hover:bg-[#3D352F] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-[#A8A29A] font-light mt-4">
          By subscribing, you agree to our Privacy Policy. You may withdraw consent at any time.
        </p>
      </div>
    </section>
  );
};
