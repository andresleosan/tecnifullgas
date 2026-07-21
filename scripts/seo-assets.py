"""
Genera los assets SEO optimizados para Tecni Full Gas.
No toca originales. Crea:
  - /public/og-image.png (1200x630) para Open Graph / Twitter
  - /public/apple-touch-icon.png (180x180)
  - /public/favicon.ico (multi-resolucion 16/32/48)
  - /public/favicon-32.png, favicon-16.png (PNG fallback)
  - /public/img/servicios-webp/*.webp (6 servicios comprimidos)
  - /public/img/servicios-webp/*.avif (6 servicios en AVIF, si Pillow soporta AVIF)
Usa Logo.png y Fulli.png como fuentes. No modifica nada existente.
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = r'S:\Respaldo\Proyectos\tecnifullgas'
PUBLIC = os.path.join(ROOT, 'public')
IMG_DIR = os.path.join(PUBLIC, 'img')
OUT_WEBP_DIR = os.path.join(IMG_DIR, 'servicios-webp')

os.makedirs(OUT_WEBP_DIR, exist_ok=True)

# ============ Tamaños / colores ============
BRAND_BG = (11, 30, 58)        # #0B1E3A
BRAND_ACCENT = (245, 130, 32)  # #F58220 (tf-accent)
BRAND_WHITE = (255, 255, 255)
BRAND_SUB = (255, 255, 255, 220)

# ============ Helpers de fuentes ============
def find_font(size, bold=False):
    candidates = [
        r'C:\Windows\Fonts\ariasbd.ttf' if bold else r'C:\Windows\Fonts\arial.ttf',
        r'C:\Windows\Fonts\arialbd.ttf' if bold else r'C:\Windows\Fonts\arial.ttf',
        r'C:\Windows\Fonts\segoeuib.ttf' if bold else r'C:\Windows\Fonts\segoeui.ttf',
        r'C:\Windows\Fonts\seguisb.ttf',
        r'C:\Windows\Fonts\arial.ttf',
    ]
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

def save_png_quantized(img, path, target_kb=None):
    """Guarda PNG optimizado: paleta + compresion maxima."""
    if img.mode != 'P':
        img2 = img.convert('RGB')
        img2 = img2.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    else:
        img2 = img
    img2.save(path, format='PNG', optimize=True, compress_level=9)

# ============ 1. og-image.png 1200x630 ============
def make_og_image():
    W, H = 1200, 630
    logo_path = os.path.join(IMG_DIR, 'Logo.png')
    fulli_path = os.path.join(IMG_DIR, 'Fulli.png')

    # Fondo: gradiente diagonal brand
    bg = Image.new('RGB', (W, H), BRAND_BG)
    # Capa de gradiente sutil
    grad = Image.new('RGB', (W, H), (23, 59, 120))  # #173B78
    # Mascara diagonal con blur
    mask = Image.new('L', (W, H), 0)
    dmask = ImageDraw.Draw(mask)
    dmask.rectangle([0, 0, int(W*0.55), H], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(160))
    bg.paste(grad, (0, 0), mask)

    draw = ImageDraw.Draw(bg, 'RGBA')

    # Barra acento izquierda
    draw.rectangle([0, 0, 14, H], fill=BRAND_ACCENT + (255,))

    # Logo (recortado circular)
    try:
        logo = Image.open(logo_path).convert('RGBA')
        # Recorte cuadrado centrado
        ls = min(logo.size)
        logo = logo.crop((
            (logo.width - ls) // 2,
            (logo.height - ls) // 2,
            (logo.width + ls) // 2,
            (logo.height + ls) // 2,
        ))
        logo = logo.resize((110, 110), Image.LANCZOS)
        # Mascara circular
        circle = Image.new('L', (110, 110), 0)
        ImageDraw.Draw(circle).ellipse([0, 0, 109, 109], fill=255)
        bg.paste(logo, (60, 60), circle)
        # Borde
        ImageDraw.Draw(bg, 'RGBA').ellipse([60, 60, 169, 169], outline=BRAND_ACCENT + (255,), width=3)
    except Exception as e:
        print(f'  warn: no pude pegar el logo: {e}')

    # Texto principal
    f_title = find_font(64, bold=True)
    f_sub = find_font(34, bold=False)
    f_tag = find_font(24, bold=True)

    x = 200
    draw.text((x, 100), 'Tecni Full Gas', font=f_title, fill=BRAND_WHITE)
    # Linea acento
    draw.rectangle([x, 184, x + 480, 190], fill=BRAND_ACCENT + (255,))

    draw.text((x, 210), 'Reparación y mantenimiento de', font=f_sub, fill=BRAND_WHITE + (235,))
    draw.text((x, 252), 'calentadores, estufas y campanas', font=f_sub, fill=BRAND_WHITE + (235,))

    # Caja con location (visible a la derecha)
    box_x = x
    box_y = 320
    box_w = 620
    box_h = 90
    draw.rounded_rectangle([box_x, box_y, box_x + box_w, box_y + box_h], radius=14,
                           fill=(255, 255, 255, 18), outline=BRAND_ACCENT + (160,), width=2)
    draw.text((box_x + 24, box_y + 18), 'Medellín y alrededores', font=f_sub, fill=BRAND_WHITE)
    draw.text((box_x + 24, box_y + 56), 'Servicio técnico de gas certificado', font=f_tag, fill=BRAND_ACCENT + (255,))

    # Footer con keywords
    draw.text((x, 510), 'WhatsApp 3014065931', font=find_font(28, bold=True), fill=BRAND_WHITE)
    draw.text((x, 552), 'reparación de calentadores · estufas · campanas · fugas de gas', font=find_font(22), fill=BRAND_WHITE + (200,))

    # Fulli (esquina inferior derecha como adorno)
    try:
        fulli = Image.open(fulli_path).convert('RGBA')
        fs = min(fulli.size)
        fulli = fulli.crop((
            (fulli.width - fs) // 2,
            (fulli.height - fs) // 2,
            (fulli.width + fs) // 2,
            (fulli.height + fs) // 2,
        ))
        fulli = fulli.resize((220, 220), Image.LANCZOS)
        circle_f = Image.new('L', (220, 220), 0)
        ImageDraw.Draw(circle_f).ellipse([0, 0, 219, 219], fill=255)
        # Sombra
        shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow, 'RGBA')
        sd.ellipse([940, 358, 1180, 598], fill=(0, 0, 0, 120))
        shadow = shadow.filter(ImageFilter.GaussianBlur(20))
        # Convertir bg a RGBA para alpha composite
        bg_rgba = bg.convert('RGBA')
        bg_rgba.alpha_composite(shadow)
        bg_rgba.paste(fulli, (940, 358), circle_f)
        bg = bg_rgba.convert('RGB')
    except Exception as e:
        print(f'  warn: no pude pegar Fulli: {e}')

    out = os.path.join(PUBLIC, 'og-image.png')
    bg.save(out, format='PNG', optimize=True, compress_level=9)
    print(f'  + {out} ({os.path.getsize(out)//1024} KB, dimensiones {bg.size})')
    return out

# ============ 2. favicon.ico + apple-touch-icon.png 180x180 ============
def make_icons():
    logo_path = os.path.join(IMG_DIR, 'Logo.png')
    logo = Image.open(logo_path).convert('RGBA')
    # Recorte cuadrado centrado
    ls = min(logo.size)
    logo = logo.crop((
        (logo.width - ls) // 2,
        (logo.height - ls) // 2,
        (logo.width + ls) // 2,
        (logo.height + ls) // 2,
    ))

    # favicon.ico multi-resolucion
    sizes_ico = [16, 32, 48]
    ico_images = []
    for s in sizes_ico:
        im = logo.resize((s, s), Image.LANCZOS)
        ico_images.append((im, s))
    ico_path = os.path.join(PUBLIC, 'favicon.ico')
    ico_images[0][0].save(
        ico_path,
        format='ICO',
        sizes=[(s, s) for _, s in ico_images],
        append_images=[im for im, _ in ico_images[1:]],
    )
    print(f'  + {ico_path} ({os.path.getsize(ico_path)} bytes, multi-res 16/32/48)')

    # apple-touch-icon 180x180 con fondo brand (iOS lo solicita cuadrado opaco)
    ati = Image.new('RGB', (180, 180), BRAND_BG)
    logo180 = logo.resize((160, 160), Image.LANCZOS)
    ati.paste(logo180, (10, 10), logo180)
    ati_path = os.path.join(PUBLIC, 'apple-touch-icon.png')
    ati.save(ati_path, format='PNG', optimize=True, compress_level=9)
    print(f'  + {ati_path} ({os.path.getsize(ati_path)//1024} KB, 180x180)')

    #favicon-32.png y favicon-16.png como fallback moderno
    for s, name in [(32, 'favicon-32.png'), (16, 'favicon-16.png'), (192, 'android-chrome-192.png'), (512, 'android-chrome-512.png')]:
        im = logo.resize((s, s), Image.LANCZOS)
        if s in (192, 512):
            # Maskable: fondo brand
            canvas = Image.new('RGB', (s, s), BRAND_BG)
            margin = int(s * 0.08)
            inner = logo.resize((s - 2*margin, s - 2*margin), Image.LANCZOS)
            canvas.paste(inner, (margin, margin), inner)
            im = canvas
        p = os.path.join(PUBLIC, name)
        im.save(p, format='PNG', optimize=True, compress_level=9)
        print(f'  + {p} ({os.path.getsize(p)//1024} KB, {s}x{s})')

    return ico_path, ati_path

# ============ 3. WebP de servicios ============
SERVICES_PNG = [
    'Calentadores.png',
    'Campanas.png',
    'Estufas.png',
    'Reparaciones.png',
    'Repuestos.png',
    'Fugas.png',
]

def compress_service_images():
    avif_supported = False
    try:
        test = Image.new('RGB', (10, 10), (0, 0, 0))
        import io
        buf = io.BytesIO()
        test.save(buf, format='AVIF')
        if buf.getvalue():
            avif_supported = True
            print('  AVIF soportado')
    except Exception:
        print('  AVIF NO soportado (solo se generara WebP)')

    total_before = 0
    total_after_webp = 0
    total_after_avif = 0

    for name in SERVICES_PNG:
        src = os.path.join(IMG_DIR, name)
        if not os.path.exists(src):
            print(f'  skip: {name} no existe')
            continue
        size_before = os.path.getsize(src)
        total_before += size_before

        img = Image.open(src).convert('RGB')
        base = os.path.splitext(name)[0]

        # WebP calidad 82 (visualmente identico para fotos)
        webp_path = os.path.join(OUT_WEBP_DIR, f'{base}.webp')
        img.save(webp_path, format='WEBP', quality=82, method=6)
        size_webp = os.path.getsize(webp_path)
        total_after_webp += size_webp

        # AVIF si esta soportado (calidad 60 ~= WebP 80)
        size_avif = 0
        avif_path = None
        # if avif_supported:
        #     avif_path = os.path.join(OUT_WEBP_DIR, f'{base}.avif')
        #     try:
        #         img.save(avif_path, format='AVIF', quality=60, subsampling='4:2:0')
        #         size_avif = os.path.getsize(avif_path)
        #         total_after_avif += size_avif
        #     except Exception as e:
        #         print(f'    warn AVIF {name}: {e}')

        reduccion_webp = (1 - size_webp/size_before) * 100
        print(f'  {name:24s} {size_before//1024:5d} KB -> webp {size_webp//1024:4d} KB ({reduccion_webp:.1f}%)')
    print(f'\n  TOTAL: {total_before//1024} KB -> webp {total_after_webp//1024} KB  ({(1-total_after_webp/total_before)*100:.1f}% ahorro)')
    return OUT_WEBP_DIR

if __name__ == '__main__':
    print('== Tecni Full Gas :: Generacion de assets SEO ==\n')
    print('[1/3] og-image.png 1200x630')
    og_path = make_og_image()

    print('\n[2/3] favicon.ico + apple-touch-icon + fallbacks')
    make_icons()

    print('\n[3/3] WebP de servicios (6 imagenes)')
    webp_dir = compress_service_images()

    print('\n== Listo ==')
