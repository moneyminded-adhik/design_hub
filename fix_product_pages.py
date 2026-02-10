import os
import re

products = {
    "cosmic-shiva": {
        "id": 2,
        "name": "Cosmic Shiva - The Destroyer & Transformer",
        "short_name": "Cosmic Shiva",
        "category": "Spiritual",
        "price": "2,299",
        "original_price": "2,799",
        "discount": "18% OFF",
        "rating": "4.9 (156 reviews)",
        "image": "poster_lord_shiva_1770750319627.png",
        "description": "Mesmerizing cosmic interpretation of Lord Shiva in deep meditation. Features swirling galaxies, glowing third eye, and sacred geometry in stunning blues, purples, and electric cyan colors.",
        "about": "Lord Shiva, the supreme deity of transformation and meditation, is portrayed in this breathtaking cosmic artwork.",
        "about2": "The glowing third eye symbolizes divine wisdom and inner vision, while the intricate sacred geometry patterns represent the mathematical perfection of the universe."
    },
    "lord-krishna": {
        "id": 3,
        "name": "Lord Krishna - The Divine Flutist",
        "short_name": "Lord Krishna",
        "category": "Spiritual",
        "price": "1,999",
        "original_price": "2,499",
        "discount": "20% OFF",
        "rating": "4.7 (98 reviews)",
        "image": "poster_lord_krishna_1770750335397.png",
        "description": "Enchanting portrayal of Lord Krishna playing the flute in a moonlit forest. Rich blues, golds, and emerald greens create a mystical atmosphere with glowing fireflies and divine presence.",
        "about": "Lord Krishna, the divine flutist and embodiment of love and joy, is captured in this enchanting artwork.",
        "about2": "Set in a moonlit forest with glowing fireflies, the piece evokes the magical nights of Vrindavan."
    },
    "goddess-durga": {
        "id": 4,
        "name": "Goddess Durga - Divine Power",
        "short_name": "Goddess Durga",
        "category": "Spiritual",
        "price": "2,499",
        "original_price": "2,999",
        "discount": "17% OFF",
        "rating": "5.0 (203 reviews)",
        "image": "poster_goddess_durga_1770750353530.png",
        "description": "Powerful depiction of Goddess Durga riding her majestic lion with ten arms wielding divine weapons. Vibrant reds, golds, and magentas with dramatic lighting create an empowering presence.",
        "about": "Goddess Durga, the embodiment of Shakti and divine feminine power, is magnificently portrayed in this powerful artwork.",
        "about2": "Riding her majestic lion with ten arms wielding divine weapons, she represents the triumph of good over evil."
    },
    "lord-hanuman": {
        "id": 5,
        "name": "Lord Hanuman - Strength & Devotion",
        "short_name": "Lord Hanuman",
        "category": "Spiritual",
        "price": "1,999",
        "original_price": "2,499",
        "discount": "20% OFF",
        "rating": "4.8 (142 reviews)",
        "image": "poster_lord_hanuman_1770750369439.png",
        "description": "Heroic portrayal of Lord Hanuman carrying the mountain of medicinal herbs. Bold oranges, reds, and golds against a sunrise background showcase strength and unwavering devotion.",
        "about": "Lord Hanuman, the epitome of strength, devotion, and selfless service, is heroically depicted carrying the mountain.",
        "about2": "The bold oranges, reds, and golds against a sunrise background showcase strength and unwavering devotion."
    },
    "naruto-rasengan": {
        "id": 6,
        "name": "Naruto Uzumaki - Rasengan Power",
        "short_name": "Naruto",
        "category": "Anime",
        "price": "1,799",
        "original_price": "2,299",
        "discount": "22% OFF",
        "rating": "4.9 (287 reviews)",
        "image": "poster_naruto_1770750385891.png",
        "description": "Dynamic action shot of Naruto performing his signature Rasengan jutsu. Vibrant oranges and blues with dramatic speed lines capture the energy and determination of the beloved ninja.",
        "about": "Naruto Uzumaki, the beloved ninja who never gives up, is captured here in his signature pose.",
        "about2": "The vibrant oranges and blues with dramatic speed lines perfectly capture the energy of the Rasengan."
    }
}

