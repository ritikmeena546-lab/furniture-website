import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about our products or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-cream-50 p-8 border border-cream-200">
              <h3 className="font-serif text-2xl text-charcoal-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-wood-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-charcoal-800">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-wood-600 mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-wood-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-charcoal-800">Email</h4>
                    <p className="text-gray-600">hello@aurafurniture.com</p>
                    <p className="text-gray-600">sales@aurafurniture.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-wood-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-charcoal-800">Factory & Showroom</h4>
                    <p className="text-gray-600">123 Craftsman Boulevard<br />Industrial District<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-cream-200 p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={6} className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500"></textarea>
                </div>
                <Button size="lg">Send Message</Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
