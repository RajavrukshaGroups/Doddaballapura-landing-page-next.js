import React, { useState } from 'react';
import { X, ArrowRight, Phone, MessageCircle, Sprout } from 'lucide-react';
import { toast } from 'react-hot-toast';

export const EnquireModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotType: 'Residential Plots in Doddaballapur',
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please enter your name and phone number');
      return;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
      toast.success('Thank you! Our property advisory team will connect with you shortly.');
      const waText = encodeURIComponent(
        `Hello Defence Habitat Team,\nI would like to enquire about plots at Doddaballapur.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.plotType}`
      );
      window.open(
        `https://api.whatsapp.com/send/?phone=918884413931&text=${waText}&app_absent=0`,
        '_blank'
      );
      setFormData({
        name: '',
        phone: '',
        email: '',
        plotType: 'Residential Plots in Doddaballapur',
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-stone-200 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#f4efe6] text-[#c59a52] flex items-center justify-center mx-auto mb-3">
            <Sprout className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
            Enquire About Plots
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            Get brochure, layout details &amp; schedule a free site visit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#c59a52] focus:ring-2 focus:ring-[#c59a52]/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              maxLength={10}
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/g, '').slice(0, 10),
                })
              }
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#c59a52] focus:ring-2 focus:ring-[#c59a52]/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Plot Preference
            </label>
            <select
              value={formData.plotType}
              onChange={(e) => setFormData({ ...formData, plotType: e.target.value })}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#c59a52] focus:ring-2 focus:ring-[#c59a52]/20 transition-all"
            >
              <option value="Residential Plots in Doddaballapur">Residential Plots in Doddaballapur</option>
              <option value="30x40 (1200 sq.ft) Site">30x40 (1200 sq.ft) Site</option>
              <option value="30x50 (1500 sq.ft) Site">30x50 (1500 sq.ft) Site</option>
              <option value="40x60 (2400 sq.ft) Site">40x60 (2400 sq.ft) Site</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#c59a52] hover:bg-[#b28236] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-center gap-4 text-xs text-stone-500">
          <a
            href="tel:+918884413931"
            className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 font-medium no-underline"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>+91 88844 13931</span>
          </a>
          <span>•</span>
          <a
            href="https://api.whatsapp.com/send/?phone=918884413931&text=Hi%20Defence%20Habitat%2C%20I%20want%20to%20enquire%20about%20plots&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium no-underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
