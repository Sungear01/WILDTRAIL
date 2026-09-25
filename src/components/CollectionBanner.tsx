import React from 'react';
import { BannerHikerPortrait } from './EditorialVisuals';
import { ArrowRight } from 'lucide-react';

interface CollectionBannerProps {
  onViewCollection: () => void;
}

export const CollectionBanner: React.FC<CollectionBannerProps> = ({ onViewCollection }) => {
  return (
    <section
      aria-label="แบนเนอร์คอลเลกชันฤดูหนาว"
      className="bg-[#CFCFCD] text-[#111111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile Order: Image on Top on Mobile (≤767px), on Desktop Right Column */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-full max-w-sm sm:max-w-md aspect-[4/5] overflow-hidden flex items-center justify-center">
              <BannerHikerPortrait className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Content Column: on Mobile Below Image, on Desktop Left Column */}
          <div className="order-2 md:order-1 space-y-6 max-w-lg">
            {/* Small spaced kicker */}
            <p className="text-xs font-['Kanit'] font-normal tracking-[0.3em] text-[#111111] uppercase">
              ฤดูหนาวนี้
            </p>

            {/* Big Headline in 2 lines */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Kanit'] font-semibold text-[#111111] leading-tight tracking-tight">
              ขึ้นดอย <br />
              ไปด้วยกัน
            </h2>

            {/* Subtext description */}
            <p className="text-sm sm:text-base font-['Kanit'] font-light text-[#555555] leading-relaxed">
              อุปกรณ์กันหนาวครบชุด พร้อมพาคุณชมทะเลหมอก ไม่ว่าจะเป็นยอดดอยหลวงเชียงดาว กิ่วแม่ปาน หรือภูกระดึง
            </p>

            {/* Solid Black Square Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onViewCollection}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#111111] text-white border border-[#111111] hover:bg-transparent hover:text-[#111111] font-['Kanit'] font-normal text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center gap-2 group"
              >
                <span>ดูคอลเลกชัน</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
