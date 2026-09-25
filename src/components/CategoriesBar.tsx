import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CategorySquareVisual } from './EditorialVisuals';

interface CategoriesBarProps {
  onSelectCategory: (category: string) => void;
}

export const CategoriesBar: React.FC<CategoriesBarProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'tent',
      title: 'เต็นท์',
      desc: 'ที่พักกลางป่า\nตั้งง่ายกันฝน',
      actionText: 'ดูเต็นท์',
      visualType: 'tent' as const,
    },
    {
      id: 'sleeping',
      title: 'ถุงนอน & ที่นอน',
      desc: 'อบอุ่นทุกคืนบนดอย\nนอนสบายในทุกสภาพอากาศ',
      actionText: 'ดูถุงนอน',
      visualType: 'sleeping' as const,
    },
    {
      id: 'backpack',
      title: 'เป้เดินป่า',
      desc: 'แบกสบายทุกระยะทาง\nกระจายน้ำหนักอย่างลงตัว',
      actionText: 'ดูเป้',
      visualType: 'backpack' as const,
    },
  ];

  return (
    <section
      aria-label="แถบหมวดหมู่หลัก"
      className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 border-t border-[#222222]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group flex flex-col cursor-pointer transition-transform duration-300"
            >
              {/* Square B&W Monochrome Photo Frame */}
              <div className="relative aspect-square w-full bg-[#1A1A1A] overflow-hidden mb-6 border border-[#262626] transition-colors group-hover:border-[#444444]">
                <CategorySquareVisual
                  type={cat.visualType}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & 2-Line Description */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-['Kanit'] font-semibold text-white tracking-wide">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm font-['Kanit'] font-light text-[#A3A3A3] whitespace-pre-line leading-relaxed min-h-[40px]">
                  {cat.desc}
                </p>

                {/* Arrow Link: arrow moves right on hover as requested */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Kanit'] font-normal text-white uppercase tracking-wider group-hover:text-white transition-colors">
                    <span>{cat.actionText}</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-2"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
