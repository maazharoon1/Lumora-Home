export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface SizeOption {
  label: string;
  dimensions: string;
  priceOffset?: number;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  location?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: 'Living' | 'Dining' | 'Bedroom' | 'Outdoor' | 'Lighting' | 'Décor' | 'Rugs';
  subcategory: string;
  collection?: string;
  style?: 'Modern' | 'Organic' | 'Classic' | 'Contemporary';
  material: string;
  materialsList?: string[];
  colors: ColorOption[];
  defaultColor: string;
  sizes?: SizeOption[];
  dimensions: string;
  seatHeight?: string;
  weight?: string;
  rating: number;
  reviewCount: number;
  images: string[];
  hoverImage: string;
  description: string;
  details: string[];
  careGuide: string[];
  shippingInfo: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
  reviews?: ProductReview[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  thumbnail: string;
  subcategories: string[];
  featuredCollection?: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  detailImage: string;
  featuredProductIds: string[];
  materialFocus: string;
}

export interface RoomHotspot {
  id: string;
  productId: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label: string;
  price: number;
}

export interface RoomScene {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  hotspots: RoomHotspot[];
}

export interface JournalContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'image' | 'materialCallout';
  text?: string;
  imageUrl?: string;
  caption?: string;
  author?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  secondaryImage?: string;
  content: JournalContentBlock[];
  relatedProductIds: string[];
}

export interface Showroom {
  id: string;
  city: string;
  name: string;
  address: string;
  street: string;
  cityStateZip: string;
  phone: string;
  email: string;
  hours: { days: string; time: string }[];
  image: string;
  description: string;
  features: string[];
}

export interface CartItem {
  id: string; // unique combo of product.id + color + size
  product: Product;
  color: string;
  size?: string;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  selectedColor?: string;
  addedAt: string;
}

export type PageView =
  | 'home'
  | 'shop'
  | 'product'
  | 'collection'
  | 'room'
  | 'design-services'
  | 'showrooms'
  | 'journal'
  | 'journal-article'
  | 'cart'
  | 'about';

export interface NavigationState {
  page: PageView;
  productId?: string;
  category?: string;
  subcategory?: string;
  collectionId?: string;
  articleId?: string;
  roomId?: string;
  searchQuery?: string;
}

export interface FilterState {
  category: string;
  subcategory: string;
  materials: string[];
  colors: string[];
  priceRange: [number, number];
  minRating: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating';
}
