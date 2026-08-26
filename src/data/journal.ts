import { JournalArticle } from '../types';

export const journalArticles: JournalArticle[] = [
  {
    id: 'warm-layered-living-room',
    title: 'How to Build a Warm, Layered Living Room',
    slug: 'how-to-build-a-warm-layered-living-room',
    author: 'Elena Vance',
    authorRole: 'Director of Interior Design',
    date: 'October 14, 2025',
    readTime: '6 min read',
    category: 'Design Guide',
    excerpt: 'True warmth in contemporary interiors is not about clutter—it is born from the interplay of varied textures, grounded organic silhouettes, and considered lighting levels.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'When we set out to design a living space, the most common aspiration our clients express is a desire for warmth. Yet in contemporary architecture with crisp drywall, tall glass panes, and polished floors, achieving that warmth requires a deliberate architectural strategy.'
      },
      {
        type: 'heading',
        text: '1. Establish an Anchor Silhouette'
      },
      {
        type: 'paragraph',
        text: 'Every great room begins with an anchor piece that establishes the scale and mood of the room. A curved sofa, such as our Sienna in textured Belgian linen, acts as an organic counterpoint to rectangular room geometry. Curves invite ease and visually decelerate the space.'
      },
      {
        type: 'quote',
        text: 'A room should feel as though it was gathered over a lifetime of intentional living, not assembled in an afternoon from a single catalog.',
        author: 'Elena Vance'
      },
      {
        type: 'heading',
        text: '2. Layer Contrasting Natural Materials'
      },
      {
        type: 'paragraph',
        text: 'Monochromatic does not mean monotonous. By pairing porous Roman travertine with dry-oiled European oak, nubby wool bouclé, and soft French flax, you create visual richness through tactile depth rather than loud colors.'
      },
      {
        type: 'materialCallout',
        text: 'Material Pairing Tip: Offset heavy upholstery with elevated leg profiles in dark bronze or wire-brushed oak to allow daylight to flow beneath the furniture.'
      }
    ],
    relatedProductIds: ['sienna-curved-sofa', 'maren-travertine-coffee-table', 'elara-boucle-lounge-chair', 'liora-handwoven-rug']
  },
  {
    id: 'beauty-of-natural-stone',
    title: 'The Beauty of Natural Stone',
    slug: 'the-beauty-of-natural-stone',
    author: 'Matteo Rossi',
    authorRole: 'Master Stone Craftsman',
    date: 'September 28, 2025',
    readTime: '5 min read',
    category: 'Materials & Craft',
    excerpt: 'Formed over millions of years by mineral springs and subterranean pressure, natural travertine and Calacatta marble bring timeless geological permanence into the home.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'In an era of mass-produced composites, natural stone remains one of the few materials that cannot be rushed or imitated. Each slab of Roman travertine tells an unrepeatable geological story.'
      },
      {
        type: 'heading',
        text: 'Honed vs. Polished: The Tactile Difference'
      },
      {
        type: 'paragraph',
        text: 'At Lumora Home, we deliberately specify a soft, honed matte finish for all our travertine tables and consoles. Unlike high-gloss polish which creates harsh reflections, a honed finish reveals the velvety softness of the mineral matrix.'
      },
      {
        type: 'quote',
        text: 'When you touch honed travertine, you are touching the thermal history of our earth.',
        author: 'Matteo Rossi'
      }
    ],
    relatedProductIds: ['maren-travertine-coffee-table', 'atlas-stone-console', 'paloma-travertine-side-table', 'aurelia-sculptural-marble-vessel']
  },
  {
    id: 'choosing-the-right-sofa',
    title: 'Choosing the Right Sofa for Your Space',
    slug: 'choosing-the-right-sofa-for-your-space',
    author: 'Julian Thorne',
    authorRole: 'Principal Furniture Designer',
    date: 'September 12, 2025',
    readTime: '7 min read',
    category: 'Buying Guide',
    excerpt: 'From seat depth and cushion density to frame ergonomics and fabric performance, here is our definitive guide to selecting your most important furniture investment.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'The sofa is the emotional and spatial center of the modern home. Choosing the right piece requires balancing three vital axes: spatial proportion, ergonomic support, and textile durability.'
      },
      {
        type: 'heading',
        text: 'Understanding Seat Depth & Pitch'
      },
      {
        type: 'paragraph',
        text: 'A formal conversational sofa typically features a 22"–24" seat depth, whereas a lounge sofa engineered for reading and weekend relaxation thrives at 26"–28" deep. Pairing a deep seat with plush down-blend back pillows gives you the versatility for both.'
      }
    ],
    relatedProductIds: ['sienna-curved-sofa', 'arden-modular-sectional', 'elara-boucle-lounge-chair']
  },
  {
    id: 'guide-to-mixing-wood-tones',
    title: 'A Guide to Mixing Wood Tones',
    slug: 'a-guide-to-mixing-wood-tones',
    author: 'Elena Vance',
    authorRole: 'Director of Interior Design',
    date: 'August 30, 2025',
    readTime: '4 min read',
    category: 'Design Guide',
    excerpt: 'The old rule that all furniture in a room must share the exact same wood stain is long obsolete. Learn how to mix European oak, American walnut, and smoked ash harmoniously.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Rooms furnished with identical matching wood sets often feel sterile. Combining multiple wood species creates an organic, curated aesthetic with architectural gravity.'
      },
      {
        type: 'heading',
        text: 'Match Undertones, Not Stain Colors'
      },
      {
        type: 'paragraph',
        text: 'The secret lies in the underlying color temperature. Warm woods like natural white oak and rich walnut share golden and earthy undertones that converse effortlessly across a room.'
      }
    ],
    relatedProductIds: ['calder-oak-dining-table', 'noor-walnut-sideboard', 'rowan-platform-bed', 'milo-oak-nightstand']
  },
  {
    id: 'creating-a-calm-bedroom',
    title: 'Creating a Calm Bedroom',
    slug: 'creating-a-calm-bedroom',
    author: 'Clara Hayes',
    authorRole: 'Wellness & Interior Consultant',
    date: 'August 15, 2025',
    readTime: '5 min read',
    category: 'Lifestyle & Wellness',
    excerpt: 'Designing a bedroom around acoustic softness, tactile organic linens, and visual silence to facilitate deep, uninterrupted sleep.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Your bedroom is the first visual cue you encounter upon waking and the last sanctuary you retreat to each evening. Removing visual noise is paramount to lowering cortisol levels.'
      },
      {
        type: 'heading',
        text: 'Tactile Grounding with Organic Flax'
      },
      {
        type: 'paragraph',
        text: 'Pure French flax linen regulates temperature dynamically through its microscopic hollow fibers, keeping you cool during warm summer nights and insulated through winter chills.'
      }
    ],
    relatedProductIds: ['rowan-platform-bed', 'sylvan-linen-duvet-set', 'milo-oak-nightstand', 'kairo-smoked-glass-table-lamp']
  },
  {
    id: 'art-of-outdoor-living',
    title: 'The Art of Outdoor Living',
    slug: 'the-art-of-outdoor-living',
    author: 'Julian Thorne',
    authorRole: 'Principal Furniture Designer',
    date: 'July 29, 2025',
    readTime: '6 min read',
    category: 'Outdoor Design',
    excerpt: 'How to design open-air terraces and gardens with the textural sophistication, comfort, and architectural longevity of indoor spaces.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Outdoor furniture should not feel like an afterthought or a disposable seasonal purchase. With plantation Grade-A teak and high-performance architectural concrete, terraces become natural extensions of your primary living areas.'
      }
    ],
    relatedProductIds: ['solara-teak-outdoor-lounge-chair', 'solara-weathered-dining-table']
  }
];

export const getArticleById = (id: string): JournalArticle | undefined => {
  return journalArticles.find(a => a.id === id || a.slug === id);
};
