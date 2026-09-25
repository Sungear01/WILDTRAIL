import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoriesBar } from './components/CategoriesBar';
import { CollectionBanner } from './components/CollectionBanner';
import { HighlightsBar } from './components/HighlightsBar';
import { BestSellersSection } from './components/BestSellersSection';
import { FooterSection } from './components/FooterSection';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductModal } from './components/ProductModal';
import { LoginModal } from './components/LoginModal';
import { MobileNavModal } from './components/MobileNavModal';
import { BEST_SELLER_PRODUCTS, Product } from './data/mockData';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist state (IDs of saved products)
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-1']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginDefaultTab, setLoginDefaultTab] = useState<'login' | 'tracking'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  // Scroll to catalog/bestsellers
  const scrollToBestSellers = () => {
    const el = document.getElementById('best-sellers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    scrollToBestSellers();
  };

  return (
    <div className="min-h-screen bg-[#E9E8E6] text-[#111111] flex flex-col font-['Kanit'] antialiased">
      {/* 1. แถบประกาศบนสุด (พื้นดำ ตัวขาว เล็ก) */}
      <AnnouncementBar
        onOpenTracking={() => {
          setLoginDefaultTab('tracking');
          setIsLoginOpen(true);
        }}
        onOpenHelp={() => {
          setLoginDefaultTab('login');
          setIsLoginOpen(true);
        }}
      />

      {/* 2. Navbar: เมนูซ้าย, โลโก้กลาง, ไอคอนขวา */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => {
          setLoginDefaultTab('login');
          setIsLoginOpen(true);
        }}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1">
        {/* 3. Hero (พื้น #E9E8E6): คำว่า WILD ตัวใหญ่มากเต็มความกว้างจอ + คนซ้อนทับตัวอักษร */}
        <HeroSection
          onShopClick={scrollToBestSellers}
          onNewArrivalsClick={scrollToBestSellers}
        />

        {/* 4. แถบหมวดหมู่ (พื้นดำ ตัวขาว) 3 คอลัมน์ */}
        <CategoriesBar onSelectCategory={handleSelectCategory} />

        {/* 5. แบนเนอร์คอลเลกชัน (พื้นเทา #CFCFCD) */}
        <CollectionBanner onViewCollection={scrollToBestSellers} />

        {/* 6. แถบจุดเด่น (พื้น #E9E8E6) 4 คอลัมน์ ไอคอนเส้นบาง */}
        <HighlightsBar />

        {/* 7. สินค้าขายดี (พื้น #F5F4F2): 4 การ์ด 3:4 */}
        <BestSellersSection
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onViewAll={scrollToBestSellers}
        />
      </main>

      {/* 8. Footer (พื้นดำ ตัวขาว) */}
      <FooterSection />

      {/* Interactive Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveWishlist={handleRemoveWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        defaultTab={loginDefaultTab}
      />

      <MobileNavModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectCategory={handleSelectCategory}
        onOpenLogin={() => {
          setLoginDefaultTab('login');
          setIsLoginOpen(true);
        }}
        onOpenTracking={() => {
          setLoginDefaultTab('tracking');
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}
