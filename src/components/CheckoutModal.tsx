import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, ShieldCheck, Truck, CreditCard, Lock, X, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, qualifiesForFreeDelivery, clearCart, showToast } = useShop();

  const [step, setStep] = useState<'shipping' | 'delivery' | 'payment' | 'confirmation'>('shipping');
  const [formData, setFormData] = useState({
    firstName: 'Julian',
    lastName: 'Vane',
    email: 'julian.vane@architecture.com',
    phone: '+1 (212) 555-0199',
    address: '450 West 24th Street, Apt 8B',
    city: 'New York',
    state: 'NY',
    zip: '10011',
    deliveryDate: '2026-09-20',
    deliveryWindow: 'Morning (9:00 AM – 1:00 PM)',
    specialInstructions: 'Freight elevator is reserved; please ring concierge upon arrival.',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/29',
    cardCvc: '•••'
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const deliveryFee = qualifiesForFreeDelivery ? 0 : 250;
  const estimatedTaxes = Math.round(cartTotal * 0.08875);
  const finalTotal = cartTotal + deliveryFee + estimatedTaxes;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderNum = `LM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(newOrderNum);
    setStep('confirmation');
    clearCart();
    showToast('Order Placed Successfully', `Confirmation sent to ${formData.email}`, 'cart');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-[#FDFCF9] max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#E5E0D8] z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A8A29A] hover:text-[#2A2A2A]"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step !== 'confirmation' && (
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#A8A29A] mb-1">
              <Lock className="w-3 h-3 text-[#A87C52]" />
              <span>Encrypted White-Glove Checkout</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light">
              Complete Your Acquisition
            </h2>

            {/* Stepper Header */}
            <div className="flex items-center space-x-4 mt-6 border-b border-[#E5E0D8] pb-3 text-[10px] uppercase tracking-wider">
              <button
                onClick={() => setStep('shipping')}
                className={`font-semibold ${step === 'shipping' ? 'text-[#2A2A2A] border-b-2 border-[#2A2A2A] pb-3 -mb-3.5' : 'text-[#A8A29A]'}`}
              >
                1. Residence & Contact
              </button>
              <span className="text-[#E5E0D8]">/</span>
              <button
                onClick={() => setStep('delivery')}
                className={`font-semibold ${step === 'delivery' ? 'text-[#2A2A2A] border-b-2 border-[#2A2A2A] pb-3 -mb-3.5' : 'text-[#A8A29A]'}`}
              >
                2. White-Glove Scheduling
              </button>
              <span className="text-[#E5E0D8]">/</span>
              <button
                onClick={() => setStep('payment')}
                className={`font-semibold ${step === 'payment' ? 'text-[#2A2A2A] border-b-2 border-[#2A2A2A] pb-3 -mb-3.5' : 'text-[#A8A29A]'}`}
              >
                3. Payment & Review
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Shipping Address */}
        {step === 'shipping' && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Email Address (For White-Glove Updates)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Phone (For Delivery Appointment Calls)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
                />
              </div>
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                Street Address & Suite / Unit
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none focus:border-[#2A2A2A]"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  State
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={e => setFormData({ ...formData, state: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  ZIP Code
                </label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={e => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setStep('delivery')}
                className="w-full py-4 bg-[#2A2A2A] text-[#FDFCF9] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F] text-[10px]"
              >
                Proceed to White-Glove Scheduling →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Delivery Scheduling */}
        {step === 'delivery' && (
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-[#F5F2ED] border border-[#E5E0D8] space-y-2">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-[#A87C52]" />
                <span className="font-semibold text-[#2A2A2A] uppercase tracking-wider text-[10px]">
                  {qualifiesForFreeDelivery ? 'Complimentary White-Glove Delivery' : 'Standard White-Glove ($250)'}
                </span>
              </div>
              <p className="text-[#3D352F]/70 text-xs">
                Our certified two-person logistics team brings all pieces into your room of choice, uncrates, handles full structural assembly, and removes all packaging for eco-recycling.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Preferred Delivery Date
                </label>
                <input
                  type="date"
                  value={formData.deliveryDate}
                  onChange={e => setFormData({ ...formData, deliveryDate: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Preferred Window
                </label>
                <select
                  value={formData.deliveryWindow}
                  onChange={e => setFormData({ ...formData, deliveryWindow: e.target.value })}
                  className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                >
                  <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                  <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                Building Access / Elevator Instructions
              </label>
              <textarea
                rows={3}
                value={formData.specialInstructions}
                onChange={e => setFormData({ ...formData, specialInstructions: e.target.value })}
                className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="px-6 py-4 border border-[#E5E0D8] text-[10px] uppercase tracking-wider font-bold text-[#A8A29A] hover:text-[#2A2A2A]"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep('payment')}
                className="flex-1 py-4 bg-[#2A2A2A] text-[#FDFCF9] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F] text-[10px]"
              >
                Proceed to Payment & Review →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment & Summary */}
        {step === 'payment' && (
          <form onSubmit={handlePlaceOrder} className="space-y-6 text-xs">
            {/* Order Items Preview */}
            <div className="bg-[#F5F2ED] p-4 border border-[#E5E0D8] space-y-3">
              <span className="font-semibold text-[#2A2A2A] uppercase tracking-wider block text-[10px]">
                Acquisition Summary ({cart.length} unique items)
              </span>
              <div className="max-h-40 overflow-y-auto divide-y divide-[#E5E0D8] pr-2">
                {cart.map(item => (
                  <div key={item.id} className="py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img src={item.product.images[0]} alt="" className="w-10 h-10 object-cover" />
                      <div>
                        <p className="font-medium text-[#2A2A2A]">{item.product.name}</p>
                        <p className="text-[10px] text-[#A8A29A]">{item.color} {item.size ? `• ${item.size}` : ''} × {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium font-serif text-[#2A2A2A]">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Math Breakdown */}
              <div className="pt-3 border-t border-[#E5E0D8] space-y-1.5 text-xs">
                <div className="flex justify-between text-[#3D352F]/70">
                  <span>Items Subtotal</span>
                  <span className="font-serif">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#3D352F]/70">
                  <span>White-Glove In-Home Delivery</span>
                  <span>{deliveryFee === 0 ? 'COMPLIMENTARY' : `$${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-[#3D352F]/70">
                  <span>Estimated NY Sales Tax (8.875%)</span>
                  <span className="font-serif">${estimatedTaxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#2A2A2A] pt-2 border-t border-[#E5E0D8]">
                  <span>Total Investment</span>
                  <span className="font-serif">${finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none pl-10"
                  />
                  <CreditCard className="w-4 h-4 text-[#A8A29A] absolute left-3 top-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    Expiration
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cardExp}
                    onChange={e => setFormData({ ...formData, cardExp: e.target.value })}
                    className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#2A2A2A] mb-1 text-[10px]">
                    CVC Security Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cardCvc}
                    onChange={e => setFormData({ ...formData, cardCvc: e.target.value })}
                    className="w-full p-3 bg-[#FDFCF9] border border-[#E5E0D8] text-xs focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('delivery')}
                className="px-6 py-4 border border-[#E5E0D8] text-[10px] uppercase tracking-wider font-bold text-[#A8A29A] hover:text-[#2A2A2A]"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="flex-1 py-4 bg-[#2A2A2A] hover:bg-[#3D352F] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Lock className="w-4 h-4" />
                <span>Place Order & Schedule Delivery — ${finalTotal.toLocaleString()}</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Confirmation Receipt */}
        {step === 'confirmation' && (
          <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#F5F2ED] border border-[#E5E0D8] flex items-center justify-center mx-auto text-[#2A2A2A]">
              <CheckCircle2 className="w-8 h-8 text-[#A87C52]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A29A] font-semibold block">
              Order Confirmed
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2A2A] font-light">
              Thank You, {formData.firstName}.
            </h2>

            <p className="text-xs sm:text-sm text-[#3D352F]/70 max-w-md mx-auto font-light leading-relaxed">
              Your bespoke furniture order <strong className="text-[#2A2A2A] font-medium">{orderNumber}</strong> has been secured and queued for white-glove inspection.
            </p>

            <div className="bg-[#F5F2ED] p-6 max-w-lg mx-auto text-left text-xs text-[#2A2A2A] border border-[#E5E0D8] space-y-2 mt-6">
              <div className="flex justify-between border-b border-[#E5E0D8] pb-2">
                <span className="text-[#A8A29A]">Destination:</span>
                <span className="font-medium">{formData.address}, {formData.city}, {formData.state}</span>
              </div>
              <div className="flex justify-between border-b border-[#E5E0D8] pb-2">
                <span className="text-[#A8A29A]">Scheduled Delivery:</span>
                <span className="font-medium">{formData.deliveryDate} ({formData.deliveryWindow})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A8A29A]">Client Specialist:</span>
                <span className="font-medium">Elena Vance (Senior Concierge)</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onClose}
                className="px-10 py-4 bg-[#2A2A2A] text-[#FDFCF9] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3D352F]"
              >
                Return to Lumora Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
