import { useState } from 'react';
import { Lock, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-charcoal-800">Checkout</h1>
          <div className="flex items-center text-sm text-gray-500">
            <Lock className="w-4 h-4 mr-1 text-wood-600" /> Secure Encryption
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Checkout Form */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Step 1: Shipping Address */}
            <div className={`bg-white border ${step === 1 ? 'border-wood-500 ring-1 ring-wood-500' : 'border-cream-200'} p-6 transition-all`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-charcoal-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-wood-100 text-wood-700 flex items-center justify-center mr-3 text-sm">1</span>
                  Shipping Address
                </h2>
                {step > 1 && (
                  <button onClick={() => setStep(1)} className="text-wood-600 text-sm hover:underline">Edit</button>
                )}
              </div>
              
              {step === 1 ? (
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 mb-2" placeholder="Street address or P.O. Box" />
                    <input type="text" className="w-full border border-gray-300 px-4 py-2" placeholder="Apt, suite, unit, building, floor, etc." />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button onClick={() => setStep(2)} type="button">Continue to Payment</Button>
                  </div>
                </form>
              ) : (
                <div className="text-gray-600 pl-11">
                  <p>John Doe</p>
                  <p>123 Main St, Apt 4B</p>
                  <p>New York, NY 10001</p>
                </div>
              )}
            </div>

            {/* Step 2: Payment */}
            <div className={`bg-white border ${step === 2 ? 'border-wood-500 ring-1 ring-wood-500' : 'border-cream-200'} p-6 transition-all`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-charcoal-800 flex items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm ${step >= 2 ? 'bg-wood-100 text-wood-700' : 'bg-gray-100 text-gray-400'}`}>2</span>
                  Payment Method
                </h2>
              </div>
              
              {step === 2 && (
                <form className="space-y-6">
                  <div className="border border-gray-300 p-4 rounded-sm">
                    <div className="flex items-center mb-4">
                      <input type="radio" name="payment" id="cc" className="w-4 h-4 text-wood-600 mr-2" defaultChecked />
                      <label htmlFor="cc" className="font-medium text-gray-700 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-gray-500" /> Credit Card
                      </label>
                    </div>
                    <div className="space-y-4 pl-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input type="text" className="w-full border border-gray-300 px-4 py-2" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                          <input type="text" className="w-full border border-gray-300 px-4 py-2" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Security Code (CVV)</label>
                          <input type="text" className="w-full border border-gray-300 px-4 py-2" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                        <input type="text" className="w-full border border-gray-300 px-4 py-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-cream-200">
                    <Button onClick={() => alert("Order Placed Successfully!")} type="button" size="lg" className="w-full">
                      Place Order
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      By clicking Place Order, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white border border-cream-200 p-6 sticky top-24">
              <h2 className="text-xl font-serif text-charcoal-800 mb-6 border-b border-cream-200 pb-4">In Your Cart</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=150&q=80" alt="Sofa" className="w-16 h-16 object-cover border border-cream-200 mr-4" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-charcoal-800">Lumina Velvet Sofa</h4>
                    <p className="text-xs text-gray-500">Qty: 1</p>
                  </div>
                  <span className="text-sm font-medium text-charcoal-800">₹1,299.00</span>
                </div>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=150&q=80" alt="Chair" className="w-16 h-16 object-cover border border-cream-200 mr-4" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-charcoal-800">Ergo Office Chair</h4>
                    <p className="text-xs text-gray-500">Qty: 2</p>
                  </div>
                  <span className="text-sm font-medium text-charcoal-800">₹700.00</span>
                </div>
              </div>

              <div className="border-t border-cream-200 pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₹1,999.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>₹150.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span>₹159.92</span>
                </div>
              </div>

              <div className="border-t border-cream-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-lg font-semibold text-charcoal-800">Total</span>
                  <span className="font-medium text-xl text-wood-900">₹2,308.92</span>
                </div>
                <Link to="/cart" className="text-sm text-wood-600 hover:underline text-center block">
                  Edit Cart
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
