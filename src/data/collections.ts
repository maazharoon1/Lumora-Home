import { Collection } from '../types';

export const collections: Collection[] = [
  {
    id: 'sienna',
    name: 'The Sienna Collection',
    slug: 'the-sienna-collection',
    tagline: 'Soft curves and generous proportions designed around effortless comfort.',
    description: 'The Sienna Collection explores organic geometry through softly radiused corners, enveloping bouclé textures, and expansive deep seating. Designed to soften architectural spaces and invite genuine relaxation.',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    featuredProductIds: ['sienna-curved-sofa', 'elara-boucle-lounge-chair', 'arden-modular-sectional', 'freya-boucle-ottoman', 'celia-linen-accent-chair'],
    materialFocus: 'Belgian Linen, Italian Wool Bouclé, & FSC Beech'
  },
  {
    id: 'calder',
    name: 'The Calder Collection',
    slug: 'the-calder-collection',
    tagline: 'Architectural oak forms with a refined, contemporary character.',
    description: 'Rooted in timeless timber craftsmanship, the Calder Collection features solid European white oak joinery, monolithic pillared trestles, and hand-stitched saddle leather seating.',
    heroImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    featuredProductIds: ['calder-oak-dining-table', 'avery-leather-dining-chair', 'noor-walnut-sideboard', 'vesper-bronze-chandelier', 'astrid-solid-oak-desk'],
    materialFocus: 'Solid European White Oak, American Walnut, & Full-Grain Saddle Leather'
  },
  {
    id: 'rowan',
    name: 'The Rowan Collection',
    slug: 'the-rowan-collection',
    tagline: 'Quiet bedroom silhouettes crafted for calm, restorative spaces.',
    description: 'Designed to cultivate serenity at the beginning and end of each day. Rowan balances thick cantilevered solid oak architecture with acoustic linen padding and dovetail storage.',
    heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    featuredProductIds: ['rowan-platform-bed', 'milo-oak-nightstand', 'sylvan-linen-duvet-set'],
    materialFocus: 'Solid White Oak & Pre-Washed French Flax Linen'
  },
  {
    id: 'maren',
    name: 'The Maren Collection',
    slug: 'the-maren-collection',
    tagline: 'Sculptural stone surfaces inspired by the natural landscape.',
    description: 'Honoring the enduring weight and tactile geological beauty of subterranean stone. Each piece in Maren is carved from Roman travertine or Calacatta marble with honed matte finishes.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    featuredProductIds: ['maren-travertine-coffee-table', 'atlas-stone-console', 'paloma-travertine-side-table', 'aurelia-sculptural-marble-vessel', 'isla-ceramic-pendant'],
    materialFocus: 'Honed Roman Travertine, Calacatta Marble, & Hand-Thrown Stoneware'
  },
  {
    id: 'solara',
    name: 'The Solara Outdoor Collection',
    slug: 'the-solara-outdoor-collection',
    tagline: 'Weather-ready materials with the warmth of indoor design.',
    description: 'Engineered for seamless indoor-outdoor transitions. Solara combines plantation-grown Indonesian Grade-A teak, quick-dry performance foam, and marine-grade sunbrella fabrics.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    detailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    featuredProductIds: ['solara-teak-outdoor-lounge-chair', 'solara-weathered-dining-table'],
    materialFocus: 'Indonesian Grade-A Teak & Sunbrella® Performance Sailcloth'
  }
];

export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find(c => c.id === id || c.slug === id);
};
