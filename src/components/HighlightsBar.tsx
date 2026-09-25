import React from 'react';
import { Truck, RotateCcw, ShieldCheck, CreditCard } from 'lucide-react';

export const HighlightsBar: React.FC = () => {
  const highlights = [
    {
      icon: Truck,
      title: 'ส่งไว',
      desc: 'ส่งถึงใน 1–3 วัน',
    },
    {
      icon: RotateCcw,
      title: 'เปลี่ยนคืนง่าย',
      desc: 'ภายใน 15 วัน',
    },
    {
      icon: ShieldCheck,
      title: 'รับประกันคุณภาพ',
      desc: 'ทดสอบบนเส้นทางจริง',
    },
    {
      icon: CreditCard,
      title: 'ชำระเงินปลอดภัย',
      desc: 'PromptPay / บัตร / ปลายทาง',
    },
  ];

  return (
    <section
      aria-label="จุดเด่นบริการของ WILDTRAIL"
      className="bg-[#E9E8E6] border-y border-[#D4D3CF] py-10 sm:py-14 px-4 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 p-2"
              >
                <div className="text-[#111111] mb-1">
                  <Icon size={24} strokeWidth={1.4} />
                </div>
                <h3 className="text-sm sm:text-base font-['Kanit'] font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-['Kanit'] font-light text-[#555555]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
