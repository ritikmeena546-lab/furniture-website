import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import Button from './Button';

export default function QuoteModal() {
  const { isOpen, closeQuote, productName } = useQuote();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    quantity: '1',
    dimensions: '',
    material: '',
    finish: '',
    customization: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData(prev => ({
        ...prev,
        product: productName || ''
      }));
    }
  }, [isOpen, productName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuote}
          className="absolute inset-0 bg-wood-900/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex justify-between items-center p-6 border-b border-cream-200">
            <h2 className="text-2xl font-serif text-charcoal-800">Request a Quote</h2>
            <button 
              onClick={closeQuote}
              className="text-gray-400 hover:text-wood-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-serif text-charcoal-800 mb-2">Request Submitted</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Thank you for your interest! Our team will review your requirements and get back to you with a detailed quote shortly.
                </p>
                <Button onClick={closeQuote}>Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <input type="text" name="product" value={formData.product} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500 bg-gray-50" placeholder="e.g. Lumina Velvet Sofa" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input type="number" min="1" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Required Size / Dimensions</label>
                    <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="e.g. 72 x 36 x 30 inches" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Material Preference</label>
                    <input type="text" name="material" value={formData.material} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="e.g. Solid Oak" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Color / Finish</label>
                    <input type="text" name="finish" value={formData.finish} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="e.g. Dark Walnut" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customization Requirements</label>
                  <input type="text" name="customization" value={formData.customization} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="Any specific adjustments?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Reference Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition-colors">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-wood-600 hover:text-wood-500 focus-within:outline-none">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                  <textarea rows={3} name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 md:py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="Tell us more..."></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Submit Quote Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
