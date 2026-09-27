import { motion } from 'framer-motion';
import { Scissors, Hammer, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { useQuote } from '../context/QuoteContext';

const PROCESS_STEPS = [
  { icon: CheckCircle, title: 'Material Selection', desc: 'We source premium, sustainable timber and high-quality fabrics.' },
  { icon: Scissors, title: 'CNC Cutting', desc: 'Advanced CNC routing for precise dimensions and perfect joints.' },
  { icon: Hammer, title: 'Precision Crafting', desc: 'Expert craftsmen hand-shape and refine the wooden components.' },
  { icon: Wrench, title: 'Assembly', desc: 'Rigorous assembly ensuring structural integrity and stability.' },
  { icon: Sparkles, title: 'Finishing', desc: 'Multi-layer polishing, staining, and premium upholstery.' },
  { icon: CheckCircle, title: 'Quality Inspection', desc: 'Strict 50-point quality check before approving any piece.' },
];

export default function Manufacturing() {
  const { openQuote } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=2000" 
          alt="Manufacturing Facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wood-900/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[38px] leading-tight md:text-6xl font-serif text-white mb-4"
          >
            Where Craftsmanship Meets Precision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-cream-100 max-w-2xl mx-auto mb-8"
          >
            A look inside our state-of-the-art facility where traditional craftsmanship meets modern engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" onClick={() => openQuote('Manufacturing Quote')} className="bg-gold-DEFAULT text-wood-900 hover:bg-gold-light border-none w-[90%] sm:w-auto max-w-[340px] sm:max-w-none">
              Request Manufacturing Quote
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-charcoal-800 mb-4">Our Manufacturing Process</h2>
          <div className="h-1 w-24 bg-wood-500 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cream-200" />
          
          <div className="space-y-6 md:space-y-0">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div className={`md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} mb-8 md:mb-0 w-full justify-center`}>
                  <div className="bg-cream-50 p-8 border border-cream-200 w-full max-w-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-wood-700" />
                      </div>
                      <h3 className="font-serif text-xl text-charcoal-800">
                        {String(idx + 1).padStart(2, '0')} {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-wood-500 items-center justify-center text-white font-bold text-xs shadow-md">
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 text-center px-4">
          <Button size="lg" onClick={() => openQuote('Manufacturing Quote')} className="w-full sm:w-auto">
            Request Manufacturing Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
