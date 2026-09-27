import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Manufacturing from './pages/Manufacturing';
import CustomFurniture from './pages/CustomFurniture';
import BulkSales from './pages/BulkSales';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { QuoteProvider } from './context/QuoteContext';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <QuoteProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="custom-furniture" element={<CustomFurniture />} />
            <Route path="bulk-sales" element={<BulkSales />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          {/* Admin Dashboard usually has its own layout without standard navbar/footer */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </QuoteProvider>
  );
}

export default App;
