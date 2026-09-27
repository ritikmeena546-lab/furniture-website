import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(2000);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = (product.price || 0) <= priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  return (
    <div className="bg-cream-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cream-200 pb-6">
          <div>
            <h1 className="text-4xl font-serif text-charcoal-800 mb-2">Our Collection</h1>
            <p className="text-wood-600">Discover our premium range of handcrafted furniture.</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white border border-cream-200 focus:outline-none focus:ring-1 focus:ring-wood-500 rounded-sm w-full md:w-64"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-cream-200 rounded-sm hover:bg-cream-100 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <div className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 border border-cream-200 sticky top-24">
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h3 className="font-serif text-lg font-semibold text-charcoal-800">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-4 flex items-center">
                  <SlidersHorizontal className="w-4 h-4 mr-2" /> Categories
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <li key={category}>
                      <button 
                        onClick={() => setSelectedCategory(category)}
                        className={`text-sm text-left w-full transition-colors ${
                          selectedCategory === category 
                            ? 'text-wood-600 font-semibold' 
                            : 'text-gray-600 hover:text-wood-500'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter temporarily removed */}
              {/* <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-4">Price Range</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="3000" 
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-wood-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹0</span>
                  <span>Up to ₹{priceRange}</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-cream-200">
                <h3 className="text-xl font-serif text-charcoal-800 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange(2000);
                  }}
                  className="mt-4 text-wood-600 underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