template_path = "/Users/aagarwal/Documents/scalex/pages/product-lord-ganesha.html"
with open(template_path, 'r') as f:
    template = f.read()

for slug, data in products.items():
    content = template
    
    # meta
    content = re.sub(r'content="Lord Ganesha - Wisdom & New Beginnings', f'content="{data["name"]}', content)
    
    # title
    content = re.sub(r'<title>.*?</title>', f"<title>{data['name']} | Design Hub</title>", content)
    
    # breadcrumb
    content = re.sub(r'<span style="color: var\(--color-text-primary\);">Lord Ganesha</span>', f'<span style="color: var(--color-text-primary);">{data["short_name"]}</span>', content)
    content = content.replace('"../index.html#spiritual"', f'"../index.html#{data["category"].lower()}"')
    content = content.replace('>Spiritual</a>', f'>{data["category"]}</a>')
    
    # images
    content = content.replace("poster_lord_ganesha_1770750300909.png", data["image"])
    content = content.replace('alt="Lord Ganesha Metal Poster"', f'alt="{data["name"]} Metal Poster"')
    
    # category badge
    content = re.sub(r'<span style="color: var\(--color-accent-primary\); font-weight: 600; font-size: var\(--text-sm\); text-transform: uppercase; letter-spacing: 0.5px;">.*?</span>', f'<span style="color: var(--color-accent-primary); font-weight: 600; font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.5px;">{data["category"]} Collection</span>', content, flags=re.DOTALL)
    
    # H1
    content = re.sub(r'<h1 style="font-size: var\(--text-4xl\); margin-bottom: var\(--space-4\);">.*?</h1>', f'<h1 style="font-size: var(--text-4xl); margin-bottom: var(--space-4);">{data["name"]}</h1>', content, flags=re.DOTALL)
    
    # Rating
    content = content.replace("4.8 (127 reviews)", data["rating"])
    content = content.replace("Reviews (127)", f"Reviews ({data['rating'].split('(')[1].split(' ')[0]})")
    
    # Price
    content = re.sub(r'font-size: var\(--text-5xl\);.*?>₹1,999</span>', f'font-size: var(--text-5xl); font-weight: 700; color: var(--color-text-primary);">₹{data["price"]}</span>', content, flags=re.DOTALL)
    content = re.sub(r'font-size: var\(--text-2xl\);.*?>₹2,499</span>', f'font-size: var(--text-2xl); color: var(--color-text-tertiary); text-decoration: line-through;">₹{data["original_price"]}</span>', content, flags=re.DOTALL)
    content = re.sub(r'background: var\(--color-accent-secondary\);.*?>20% OFF</span>', f'background: var(--color-accent-secondary); color: white; padding: var(--space-2) var(--space-4); border-radius: var(--radius-md); font-weight: 700;">{data["discount"]}</span>', content, flags=re.DOTALL)
    
    # Description
    content = re.sub(r'<p style="color: var\(--color-text-secondary\); line-height: 1.8; margin-bottom: var\(--space-8\);">.*?</p>', f'<p style="color: var(--color-text-secondary); line-height: 1.8; margin-bottom: var(--space-8);">{data["description"]}</p>', content, flags=re.DOTALL)
    
    # Action buttons - replace only the ONE in the main body
    content = content.replace('onclick="addToCart(1)"', f'onclick="addToCart({data["id"]})"')
    content = content.replace('onclick="buyNow()"', f'onclick="buyNow({data["id"]})"')
    
    # About Section
    content = re.sub(r'(<div id="description-tab".*?<p.*?>).*?(</p>)', rf'\1{data["about"]}\2', content, flags=re.DOTALL)
    content = re.sub(rf'({re.escape(data["about"])}</p>)\s*<p.*?>.*?(</p>)', rf'\1\n                <p style="color: var(--color-text-secondary); line-height: 1.8; margin-bottom: var(--space-6);">{data["about2"]}</p>', content, flags=re.DOTALL)

    # JS buyNow function correction
    content = content.replace("function buyNow() {", "function buyNow(id) {")
    content = content.replace("addToCart(1);", f"addToCart(id);")

    with open(f"/Users/aagarwal/Documents/scalex/pages/product-{slug}.html", 'w') as f:
        f.write(content)
    print(f"Fixed product-{slug}.html")
