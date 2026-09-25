import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../data/mockData';
import { ProductEditorialVisual } from './EditorialVisuals';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-name"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#E9E8E6] text-[#111111] border border-[#D4D3CF] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10">
        <button
          onClick={onClose}
          aria-label="ปิด"
          className="absolute top-4 right-4 p-2 text-[#111111] hover:opacity-60 transition-opacity z-20"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual Frame */}
            <div className="aspect-[3/4] w-full bg-[#DCDCDC] overflow-hidden flex items-center justify-center">
              <ProductEditorialVisual id={product.id} className="w-full h-full" />
            </div>

            {/* Information */}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-['Kanit'] tracking-[0.25em] text-[#555555] uppercase">
                  {product.categoryLabel}
                </p>
                <h2 id="product-modal-name" className="text-xl sm:text-2xl font-['Kanit'] font-semibold text-[#111111] mt-1">
                  {product.name}
                </h2>
                <p className="text-xs font-['Kanit'] text-[#555555] mt-1">
                  {product.specs}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pb-3 border-b border-[#D4D3CF]">
                <span className="text-2xl font-['Kanit'] font-semibold text-[#111111] tabular-nums">
                  ฿{product.price.toLocaleString('th-TH')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-['Kanit'] font-light text-[#888888] line-through tabular-nums">
                    ฿{product.originalPrice.toLocaleString('th-TH')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm font-['Kanit'] font-light text-[#555555] leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-1.5 pt-2">
                <p className="text-xs font-['Kanit'] font-medium text-[#111111]">คุณสมบัติเด่น:</p>
                <ul className="space-y-1 text-xs font-['Kanit'] font-light text-[#555555]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#111111]">·</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material & Weight */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-['Kanit'] pt-2 text-[#555555] border-t border-[#D4D3CF]">
                <div>
                  <span className="block text-[#111111] font-medium">น้ำหนัก:</span>
                  <span>{product.weight}</span>
                </div>
                <div>
                  <span className="block text-[#111111] font-medium">วัสดุ:</span>
                  <span>{product.material}</span>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="pt-4 flex items-center gap-3">
                <div className="flex items-center border border-[#BDBDBA] bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-[#E9E8E6] text-[#111111]"
                    aria-label="ลดจำนวน"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="px-3 text-xs font-['Kanit'] tabular-nums text-[#111111]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-[#E9E8E6] text-[#111111]"
                    aria-label="เพิ่มจำนวน"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={added}
                  className="flex-1 py-3 px-4 bg-[#111111] text-white hover:bg-[#2A2A2A] font-['Kanit'] text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {added ? (
                    <>
                      <Check size={15} />
                      <span>เพิ่มลงตะกร้าแล้ว</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={15} />
                      <span>เพิ่มลงตะกร้า (฿{(product.price * quantity).toLocaleString('th-TH')})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
