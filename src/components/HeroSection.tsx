import React, { useEffect, useState } from 'react';
import { HeroHikerFigure } from './EditorialVisuals';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopClick: () => void;
  onNewArrivalsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopClick,
  onNewArrivalsClick,
}) => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect: person shifts slightly slower than text
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      aria-label="ส่วนแนะนำคอลเลกชันหลัก"
      className="relative bg-[#E9E8E6] min-h-[82vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-12 pt-8 pb-10"
    >
      {/* Top Bar inside Hero: Top-Left Spaced Text with short line below */}
      <div className="w-full flex justify-between items-start z-30">
        <div className="space-y-2">
          <p className="text-[11px] sm:text-xs font-['Kanit'] font-normal tracking-[0.3em] text-[#111111] uppercase leading-relaxed">
            อุปกรณ์ที่พาคุณ <br />
            ไปได้ทุกเส้นทาง
          </p>
          {/* Short underline mark */}
          <div className="w-8 h-[1.5px] bg-[#111111]" />
        </div>

        {/* Quiet season tag on top right */}
        <div className="hidden sm:block text-right">
          <p className="text-[10px] font-['Kanit'] font-light tracking-[0.25em] text-[#555555] uppercase">
            AUTUMN / WINTER 2026
          </p>
        </div>
      </div>

      {/* Center Zone: Massive "WILD" Wordmark + Layered Hiker Model Figure */}
      <div className="relative flex-1 flex items-center justify-center my-auto py-6 sm:py-10">
        {/* Layer 1: Giant "WILD" Typography full-width centered */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          <span className="text-[#111111] font-['Kanit'] font-semibold tracking-[-0.03em] leading-none uppercase text-[clamp(90px,24vw,340px)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            WILD
          </span>
        </div>

        {/* Layer 2: Cutout Monochrome Studio Photo of Hiker with Backpack (Layered over the lettering) */}
        <div
          className="relative z-20 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px] flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          <HeroHikerFigure className="w-full h-auto max-h-[520px] sm:max-h-[640px] lg:max-h-[700px] object-contain" />
        </div>
      </div>

      {/* Bottom Zone: Bottom-Left Actions & Bottom-Right Kicker */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 z-30 pt-4">
        {/* Bottom Left: Black Square Button "ช้อปเลย" + Underlined Link "ดูสินค้าใหม่" */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          {/* Square Solid Black Button (no rounded corners, hover: border black transparent bg) */}
          <button
            type="button"
            onClick={onShopClick}
            className="px-8 py-3.5 bg-[#111111] text-white border border-[#111111] hover:bg-transparent hover:text-[#111111] font-['Kanit'] font-normal text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center gap-2 group"
          >
            <span>ช้อปเลย</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Underlined Secondary Link */}
          <button
            type="button"
            onClick={onNewArrivalsClick}
            className="text-xs sm:text-sm font-['Kanit'] font-light text-[#111111] underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer text-left py-2"
          >
            ดูสินค้าใหม่
          </button>
        </div>

        {/* Bottom Right: "คอลเลกชันใหม่ / 2026" with short underline */}
        <div className="space-y-2 text-left sm:text-right w-full sm:w-auto">
          <p className="text-[11px] sm:text-xs font-['Kanit'] font-normal tracking-[0.3em] text-[#111111] uppercase leading-relaxed">
            คอลเลกชันใหม่ <br />
            2026
          </p>
          <div className="w-8 h-[1.5px] bg-[#111111] sm:ml-auto" />
        </div>
      </div>
    </section>
  );
};
