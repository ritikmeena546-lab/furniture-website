import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

// Dummy cart data
const CART_ITEMS = [
  {
    id: '1',
    name: 'Lumina Velvet Sofa',
    price: 1299,
    quantity: 1,
    finish: '#064E3B', // Emerald Green
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'Ergo Office Chair',
    price: 350,
    quantity: 2,
    finish: '#1A202C', // Black
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Cart() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-serif text-charcoal-800 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white border border-cream-200">
              {/* Header */}
              <div className="hidden md:grid grid-cols-6 gap-4 p-6 border-b border-cream-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
                <div className="col-span-3">Product</div>
                <div className="col-span-1 text-center">Price</div>
                <div className="col-span-1 text-center">Quantity</div>
                <div className="col-span-1 text-right">Total</div>
              </div>
              
              {/* Items */}
              <div className="divide-y divide-cream-200">
                {CART_ITEMS.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col md:grid md:grid-cols-6 gap-4 items-center">
                    <div className="col-span-3 flex items-center w-full">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover border border-cream-200 mr-6" />
                      <div>
                        <h3 className="font-serif text-lg text-charcoal-800 mb-1">{item.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          Finish: 
                          <span 
                            className="w-3 h-3 rounded-full ml-2 border border-gray-300" 
                            style={{ backgroundColor: item.finish }}
                          />
                        </div>
                        <button className="text-sm text-red-500 hover:text-red-700 mt-2 flex items-center md:hidden">
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 text-center hidden md:block text-gray-700">
                      ₹{item.price.toLocaleString()}
                    </div>
                    
                    <div className="col-span-1 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                      <div className="flex items-center border border-gray-300 rounded-sm">
                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">-</button>
                        <span className="px-3 py-1 font-medium">{item.quantity}</span>
                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">+</button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 text-right w-full md:w-auto mt-4 md:mt-0 flex justify-between md:block items-center">
                      <span className="md:hidden font-medium text-gray-500">Total:</span>
                      <div className="flex flex-col items-end">
                        <span className="font-medium text-charcoal-800">₹{(item.price * item.quantity).toLocaleString()}</span>
                        <button className="text-gray-400 hover:text-red-500 mt-2 hidden md:block">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/products" className="inline-flex items-center text-wood-600 hover:text-wood-800 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white border border-cream-200 p-6 sticky top-24">
              <h2 className="text-xl font-serif text-charcoal-800 mb-6 border-b border-cream-200 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span>₹{tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              
              <div className="border-t border-cream-200 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg font-semibold text-charcoal-800">Total</span>
                  <span className="font-medium text-xl text-wood-900">
                    ₹{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              
              <Button href="/checkout" className="w-full flex justify-center items-center">
                Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                Secure checkout. We accept all major credit cards.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
