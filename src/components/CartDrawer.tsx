import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { Product } from '../data/mockData';
import { ProductEditorialVisual } from './EditorialVisuals';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'promptpay' | 'cod'>('promptpay');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 1500;
  const shippingFee = isFreeShipping || items.length === 0 ? 0 : 80;
  const total = subtotal + shippingFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('กรุณากรอกข้อมูลการจัดส่งให้ครบถ้วน');
      return;
    }
    setStep('success');
  };

  const handleFinish = () => {
    onClearCart();
    setStep('cart');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="ตะกร้าสินค้า"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#E9E8E6] text-[#111111] flex flex-col justify-between shadow-2xl border-l border-[#D4D3CF]">
          {/* Header */}
          <div className="p-6 border-b border-[#D4D3CF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} />
              <h2 className="text-base font-['Kanit'] font-semibold tracking-wide uppercase">
                ตะกร้าของคุณ ({items.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="ปิดตะกร้า"
              className="p-1.5 text-[#111111] hover:opacity-60 transition-opacity cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {step === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-[#DCDCDC] flex items-center justify-center text-[#555555]">
                      <ShoppingBag size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-['Kanit'] font-medium text-[#111111]">
                        ยังไม่มีสินค้าในตะกร้า
                      </p>
                      <p className="text-xs font-['Kanit'] font-light text-[#555555] mt-1">
                        เลือกดูอุปกรณ์เดินป่าเพื่อเริ่มการสั่งซื้อ
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-[#111111] text-white font-['Kanit'] text-xs uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
                    >
                      เลือกดูสินค้า
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Free shipping bar */}
                    <div className="p-3 bg-[#F5F4F2] border border-[#D4D3CF] text-xs font-['Kanit']">
                      {isFreeShipping ? (
                        <p className="flex items-center gap-1.5 text-[#111111] font-normal">
                          <Check size={14} />
                          <span>ยอดสั่งซื้อครบ ฿1,500 ได้รับสิทธิ์ส่งฟรี EMS!</span>
                        </p>
                      ) : (
                        <p className="text-[#555555]">
                          ซื้อเพิ่มอีก <strong className="text-[#111111]">฿{(1500 - subtotal).toLocaleString('th-TH')}</strong> เพื่อรับสิทธิ์จัดส่งฟรี
                        </p>
                      )}
                    </div>

                    {/* Items List */}
                    <ul className="divide-y divide-[#D4D3CF]">
                      {items.map(({ product, quantity }) => (
                        <li key={product.id} className="py-4 flex gap-4 items-center">
                          <div className="w-16 h-20 bg-[#DCDCDC] overflow-hidden shrink-0 flex items-center justify-center">
                            <ProductEditorialVisual id={product.id} className="w-full h-full" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-['Kanit'] font-medium text-[#111111] truncate">
                              {product.name}
                            </h3>
                            <p className="text-xs font-['Kanit'] text-[#555555] mt-0.5">
                              ฿{product.price.toLocaleString('th-TH')}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center border border-[#BDBDBA] bg-white">
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                                  className="p-1 hover:bg-[#E9E8E6] text-[#111111]"
                                  aria-label="ลดจำนวน"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="px-2.5 text-xs font-['Kanit'] tabular-nums text-[#111111]">
                                  {quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                                  className="p-1 hover:bg-[#E9E8E6] text-[#111111]"
                                  aria-label="เพิ่มจำนวน"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => onRemoveItem(product.id)}
                                className="text-xs text-[#777777] hover:text-[#111111]"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-['Kanit'] font-normal text-[#111111] tabular-nums">
                              ฿{(product.price * quantity).toLocaleString('th-TH')}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {step === 'checkout' && (
              <form id="checkout-order-form" onSubmit={handleCheckout} className="space-y-4">
                <h3 className="text-xs font-['Kanit'] font-normal tracking-[0.2em] text-[#111111] uppercase mb-2">
                  ข้อมูลการจัดส่ง
                </h3>

                <div>
                  <label className="block text-xs font-['Kanit'] text-[#555555] mb-1">ชื่อ-นามสกุล *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="เช่น ภาคภูมิ พงศ์ไพศาล"
                    className="w-full px-3 py-2.5 bg-white border border-[#BDBDBA] text-xs font-['Kanit'] focus:border-[#111111] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Kanit'] text-[#555555] mb-1">เบอร์โทรศัพท์ *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="เช่น 081-234-5678"
                    className="w-full px-3 py-2.5 bg-white border border-[#BDBDBA] text-xs font-['Kanit'] focus:border-[#111111] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Kanit'] text-[#555555] mb-1">ที่อยู่จัดส่ง *</label>
                  <textarea
                    rows={3}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="บ้านเลขที่, ถนน, แขวง/ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์"
                    className="w-full px-3 py-2.5 bg-white border border-[#BDBDBA] text-xs font-['Kanit'] focus:border-[#111111] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Kanit'] text-[#555555] mb-1.5">วิธีชำระเงิน</label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-['Kanit']">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('promptpay')}
                      className={`p-2.5 border text-center transition-colors ${
                        paymentMethod === 'promptpay'
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-white text-[#111111] border-[#BDBDBA]'
                      }`}
                    >
                      พร้อมเพย์ QR
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 border text-center transition-colors ${
                        paymentMethod === 'cod'
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-white text-[#111111] border-[#BDBDBA]'
                      }`}
                    >
                      เก็บเงินปลายทาง
                    </button>
                  </div>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center">
                  <Check size={26} />
                </div>
                <h3 className="text-xl font-['Kanit'] font-semibold text-[#111111]">
                  คำสั่งซื้อสำเร็จเรียบร้อย
                </h3>
                <p className="text-xs font-['Kanit'] font-light text-[#555555] max-w-xs leading-relaxed">
                  หมายเลขคำสั่งซื้อ: <strong className="text-[#111111]">#WT-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>
                  <br />
                  เราจะจัดส่งพัสดุถึง {name} ภายใน 1–3 วันทำการครับ
                </p>
                <div className="p-4 bg-white border border-[#D4D3CF] w-full text-left text-xs font-['Kanit'] space-y-1 mt-4">
                  <div className="flex justify-between">
                    <span className="text-[#555555]">ยอดชำระ:</span>
                    <span className="text-[#111111] font-medium">฿{total.toLocaleString('th-TH')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#555555]">วิธีชำระ:</span>
                    <span className="text-[#111111]">{paymentMethod === 'promptpay' ? 'พร้อมเพย์ QR Code' : 'เก็บเงินปลายทาง (COD)'}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleFinish}
                  className="w-full py-3 bg-[#111111] text-white font-['Kanit'] text-xs uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors mt-4"
                >
                  กลับสู่หน้าหลัก
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && step !== 'success' && (
            <div className="p-6 border-t border-[#D4D3CF] bg-[#F5F4F2] space-y-4">
              <div className="space-y-1 text-xs font-['Kanit'] text-[#555555]">
                <div className="flex justify-between">
                  <span>ยอดรวมสินค้า:</span>
                  <span className="text-[#111111] tabular-nums">฿{subtotal.toLocaleString('th-TH')}</span>
                </div>
                <div className="flex justify-between">
                  <span>ค่าจัดส่ง:</span>
                  <span className="text-[#111111] tabular-nums">
                    {shippingFee === 0 ? 'ฟรี' : `฿${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#111111] pt-2 border-t border-[#D4D3CF]">
                  <span>ยอดสุทธิ:</span>
                  <span className="tabular-nums">฿{total.toLocaleString('th-TH')}</span>
                </div>
              </div>

              {step === 'cart' ? (
                <button
                  type="button"
                  onClick={() => setStep('checkout')}
                  className="w-full py-3.5 bg-[#111111] text-white hover:bg-[#2A2A2A] font-['Kanit'] font-normal text-xs uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ดำเนินการชำระเงิน</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="py-3 px-4 border border-[#111111] text-[#111111] font-['Kanit'] text-xs uppercase"
                  >
                    กลับ
                  </button>
                  <button
                    type="submit"
                    form="checkout-order-form"
                    className="flex-1 py-3 bg-[#111111] text-white hover:bg-[#2A2A2A] font-['Kanit'] font-normal text-xs uppercase tracking-wider"
                  >
                    ยืนยันคำสั่งซื้อ
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
