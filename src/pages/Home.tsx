import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Factory } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { useQuote } from '../context/QuoteContext';

const CATEGORIES = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
];

const BEST_SELLERS = [
  {
    id: '1',
    name: 'Lumina Velvet Sofa',
    category: 'Sofas',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600',
    finishes: ['#334155', '#B45309', '#064E3B']
  },
  {
    id: '2',
    name: 'Oakwood Dining Table',
    category: 'Dining Tables',
    price: 899,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600',
    finishes: ['#D4A373', '#9C6644', '#4A3022']
  },
  {
    id: '3',
    name: 'Aura Platform Bed',
    category: 'Beds',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600',
    finishes: ['#F5F5F5', '#1A202C']
  },
  {
    id: '4',
    name: 'Ergo Office Chair',
    category: 'Office Furniture',
    price: 350,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600',
    finishes: ['#1A202C', '#78716C']
  }
];

export default function Home() {
  const { openQuote } = useQuote();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Furniture Interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-wood-900/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[38px] md:text-7xl font-serif text-white font-bold leading-tight mb-6"
          >
            Crafting Furniture. <br className="hidden md:block"/> Building Spaces.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-cream-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Premium furniture manufacturing and customized solutions for homes, offices and commercial spaces.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" href="/products" className="bg-white text-wood-900 hover:bg-cream-100 w-[90%] sm:w-auto max-w-[340px] sm:max-w-none">
              Explore Products
            </Button>
            <Button size="lg" onClick={() => openQuote()} className="bg-transparent border-2 border-white text-white hover:bg-white/10 w-[90%] sm:w-auto max-w-[340px] sm:max-w-none">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal-800 mb-4">Shop by Category</h2>
            <div className="h-1 w-24 bg-wood-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((category, idx) => (
              <motion.a 
                href="/products" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[400px] overflow-hidden flex items-end justify-center pb-8"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-white mb-2">{category.name}</h3>
                  <span className="inline-flex items-center text-cream-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-800 mb-4">Best Selling</h2>
              <div className="h-1 w-24 bg-wood-500" />
            </div>
            <Button variant="ghost" href="/products" className="hidden md:inline-flex">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BEST_SELLERS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" href="/products">
              View All Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-24 bg-wood-900 text-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-wood-300 uppercase tracking-widest text-sm font-semibold mb-4 block">Our Process</span>
                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Where Craftsmanship Meets Precision</h2>
                <p className="text-wood-200 mb-8 leading-relaxed text-lg">
                  With over two decades of manufacturing excellence, our state-of-the-art facility combines traditional carpentry techniques with modern CNC precision to deliver furniture that lasts generations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start">
                    <Factory className="w-8 h-8 text-gold-DEFAULT mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-xl mb-2 text-white">In-house Production</h4>
                      <p className="text-sm text-wood-300">Complete control over quality from raw wood to final polish.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheck className="w-8 h-8 text-gold-DEFAULT mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-xl mb-2 text-white">Premium Materials</h4>
                      <p className="text-sm text-wood-300">Sourcing only the finest sustainable timber and fabrics.</p>
                    </div>
                  </div>
                </div>
                <Button href="/manufacturing" className="bg-gold-DEFAULT text-wood-900 hover:bg-gold-light border-none">
                  Discover Our Factory
                </Button>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full">
              <motion.div 
                className="relative h-[500px] w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1533090368676-1fd25485d45d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Furniture Manufacturing" 
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                    </div>
                    <span className="font-bold text-charcoal-800">4.9/5</span>
                  </div>
                  <p className="text-sm text-charcoal-800 font-serif italic">"Exceptional build quality. You can see the attention to detail in every joint."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal-800 mb-6">Need Something Special?</h2>
          <p className="text-lg text-charcoal-800/70 mb-10">
            We specialize in custom furniture and bulk manufacturing for hotels, restaurants, and offices. Let's build your vision together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/custom-furniture">
              Request Custom Design
            </Button>
            <Button size="lg" variant="outline" href="/bulk-sales">
              B2B Enquiries
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
