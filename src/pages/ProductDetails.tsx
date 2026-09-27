import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Truck, Shield, Ruler } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import Button from '../components/ui/Button';
import { useQuote } from '../context/QuoteContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { openQuote } = useQuote();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(product?.finishes[0] || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Product not found</h2>
        <Link to="/products" className="text-wood-600 underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-cream-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-wood-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>
        
        <div className="bg-white border border-cream-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Image Gallery */}
            <div className="md:w-1/2 p-6 md:p-12 border-b md:border-b-0 md:border-r border-cream-200 flex items-center justify-center bg-gray-50">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto max-h-[600px] object-cover shadow-xl"
              />
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-12">
              <div className="text-sm text-wood-500 uppercase tracking-wider mb-2">{product.category}</div>
              <h1 className="text-4xl font-serif text-charcoal-800 mb-4">{product.name}</h1>
              {/* Price temporarily removed per request */}
              
              <p className="text-gray-600 mb-8 leading-relaxed mt-4">
                Handcrafted using the finest materials, the {product.name} brings elegance and comfort to any space. Designed with both aesthetics and durability in mind, it is a statement piece for the modern home.
              </p>

              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-4">Select Finish</h3>
                <div className="flex space-x-4">
                  {product.finishes.map((finish, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFinish(finish)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        selectedFinish === finish ? 'ring-2 ring-offset-2 ring-wood-600' : 'ring-1 ring-gray-300'
                      }`}
                      style={{ backgroundColor: finish }}
                      title={finish}
                    >
                      {selectedFinish === finish && (
                        <Check className={finish === '#FDFCFB' || finish === '#F5F5F5' ? 'text-charcoal-800' : 'text-white'} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-end space-x-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded-sm">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >-</button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >+</button>
                  </div>
                </div>
                <Button onClick={() => openQuote(product.name)} className="flex-grow">
                  Request Quote
                </Button>
              </div>

              <div className="border-t border-cream-200 pt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Truck className="w-5 h-5 mr-3 text-wood-600" />
                  <span>Ships within 2-4 weeks (Made to order)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-3 text-wood-600" />
                  <span>10 Year Structural Warranty</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Ruler className="w-5 h-5 mr-3 text-wood-600" />
                  <span>Custom dimensions available upon request</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
