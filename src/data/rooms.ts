import { RoomScene } from '../types';

export const roomScenes: RoomScene[] = [
  {
    id: 'warm-minimalist-living',
    title: 'The Warm Minimalist Living Room',
    subtitle: 'Curved silhouettes, honed travertine, and tactile bouclé textiles bathed in natural daylight.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85',
    description: 'A layered living space that balances sculptural organic forms with comfortable everyday functionality. Featuring our signature Sienna Curved Sofa in Natural Oat, paired with the Maren Travertine Coffee Table and the tactile Elara Swivel Chair.',
    hotspots: [
      {
        id: 'hs-1',
        productId: 'sienna-curved-sofa',
        x: 48,
        y: 62,
        label: 'Sienna Curved Sofa',
        price: 3895
      },
      {
        id: 'hs-2',
        productId: 'maren-travertine-coffee-table',
        x: 45,
        y: 82,
        label: 'Maren Travertine Coffee Table',
        price: 1895
      },
      {
        id: 'hs-3',
        productId: 'elara-boucle-lounge-chair',
        x: 18,
        y: 68,
        label: 'Elara Bouclé Lounge Chair',
        price: 1295
      },
      {
        id: 'hs-4',
        productId: 'liora-handwoven-rug',
        x: 75,
        y: 88,
        label: 'Liora Handwoven Rug',
        price: 1250
      },
      {
        id: 'hs-5',
        productId: 'paloma-travertine-side-table',
        x: 82,
        y: 65,
        label: 'Paloma Travertine Side Table',
        price: 850
      }
    ]
  },
  {
    id: 'modern-dining-room',
    title: 'The Modern Dining Room',
    subtitle: 'Substantial European oak, full-grain Italian leather, and cast bronze lighting designed for long evenings.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1800&q=85',
    description: 'An architectural gathering environment centered around the Calder Solid Oak Dining Table. Flanked by Avery Leather Dining Chairs and illuminated by the sculptural Vesper Chandelier.',
    hotspots: [
      {
        id: 'hs-6',
        productId: 'calder-oak-dining-table',
        x: 52,
        y: 65,
        label: 'Calder Oak Dining Table',
        price: 2750
      },
      {
        id: 'hs-7',
        productId: 'avery-leather-dining-chair',
        x: 28,
        y: 68,
        label: 'Avery Leather Dining Chair',
        price: 695
      },
      {
        id: 'hs-8',
        productId: 'noor-walnut-sideboard',
        x: 82,
        y: 52,
        label: 'Noor Walnut Sideboard',
        price: 2450
      },
      {
        id: 'hs-9',
        productId: 'vesper-bronze-chandelier',
        x: 52,
        y: 22,
        label: 'Vesper Bronze Chandelier',
        price: 1850
      }
    ]
  },
  {
    id: 'quiet-bedroom',
    title: 'The Quiet Bedroom',
    subtitle: 'Solid timber framework, acoustic linen padding, and pure organic French flax bedding.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85',
    description: 'Designed as a serene sanctuary from the noise of the world. Anchored by the Rowan Platform Bed in Natural Oak and styled with stone-washed French flax linen.',
    hotspots: [
      {
        id: 'hs-10',
        productId: 'rowan-platform-bed',
        x: 52,
        y: 58,
        label: 'Rowan Platform Bed',
        price: 2995
      },
      {
        id: 'hs-11',
        productId: 'milo-oak-nightstand',
        x: 18,
        y: 65,
        label: 'Milo Oak Nightstand',
        price: 725
      },
      {
        id: 'hs-12',
        productId: 'sylvan-linen-duvet-set',
        x: 52,
        y: 72,
        label: 'Sylvan Linen Duvet Set',
        price: 420
      },
      {
        id: 'hs-13',
        productId: 'kairo-smoked-glass-table-lamp',
        x: 20,
        y: 48,
        label: 'Kairo Smoked Glass Table Lamp',
        price: 380
      }
    ]
  },
  {
    id: 'contemporary-home-office',
    title: 'The Contemporary Home Office',
    subtitle: 'Quiet timber surfaces, integrated leather blotters, and sculptural stone accents for focused thought.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1800&q=85',
    description: 'A tailored workspace that balances professional clarity with residential warmth. Built around the Astrid Solid Oak Desk with hand-stitched leather work surface.',
    hotspots: [
      {
        id: 'hs-14',
        productId: 'astrid-solid-oak-desk',
        x: 50,
        y: 62,
        label: 'Astrid Solid Oak Desk',
        price: 1950
      },
      {
        id: 'hs-15',
        productId: 'avery-leather-dining-chair',
        x: 32,
        y: 60,
        label: 'Avery Leather Chair',
        price: 695
      },
      {
        id: 'hs-16',
        productId: 'elias-oak-console',
        x: 82,
        y: 55,
        label: 'Elias Oak Console',
        price: 1650
      },
      {
        id: 'hs-17',
        productId: 'aurelia-sculptural-marble-vessel',
        x: 62,
        y: 48,
        label: 'Aurelia Marble Vessel',
        price: 295
      }
    ]
  }
];

export const getRoomById = (id: string): RoomScene | undefined => {
  return roomScenes.find(r => r.id === id);
};
