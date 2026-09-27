import { Link } from 'react-router-dom';

import Button from './Button';
import { useQuote } from '../../context/QuoteContext';

export interface Product {
  id: string;
  name: string;
  category: string;
  price?: number;
  image: string;
  finishes: string[];
  isCustom?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openQuote } = useQuote();

  return (
    <div className="group flex flex-col bg-white border border-cream-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link to={`/products/${product.id}`} className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-wood-500 uppercase tracking-wider mb-2">{product.category}</div>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-serif text-xl text-charcoal-800 mb-2 group-hover:text-wood-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex space-x-2 mb-4">
          {product.finishes.slice(0, 3).map((finish, idx) => (
            <div 
              key={idx} 
              className="w-4 h-4 rounded-full border border-gray-300" 
              style={{ backgroundColor: finish }} 
              title={finish}
            />
          ))}
          {product.finishes.length > 3 && (
            <span className="text-xs text-gray-500">+{product.finishes.length - 3}</span>
          )}
        </div>

        <div className="mt-auto pt-4 grid grid-cols-2 gap-3 border-t border-cream-100">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={(e) => {
              e.preventDefault();
              openQuote(product.name);
            }} 
            className="w-full text-wood-700 border-wood-300 hover:bg-wood-50"
          >
            Get Quote
          </Button>
          <Button variant="outline" size="sm" href={`/products/${product.id}`} className="w-full">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
