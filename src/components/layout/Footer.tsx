import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-wood-900 text-cream-100 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold text-white">Aura</span>
              <span className="font-sans text-xs text-wood-300 tracking-widest uppercase">Furniture</span>
            </Link>
            <p className="text-sm text-wood-200 mt-4 leading-relaxed max-w-sm">
              Crafting premium furniture and building elegant spaces since 1998. We merge traditional craftsmanship with modern design.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-wood-200">
              <li><Link to="/products" className="hover:text-white transition-colors">Shop Collection</Link></li>
              <li><Link to="/custom-furniture" className="hover:text-white transition-colors">Custom Orders</Link></li>
              <li><Link to="/manufacturing" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/bulk-sales" className="hover:text-white transition-colors">B2B & Bulk</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-wood-200">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-wood-200 mb-4">Subscribe for updates on new collections and exclusive offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-wood-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-wood-500 border border-wood-700"
              />
              <button className="bg-wood-500 hover:bg-wood-400 text-white px-4 py-2 transition-colors font-medium">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-wood-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-wood-400">
          <p>&copy; {new Date().getFullYear()} Aura Furniture Manufacturing. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
