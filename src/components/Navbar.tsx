import React from 'react';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenLogin,
  onOpenWishlist,
  onOpenCart,
  onOpenMobileMenu,
  onSelectCategory,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#E9E8E6] border-b border-[#D4D3CF] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left Zone: Category Navigation Links (Desktop) / Hamburger (Tablet/Mobile) */}
        <div className="flex-1 flex items-center">
          {/* Hamburger button for Tablet & Mobile (<1024px) */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="เปิดเมนูนำทาง"
            className="lg:hidden p-2 -ml-2 text-[#111111] hover:opacity-70 transition-opacity"
          >
            <Menu size={22} />
          </button>

          {/* Desktop Nav Links */}
          <nav
            aria-label="หมวดหมู่หลัก"
            className="hidden lg:flex items-center gap-2.5 text-xs sm:text-sm font-['Kanit'] font-light text-[#111111]"
          >
            <button
              onClick={() => onSelectCategory('tent')}
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              เต็นท์
            </button>
            <span className="text-[#888888]">·</span>
            <button
              onClick={() => onSelectCategory('sleeping')}
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              ถุงนอน
            </button>
            <span className="text-[#888888]">·</span>
            <button
              onClick={() => onSelectCategory('backpack')}
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              เป้
            </button>
            <span className="text-[#888888]">·</span>
            <button
              onClick={() => onSelectCategory('all')}
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              อุปกรณ์แคมป์
            </button>
          </nav>
        </div>

        {/* Center Zone: Brand Wordmark "WILDTRAIL" (Kanit SemiBold) */}
        <div className="flex-1 flex justify-center text-center">
          <a
            href="#"
            className="font-['Kanit'] font-semibold text-2xl sm:text-3xl tracking-[0.18em] text-[#111111] uppercase hover:opacity-85 transition-opacity"
          >
            WILDTRAIL
          </a>
        </div>

        {/* Right Zone: Action Icons (Search, Login, Wishlist, Cart) */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-5 text-[#111111]">
          {/* Search Icon */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="ค้นหาสินค้า"
            className="p-1.5 hover:opacity-60 transition-opacity cursor-pointer"
          >
            <Search size={19} strokeWidth={1.75} />
          </button>

          {/* Login / User Icon */}
          <button
            type="button"
            onClick={onOpenLogin}
            aria-label="เข้าสู่ระบบ หรือ ตรวจสอบบัญชี"
            className="p-1.5 hover:opacity-60 transition-opacity cursor-pointer hidden sm:block"
          >
            <User size={19} strokeWidth={1.75} />
          </button>

          {/* Wishlist Heart Icon with Count */}
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label={`รายการโปรด ${wishlistCount} รายการ`}
            className="p-1.5 hover:opacity-60 transition-opacity cursor-pointer relative"
          >
            <Heart size={19} strokeWidth={1.75} className={wishlistCount > 0 ? 'fill-[#111111]' : ''} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#111111] text-white text-[9px] font-['Kanit'] font-medium flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart with text "ตะกร้า (0)" */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`ตะกร้าสินค้า ${cartCount} ชิ้น`}
            className="flex items-center gap-1.5 pl-2 py-1 text-xs sm:text-sm font-['Kanit'] font-light hover:opacity-60 transition-opacity cursor-pointer"
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
            <span className="tabular-nums">ตะกร้า ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
