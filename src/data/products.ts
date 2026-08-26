import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'sienna-curved-sofa',
    name: 'Sienna Curved Sofa',
    slug: 'sienna-curved-sofa',
    price: 3895,
    category: 'Living',
    subcategory: 'Sofas',
    collection: 'The Sienna Collection',
    style: 'Organic',
    material: 'Performance Linen',
    materialsList: ['Belgian Performance Linen', 'FSC-Certified Kiln-Dried Hardwood', 'High-Resiliency Foam & Feather-Down Blend'],
    colors: [
      { name: 'Natural Oat', hex: '#E6DEC9' },
      { name: 'Warm Sand', hex: '#D6C8B2' },
      { name: 'Stone Grey', hex: '#9E9A93' },
      { name: 'Deep Olive', hex: '#4A4E40' }
    ],
    defaultColor: 'Natural Oat',
    sizes: [
      { label: '84" Length', dimensions: '84"W × 38"D × 31"H', priceOffset: -300 },
      { label: '96" Length (Standard)', dimensions: '96"W × 40"D × 31"H', priceOffset: 0 },
      { label: '108" Length', dimensions: '108"W × 42"D × 31"H', priceOffset: 450 }
    ],
    dimensions: '96"W × 40"D × 31"H',
    seatHeight: '18"',
    weight: '168 lbs',
    rating: 4.9,
    reviewCount: 86,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
    description: 'Designed with generous proportions and a softly curved silhouette, the Sienna Sofa brings relaxed sophistication to modern interiors. Its deep seating and performance linen upholstery make it equally suited to quiet evenings and weekend gatherings.',
    details: [
      'Handcrafted frame built from kiln-dried FSC®-certified European beech wood.',
      'Sinuous spring suspension system engineered for enduring ergonomic support.',
      'Cushions filled with eco-down layer over high-density soy-based foam core.',
      'Upholstered in heavy-weight Belgian linen with Crypton® stain-resistant treatment.',
      'Includes two matching 20" knife-edge toss pillows.'
    ],
    careGuide: [
      'Vacuum regularly with a soft upholstery brush attachment.',
      'Blot liquid spills immediately with a clean, dry white cloth.',
      'For stubborn stains, use mild water-free solvent or dry cleaning sponge.',
      'Rotate and fluff seat cushions bi-weekly to maintain optimal loft and shape.'
    ],
    shippingInfo: 'White-glove delivery included. Delivered to your room of choice, unboxed, and packaging removed by our specialist logistics team.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    isBestSeller: true,
    tags: ['curved sofa', 'linen', 'living room', 'bestseller', 'architectural']
  },
  {
    id: 'calder-oak-dining-table',
    name: 'Calder Oak Dining Table',
    slug: 'calder-oak-dining-table',
    price: 2750,
    category: 'Dining',
    subcategory: 'Dining Tables',
    collection: 'The Calder Collection',
    style: 'Modern',
    material: 'Solid European Oak',
    materialsList: ['Solid White European Oak', 'Hand-rubbed Organic Matte Wax Finish'],
    colors: [
      { name: 'Smoked Natural', hex: '#B59F7C' },
      { name: 'Bleached Oak', hex: '#DCD4C4' },
      { name: 'Oiled Walnut', hex: '#584435' }
    ],
    defaultColor: 'Smoked Natural',
    sizes: [
      { label: '78" Seats 6-8', dimensions: '78"W × 38"D × 30"H', priceOffset: -350 },
      { label: '92" Seats 8-10', dimensions: '92"W × 40"D × 30"H', priceOffset: 0 },
      { label: '106" Seats 10-12', dimensions: '106"W × 42"D × 30"H', priceOffset: 550 }
    ],
    dimensions: '92"W × 40"D × 30"H',
    weight: '210 lbs',
    rating: 4.8,
    reviewCount: 64,
    images: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1600&q=80',
    description: 'The Calder Dining Table celebrates architectural clarity with monolithic pillar legs and a substantial solid oak top with soft pillowed edges. The subtle wire-brushed texture highlights natural wood grain variations.',
    details: [
      'Solid European white oak sustainably harvested from managed forests.',
      'Sculptural pillared trestle base allows generous legroom and easy chair tucking.',
      'Protective natural matte sealant resists moisture and heat while preserving raw tactile feel.',
      'Features traditional mortise-and-tenon joinery throughout.'
    ],
    careGuide: [
      'Dust with a soft microfiber cloth along the wood grain.',
      'Use coasters, trivets, and placemats to protect from hot or moisture-heavy cookware.',
      'Condition twice annually with natural beeswax wood butter.'
    ],
    shippingInfo: 'White-glove delivery available. Assembly included.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ['oak table', 'dining table', 'solid wood', 'contemporary']
  },
  {
    id: 'elara-boucle-lounge-chair',
    name: 'Elara Bouclé Lounge Chair',
    slug: 'elara-boucle-lounge-chair',
    price: 1295,
    category: 'Living',
    subcategory: 'Lounge Chairs',
    collection: 'The Sienna Collection',
    style: 'Contemporary',
    material: 'Bouclé / Solid Ash',
    materialsList: ['Textured Wool-Cotton Bouclé', 'Kiln-Dried Solid White Ash Base', 'Dual-Density Foam Core'],
    colors: [
      { name: 'Ivory', hex: '#FAF6F0' },
      { name: 'Pebble Grey', hex: '#A3A09A' },
      { name: 'Camel Tan', hex: '#B89774' }
    ],
    defaultColor: 'Ivory',
    dimensions: '34"W × 36"D × 30"H',
    seatHeight: '17.5"',
    weight: '62 lbs',
    rating: 4.9,
    reviewCount: 41,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1580481077112-9214d9be2535?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80',
    description: 'Sculptural, enveloping, and tactile. The Elara Chair is upholstered in a rich, heavy-pile bouclé that invites lingering conversations. Its low-slung stance and curved barrel back provide effortless lumbar comfort.',
    details: [
      'Richly looped Italian wool-cotton blend bouclé fabric.',
      'Hidden 360-degree precision swivel mechanism with silent bearing system.',
      'Internal metal-reinforced hardwood frame with lifetime structural guarantee.',
      'Curved cocoon silhouette fits organically into living rooms or reading nooks.'
    ],
    careGuide: [
      'Gently vacuum with soft bristle attachment.',
      'Spot clean with mild wool-safe detergent foam and dry cloth.'
    ],
    shippingInfo: 'Standard white-glove inside delivery included.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ['boucle chair', 'lounge chair', 'swivel', 'cozy']
  },
  {
    id: 'maren-travertine-coffee-table',
    name: 'Maren Travertine Coffee Table',
    slug: 'maren-travertine-coffee-table',
    price: 1895,
    category: 'Living',
    subcategory: 'Coffee Tables',
    collection: 'The Maren Collection',
    style: 'Organic',
    material: 'Natural Travertine',
    materialsList: ['Honed Italian Roman Travertine', 'Internal Steel Structural Honeycomb'],
    colors: [
      { name: 'Ivory Stone', hex: '#E5DFD3' },
      { name: 'Warm Walnut Stone', hex: '#C2B49D' },
      { name: 'Silver Travertine', hex: '#A8A29B' }
    ],
    defaultColor: 'Ivory Stone',
    sizes: [
      { label: '44" Round', dimensions: '44"Dia × 14"H', priceOffset: -200 },
      { label: '52" Low Oval (Standard)', dimensions: '52"W × 30"D × 14"H', priceOffset: 0 }
    ],
    dimensions: '52"W × 30"D × 14"H',
    weight: '175 lbs',
    rating: 4.7,
    reviewCount: 32,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    description: 'Cut from solid blocks of Italian Roman travertine, the Maren Coffee Table highlights the raw, organic beauty of subterranean stone. Each piece displays unique natural veining, textural pores, and subtle chromatic shifts.',
    details: [
      'Authentic Roman travertine with unpolished honed matte finish.',
      'Bullnose edge detailing hand-shaped by stone artisans in Tivoli.',
      'Sealed with penetrating stone repellent for everyday resilience.',
      'Two monolithic stone plinth bases support the floating top.'
    ],
    careGuide: [
      'Wipe clean with a damp microfiber cloth and neutral pH stone cleaner.',
      'Avoid acidic substances like citrus, wine, or vinegar directly on stone.',
      'Reapply breathable stone sealer once every two years.'
    ],
    shippingInfo: 'Handled via specialist stone freight with two-person white-glove placement.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ['travertine', 'coffee table', 'natural stone', 'organic modern']
  },
  {
    id: 'rowan-platform-bed',
    name: 'Rowan Platform Bed',
    slug: 'rowan-platform-bed',
    price: 2995,
    category: 'Bedroom',
    subcategory: 'Beds',
    collection: 'The Rowan Collection',
    style: 'Modern',
    material: 'Oak / Linen',
    materialsList: ['Solid European White Oak', 'Textured Belgian Heavy Linen Headboard', 'Solid Pine Slat System'],
    colors: [
      { name: 'Natural Oak', hex: '#D7C7AE' },
      { name: 'Smoked Walnut', hex: '#4A3B32' },
      { name: 'Charcoal Black Oak', hex: '#2A2927' }
    ],
    defaultColor: 'Natural Oak',
    sizes: [
      { label: 'Queen', dimensions: '68"W × 88"L × 44"H', priceOffset: -300 },
      { label: 'King (Standard)', dimensions: '84"W × 88"L × 44"H', priceOffset: 0 },
      { label: 'California King', dimensions: '80"W × 92"L × 44"H', priceOffset: 150 }
    ],
    dimensions: '84"W × 88"L × 44"H',
    weight: '240 lbs',
    rating: 4.9,
    reviewCount: 58,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80',
    description: 'A sanctuary of quiet repose. The Rowan Platform Bed combines the grounding warmth of thick solid oak architecture with an inset padded headboard in organic Belgian linen.',
    details: [
      'Floating cantilevered solid oak frame with inset concealed steel legs.',
      'Upholstered headboard with plush acoustic dampening backing.',
      'Heavy-duty solid wood slat roll system eliminates the need for a box spring.',
      'Includes dual integrated cable-management channels behind headboard.'
    ],
    careGuide: [
      'Dust wood frame with dry flannel cloth.',
      'Spot clean linen headboard with gentle fabric cleaner.'
    ],
    shippingInfo: 'Full white-glove room assembly and packaging haul-away included.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ['bed', 'platform bed', 'bedroom', 'linen', 'oak']
  },
  {
    id: 'isla-ceramic-pendant',
    name: 'Isla Ceramic Pendant',
    slug: 'isla-ceramic-pendant',
    price: 485,
    category: 'Lighting',
    subcategory: 'Pendants',
    collection: 'The Maren Collection',
    style: 'Organic',
    material: 'Hand-finished Ceramic',
    materialsList: ['Hand-thrown Stoneware Clay', 'Aged Antique Brass Hardware', 'Braided Linen Cord'],
    colors: [
      { name: 'Chalk', hex: '#EDE8E0' },
      { name: 'Terracotta Ash', hex: '#B8826F' },
      { name: 'Matte Charcoal', hex: '#323130' }
    ],
    defaultColor: 'Chalk',
    sizes: [
      { label: 'Small 12"Dia', dimensions: '12"Dia × 10"H', priceOffset: -120 },
      { label: 'Large 18"Dia (Standard)', dimensions: '18"Dia × 14"H', priceOffset: 0 }
    ],
    dimensions: '18"Dia × 14"H',
    weight: '12 lbs',
    rating: 4.8,
    reviewCount: 27,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
    description: 'Each Isla Pendant is individually hand-thrown on a potter’s wheel in Portugal. The unglazed textured ceramic exterior diffuses light downwards with an ambient, warm golden interior glow.',
    details: [
      'Individually thrown stoneware ceramic with natural textural variations.',
      'Adjustable 8-foot sand braided fabric suspension cable.',
      'Dimmable E26 warm LED bulb included (2700K 800 Lumens).',
      'Solid antique brass ceiling canopy with concealed mounting plate.'
    ],
    careGuide: [
      'Wipe exterior with a dry dusting feather or soft microfiber cloth.',
      'Ensure power is off before replacing light bulb.'
    ],
    shippingInfo: 'Ships via expedited ground within 2 business days.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ['lighting', 'ceramic pendant', 'dining light', 'handmade']
  },

  {
    id: 'noor-walnut-sideboard',
    name: 'Noor Walnut Sideboard',
    slug: 'noor-walnut-sideboard',
    price: 2450,
    category: 'Dining',
    subcategory: 'Sideboards & Storage',
    collection: 'The Calder Collection',
    style: 'Modern',
    material: 'American Walnut / Travertine',
    materialsList: ['Solid American Black Walnut', 'Honed Roman Travertine Inset Top', 'Aged Brass Pulls'],
    colors: [
      { name: 'Oiled Walnut', hex: '#4A3427' },
      { name: 'Smoked Ash', hex: '#635B54' }
    ],
    defaultColor: 'Oiled Walnut',
    dimensions: '74"W × 19"D × 31"H',
    weight: '195 lbs',
    rating: 4.9,
    reviewCount: 39,
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80',
    description: 'With its rhythmic vertical fluting and continuous grain walnut casework, the Noor Sideboard anchors dining rooms and grand entryways with quiet architectural weight.',
    details: [
      'Solid fluted American walnut door fronts with soft-closing Blum® hinges.',
      'Inset honed natural travertine top ideal for beverage service and display.',
      'Adjustable interior shelving and integrated cord management ports.',
      'Hand-finished with botanical Danish oil.'
    ],
    careGuide: [
      'Dust with soft microfiber.',
      'Clean stone top with neutral pH stone cleaner.'
    ],
    shippingInfo: 'Full white-glove placement and leveling included.',
    inStock: true,
    isFeatured: true,
    tags: ['sideboard', 'credenza', 'walnut', 'dining storage']
  },
 
  {
    id: 'atlas-stone-console',
    name: 'Atlas Stone Console',
    slug: 'atlas-stone-console',
    price: 2150,
    category: 'Living',
    subcategory: 'Console Tables',
    collection: 'The Maren Collection',
    style: 'Modern',
    material: 'Roman Travertine / Cast Bronze',
    materialsList: ['Honed Roman Travertine', 'Cast Solid Bronze Leg Supports'],
    colors: [
      { name: 'Ivory Travertine', hex: '#EDE6D8' },
      { name: 'Noce Travertine', hex: '#A89984' }
    ],
    defaultColor: 'Ivory Travertine',
    dimensions: '60"W × 16"D × 30"H',
    weight: '160 lbs',
    rating: 4.9,
    reviewCount: 22,
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    description: 'Sculptural stone statement piece. Thick slabs of Roman travertine rest upon asymmetrical cast bronze blade plinths, creating an arresting entryway focal point.',
    details: [
      'Solid 2-inch thick honed natural travertine top slab.',
      'Cast bronze legs finished in hand-rubbed dark umber patina.',
      'Includes safety anti-tip wall anchoring hardware.'
    ],
    careGuide: [
      'Wipe with stone-safe microfiber cloth. Reapply penetrating sealer periodically.'
    ],
    shippingInfo: 'Specialist freight delivery with in-home placement.',
    inStock: true,
    isFeatured: true,
    tags: ['console table', 'entryway', 'travertine', 'bronze']
  },
  {
    id: 'milo-oak-nightstand',
    name: 'Milo Oak Nightstand',
    slug: 'milo-oak-nightstand',
    price: 725,
    category: 'Bedroom',
    subcategory: 'Nightstands',
    collection: 'The Rowan Collection',
    style: 'Modern',
    material: 'Solid White Oak',
    materialsList: ['Solid European White Oak', 'Soft-Close Undermount Slides', 'Organic Oil Finish'],
    colors: [
      { name: 'Natural Oak', hex: '#D7C7AE' },
      { name: 'Smoked Walnut', hex: '#4A3B32' }
    ],
    defaultColor: 'Natural Oak',
    dimensions: '24"W × 18"D × 22"H',
    weight: '48 lbs',
    rating: 4.8,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=80',
    description: 'Designed as the ideal bedside companion to our Rowan Bed, the Milo Nightstand offers a spacious soft-closing drawer and an open cubby for nightly reading essentials.',
    details: [
      'Beveled drawer front with integrated pull groove.',
      'Dovetail solid maple drawer box with velvet interior liner.',
      'Discrete rear wire pass-through for charging docks and lamps.'
    ],
    careGuide: ['Clean with a soft dry cloth. Avoid abrasive cleaners.'],
    shippingInfo: 'Ships fully assembled in protective wooden crate.',
    inStock: true,
    isFeatured: true,
    tags: ['nightstand', 'bedroom storage', 'solid oak']
  },
  {
    id: 'arden-modular-sectional',
    name: 'Arden Modular Sectional',
    slug: 'arden-modular-sectional',
    price: 4895,
    category: 'Living',
    subcategory: 'Sectionals',
    collection: 'The Sienna Collection',
    style: 'Contemporary',
    material: 'Textured Bouclé / Feather-Down',
    materialsList: ['High-Performance Textured Bouclé', 'FSC Beech Wood', 'Chambered Down Toppers'],
    colors: [
      { name: 'Warm Cream', hex: '#F0EBE1' },
      { name: 'Oatmeal', hex: '#DED6C8' },
      { name: 'Smoked Charcoal', hex: '#373533' }
    ],
    defaultColor: 'Warm Cream',
    sizes: [
      { label: '3-Piece (112" × 72")', dimensions: '112"W × 72"D × 32"H', priceOffset: 0 },
      { label: '4-Piece (148" × 72")', dimensions: '148"W × 72"D × 32"H', priceOffset: 1200 },
      { label: '5-Piece U-Shape', dimensions: '148"W × 112"D × 32"H', priceOffset: 2400 }
    ],
    dimensions: '112"W × 72"D × 32"H',
    seatHeight: '17.5"',
    weight: '290 lbs',
    rating: 4.9,
    reviewCount: 52,
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    description: 'Expansive comfort tailored for modern architecture. The Arden Modular Sectional features low-profile silhouette, extra-deep bench seating, and lock-together modular components for custom room configurations.',
    details: [
      'Modular alligator clips securely connect sections underneath.',
      'Double-stitched tailored seams along all arm and seat contours.',
      'Heavyweight 60,000 Martindale rub-count performance upholstery.',
      'Includes three matching back lumbar pillows.'
    ],
    careGuide: ['Vacuum weekly. Treat spots with mild water-free foam.'],
    shippingInfo: 'White-glove room assembly and component hookup included.',
    inStock: true,
    isFeatured: true,
    tags: ['sectional', 'modular sofa', 'boucle', 'luxury living']
  },
  {
    id: 'liora-handwoven-rug',
    name: 'Liora Handwoven Rug',
    slug: 'liora-handwoven-rug',
    price: 1250,
    category: 'Rugs',
    subcategory: 'Area Rugs',
    collection: 'The Sienna Collection',
    style: 'Organic',
    material: 'New Zealand Wool / Organic Jute',
    materialsList: ['80% New Zealand Wool', '20% Unbleached Jute', 'Cotton Backing'],
    colors: [
      { name: 'Oat & Sand', hex: '#E2DAD0' },
      { name: 'Earthy Taupe', hex: '#A89F93' },
      { name: 'Muted Slate', hex: '#7D8082' }
    ],
    defaultColor: 'Oat & Sand',
    sizes: [
      { label: '6\' × 9\'', dimensions: '72"W × 108"L', priceOffset: -350 },
      { label: '8\' × 10\' (Standard)', dimensions: '96"W × 120"L', priceOffset: 0 },
      { label: '9\' × 12\'', dimensions: '108"W × 144"L', priceOffset: 450 },
      { label: '10\' × 14\'', dimensions: '120"W × 168"L', priceOffset: 850 }
    ],
    dimensions: '8\' × 10\'',
    weight: '45 lbs',
    rating: 4.9,
    reviewCount: 68,
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    description: 'Hand-knotted by master weavers over 90 days. The Liora Rug features subtle high-low textural ribbing and a plush hand feel that grounds living and dining spaces with organic warmth.',
    details: [
      'High-density hand-knotted pile using un-dyed ethical New Zealand wool.',
      'Naturally stain-resistant and fire-retardant fibers.',
      'Subtle self-fringe edge finish.'
    ],
    careGuide: ['Vacuum without beater bar. Rotate every 6 months.'],
    shippingInfo: 'Rolled and delivered directly to your doorstep.',
    inStock: true,
    isFeatured: true,
    tags: ['rug', 'wool rug', 'handwoven', 'living room']
  },
  {
    id: 'solara-teak-outdoor-lounge-chair',
    name: 'Solara Teak Outdoor Lounge Chair',
    slug: 'solara-teak-outdoor-lounge-chair',
    price: 1450,
    category: 'Outdoor',
    subcategory: 'Outdoor Seating',
    collection: 'The Solara Outdoor Collection',
    style: 'Organic',
    material: 'Grade-A Sustainable Teak / Sunbrella®',
    materialsList: ['Indonesian Grade-A Teak', 'Sunbrella® Rain Performance Fabric', 'Quick-Dry Reticulated Foam'],
    colors: [
      { name: 'Natural Sand', hex: '#DED5C7' },
      { name: 'Cast Charcoal', hex: '#3C3A37' }
    ],
    defaultColor: 'Natural Sand',
    dimensions: '33"W × 36"D × 29"H',
    seatHeight: '16.5"',
    weight: '52 lbs',
    rating: 4.9,
    reviewCount: 29,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    description: 'Elevating open-air living. The Solara Lounge Chair combines robust Grade-A plantation teak with water-shedding quick-dry reticulated cushions wrapped in Sunbrella® sailcloth.',
    details: [
      'Sustainably sourced Indonesian teak high in natural protective oils.',
      'Will gracefully weather into a silvery grey patina or can be oiled to maintain warm honey hue.',
      'Marine-grade 316 stainless steel joinery.'
    ],
    careGuide: ['Rinse with fresh water. Store or cover during severe winter freeze.'],
    shippingInfo: 'Delivered fully assembled with complimentary patio placement.',
    inStock: true,
    tags: ['outdoor', 'teak', 'patio', 'lounge chair']
  },
  {
    id: 'solara-weathered-dining-table',
    name: 'Solara Weathered Dining Table',
    slug: 'solara-weathered-dining-table',
    price: 3200,
    category: 'Outdoor',
    subcategory: 'Outdoor Tables',
    collection: 'The Solara Outdoor Collection',
    style: 'Modern',
    material: 'Reclaimed Teak / Cast Concrete',
    materialsList: ['Reclaimed Architectural Teak', 'Reinforced Ultra-High Performance Concrete'],
    colors: [
      { name: 'Weathered Grey Teak', hex: '#AFA99E' },
      { name: 'Natural Honey Teak', hex: '#B89B77' }
    ],
    defaultColor: 'Weathered Grey Teak',
    dimensions: '96"W × 42"D × 30"H',
    weight: '245 lbs',
    rating: 4.8,
    reviewCount: 19,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    description: 'An outdoor centerpiece designed for expansive gatherings under the open sky. Built from reclaimed structural teak beams paired with sleek fluted concrete pedestals.',
    details: [
      'Generous plank spacing allows rainwater drainage and natural wood movement.',
      'Seats up to 10 guests comfortably with spacious end seating.',
      'UV and frost resistant concrete components.'
    ],
    careGuide: ['Clean with mild soap and garden hose spray.'],
    shippingInfo: 'Specialist white-glove outdoor setup included.',
    inStock: true,
    tags: ['outdoor table', 'teak table', 'concrete']
  },
  {
    id: 'vesper-bronze-chandelier',
    name: 'Vesper Bronze Chandelier',
    slug: 'vesper-bronze-chandelier',
    price: 1850,
    category: 'Lighting',
    subcategory: 'Chandeliers',
    collection: 'The Calder Collection',
    style: 'Contemporary',
    material: 'Hand-Cast Bronze / Alabaster',
    materialsList: ['Cast Bronze with Dark Bronze Patina', 'Hand-Carved Spanish Alabaster Discs'],
    colors: [
      { name: 'Dark Antiqued Bronze', hex: '#2A241F' },
      { name: 'Brushed Brass', hex: '#CDB179' }
    ],
    defaultColor: 'Dark Antiqued Bronze',
    dimensions: '48"Dia × 28"H',
    weight: '38 lbs',
    rating: 4.9,
    reviewCount: 24,
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80',
    description: 'Inspired by celestial orbits, the Vesper Chandelier features six articulated bronze arms terminating in translucent Spanish alabaster disc diffusers.',
    details: [
      'Each alabaster disc is uniquely veined and illuminated by integrated warm 2700K LEDs.',
      'Includes 3 stem extension rods (6", 12", 24") for customizable drop heights.',
      'Fully TRIAC dimmable to 1% smooth glow.'
    ],
    careGuide: ['Dust alabaster gently with dry clean brush.'],
    shippingInfo: 'Individually crated and shipped insured freight.',
    inStock: true,
    tags: ['chandelier', 'bronze lighting', 'alabaster', 'dining']
  },
  {
    id: 'kairo-smoked-glass-table-lamp',
    name: 'Kairo Smoked Glass Table Lamp',
    slug: 'kairo-smoked-glass-table-lamp',
    price: 380,
    category: 'Lighting',
    subcategory: 'Table Lamps',
    collection: 'The Maren Collection',
    style: 'Contemporary',
    material: 'Mouth-Blown Glass / Travertine',
    materialsList: ['Smoked Murano Mouth-Blown Glass', 'Italian Travertine Plinth Base'],
    colors: [
      { name: 'Smoked Amber', hex: '#9E8569' },
      { name: 'Charcoal Smoke', hex: '#4B4846' }
    ],
    defaultColor: 'Smoked Amber',
    dimensions: '14"Dia × 19"H',
    weight: '14 lbs',
    rating: 4.8,
    reviewCount: 42,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
    description: 'A glowing sculptural globe of mouth-blown optic glass nested onto a solid travertine plinth with integrated rotary brass dimmer knob.',
    details: [
      'Hand-blown glass sphere with soft optic fluting.',
      'Weighted honed stone base prevents tipping on nightstands and consoles.',
      'Braided silk cord with tactile rotary dimmer.'
    ],
    careGuide: ['Wipe glass with lint-free microfiber cloth.'],
    shippingInfo: 'Ships within 24 hours in secure molded packaging.',
    inStock: true,
    tags: ['table lamp', 'lighting', 'glass lamp', 'accent']
  },
  {
    id: 'aurelia-sculptural-marble-vessel',
    name: 'Aurelia Sculptural Marble Vessel',
    slug: 'aurelia-sculptural-marble-vessel',
    price: 295,
    category: 'Décor',
    subcategory: 'Vases & Vessels',
    collection: 'The Maren Collection',
    style: 'Organic',
    material: 'Calacatta Viola Marble',
    materialsList: ['Solid Italian Calacatta Viola Marble'],
    colors: [
      { name: 'Viola Burgundy', hex: '#633B49' },
      { name: 'Carrara White', hex: '#EBE9E4' }
    ],
    defaultColor: 'Viola Burgundy',
    dimensions: '9"Dia × 11"H',
    weight: '16 lbs',
    rating: 4.9,
    reviewCount: 38,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1600&q=80',
    description: 'Carved from a single block of Italian Calacatta Viola marble, known for its dramatic wine-colored veining against soft cream breccia.',
    details: [
      'Watertight interior polished for fresh floral arrangements.',
      'Honed exterior matte finish with natural geological characteristics.',
      'Velvet base pad protects delicate tabletop surfaces.'
    ],
    careGuide: ['Hand wash with mild soapy water.'],
    shippingInfo: 'Ships via expedited courier.',
    inStock: true,
    tags: ['marble vase', 'decor', 'vessel', 'sculpture']
  },
  {
    id: 'thorne-minimalist-armchair',
    name: 'Thorne Minimalist Armchair',
    slug: 'thorne-minimalist-armchair',
    price: 1150,
    category: 'Living',
    subcategory: 'Lounge Chairs',
    collection: 'The Calder Collection',
    style: 'Modern',
    material: 'Aniline Leather / Smoked Oak',
    materialsList: ['Full-Grain Saddle Tan Leather', 'Solid Wire-Brushed Smoked Oak'],
    colors: [
      { name: 'Saddle Tan', hex: '#9E6438' },
      { name: 'Blackened Oak / Nero Leather', hex: '#211F1D' }
    ],
    defaultColor: 'Saddle Tan',
    dimensions: '31"W × 34"D × 30"H',
    seatHeight: '17"',
    weight: '38 lbs',
    rating: 4.8,
    reviewCount: 29,
    images: [
      'https://images.unsplash.com/photo-1580481077112-9214d9be2535?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80',
    description: 'With clean Scandinavian lines and Japanese joinery references, the Thorne Armchair balances architectural discipline with the warmth of tactile leather.',
    details: [
      'Slung leather backrest conforms dynamically to body posture.',
      'Precision CNC-milled oak frame hand-sanded to ultra-smooth touch.',
      'Weight-rated up to 350 lbs with steel tenon reinforcements.'
    ],
    careGuide: ['Condition leather twice a year with natural leather balm.'],
    shippingInfo: 'Delivered fully assembled via white glove.',
    inStock: true,
    tags: ['armchair', 'leather chair', 'modern living']
  },
  {
    id: 'paloma-travertine-side-table',
    name: 'Paloma Travertine Side Table',
    slug: 'paloma-travertine-side-table',
    price: 850,
    category: 'Living',
    subcategory: 'Side Tables',
    collection: 'The Maren Collection',
    style: 'Organic',
    material: 'Natural Travertine',
    materialsList: ['Solid Italian Roman Travertine'],
    colors: [
      { name: 'Honed Ivory', hex: '#EAE4D7' },
      { name: 'Walnut Stone', hex: '#C2B49D' }
    ],
    defaultColor: 'Honed Ivory',
    dimensions: '18"Dia × 20"H',
    weight: '68 lbs',
    rating: 4.9,
    reviewCount: 45,
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    description: 'A sculptural cylinder carved from solid natural travertine stone with a gently stepped reveal collar at its base.',
    details: [
      'Hollow core engineering maintains solid stone feel with manageable weight.',
      'Treated with invisible penetrating stone sealer to resist beverage condensation.'
    ],
    careGuide: ['Clean with a damp cloth and mild stone soap.'],
    shippingInfo: 'Delivered via standard white-glove service.',
    inStock: true,
    tags: ['side table', 'travertine', 'accent table']
  },
  {
    id: 'sylvan-linen-duvet-set',
    name: 'Sylvan Linen Duvet Set',
    slug: 'sylvan-linen-duvet-set',
    price: 420,
    category: 'Bedroom',
    subcategory: 'Bedding',
    collection: 'The Rowan Collection',
    style: 'Organic',
    material: '100% French Flax Linen',
    materialsList: ['100% Certified Organic French Flax (175 GSM)'],
    colors: [
      { name: 'Natural Oat', hex: '#E0D6C4' },
      { name: 'Washed Olive', hex: '#7D846D' },
      { name: 'Crisp Chalk', hex: '#FAF8F4' },
      { name: 'Terracotta Clay', hex: '#BA7A65' }
    ],
    defaultColor: 'Natural Oat',
    sizes: [
      { label: 'Full / Queen', dimensions: '90"W × 92"L (Duvet + 2 Shams)', priceOffset: 0 },
      { label: 'King / Cal King', dimensions: '106"W × 92"L (Duvet + 2 King Shams)', priceOffset: 60 }
    ],
    dimensions: '90"W × 92"L',
    weight: '7 lbs',
    rating: 4.9,
    reviewCount: 94,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    description: 'Pre-washed with volcanic stones for supreme initial softness that becomes more luxurious with every wash cycle. Highly breathable in all seasons.',
    details: [
      'Internal corner ties ensure duvet insert stays anchored without shifting.',
      'Concealed natural mother-of-pearl button closure.',
      'OEKO-TEX® Standard 100 certified free from harmful chemical dyes.'
    ],
    careGuide: ['Machine wash warm on gentle cycle. Tumble dry low or line dry in shade.'],
    shippingInfo: 'Shipped in a reusable matching linen travel tote.',
    inStock: true,
    tags: ['bedding', 'duvet', 'french linen', 'bedroom']
  },
  {
    id: 'elias-oak-console',
    name: 'Elias Oak Console',
    slug: 'elias-oak-console',
    price: 1650,
    category: 'Living',
    subcategory: 'Console Tables',
    collection: 'The Calder Collection',
    style: 'Modern',
    material: 'Solid European Oak',
    materialsList: ['Solid European White Oak', 'Hand-Rubbed Matte Wax'],
    colors: [
      { name: 'Smoked Natural', hex: '#B59F7C' },
      { name: 'Oiled Walnut', hex: '#4A3427' }
    ],
    defaultColor: 'Smoked Natural',
    dimensions: '58"W × 15"D × 30"H',
    weight: '82 lbs',
    rating: 4.8,
    reviewCount: 19,
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    description: 'Minimalist entry console with gently pillowed rounded corner legs and a low-profile lower shelf for book and art storage.',
    details: [
      'Solid quarter-sawn oak graining along tabletop.',
      'Precision concealed joinery provides exceptional stability.'
    ],
    careGuide: ['Dust with a dry soft cloth.'],
    shippingInfo: 'White-glove delivery included.',
    inStock: true,
    tags: ['console table', 'oak console', 'hallway']
  },
  {
    id: 'freya-boucle-ottoman',
    name: 'Freya Bouclé Ottoman',
    slug: 'freya-boucle-ottoman',
    price: 540,
    category: 'Living',
    subcategory: 'Ottomans',
    collection: 'The Sienna Collection',
    style: 'Organic',
    material: 'Wool Bouclé / Ash Base',
    materialsList: ['Heavy Wool-Cotton Bouclé', 'Concealed Kiln-Dried Ash Plinth'],
    colors: [
      { name: 'Ivory', hex: '#FAF6F0' },
      { name: 'Warm Taupe', hex: '#ADA497' }
    ],
    defaultColor: 'Ivory',
    dimensions: '28"Dia × 17"H',
    weight: '24 lbs',
    rating: 4.9,
    reviewCount: 51,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    description: 'A versatile drum ottoman offering soft extra seating, a comfortable footrest, or a textured coffee table surface when paired with a stone tray.',
    details: [
      'High-resilience foam core maintains tailored spherical shape over years of use.',
      'Hidden non-marking glides protect fine hardwood flooring.'
    ],
    careGuide: ['Vacuum with soft upholstery brush.'],
    shippingInfo: 'Ships within 48 hours.',
    inStock: true,
    tags: ['ottoman', 'boucle', 'pouf', 'living room']
  },
  {
    id: 'astrid-solid-oak-desk',
    name: 'Astrid Solid Oak Desk',
    slug: 'astrid-solid-oak-desk',
    price: 1950,
    category: 'Living',
    subcategory: 'Desks',
    collection: 'The Calder Collection',
    style: 'Modern',
    material: 'Solid European Oak / Saddle Leather',
    materialsList: ['Solid European White Oak', 'Inset Italian Saddle Leather Blotter', 'Solid Brass Cable Grommet'],
    colors: [
      { name: 'Smoked Natural Oak', hex: '#B59F7C' },
      { name: 'Oiled American Walnut', hex: '#4A3427' }
    ],
    defaultColor: 'Smoked Natural Oak',
    dimensions: '62"W × 28"D × 30"H',
    weight: '115 lbs',
    rating: 4.9,
    reviewCount: 23,
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80',
    description: 'An executive desk designed for calm productivity. Features an inset leather writing pad, integrated power and cable management, and two slimline soft-close drawers.',
    details: [
      'Solid oak construction with bevel-matched drawer fronts.',
      'Concealed power bar compartment under desk surface.',
      'Leather writing blotter hand-stitched by leather artisans.'
    ],
    careGuide: ['Dust wood surfaces regularly. Condition leather with leather cream.'],
    shippingInfo: 'Delivered with white-glove setup in your study.',
    inStock: true,
    tags: ['desk', 'home office', 'oak desk', 'workspace']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id || p.slug === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.collection === product.collection))
    .slice(0, limit);
};
