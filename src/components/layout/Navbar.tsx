import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="bg-cream-50 border-b border-cream-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={handleHomeClick}>
              <span className="font-serif text-2xl font-bold text-wood-900">Aura</span>
              <span className="font-sans text-sm ml-2 text-wood-600 tracking-widest uppercase mt-1 hidden sm:inline-block">Furniture</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={handleHomeClick} className="text-charcoal-800 hover:text-wood-600 font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-charcoal-800 hover:text-wood-600 font-medium transition-colors">Shop</Link>
            <Link to="/manufacturing" className="text-charcoal-800 hover:text-wood-600 font-medium transition-colors">Manufacturing</Link>
            <Link to="/custom-furniture" className="text-charcoal-800 hover:text-wood-600 font-medium transition-colors">Custom</Link>
            <Link to="/about" className="text-charcoal-800 hover:text-wood-600 font-medium transition-colors">About Us</Link>
          </div>

          {/* Icons (Desktop & Mobile) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/admin" className="text-charcoal-800 hover:text-wood-600 transition-colors hidden sm:block">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-charcoal-800 hover:text-wood-600 transition-colors relative">
              <ShoppingCart className="h-5 w-5 md:h-5 md:w-5" />
              <span className="absolute -top-2 -right-2 bg-wood-500 text-white text-[10px] md:text-xs rounded-full h-4 w-4 md:h-4 md:w-4 flex items-center justify-center">0</span>
            </Link>
            
            {/* Hamburger (Mobile Only) */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal-800 md:hidden p-2 -mr-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-cream-50 border-b border-cream-200 overflow-hidden absolute w-full left-0 top-full shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link to="/" onClick={handleHomeClick} className="block px-3 py-3 text-lg text-charcoal-800 font-medium border-b border-cream-200/50">Home</Link>
              <Link to="/products" onClick={closeMenu} className="block px-3 py-3 text-lg text-charcoal-800 font-medium border-b border-cream-200/50">Shop</Link>
              <Link to="/manufacturing" onClick={closeMenu} className="block px-3 py-3 text-lg text-charcoal-800 font-medium border-b border-cream-200/50">Manufacturing</Link>
              <Link to="/custom-furniture" onClick={closeMenu} className="block px-3 py-3 text-lg text-charcoal-800 font-medium border-b border-cream-200/50">Custom</Link>
              <Link to="/about" onClick={closeMenu} className="block px-3 py-3 text-lg text-charcoal-800 font-medium">About Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
