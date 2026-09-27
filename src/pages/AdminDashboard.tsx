import { useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, Plus, Edit, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 md:min-h-screen flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between md:justify-center">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-wood-900">Aura</span>
            <span className="font-sans text-xs text-wood-600 tracking-widest uppercase">Admin Panel</span>
          </div>
          <Link to="/" className="md:hidden text-sm text-wood-600">Exit</Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-4 py-3 text-sm rounded-sm transition-colors ${activeTab === 'dashboard' ? 'bg-wood-50 text-wood-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3 text-gray-400" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center px-4 py-3 text-sm rounded-sm transition-colors ${activeTab === 'products' ? 'bg-wood-50 text-wood-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Package className="w-5 h-5 mr-3 text-gray-400" /> Products
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center px-4 py-3 text-sm rounded-sm transition-colors ${activeTab === 'orders' ? 'bg-wood-50 text-wood-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <ShoppingCart className="w-5 h-5 mr-3 text-gray-400" /> Orders & Enquiries
          </button>
          <button 
            onClick={() => setActiveTab('customers')}
            className={`w-full flex items-center px-4 py-3 text-sm rounded-sm transition-colors ${activeTab === 'customers' ? 'bg-wood-50 text-wood-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Users className="w-5 h-5 mr-3 text-gray-400" /> Customers
          </button>
          <button 
            className="w-full flex items-center px-4 py-3 text-sm rounded-sm transition-colors text-gray-600 hover:bg-gray-50"
          >
            <Settings className="w-5 h-5 mr-3 text-gray-400" /> Settings
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <Link to="/" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 mr-3" /> Back to Website
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif text-gray-800">Product Management</h2>
              <button className="bg-wood-800 text-white px-4 py-2 rounded-sm flex items-center hover:bg-wood-700 transition-colors text-sm">
                <Plus className="w-4 h-4 mr-2" /> Add New Product
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-medium text-gray-500 text-sm">Product</th>
                      <th className="p-4 font-medium text-gray-500 text-sm">Category</th>
                      <th className="p-4 font-medium text-gray-500 text-sm">Price</th>
                      <th className="p-4 font-medium text-gray-500 text-sm">Status</th>
                      <th className="p-4 font-medium text-gray-500 text-sm text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {PRODUCTS.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 flex items-center">
                          <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-sm border border-gray-200 mr-4" />
                          <span className="font-medium text-gray-800">{product.name}</span>
                        </td>
                        <td className="p-4 text-gray-600 text-sm">{product.category}</td>
                        <td className="p-4 text-gray-600 text-sm italic">Hidden</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            In Stock
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-blue-600 hover:text-blue-800 mx-2" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800 mx-2" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'products' && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
            <LayoutDashboard className="w-16 h-16 mb-4 text-gray-300" />
            <h3 className="text-xl font-medium mb-2 capitalize">{activeTab} View</h3>
            <p>This module is under construction.</p>
          </div>
        )}
      </div>
    </div>
  );
}
