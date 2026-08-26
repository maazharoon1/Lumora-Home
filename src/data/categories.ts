import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'living',
    name: 'Living',
    slug: 'living',
    tagline: 'Comfortable forms, considered materials, and timeless pieces designed for everyday living.',
    description: 'Create an inviting space with our thoughtfully crafted sofas, sculptural lounge chairs, travertine tables, and artisanal storage credenzas.',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Sofas', 'Sectionals', 'Lounge Chairs', 'Coffee Tables', 'Side Tables', 'Console Tables', 'Ottomans', 'Desks'],
    featuredCollection: 'The Sienna Collection'
  },
  {
    id: 'dining',
    name: 'Dining',
    slug: 'dining',
    tagline: 'Solid timber, honed stone, and tailored seating designed for memorable gatherings.',
    description: 'From grand solid oak dining tables to supple Italian leather chairs and fluted sideboards, set the stage for slow dinners and shared stories.',
    heroImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Dining Tables', 'Dining Chairs', 'Benches', 'Sideboards & Storage', 'Bar Stools'],
    featuredCollection: 'The Calder Collection'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    slug: 'bedroom',
    tagline: 'Quiet silhouettes and tactile natural linens crafted for restorative rest.',
    description: 'Turn your private quarters into an architectural sanctuary with solid oak platform beds, dovetail nightstands, and pure French flax bedding.',
    heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Beds', 'Nightstands', 'Dressers', 'Bedding', 'Benches'],
    featuredCollection: 'The Rowan Collection'
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    slug: 'outdoor',
    tagline: 'Weather-ready materials with the tactile warmth and refinement of indoor design.',
    description: 'Sustainably harvested teak, high-performance concrete, and marine-grade fabrics crafted to extend luxury living to outdoor patios and gardens.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Outdoor Seating', 'Outdoor Tables', 'Outdoor Dining', 'Planters', 'Outdoor Fire'],
    featuredCollection: 'The Solara Outdoor Collection'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    slug: 'lighting',
    tagline: 'Sculptural fixtures in hand-cast bronze, alabaster, mouth-blown glass, and stoneware.',
    description: 'Transform room atmosphere with warm, layered architectural illumination designed to highlight material textures and spatial depth.',
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Pendants', 'Chandeliers', 'Table Lamps', 'Floor Lamps', 'Sconces'],
    featuredCollection: 'The Calder Collection'
  },
  {
    id: 'decor',
    name: 'Décor',
    slug: 'decor',
    tagline: 'Artisanal stone vessels, hand-thrown ceramics, and organic accents of enduring beauty.',
    description: 'Curate your shelves and table surfaces with unique geological vessels, tactile bowls, and timeless styling objects.',
    heroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Vases & Vessels', 'Trays & Bowls', 'Objects & Sculptures', 'Mirrors', 'Pillows & Throws'],
    featuredCollection: 'The Maren Collection'
  },
  {
    id: 'rugs',
    name: 'Rugs',
    slug: 'rugs',
    tagline: 'Hand-knotted wool and organic jute foundations that ground spaces with texture.',
    description: 'Crafted by master weavers using un-dyed ethical New Zealand wool, natural linen, and hand-spun organic fibers.',
    heroImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Area Rugs', 'Runners', 'Hand-Knotted', 'Flatweaves', 'Natural Fiber'],
    featuredCollection: 'The Sienna Collection'
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug.toLowerCase() === slug.toLowerCase() || c.name.toLowerCase() === slug.toLowerCase());
};
