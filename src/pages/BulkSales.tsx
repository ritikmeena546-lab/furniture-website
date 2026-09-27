import { motion } from 'framer-motion';
import { Building2, Hotel, Briefcase, Sofa } from 'lucide-react';
import Button from '../components/ui/Button';

const CLIENTS = [
  { icon: Hotel, title: 'Hotels & Resorts', desc: 'Complete furnishing for guest rooms, lobbies, and dining areas.' },
  { icon: Building2, title: 'Real Estate Builders', desc: 'Model apartments and bulk residential projects.' },
  { icon: Briefcase, title: 'Corporate Offices', desc: 'Ergonomic workstations, executive cabins, and breakout zones.' },
  { icon: Sofa, title: 'Interior Designers', desc: 'B2B partnerships for bespoke residential projects.' },
];

export default function BulkSales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-wood-900 text-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Bulk & B2B Manufacturing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-wood-200 max-w-3xl mx-auto"
          >
            Partner with us for your commercial projects. We offer scalable manufacturing solutions with uncompromised quality and dedicated project management.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-serif text-charcoal-800 mb-8">Who We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {CLIENTS.map((client, idx) => (
                <div key={idx} className="bg-cream-50 p-6 border border-cream-200">
                  <client.icon className="w-8 h-8 text-wood-600 mb-4" />
                  <h3 className="font-serif text-xl text-charcoal-800 mb-2">{client.title}</h3>
                  <p className="text-sm text-gray-600">{client.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-wood-100 p-8">
              <h3 className="font-serif text-2xl text-wood-900 mb-4">Why Partner With Us?</h3>
              <ul className="space-y-4 text-wood-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-wood-500 rounded-full mr-3 flex-shrink-0" />
                  Dedicated B2B account manager
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-wood-500 rounded-full mr-3 flex-shrink-0" />
                  Tiered volume discounts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-wood-500 rounded-full mr-3 flex-shrink-0" />
                  Customized prototyping before mass production
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-wood-500 rounded-full mr-3 flex-shrink-0" />
                  End-to-end logistics and installation support
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <div className="bg-white border border-cream-200 p-8 shadow-lg sticky top-24">
              <h3 className="font-serif text-2xl text-charcoal-800 mb-6">Request a Bulk Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                  <select className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500 bg-white">
                    <option>Hotel / Resort</option>
                    <option>Restaurant / Cafe</option>
                    <option>Corporate Office</option>
                    <option>Retail Store</option>
                    <option>Residential Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details & Estimated Volume</label>
                  <textarea rows={4} className="w-full border border-gray-300 px-4 py-2 focus:ring-wood-500 focus:border-wood-500" placeholder="Please describe your project needs..."></textarea>
                </div>
                <Button className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
