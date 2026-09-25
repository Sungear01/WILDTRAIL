import React from 'react';

// Hero Model Cutout: Hiker walking forward carrying backpack, wearing technical jacket
export const HeroHikerFigure: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 460 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${className}`}
      aria-label="ภาพถ่ายสตูดิโอขาว-ดำ คนใส่ชุดเดินป่าสะพายเป้"
    >
      <defs>
        <radialGradient id="hiker-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#111111" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#111111" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="jacket-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="50%" stopColor="#181818" />
          <stop offset="100%" stopColor="#0F0F0F" />
        </linearGradient>
        <linearGradient id="pant-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F1F1F" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="230" cy="670" rx="140" ry="16" fill="url(#hiker-shadow)" />

      {/* 45L Technical Backpack Behind Torso */}
      <path
        d="M270 170 C330 170, 360 210, 355 330 C350 410, 310 440, 270 435 Z"
        fill="#1A1A1A"
        stroke="#333333"
        strokeWidth="1.5"
      />
      {/* Backpack Daisy chains & Compression straps */}
      <path d="M330 220 L330 380" stroke="#444444" strokeWidth="2" strokeDasharray="6 4" />
      <path d="M290 250 L350 260" stroke="#555555" strokeWidth="2" />
      <path d="M290 320 L345 330" stroke="#555555" strokeWidth="2" />
      {/* Sleeping Pad rolled at bottom of pack */}
      <rect x="270" y="410" width="70" height="24" rx="12" fill="#2B2B2B" stroke="#444444" strokeWidth="1.2" />

      {/* Head / Beanie & Face Profile */}
      {/* Beanie Hat */}
      <path
        d="M210 100 C210 65, 260 65, 260 100 Z"
        fill="#111111"
        stroke="#2E2E2E"
        strokeWidth="1.2"
      />
      {/* Beanie fold */}
      <rect x="206" y="94" width="56" height="12" rx="2" fill="#242424" />
      {/* Face & Neck (Studio monochrome skin tone) */}
      <path
        d="M214 106 C214 128, 230 144, 245 144 C255 144, 258 132, 258 116 Z"
        fill="#7A7875"
      />
      {/* Defined Jawline & Shadow */}
      <path d="M218 112 L225 124 L240 134 L252 126" stroke="#4E4D4B" strokeWidth="1.5" fill="none" />
      {/* Neck */}
      <path d="M228 140 L228 165 L248 165 L248 140 Z" fill="#666461" />

      {/* Technical Storm Jacket (Main Torso) */}
      <path
        d="M175 170 C195 160, 275 160, 295 170 L305 270 C305 340, 280 390, 260 410 L190 410 C175 390, 165 340, 168 270 Z"
        fill="url(#jacket-grad)"
        stroke="#333333"
        strokeWidth="1.5"
      />

      {/* High Storm Collar */}
      <path
        d="M215 152 L260 152 L268 185 L208 185 Z"
        fill="#1A1A1A"
        stroke="#383838"
        strokeWidth="1.5"
      />
      {/* Center Waterproof YKK Zipper */}
      <path d="M238 152 L238 410" stroke="#4A4A4A" strokeWidth="2.5" />
      {/* Chest Pockets with heat-sealed seams */}
      <path d="M200 220 L225 220 L225 280 L200 280 Z" fill="#1C1C1C" stroke="#333333" strokeWidth="1" />
      <path d="M212 230 L212 270" stroke="#666666" strokeWidth="1.5" />
      <path d="M250 220 L275 220 L275 280 L250 280 Z" fill="#1C1C1C" stroke="#333333" strokeWidth="1" />
      <path d="M263 230 L263 270" stroke="#666666" strokeWidth="1.5" />

      {/* Backpack Harness Straps over Shoulders */}
      <path d="M195 175 C200 220, 205 280, 210 330" stroke="#111111" strokeWidth="9" strokeLinecap="round" />
      <path d="M195 175 C200 220, 205 280, 210 330" stroke="#444444" strokeWidth="3" strokeLinecap="round" />
      <path d="M275 175 C270 220, 265 280, 260 330" stroke="#111111" strokeWidth="9" strokeLinecap="round" />
      <path d="M275 175 C270 220, 265 280, 260 330" stroke="#444444" strokeWidth="3" strokeLinecap="round" />
      {/* Sternum Strap with Buckle */}
      <line x1="207" y1="245" x2="263" y2="245" stroke="#3A3A3A" strokeWidth="3" />
      <rect x="231" y="240" width="8" height="10" rx="1" fill="#666666" />

      {/* Left Arm & Glove (holding trekking pole) */}
      <path
        d="M175 175 C155 220, 145 280, 140 340 L160 350 C165 300, 175 250, 190 200 Z"
        fill="#1C1C1C"
        stroke="#2E2E2E"
        strokeWidth="1.2"
      />
      {/* Glove */}
      <ellipse cx="140" cy="355" rx="10" ry="14" fill="#2E2E2E" />
      {/* Carbon Trekking Pole (Left) */}
      <line x1="140" y1="260" x2="130" y2="650" stroke="#222222" strokeWidth="3.5" />
      <line x1="140" y1="260" x2="130" y2="650" stroke="#555555" strokeWidth="1" strokeDasharray="30 4" />
      <rect x="136" y="335" width="8" height="35" rx="2" fill="#444444" />
      <circle cx="132" cy="620" r="10" fill="#2B2B2B" stroke="#444444" strokeWidth="1" />

      {/* Right Arm swinging naturally */}
      <path
        d="M295 175 C315 230, 320 290, 325 350 L305 355 C300 300, 290 240, 280 195 Z"
        fill="#181818"
        stroke="#2E2E2E"
        strokeWidth="1.2"
      />
      <ellipse cx="323" cy="365" rx="10" ry="14" fill="#2A2A2A" />

      {/* Articulated Hiking Pants */}
      {/* Left Leg (Stepping forward) */}
      <path
        d="M192 410 L165 540 L175 625 L215 625 L225 540 L228 410 Z"
        fill="url(#pant-grad)"
        stroke="#2C2C2C"
        strokeWidth="1.2"
      />
      {/* Knee articulation darts */}
      <path d="M175 510 C195 520, 215 515, 222 510" stroke="#3A3A3A" strokeWidth="1.5" fill="none" />
      {/* Thigh cargo pocket */}
      <rect x="180" y="445" width="36" height="44" rx="2" fill="#1C1C1C" stroke="#2E2E2E" />
      <line x1="180" y1="455" x2="216" y2="455" stroke="#3D3D3D" strokeWidth="2" />

      {/* Right Leg (Back leg) */}
      <path
        d="M228 410 L235 530 L250 625 L285 620 L275 525 L258 410 Z"
        fill="#171717"
        stroke="#272727"
        strokeWidth="1.2"
      />
      <path d="M242 515 C255 522, 270 518, 276 512" stroke="#333333" strokeWidth="1.5" fill="none" />

      {/* Vibram Sole Mountain Trekking Boots */}
      {/* Left Boot */}
      <path
        d="M165 625 C165 615, 215 615, 215 625 L225 645 L225 662 L150 662 L152 645 Z"
        fill="#111111"
        stroke="#333333"
        strokeWidth="1.5"
      />
      {/* Boot Laces */}
      <path d="M175 628 L195 628 M173 634 L197 634 M172 640 L198 640" stroke="#777777" strokeWidth="1.5" />
      {/* Lugged Outsole */}
      <rect x="150" y="658" width="75" height="6" fill="#222222" />
      <line x1="158" y1="664" x2="162" y2="658" stroke="#111111" strokeWidth="2" />
      <line x1="174" y1="664" x2="178" y2="658" stroke="#111111" strokeWidth="2" />
      <line x1="190" y1="664" x2="194" y2="658" stroke="#111111" strokeWidth="2" />
      <line x1="206" y1="664" x2="210" y2="658" stroke="#111111" strokeWidth="2" />

      {/* Right Boot */}
      <path
        d="M248 620 C248 612, 285 612, 285 620 L292 638 L292 654 L240 654 L242 638 Z"
        fill="#1A1A1A"
        stroke="#2E2E2E"
        strokeWidth="1.2"
      />
      <rect x="240" y="650" width="52" height="6" fill="#111111" />
    </svg>
  );
};

// Half-body Model Profile for Collection Banner (#CFCFCD background)
export const BannerHikerPortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-label="ภาพถ่ายขาว-ดำ ครึ่งตัวคนใส่แจ็กเก็ตกันลม มองไปด้านข้าง"
    >
      <defs>
        <linearGradient id="banner-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#252525" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>

      {/* Soft Studio Vignette */}
      <circle cx="260" cy="200" r="180" fill="#BDBDBB" opacity="0.4" />

      {/* Head & Hood (Turned in 3/4 profile looking left towards copy) */}
      {/* Technical Adjustable Storm Hood */}
      <path
        d="M170 120 C170 50, 270 40, 310 90 C330 120, 325 180, 305 210 C290 230, 250 240, 210 230 Z"
        fill="#161616"
        stroke="#2E2E2E"
        strokeWidth="1.5"
      />
      {/* Hood Visor / Brim */}
      <path d="M170 115 C190 95, 235 90, 260 92" stroke="#444444" strokeWidth="3" fill="none" />

      {/* Profile Face in Shadow */}
      <path
        d="M210 115 C200 135, 205 160, 218 175 L228 175 L230 155 L222 135 Z"
        fill="#555452"
      />
      {/* Eye shadow and cheek line */}
      <path d="M216 135 L226 138" stroke="#333333" strokeWidth="1.5" />
      <path d="M210 150 L220 158" stroke="#3B3A38" strokeWidth="1.2" />

      {/* High Technical Shell Collar wrapping chin */}
      <path
        d="M185 160 C185 140, 240 145, 260 175 L255 240 L175 230 Z"
        fill="#1A1A1A"
        stroke="#333333"
        strokeWidth="1.5"
      />
      <path d="M215 170 L215 240" stroke="#555555" strokeWidth="2.5" />

      {/* Shoulders & Upper Body (3-Layer Technical GORE-TEX Shell) */}
      <path
        d="M110 240 C170 215, 260 215, 340 245 L380 480 L80 480 Z"
        fill="url(#banner-shell)"
        stroke="#2E2E2E"
        strokeWidth="2"
      />

      {/* Welded Seams & Technical Architecture */}
      <path d="M225 240 L225 480" stroke="#3D3D3D" strokeWidth="3" />
      {/* Left & Right Ergonomic Raglan Sleeve Seams */}
      <path d="M190 230 C165 270, 140 330, 120 400" stroke="#333333" strokeWidth="1.5" />
      <path d="M260 230 C285 270, 310 330, 330 400" stroke="#333333" strokeWidth="1.5" />

      {/* Waterproof Chest Pockets with Matte Black Zipper Pulls */}
      <path d="M150 280 L185 280 L185 370 L150 370 Z" fill="#141414" stroke="#2C2C2C" />
      <line x1="168" y1="290" x2="168" y2="360" stroke="#555555" strokeWidth="2" />
      <rect x="165" y="350" width="6" height="12" rx="1" fill="#777777" />

      <path d="M265 280 L300 280 L300 370 L265 370 Z" fill="#141414" stroke="#2C2C2C" />
      <line x1="282" y1="290" x2="282" y2="360" stroke="#555555" strokeWidth="2" />
      <rect x="279" y="350" width="6" height="12" rx="1" fill="#777777" />

      {/* Hood Bungee Cord & Cord Lock */}
      <circle cx="250" cy="225" r="4" fill="#666666" />
      <path d="M250 225 L254 250" stroke="#888888" strokeWidth="1.5" />
    </svg>
  );
};

// 3 Category Square Visuals in Monochrome Studio Style
export const CategorySquareVisual: React.FC<{ type: 'tent' | 'sleeping' | 'backpack'; className?: string }> = ({
  type,
  className = '',
}) => {
  switch (type) {
    case 'tent':
      return (
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="300" height="300" fill="#1C1C1C" />
          {/* Subtle studio gradient ring */}
          <circle cx="150" cy="150" r="110" fill="#242424" />
          {/* Studio Shadow */}
          <ellipse cx="150" cy="235" rx="100" ry="18" fill="#111111" />
          {/* Expedition Dome Tent */}
          <path d="M60 230 C75 120, 115 85, 150 75 C185 85, 225 120, 240 230 Z" fill="#2C2C2C" stroke="#777777" strokeWidth="2" />
          <path d="M150 75 L150 230" stroke="#555555" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Front Entrance flap */}
          <path d="M125 228 L150 140 L175 228 Z" fill="#161616" stroke="#888888" strokeWidth="1.8" />
          {/* Crossed Poles Line */}
          <path d="M65 220 C100 120, 200 120, 235 220" stroke="#AAAAAA" strokeWidth="2" />
          <path d="M235 220 C200 120, 100 120, 65 220" stroke="#666666" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Guy-lines */}
          <line x1="75" y1="165" x2="35" y2="225" stroke="#777777" strokeWidth="1.2" />
          <line x1="225" y1="165" x2="265" y2="225" stroke="#777777" strokeWidth="1.2" />
        </svg>
      );
    case 'sleeping':
      return (
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="300" height="300" fill="#1C1C1C" />
          <circle cx="150" cy="150" r="110" fill="#242424" />
          <ellipse cx="150" cy="240" rx="90" ry="16" fill="#111111" />
          {/* Mummy Sleeping Bag with Down Chambers */}
          <path
            d="M120 70 C120 40, 180 40, 180 70 C180 80, 195 120, 190 190 C185 225, 175 240, 150 240 C125 240, 115 225, 110 190 C105 120, 120 80, 120 70 Z"
            fill="#2A2A2A"
            stroke="#777777"
            strokeWidth="2"
          />
          {/* Face Hole */}
          <ellipse cx="150" cy="68" rx="18" ry="12" fill="#161616" stroke="#999999" strokeWidth="1.5" />
          {/* Horizontal Baffles */}
          <path d="M112 100 C135 105, 165 105, 188 100" stroke="#555555" strokeWidth="1.5" />
          <path d="M109 130 C135 136, 165 136, 191 130" stroke="#555555" strokeWidth="1.5" />
          <path d="M108 160 C135 166, 165 166, 192 160" stroke="#555555" strokeWidth="1.5" />
          <path d="M112 190 C135 196, 165 196, 188 190" stroke="#555555" strokeWidth="1.5" />
          {/* Compression stuff sack alongside */}
          <rect x="205" y="170" width="45" height="55" rx="8" fill="#161616" stroke="#666666" strokeWidth="1.5" />
          <line x1="205" y1="188" x2="250" y2="188" stroke="#888888" strokeWidth="2" />
          <line x1="205" y1="206" x2="250" y2="206" stroke="#888888" strokeWidth="2" />
        </svg>
      );
    case 'backpack':
      return (
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="300" height="300" fill="#1C1C1C" />
          <circle cx="150" cy="150" r="110" fill="#242424" />
          <ellipse cx="150" cy="245" rx="75" ry="15" fill="#111111" />
          {/* 45L Alpine Backpack */}
          <path
            d="M105 75 C105 55, 195 55, 195 75 L198 220 C198 232, 102 232, 102 220 Z"
            fill="#2D2D2D"
            stroke="#777777"
            strokeWidth="2"
          />
          {/* Top Lid */}
          <path d="M98 65 C98 50, 202 50, 202 65 L200 85 L100 85 Z" fill="#383838" stroke="#888888" strokeWidth="1.8" />
          {/* Front stretch mesh pocket */}
          <path d="M115 110 C115 105, 185 105, 185 110 L182 195 C182 200, 118 200, 118 195 Z" fill="#1B1B1B" stroke="#555555" strokeWidth="1.2" />
          {/* Daisy Chains */}
          <line x1="130" y1="118" x2="130" y2="185" stroke="#777777" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="170" y1="118" x2="170" y2="185" stroke="#777777" strokeWidth="2" strokeDasharray="6 4" />
          {/* Side Compression Straps */}
          <line x1="95" y1="115" x2="110" y2="118" stroke="#888888" strokeWidth="2.5" />
          <line x1="190" y1="118" x2="205" y2="115" stroke="#888888" strokeWidth="2.5" />
          <line x1="95" y1="155" x2="110" y2="158" stroke="#888888" strokeWidth="2.5" />
          <line x1="190" y1="158" x2="205" y2="155" stroke="#888888" strokeWidth="2.5" />
          {/* Hip Belt Wings */}
          <path d="M85 205 C90 195, 105 200, 105 220 C105 228, 88 225, 85 205 Z" fill="#202020" stroke="#555555" />
          <path d="M215 205 C210 195, 195 200, 195 220 C195 228, 212 225, 215 205 Z" fill="#202020" stroke="#555555" />
        </svg>
      );
  }
};

// 4 Product Visuals (Primary Angle & Hover Secondary Angle)
export const ProductEditorialVisual: React.FC<{
  id: string;
  isHovered?: boolean;
  className?: string;
}> = ({ id, isHovered = false, className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-[#DCDCDC] overflow-hidden flex items-center justify-center ${className}`}>
      {/* Primary Angle */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
          isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {renderPrimaryVisual(id)}
      </div>

      {/* Secondary Angle (Revealed smoothly on hover as requested) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-110'
        }`}
      >
        {renderSecondaryVisual(id)}
      </div>
    </div>
  );
};

function renderPrimaryVisual(id: string) {
  switch (id) {
    case 'prod-1': // เต็นท์โดม 2 คน
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="235" rx="75" ry="14" fill="#B0B0AE" opacity="0.6" />
          <path d="M45 225 C58 125, 92 90, 120 80 C148 90, 182 125, 195 225 Z" fill="#292929" stroke="#111111" strokeWidth="2" />
          <path d="M120 80 L120 225" stroke="#444444" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M100 224 L120 145 L140 224 Z" fill="#151515" stroke="#555555" strokeWidth="1.5" />
          <path d="M50 218 C80 125, 160 125, 190 218" stroke="#666666" strokeWidth="2" />
          <circle cx="120" cy="80" r="4" fill="#111111" />
        </svg>
      );
    case 'prod-2': // ถุงนอน 5°C
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="240" rx="60" ry="12" fill="#B0B0AE" opacity="0.6" />
          <path
            d="M95 65 C95 40, 145 40, 145 65 C145 75, 155 110, 150 180 C145 220, 138 238, 120 238 C102 238, 95 220, 90 180 C85 110, 95 75, 95 65 Z"
            fill="#272727"
            stroke="#111111"
            strokeWidth="2"
          />
          <ellipse cx="120" cy="62" rx="14" ry="9" fill="#141414" stroke="#444444" strokeWidth="1.2" />
          <path d="M92 95 C110 100, 130 100, 148 95" stroke="#444444" strokeWidth="1.2" />
          <path d="M90 125 C110 130, 130 130, 150 125" stroke="#444444" strokeWidth="1.2" />
          <path d="M89 155 C110 160, 130 160, 151 155" stroke="#444444" strokeWidth="1.2" />
          <path d="M92 185 C110 190, 130 190, 148 185" stroke="#444444" strokeWidth="1.2" />
        </svg>
      );
    case 'prod-3': // เป้ 45L
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="242" rx="55" ry="10" fill="#B0B0AE" opacity="0.6" />
          <path d="M80 65 C80 50, 160 50, 160 65 L162 220 C162 230, 78 230, 78 220 Z" fill="#252525" stroke="#111111" strokeWidth="2" />
          <path d="M75 58 C75 45, 165 45, 165 58 L163 76 L77 76 Z" fill="#333333" stroke="#111111" strokeWidth="1.5" />
          <path d="M90 100 C90 95, 150 95, 150 100 L148 190 C148 195, 92 195, 92 190 Z" fill="#181818" stroke="#3D3D3D" />
          <line x1="102" y1="108" x2="102" y2="180" stroke="#555555" strokeWidth="1.8" strokeDasharray="4 3" />
          <line x1="138" y1="108" x2="138" y2="180" stroke="#555555" strokeWidth="1.8" strokeDasharray="4 3" />
        </svg>
      );
    case 'prod-4': // แจ็กเก็ตกันลม
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="245" rx="50" ry="8" fill="#B0B0AE" opacity="0.5" />
          {/* Hood */}
          <path d="M105 60 C105 45, 135 45, 135 60 Z" fill="#1C1C1C" stroke="#111111" strokeWidth="1.5" />
          {/* Torso & Sleeves */}
          <path d="M105 60 L78 88 L85 220 L155 220 L162 88 L135 60 Z" fill="#282828" stroke="#111111" strokeWidth="2" />
          <path d="M78 88 L65 175 L80 178 L88 120" fill="#1F1F1F" stroke="#111111" strokeWidth="1.2" />
          <path d="M162 88 L175 175 L160 178 L152 120" fill="#1F1F1F" stroke="#111111" strokeWidth="1.2" />
          <line x1="120" y1="60" x2="120" y2="220" stroke="#444444" strokeWidth="2" />
          <line x1="102" y1="100" x2="102" y2="135" stroke="#555555" strokeWidth="1.5" />
          <line x1="138" y1="100" x2="138" y2="135" stroke="#555555" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

function renderSecondaryVisual(id: string) {
  switch (id) {
    case 'prod-1': // เต็นท์โดม มุมมองด้านข้าง/กางฟลายชีท
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="235" rx="80" ry="14" fill="#B0B0AE" opacity="0.6" />
          {/* Side Profile View */}
          <path d="M35 225 C45 130, 110 80, 175 90 L210 225 Z" fill="#212121" stroke="#111111" strokeWidth="2" />
          <path d="M35 225 L125 105 L210 225" stroke="#555555" strokeWidth="1.8" />
          {/* Extended Vestibule Pegged Out */}
          <polygon points="125,105 210,225 155,225" fill="#151515" stroke="#444444" strokeWidth="1.2" />
          <line x1="210" y1="225" x2="228" y2="235" stroke="#111111" strokeWidth="2" />
        </svg>
      );
    case 'prod-2': // ถุงนอน บีบอัดในถุงเก็บ Compression Sack
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="225" rx="55" ry="12" fill="#B0B0AE" opacity="0.6" />
          {/* Compact Stuffed Cylinder */}
          <rect x="75" y="90" width="90" height="120" rx="16" fill="#202020" stroke="#111111" strokeWidth="2" />
          {/* Vertical & Horizontal Compression Webbing */}
          <line x1="75" y1="125" x2="165" y2="125" stroke="#555555" strokeWidth="3" />
          <line x1="75" y1="165" x2="165" y2="165" stroke="#555555" strokeWidth="3" />
          <line x1="105" y1="90" x2="105" y2="210" stroke="#555555" strokeWidth="3" />
          <line x1="135" y1="90" x2="135" y2="210" stroke="#555555" strokeWidth="3" />
          {/* Buckles */}
          <rect x="100" y="120" width="10" height="10" rx="2" fill="#777777" />
          <rect x="130" y="120" width="10" height="10" rx="2" fill="#777777" />
        </svg>
      );
    case 'prod-3': // เป้ มุมมองด้านหลังโชว์โครงระบายอากาศ AirMesh Suspended Frame
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="242" rx="55" ry="10" fill="#B0B0AE" opacity="0.6" />
          {/* Back Panel */}
          <path d="M80 65 L160 65 L162 220 L78 220 Z" fill="#1C1C1C" stroke="#111111" strokeWidth="2" />
          {/* Ergonomic Curved Shoulder Harnesses */}
          <path d="M95 65 C85 110, 85 170, 95 210" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          <path d="M145 65 C155 110, 155 170, 145 210" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          {/* Suspended Mesh Back Trampoline */}
          <rect x="98" y="90" width="44" height="95" rx="6" fill="#111111" stroke="#555555" strokeWidth="1.2" strokeDasharray="3 2" />
          {/* Hip Belt */}
          <path d="M70 210 C80 200, 160 200, 170 210 L165 225 L75 225 Z" fill="#2E2E2E" stroke="#111111" />
        </svg>
      );
    case 'prod-4': // แจ็กเก็ต มุมมองด้านหลังโชว์ฮู้ดและการตัดต่อแพตเทิร์น
      return (
        <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-56">
          <ellipse cx="120" cy="245" rx="50" ry="8" fill="#B0B0AE" opacity="0.5" />
          {/* Back of Hood hanging down */}
          <path d="M102 60 C102 45, 138 45, 138 60 L135 90 C120 95, 120 95, 105 90 Z" fill="#181818" stroke="#111111" strokeWidth="1.5" />
          {/* Back Torso */}
          <path d="M105 60 L78 88 L85 220 L155 220 L162 88 L135 60 Z" fill="#242424" stroke="#111111" strokeWidth="2" />
          {/* Shoulder Yoke Seam */}
          <path d="M82 105 C105 115, 135 115, 158 105" stroke="#383838" strokeWidth="1.5" fill="none" />
          {/* Minimalist Logo on back shoulder */}
          <text x="135" y="125" fill="#666666" fontSize="6" fontFamily="Kanit" fontWeight="600" letterSpacing="0.2em">WILD</text>
        </svg>
      );
    default:
      return null;
  }
}
