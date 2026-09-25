import React, { useState } from 'react';
import { BEST_SELLER_PRODUCTS, Product } from '../data/mockData';
import { ProductEditorialVisual } from './EditorialVisuals';
import { Heart, Plus, ArrowRight } from 'lucide-react';

interface BestSellersSectionProps {
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onViewAll: () => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onViewAll,
}) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section
      id="best-sellers"
      aria-label="สินค้าขายดี"
      className="bg-[#F5F4F2] py-14 sm:py-20 px-4 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left Title + Right "ดูทั้งหมด" Link */}
        <div className="flex items-end justify-between mb-8 sm:mb-12 border-b border-[#DCDAD6] pb-4">
          <div>
            <p className="text-[10px] sm:text-xs font-['Kanit'] font-normal tracking-[0.3em] text-[#555555] uppercase mb-1">
              POPULAR GEAR
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-['Kanit'] font-semibold text-[#111111]">
              ขายดีของ WILDTRAIL
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="text-xs sm:text-sm font-['Kanit'] font-light text-[#111111] underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer flex items-center gap-1 group"
          >
            <span>ดูทั้งหมด</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Product Cards Grid (Desktop 4 col, Tablet 2 col, Mobile 2 col) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {BEST_SELLER_PRODUCTS.map((prod) => {
            const isWishlisted = wishlistIds.includes(prod.id);
            const isHovered = hoveredCardId === prod.id;

            return (
              <div
                key={prod.id}
                onMouseEnter={() => setHoveredCardId(prod.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group flex flex-col cursor-pointer"
                onClick={() => onSelectProduct(prod)}
              >
                {/* 3:4 Vertical Image Frame with Gray Background */}
                <div className="relative aspect-[3/4] w-full bg-[#DCDCDC] overflow-hidden">
                  {/* Visual with primary angle & smooth hover secondary angle */}
                  <ProductEditorialVisual id={prod.id} isHovered={isHovered} />

                  {/* Circular Favorite Heart Button (Top-Right) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(prod.id);
                    }}
                    aria-label={isWishlisted ? 'ลบออกจากรายการโปรด' : 'เพิ่มในรายการโปรด'}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#111111] hover:bg-white shadow-sm transition-transform active:scale-90 cursor-pointer z-20"
                  >
                    <Heart
                      size={15}
                      strokeWidth={1.75}
                      className={isWishlisted ? 'fill-[#111111] text-[#111111]' : 'text-[#111111]'}
                    />
                  </button>

                  {/* Slide-Up "เพิ่มลงตะกร้า" button on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 hidden sm:block">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(prod);
                      }}
                      className="w-full py-2.5 px-3 bg-[#111111] text-white hover:bg-[#2A2A2A] font-['Kanit'] font-normal text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Plus size={14} />
                      <span>เพิ่มลงตะกร้า</span>
                    </button>
                  </div>
                </div>

                {/* Below Image: Product Name & Price */}
                <div className="mt-3.5 space-y-1">
                  <h3 className="text-sm sm:text-base font-['Kanit'] font-medium text-[#111111] tracking-tight group-hover:underline underline-offset-2">
                    {prod.name}
                  </h3>
                  <div className="flex items-baseline justify-between pt-0.5">
                    <span className="text-xs sm:text-sm font-['Kanit'] font-normal text-[#111111] tabular-nums">
                      ฿{prod.price.toLocaleString('th-TH')}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-[11px] font-['Kanit'] font-light text-[#888888] line-through tabular-nums">
                        ฿{prod.originalPrice.toLocaleString('th-TH')}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-['Kanit'] font-light text-[#555555] truncate">
                    {prod.specs}
                  </p>
                </div>

                {/* Mobile Quick Add Button */}
                <div className="sm:hidden mt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(prod);
                    }}
                    className="w-full py-2 bg-[#111111] text-white font-['Kanit'] text-[11px] font-normal tracking-wide uppercase"
                  >
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
