import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { BEST_SELLER_PRODUCTS, Product } from '../data/mockData';
import { ProductEditorialVisual } from './EditorialVisuals';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = BEST_SELLER_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.specs.toLowerCase().includes(query.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="ค้นหาสินค้า"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#E9E8E6] text-[#111111] border border-[#D4D3CF] p-6 shadow-2xl z-10 space-y-4">
        <div className="flex items-center justify-between border-b border-[#D4D3CF] pb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search size={20} className="text-[#555555]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาอุปกรณ์เดินป่า (เช่น เต็นท์, ถุงนอน, เป้, แจ็กเก็ต)..."
              className="w-full bg-transparent text-sm sm:text-base font-['Kanit'] font-light text-[#111111] outline-none"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="ปิดค้นหา"
            className="p-1 hover:opacity-60 transition-opacity"
          >
            <X size={20} />
          </button>
        </div>

        {/* Suggested Searches */}
        {!query && (
          <div className="py-2">
            <p className="text-[11px] font-['Kanit'] font-normal text-[#555555] uppercase tracking-wider mb-2">
              คำค้นหายอดนิยม:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-['Kanit'] font-light">
              {['เต็นท์โดม 2 คน', 'ถุงนอน 5°C', 'เป้ 45L', 'แจ็กเก็ตกันลม'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-2.5 py-1 bg-white border border-[#D4D3CF] hover:border-[#111111] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query && (
          <div className="max-h-80 overflow-y-auto divide-y divide-[#D4D3CF]">
            {results.length === 0 ? (
              <p className="py-6 text-center text-xs font-['Kanit'] text-[#555555]">
                ไม่พบอุปกรณ์ที่ตรงกับคำว่า "{query}"
              </p>
            ) : (
              results.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    onSelectProduct(prod);
                    onClose();
                  }}
                  className="py-3 flex items-center gap-4 hover:bg-white/50 p-2 cursor-pointer transition-colors"
                >
                  <div className="w-12 h-14 bg-[#DCDCDC] shrink-0 overflow-hidden flex items-center justify-center">
                    <ProductEditorialVisual id={prod.id} className="w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-['Kanit'] font-medium text-[#111111]">{prod.name}</h4>
                    <p className="text-xs font-['Kanit'] text-[#555555]">{prod.specs}</p>
                  </div>
                  <span className="text-xs font-['Kanit'] font-normal text-[#111111] tabular-nums">
                    ฿{prod.price.toLocaleString('th-TH')}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
