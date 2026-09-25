import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface MobileNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  onOpenLogin: () => void;
  onOpenTracking: () => void;
}

export const MobileNavModal: React.FC<MobileNavModalProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenLogin,
  onOpenTracking,
}) => {
  if (!isOpen) return null;

  const categories = [
    { id: 'tent', label: 'เต็นท์เดินป่า' },
    { id: 'sleeping', label: 'ถุงนอน & ที่นอน' },
    { id: 'backpack', label: 'เป้เดินป่า' },
    { id: 'all', label: 'อุปกรณ์แคมป์ทั้งหมด' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#E9E8E6] text-[#111111] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="เมนูนำทางบนมือถือ"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#D4D3CF] pb-6">
        <span className="font-['Kanit'] font-semibold text-xl tracking-[0.2em] text-[#111111] uppercase">
          WILDTRAIL
        </span>
        <button
          onClick={onClose}
          aria-label="ปิดเมนู"
          className="p-2 text-[#111111] hover:opacity-60 transition-opacity"
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav List */}
      <nav className="my-auto py-8 space-y-4">
        <p className="text-[10px] font-['Kanit'] font-normal tracking-[0.3em] text-[#777777] uppercase mb-4">
          หมวดหมู่อุปกรณ์
        </p>

        {categories.map((cat) => (
          <div key={cat.id} className="border-b border-[#DCDAD6] pb-3">
            <button
              onClick={() => {
                onSelectCategory(cat.id);
                onClose();
              }}
              className="w-full flex items-center justify-between font-['Kanit'] font-semibold text-2xl text-[#111111] hover:opacity-60 transition-opacity text-left"
            >
              <span>{cat.label}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ))}

        <div className="pt-6 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="w-full py-3.5 bg-[#111111] text-white font-['Kanit'] text-xs tracking-wider uppercase flex items-center justify-center min-h-[44px]"
          >
            เข้าสู่ระบบสมาชิก
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenTracking();
            }}
            className="w-full py-3.5 border border-[#111111] text-[#111111] font-['Kanit'] text-xs tracking-wider uppercase flex items-center justify-center min-h-[44px]"
          >
            ติดตามพัสดุ
          </button>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-[#D4D3CF] pt-6 flex items-center justify-between text-xs font-['Kanit'] text-[#555555]">
        <span>ส่งฟรีเมื่อซื้อครบ ฿1,500</span>
        <div className="flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">FB</a>
          <span>·</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">IG</a>
          <span>·</span>
          <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">LINE</a>
        </div>
      </div>
    </div>
  );
};
