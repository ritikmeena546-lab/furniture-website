import { motion } from 'framer-motion';
import { Ruler, Sparkles, Droplets, PaintBucket, PenTool, Home } from 'lucide-react';
import Button from '../components/ui/Button';
import { useQuote } from '../context/QuoteContext';

export default function CustomFurniture() {
  const { openQuote } = useQuote();

  const features = [
    { icon: Ruler, title: 'Dimensions', desc: 'Sized perfectly to fit your unique space requirements.' },
    { icon: Sparkles, title: 'Material', desc: 'Choose from our curated selection of premium sustainable woods and metals.' },
    { icon: PaintBucket, title: 'Color', desc: 'Match your existing palette or create a bold new focal point.' },
    { icon: Droplets, title: 'Finish', desc: 'From matte natural to high-gloss lacquers, tailored to your taste.' },
    { icon: PenTool, title: 'Design', desc: 'Bring your own inspiration or let our designers draft a unique concept.' },
    { icon: Home, title: 'Space requirements', desc: 'Designed considering traffic flow and spatial aesthetics of your room.' },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=2000" 
          alt="Custom Furniture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wood-900/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[38px] leading-tight md:text-6xl font-serif text-white mb-6"
          >
            Furniture Made Around Your Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-cream-100 mb-10 font-light"
          >
            Every space is unique, and your furniture should be too. Work with our master craftsmen to create bespoke pieces tailored to your exact lifestyle and aesthetic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" onClick={() => openQuote('Custom Project')} className="bg-white text-wood-900 hover:bg-cream-100 w-[90%] sm:w-auto max-w-[340px] sm:max-w-none">
              Start Your Custom Project
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Process/Features */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-charcoal-800 mb-4">Tailored to Every Detail</h2>
          <div className="h-1 w-24 bg-wood-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            When you choose custom manufacturing with Aura, you have complete control over the final product. Request furniture exactly according to your:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 border border-cream-200 hover:shadow-lg transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-cream-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-50 transition-colors">
                <feature.icon className="w-8 h-8 text-wood-600" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-wood-900 text-white p-12 rounded-sm shadow-xl">
          <h3 className="text-3xl font-serif mb-4">Ready to bring your idea to life?</h3>
          <p className="text-wood-200 mb-8 max-w-2xl mx-auto">
            Upload your reference images, sketches, or architectural plans and let us provide you with a comprehensive quote and timeline.
          </p>
          <Button size="lg" onClick={() => openQuote('Custom Project')} className="bg-gold-DEFAULT text-wood-900 hover:bg-gold-light border-none w-full sm:w-auto">
            Start Your Custom Project
          </Button>
        </div>
      </div>
    </div>
  );
}
