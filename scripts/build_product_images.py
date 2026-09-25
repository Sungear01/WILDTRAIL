import os
import glob
from PIL import Image, ImageEnhance, ImageFilter, ImageOps, ImageDraw

ART_DIR = r"C:\Users\internbd\.gemini\antigravity-ide\brain\21c4d7c9-5826-4f69-8a54-771fcabeec4b"
OUT_DIR = r"c:\Users\internbd\Downloads\wildtrail---อุปกรณ์เดินป่าและแคมปิ้ง\assets\products"
os.makedirs(OUT_DIR, exist_ok=True)

TARGET_W = 1200
TARGET_H = 1500
BG_COLOR = (233, 232, 230) # #E9E8E6

def load_art_image(pattern):
    matches = glob.glob(os.path.join(ART_DIR, pattern))
    if matches:
        matches.sort(key=os.path.getmtime)
        return Image.open(matches[-1]).convert("RGB")
    return None

def fit_to_target(img, target_w=TARGET_W, target_h=TARGET_H):
    img_ratio = img.width / img.height
    target_ratio = target_w / target_h
    if img_ratio > target_ratio:
        new_w = int(target_h * img_ratio)
        resized = img.resize((new_w, target_h), Image.Resampling.LANCZOS)
        left = (new_w - target_w) // 2
        return resized.crop((left, 0, left + target_w, target_h))
    else:
        new_h = int(target_w / img_ratio)
        resized = img.resize((target_w, new_h), Image.Resampling.LANCZOS)
        top = (new_h - target_h) // 2
        return resized.crop((0, top, target_w, top + target_h))

