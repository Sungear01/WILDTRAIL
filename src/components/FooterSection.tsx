import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      aria-label="ข้อมูลส่วนท้ายเว็บไซต์"
      className="bg-[#111111] text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 border-t border-[#222222]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-2xl font-['Kanit'] font-semibold tracking-[0.2em] text-white uppercase">
              WILDTRAIL
            </h2>
            <p className="text-xs sm:text-sm font-['Kanit'] font-light text-[#A3A3A3] leading-relaxed max-w-sm">
              อุปกรณ์เดินป่าและแคมปิ้งมาตรฐานสูง ดีไซน์มินิมอล ทนทานต่อสภาพอากาศยอดดอยเมืองไทย คัดสรรเพื่อทุกการผจญภัยอย่างแท้จริง
            </p>
            <div className="pt-2 text-xs font-['Kanit'] font-light text-[#777777] space-y-1">
              <p>สาขาเชียงใหม่: 88 นิมมานเหมินท์ ซอย 9</p>
              <p>สาขากรุงเทพฯ: 124 สุขุมวิท 71 (พระโขนง)</p>
            </div>
          </div>

          {/* Help Menu (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-['Kanit'] font-normal tracking-[0.25em] text-white uppercase">
              ช่วยเหลือ
            </h3>
            <ul className="space-y-2 text-xs font-['Kanit'] font-light text-[#A3A3A3]">
              <li>
                <a href="#best-sellers" className="hover:text-white transition-colors">การจัดส่งพัสดุ</a>
              </li>
              <li>
                <a href="#best-sellers" className="hover:text-white transition-colors">เปลี่ยนคืนสินค้า 15 วัน</a>
              </li>
              <li>
                <a href="#best-sellers" className="hover:text-white transition-colors">รับประกันคุณภาพ 1 ปี</a>
              </li>
              <li>
                <a href="#best-sellers" className="hover:text-white transition-colors">คู่มือการดูแลเต็นท์</a>
              </li>
              <li>
                <a href="#best-sellers" className="hover:text-white transition-colors">คำถามที่พบบ่อย</a>
              </li>
            </ul>
          </div>

          {/* Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-['Kanit'] font-normal tracking-[0.25em] text-white uppercase">
              ติดต่อเรา
            </h3>
            <div className="space-y-2 text-xs font-['Kanit'] font-light text-[#A3A3A3]">
              <p>โทร: 02-894-5566</p>
              <p>มือถือ: 089-123-4567</p>
              <p>LINE: @wildtrail</p>
              <p>อีเมล: support@wildtrail.co</p>
              <p className="text-[11px] text-[#777777] pt-1">ทุกวัน 09:00 - 20:00 น.</p>
            </div>
          </div>

          {/* Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-['Kanit'] font-normal tracking-[0.25em] text-white uppercase">
              รับข่าวสาร & ส่วนลดพิเศษ
            </h3>
            <p className="text-xs font-['Kanit'] font-light text-[#A3A3A3] leading-relaxed">
              ลงทะเบียนเพื่อรับข้อมูลสินค้าคอลเลกชันใหม่ และคู่มือเส้นทางเดินป่าก่อนใคร
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1C1C1C] border border-[#333333] text-xs font-['Kanit'] flex items-center gap-2 text-white">
                <Check size={16} />
                <span>ขอบคุณที่สมัครรับข่าวสารกับ WILDTRAIL</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch gap-0 pt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="กรอกอีเมลของคุณ"
                  className="flex-1 px-3 py-3 bg-[#1C1C1C] border border-[#333333] text-white text-xs placeholder-[#666666] outline-none font-['Kanit'] font-light focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  aria-label="ส่งอีเมลสมัครรับข่าวสาร"
                  className="px-5 py-3 bg-white text-[#111111] hover:bg-[#E5E5E5] font-['Kanit'] font-normal text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            {/* Social Media Links */}
            <div className="pt-4 flex items-center gap-4 text-xs font-['Kanit'] text-[#A3A3A3]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Facebook
              </a>
              <span>·</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <span>·</span>
              <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LINE
              </a>
              <span>·</span>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Kanit'] font-light text-[#777777]">
          <p>© 2026 WILDTRAIL. สงวนลิขสิทธิ์ทุกประการ</p>
          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            <span className="px-2 py-0.5 border border-[#333333] text-[#A3A3A3]">PROMPTPAY</span>
            <span className="px-2 py-0.5 border border-[#333333] text-[#A3A3A3]">VISA / MASTERCARD</span>
            <span className="px-2 py-0.5 border border-[#333333] text-[#A3A3A3]">COD เก็บเงินปลายทาง</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
