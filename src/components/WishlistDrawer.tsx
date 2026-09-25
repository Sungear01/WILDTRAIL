import React from 'react';
import { X, Heart, Trash2, Plus, ArrowRight } from 'lucide-react';
import { BEST_SELLER_PRODUCTS, Product } from '../data/mockData';
import { ProductEditorialVisual } from './EditorialVisuals';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = BEST_SELLER_PRODUCTS.filter((p) =>
    wishlistIds.includes(p.id)
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="รายการโปรด"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#E9E8E6] text-[#111111] flex flex-col justify-between shadow-2xl border-l border-[#D4D3CF]">
          {/* Header */}
          <div className="p-6 border-b border-[#D4D3CF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart size={18} className="fill-[#111111]" />
              <h2 className="text-base font-['Kanit'] font-semibold tracking-wide uppercase">
                รายการโปรดของคุณ ({wishlistedProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="ปิดรายการโปรด"
              className="p-1.5 text-[#111111] hover:opacity-60 transition-opacity cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#DCDCDC] flex items-center justify-center text-[#555555]">
                  <Heart size={24} />
                </div>
                <div>
                  <p className="text-sm font-['Kanit'] font-medium text-[#111111]">
                    ยังไม่มีสินค้าในรายการโปรด
                  </p>
                  <p className="text-xs font-['Kanit'] font-light text-[#555555] mt-1">
                    กดไอคอนหัวใจที่สินค้าเพื่อบันทึกรายการที่คุณสนใจ
                  </p>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-[#D4D3CF]">
                {wishlistedProducts.map((product) => (
                  <li key={product.id} className="py-4 flex gap-4 items-center">
                    <div className="w-16 h-20 bg-[#DCDCDC] overflow-hidden shrink-0 flex items-center justify-center">
                      <ProductEditorialVisual id={product.id} className="w-full h-full" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-['Kanit'] font-medium text-[#111111] truncate">
                        {product.name}
                      </h3>
                      <p className="text-xs font-['Kanit'] text-[#555555] mt-0.5">
                        ฿{product.price.toLocaleString('th-TH')}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          type="button"
                          onClick={() => {
                            onAddToCart(product);
                            onRemoveWishlist(product.id);
                          }}
                          className="px-3 py-1 bg-[#111111] text-white hover:bg-[#2A2A2A] text-xs font-['Kanit'] uppercase tracking-wider flex items-center gap-1"
                        >
                          <Plus size={12} />
                          <span>ย้ายไปตะกร้า</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onRemoveWishlist(product.id)}
                          className="text-xs text-[#777777] hover:text-[#111111]"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#D4D3CF] bg-[#F5F4F2]">
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#111111] text-white font-['Kanit'] text-xs uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
            >
              เลือกดูสินค้าต่อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
