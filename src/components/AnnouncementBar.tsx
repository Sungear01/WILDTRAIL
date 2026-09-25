import React from 'react';

interface AnnouncementBarProps {
  onOpenTracking: () => void;
  onOpenHelp: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  onOpenTracking,
  onOpenHelp,
}) => {
  return (
    <div
      aria-label="แถบประกาศบนสุด"
      className="bg-[#111111] text-white text-[11px] sm:text-xs font-['Kanit'] font-light tracking-wide px-4 sm:px-8 py-2 flex items-center justify-between border-b border-[#222222]"
    >
      {/* Left announcement */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span>ส่งฟรีเมื่อซื้อครบ ฿1,500</span>
      </div>

      {/* Right secondary utilities */}
      <div className="flex items-center gap-3 sm:gap-4 text-[#A3A3A3]">
        <button
          type="button"
          onClick={onOpenHelp}
          className="hover:text-white transition-colors cursor-pointer"
        >
          ดาวน์โหลดแอป
        </button>
        <span className="text-[#333333]">|</span>
        <button
          type="button"
          onClick={onOpenTracking}
          className="hover:text-white transition-colors cursor-pointer"
        >
          ติดตามพัสดุ
        </button>
        <span className="text-[#333333]">|</span>
        <button
          type="button"
          onClick={onOpenHelp}
          className="hover:text-white transition-colors cursor-pointer"
        >
          ช่วยเหลือ
        </button>
      </div>
    </div>
  );
};