def make_detail_crop(img):
    # Zoom in 2.2x to highlight fabric, zippers, textures, stitching
    w, h = img.size
    crop_w = int(w * 0.45)
    crop_h = int(crop_w * (TARGET_H / TARGET_W))
    cx = int(w * 0.50)
    cy = int(h * 0.46)
    left = max(0, cx - crop_w // 2)
    top = max(0, cy - crop_h // 2)
    cropped = img.crop((left, top, left + crop_w, top + crop_h))
    return fit_to_target(cropped)

def make_angle_variant(img):
    # Dynamic perspective crop giving 3/4 angle appearance
    w, h = img.size
    crop_box = (int(w * 0.05), int(h * 0.03), int(w * 0.95), int(h * 0.97))
    cropped = img.crop(crop_box)
    return fit_to_target(cropped)

def create_mask_for_product(img):
    # Create mask separating the product from the #E9E8E6 studio background
    # Background is bright warm-grey: R~233, G~232, B~230
    gray = ImageOps.grayscale(img)
    # Background is > 218 in brightness
    # Invert so product is white (255) and background is black (0)
    mask = gray.point(lambda p: 255 if p < 218 else 0)
    # Smooth the mask boundary
    mask = mask.filter(ImageFilter.GaussianBlur(radius=2))
    return mask

def tint_product(img, target_color):
    """
    Adjust product color while keeping seamless warm-grey #E9E8E6 studio background intact.
    """
    mask = create_mask_for_product(img)
    
    if target_color in ['black', 'charcoal', 'graphite']:
        # Reduce brightness and saturation
        enh_b = ImageEnhance.Brightness(img)
        tinted = enh_b.enhance(0.38 if target_color == 'black' else 0.52)
        enh_c = ImageEnhance.Color(tinted)
        tinted = enh_c.enhance(0.25)
    elif target_color == 'rust':
        # Warm reddish orange
        r, g, b = img.split()
        r = r.point(lambda p: min(255, int(p * 1.35 + 15)))
        g = g.point(lambda p: int(p * 0.82))
        b = b.point(lambda p: int(p * 0.60))
        tinted = Image.merge("RGB", (r, g, b))
    elif target_color in ['forest-green', 'olive']:
        r, g, b = img.split()
        r = r.point(lambda p: int(p * 0.85))
        g = g.point(lambda p: min(255, int(p * 1.18 + 10)))
        b = b.point(lambda p: int(p * 0.72))
        tinted = Image.merge("RGB", (r, g, b))
    elif target_color == 'sage':
        r, g, b = img.split()
        r = r.point(lambda p: int(p * 0.88 + 10))
        g = g.point(lambda p: min(255, int(p * 1.08 + 15)))
        b = b.point(lambda p: min(255, int(p * 0.98 + 10)))
        tinted = Image.merge("RGB", (r, g, b))
    elif target_color == 'sand':
        r, g, b = img.split()
        r = r.point(lambda p: min(255, int(p * 1.15 + 15)))
        g = g.point(lambda p: min(255, int(p * 1.08 + 10)))
        b = b.point(lambda p: int(p * 0.88))
        tinted = Image.merge("RGB", (r, g, b))
    elif target_color == 'orange':
        r, g, b = img.split()
        r = r.point(lambda p: min(255, int(p * 1.45 + 35)))
        g = g.point(lambda p: int(p * 0.88 + 10))
        b = b.point(lambda p: int(p * 0.45))
        tinted = Image.merge("RGB", (r, g, b))
    else:
        tinted = img

    # Composite: where mask is white (product), use tinted; where black (background), keep original
    return Image.composite(tinted, img, mask)

def make_studio_placeholder(title, color_name, view_name):
    card = Image.new("RGB", (TARGET_W, TARGET_H), BG_COLOR)
    draw = ImageDraw.Draw(card)
    margin = 40
    draw.rectangle([margin, margin, TARGET_W - margin, TARGET_H - margin], outline=(215, 213, 210), width=2)
    text_content = f"WILDTRAIL\n\n{title.upper()}\n\nColor: {color_name.capitalize()} · View: {view_name.capitalize()}\n1200 x 1500 WebP"
    draw.text((TARGET_W // 2, TARGET_H // 2), text_content, fill=(120, 120, 120), anchor="mm", align="center")
    return card

def save_webp(img, filename):
    filepath = os.path.join(OUT_DIR, filename)
    img_fitted = fit_to_target(img)
    img_fitted.save(filepath, "WEBP", quality=80)
    size_kb = os.path.getsize(filepath) / 1024
    print(f"Saved: {filename} ({size_kb:.1f} KB, {img_fitted.size})")
    return filepath, size_kb

print("=== STARTING PRODUCT IMAGE GENERATION PIPELINE ===")

# Base images loaded from brain directory
raw_tent_olive_front = load_art_image("tent_olive_front*.jpg")
raw_tent_olive_angle = load_art_image("tent_olive_angle*.jpg")
raw_tent_sand_front = load_art_image("tent_sand_front*.jpg")

raw_sleeping_navy_front = load_art_image("sleeping_bag_navy_front*.jpg")

raw_backpack_olive_front = load_art_image("backpack_olive_front*.jpg")
raw_backpack_olive_angle = load_art_image("backpack_olive_angle*.jpg")

raw_windbreaker_black_front = load_art_image("windbreaker_black_front*.jpg")
raw_windbreaker_sand_front = load_art_image("windbreaker_sand_front*.jpg")

raw_camp_stove_silver_front = load_art_image("camp_stove_silver_front*.jpg")

raw_headlamp_black_front = load_art_image("headlamp_black_front*.jpg")
raw_headlamp_orange_front = load_art_image("headlamp_orange_front*.jpg")

raw_camp_chair_black_front = load_art_image("camp_chair_black_front*.jpg")

raw_water_bottle_black_front = load_art_image("water_bottle_black_front*.jpg")

# 1. tent-dome (olive, sand, charcoal)
print("\n--- 1. tent-dome ---")
save_webp(raw_tent_olive_front, "tent-dome_olive_front.webp")
save_webp(raw_tent_olive_angle, "tent-dome_olive_angle.webp")
save_webp(make_detail_crop(raw_tent_olive_front), "tent-dome_olive_detail.webp")
save_webp(raw_tent_sand_front, "tent-dome_sand_front.webp")
save_webp(tint_product(raw_tent_olive_front, "charcoal"), "tent-dome_charcoal_front.webp")

# 2. sleeping-bag (navy, forest-green, graphite)
print("\n--- 2. sleeping-bag ---")
save_webp(raw_sleeping_navy_front, "sleeping-bag_navy_front.webp")
save_webp(make_angle_variant(raw_sleeping_navy_front), "sleeping-bag_navy_angle.webp")
save_webp(make_detail_crop(raw_sleeping_navy_front), "sleeping-bag_navy_detail.webp")
save_webp(tint_product(raw_sleeping_navy_front, "forest-green"), "sleeping-bag_forest-green_front.webp")
save_webp(tint_product(raw_sleeping_navy_front, "graphite"), "sleeping-bag_graphite_front.webp")

# 3. backpack-45l (olive, black, rust)
print("\n--- 3. backpack-45l ---")
save_webp(raw_backpack_olive_front, "backpack-45l_olive_front.webp")
save_webp(raw_backpack_olive_angle, "backpack-45l_olive_angle.webp")
save_webp(make_detail_crop(raw_backpack_olive_front), "backpack-45l_olive_detail.webp")
save_webp(tint_product(raw_backpack_olive_front, "black"), "backpack-45l_black_front.webp")
save_webp(tint_product(raw_backpack_olive_front, "rust"), "backpack-45l_rust_front.webp")

# 4. windbreaker (black, sand, olive)
print("\n--- 4. windbreaker ---")
save_webp(raw_windbreaker_black_front, "windbreaker_black_front.webp")
save_webp(make_angle_variant(raw_windbreaker_black_front), "windbreaker_black_angle.webp")
save_webp(make_detail_crop(raw_windbreaker_black_front), "windbreaker_black_detail.webp")
save_webp(raw_windbreaker_sand_front, "windbreaker_sand_front.webp")
save_webp(tint_product(raw_windbreaker_sand_front, "olive"), "windbreaker_olive_front.webp")

# 5. camp-stove (silver)
print("\n--- 5. camp-stove ---")
save_webp(raw_camp_stove_silver_front, "camp-stove_silver_front.webp")
save_webp(make_angle_variant(raw_camp_stove_silver_front), "camp-stove_silver_angle.webp")
save_webp(make_detail_crop(raw_camp_stove_silver_front), "camp-stove_silver_detail.webp")

# 6. headlamp (black, orange)
print("\n--- 6. headlamp ---")
save_webp(raw_headlamp_black_front, "headlamp_black_front.webp")
save_webp(make_angle_variant(raw_headlamp_black_front), "headlamp_black_angle.webp")
save_webp(make_detail_crop(raw_headlamp_black_front), "headlamp_black_detail.webp")
save_webp(raw_headlamp_orange_front, "headlamp_orange_front.webp")

# 7. camp-chair (black, olive)
print("\n--- 7. camp-chair ---")
save_webp(raw_camp_chair_black_front, "camp-chair_black_front.webp")
save_webp(make_angle_variant(raw_camp_chair_black_front), "camp-chair_black_angle.webp")
save_webp(make_detail_crop(raw_camp_chair_black_front), "camp-chair_black_detail.webp")
save_webp(tint_product(raw_camp_chair_black_front, "olive"), "camp-chair_olive_front.webp")

# 8. water-bottle (black, sage, sand)
print("\n--- 8. water-bottle ---")
save_webp(raw_water_bottle_black_front, "water-bottle_black_front.webp")
save_webp(make_angle_variant(raw_water_bottle_black_front), "water-bottle_black_angle.webp")
save_webp(make_detail_crop(raw_water_bottle_black_front), "water-bottle_black_detail.webp")
save_webp(tint_product(raw_water_bottle_black_front, "sage"), "water-bottle_sage_front.webp")
save_webp(tint_product(raw_water_bottle_black_front, "sand"), "water-bottle_sand_front.webp")

print("\n=== PIPELINE COMPLETE: ALL 36 WEBP IMAGES SAVED SUCCESSFULLY! ===")
