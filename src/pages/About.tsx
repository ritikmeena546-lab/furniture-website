import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="relative h-[50vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=2000" 
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wood-900/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[38px] md:text-6xl font-serif text-white mb-4"
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-wood mx-auto">
          <h2 className="text-3xl font-serif text-charcoal-800 text-center mb-8">Crafting Excellence Since 1998</h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded by Rocky, Aura Furniture began in a small workshop with a simple vision: to create furniture that doesn't just fill a space, but defines it. Over two decades later, we have grown into a premier manufacturing facility, but our core philosophy remains unchanged.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-12">
            We believe that true luxury lies in the details. From the initial sketch to the final coat of polish, every piece that leaves our factory is a testament to the skill and dedication of our master craftsmen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1581428982868-e410dd127a90?auto=format&fit=crop&q=80&w=600" 
              alt="Craftsman at work"
              className="w-full h-64 object-cover shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=600" 
              alt="Finished furniture"
              className="w-full h-64 object-cover shadow-md"
            />
          </div>

          <h3 className="text-2xl font-serif text-charcoal-800 mb-6">Our Core Values</h3>
          <ul className="space-y-6">
            <li className="flex flex-col">
              <span className="font-serif text-xl text-wood-700 mb-2">Uncompromising Quality</span>
              <span className="text-gray-600">We source only the finest sustainable materials and employ rigorous quality checks at every stage of production.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-serif text-xl text-wood-700 mb-2">Sustainable Practices</span>
              <span className="text-gray-600">Our timber is ethically sourced, and our manufacturing processes are designed to minimize waste and environmental impact.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-serif text-xl text-wood-700 mb-2">Customer Centricity</span>
              <span className="text-gray-600">Whether it's a single custom chair or a bulk order for a 500-room hotel, we treat every client with the same level of dedication and service.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
