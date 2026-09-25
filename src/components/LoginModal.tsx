import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'tracking';
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'login',
}) => {
  const [tab, setTab] = useState<'login' | 'tracking'>(defaultTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orderId, setOrderId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [trackedStatus, setTrackedStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      onClose();
    }, 900);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackedStatus(orderId || 'WT-2026-8491');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="เข้าสู่ระบบ หรือ ติดตามพัสดุ"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#E9E8E6] text-[#111111] border border-[#D4D3CF] p-6 sm:p-8 shadow-2xl z-10">
        <button
          onClick={onClose}
          aria-label="ปิด"
          className="absolute top-4 right-4 p-2 text-[#111111] hover:opacity-60 transition-opacity"
        >
          <X size={18} />
        </button>

        {/* Tab switch */}
        <div className="flex border-b border-[#D4D3CF] mb-6">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`flex-1 pb-3 text-xs sm:text-sm font-['Kanit'] uppercase tracking-wider transition-colors ${
              tab === 'login'
                ? 'border-b-2 border-[#111111] font-semibold text-[#111111]'
                : 'text-[#777777] hover:text-[#111111]'
            }`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            type="button"
            onClick={() => setTab('tracking')}
            className={`flex-1 pb-3 text-xs sm:text-sm font-['Kanit'] uppercase tracking-wider transition-colors ${
              tab === 'tracking'
                ? 'border-b-2 border-[#111111] font-semibold text-[#111111]'
                : 'text-[#777777] hover:text-[#111111]'
            }`}
          >
            ติดตามพัสดุ
          </button>
        </div>

        {tab === 'login' ? (
          <div>
            {isLoggedIn ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="text-base font-['Kanit'] font-medium text-[#111111]">
                  เข้าสู่ระบบสำเร็จ
                </h3>
                <p className="text-xs font-['Kanit'] text-[#555555]">
                  ยินดีต้อนรับสู่ WILDTRAIL
                </p>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-['Kanit'] text-[#555555] mb-1">
                    อีเมล หรือ เบอร์โทรศัพท์
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@wildtrail.co หรือ 0812345678"
                    className="w-full px-3 py-2.5 bg-white border border-[#BDBDBA] text-xs font-['Kanit'] focus:border-[#111111] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Kanit'] text-[#555555] mb-1">
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2.5 bg-white border border-[#BDBDBA] text-xs font-['Kanit'] focus:border-[#111111] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#111111] text-white hover:bg-[#2A2A2A] font-['Kanit'] text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  เข้าสู่ระบบ
                </button>

                <p className="text-[11px] font-['Kanit'] text-[#777777] text-center pt-2">
                  ยังไม่มีบัญชีสมาชิก? <a href="#" className="text-[#111111] underline">สมัครสมาชิกรับสิทธิประโยชน์</a>
                </p>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <form onSubmit={handleTrack} className="space-y-3">
              <label className="block text-xs font-['Kanit'] text-[#555555]">
                กรอกหมายเลขคำสั่งซื้อ (เช่น WT-2026-8491)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="WT-2026-XXXX"
                  className="flex-1 px-3 py-2.5 bg-white border border-[#BDBDBA] text-xs font-['Kanit'] focus:border-[#111111] outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#111111] text-white font-['Kanit'] text-xs uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors shrink-0"
                >
                  ตรวจสอบ
                </button>
              </div>
            </form>

            {trackedStatus && (
              <div className="p-4 bg-white border border-[#D4D3CF] space-y-2 text-xs font-['Kanit']">
                <div className="flex items-center justify-between border-b border-[#E9E8E6] pb-2">
                  <span className="text-[#111111] font-medium">หมายเลข: {trackedStatus}</span>
                  <span className="text-[10px] bg-[#111111] text-white px-2 py-0.5">กำลังจัดส่ง</span>
                </div>
                <div className="space-y-1 text-[#555555]">
                  <p>ขนส่ง: Flash Express (TH018294921)</p>
                  <p>สถานะ: พัสดุถึงศูนย์กระจายสินค้าปลายทางแล้ว</p>
                  <p>กำหนดส่ง: ภายในวันนี้ ก่อน 18:00 น.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
