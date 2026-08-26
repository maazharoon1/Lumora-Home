import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, WishlistItem, NavigationState, PageView, RoomScene } from '../types';
import { products, getProductById } from '../data/products';
import { getRoomById } from '../data/rooms';

interface ToastState {
  id: number;
  message: string;
  subtext?: string;
  type: 'cart' | 'wishlist' | 'info';
  image?: string;
}

interface ShopContextType {
  navigation: NavigationState;
  navigateTo: (page: PageView, params?: Partial<NavigationState>) => void;
  navigateToProduct: (productId: string) => void;
  navigateToCategory: (category: string, subcategory?: string) => void;
  navigateToCollection: (collectionId: string) => void;
  navigateToRoom: (roomId: string) => void;
  navigateToArticle: (articleId: string) => void;
  
  cart: CartItem[];
  addToCart: (product: Product, color?: string, size?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  qualifiesForFreeDelivery: boolean;
  freeDeliveryThreshold: number;
  freeDeliveryProgress: number;
  freeDeliveryRemaining: number;
  
  wishlist: WishlistItem[];
  toggleWishlist: (product: Product, selectedColor?: string) => void;
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  wishlistCount: number;
  
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
  
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  
  isWishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleWishlistDrawer: () => void;
  
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  
  isConsultationModalOpen: boolean;
  consultationTopic?: string;
  openConsultationModal: (topic?: string) => void;
  closeConsultationModal: () => void;
  
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  
  activeRoomScene: RoomScene | null;
  openRoomScene: (room: RoomScene) => void;
  closeRoomScene: () => void;
  
  toasts: ToastState[];
  removeToast: (id: number) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_DELIVERY_THRESHOLD = 3500;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [navigation, setNavigation] = useState<NavigationState>({
    page: 'home'
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumora_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'sienna-curved-sofa-Natural Oat-96" Length (Standard)',
          product: products[0],
          color: 'Natural Oat',
          size: '96" Length (Standard)',
          quantity: 1
        },
        {
          id: 'maren-travertine-coffee-table-Ivory Stone-52" Low Oval (Standard)',
          product: products[3],
          color: 'Ivory Stone',
          size: '52" Low Oval (Standard)',
          quantity: 1
        },
        {
          id: 'elara-boucle-lounge-chair-Ivory',
          product: products[2],
          color: 'Ivory',
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumora_wishlist');
      return saved ? JSON.parse(saved) : [
        { product: products[1], selectedColor: 'Smoked Natural', addedAt: new Date().toISOString() },
        { product: products[4], selectedColor: 'Natural Oak', addedAt: new Date().toISOString() }
      ];
    } catch {
      return [];
    }
  });

  // Recently Viewed
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('lumora_recent');
      return saved ? JSON.parse(saved) : [products[0], products[1], products[3], products[2]];
    } catch {
      return [];
    }
  });

  // Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string | undefined>();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeRoomScene, setActiveRoomScene] = useState<RoomScene | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Persist to local storage
  useEffect(() => {
    try {
      localStorage.setItem('lumora_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('lumora_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('lumora_recent', JSON.stringify(recentlyViewed));
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }, [recentlyViewed]);

  const showToast = (message: string, subtext?: string, type: 'cart' | 'wishlist' | 'info' = 'info', image?: string) => {
    const id = Date.now();
    setToasts(prev => [...prev.slice(-2), { id, message, subtext, type, image }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Navigation handlers
  const navigateTo = (page: PageView, params?: Partial<NavigationState>) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNavigation({
      page,
      ...params
    });
    // Close overlays
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsSearchOpen(false);
    setQuickViewProduct(null);
  };

  const navigateToProduct = (productId: string) => {
    const prod = getProductById(productId);
    if (prod) {
      addRecentlyViewed(prod);
    }
    navigateTo('product', { productId });
  };

  const navigateToCategory = (category: string, subcategory?: string) => {
    navigateTo('shop', { category, subcategory });
  };

  const navigateToCollection = (collectionId: string) => {
    navigateTo('collection', { collectionId });
  };

  const navigateToRoom = (roomId: string) => {
    const room = getRoomById(roomId);
    if (room) {
      setActiveRoomScene(room);
    }
    navigateTo('room', { roomId });
  };

  const navigateToArticle = (articleId: string) => {
    navigateTo('journal-article', { articleId });
  };

  // Cart operations
  const addToCart = (product: Product, color?: string, size?: string, quantity: number = 1) => {
    const chosenColor = color || product.defaultColor || product.colors[0]?.name || 'Standard';
    const chosenSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0].label : undefined);
    const cartItemId = `${product.id}-${chosenColor}${chosenSize ? `-${chosenSize}` : ''}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: cartItemId, product, color: chosenColor, size: chosenSize, quantity }];
    });

    showToast(
      `Added to Shopping Bag`,
      `${product.name} (${chosenColor}) × ${quantity}`,
      'cart',
      product.images[0]
    );

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    const item = cart.find(i => i.id === cartItemId);
    setCart(prev => prev.filter(i => i.id !== cartItemId));
    if (item) {
      showToast('Removed from Bag', item.product.name, 'info');
    }
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartTotal = cart.reduce((sum, item) => {
    let itemPrice = item.product.price;
    if (item.size && item.product.sizes) {
      const sizeObj = item.product.sizes.find(s => s.label === item.size);
      if (sizeObj && sizeObj.priceOffset) {
        itemPrice += sizeObj.priceOffset;
      }
    }
    return sum + itemPrice * item.quantity;
  }, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const qualifiesForFreeDelivery = cartTotal >= FREE_DELIVERY_THRESHOLD;
  const freeDeliveryProgress = Math.min(100, Math.round((cartTotal / FREE_DELIVERY_THRESHOLD) * 100));
  const freeDeliveryRemaining = Math.max(0, FREE_DELIVERY_THRESHOLD - cartTotal);

  // Wishlist operations
  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.product.id === productId);
  };

  const toggleWishlist = (product: Product, selectedColor?: string) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      const chosenColor = selectedColor || product.defaultColor || product.colors[0]?.name;
      setWishlist(prev => [...prev, { product, selectedColor: chosenColor, addedAt: new Date().toISOString() }]);
      showToast('Saved to Wishlist', product.name, 'wishlist', product.images[0]);
    }
  };

  const removeFromWishlist = (productId: string) => {
    const found = wishlist.find(w => w.product.id === productId);
    setWishlist(prev => prev.filter(w => w.product.id !== productId));
    if (found) {
      showToast('Removed from Wishlist', found.product.name, 'info');
    }
  };

  const wishlistCount = wishlist.length;

  // Recently viewed
  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 8);
    });
  };

  // Modal helpers
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const openWishlist = () => setIsWishlistOpen(true);
  const closeWishlist = () => setIsWishlistOpen(false);
  const toggleWishlistDrawer = () => setIsWishlistOpen(prev => !prev);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const toggleSearch = () => setIsSearchOpen(prev => !prev);

  const openConsultationModal = (topic?: string) => {
    setConsultationTopic(topic);
    setIsConsultationModalOpen(true);
  };
  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
    setConsultationTopic(undefined);
  };

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const openRoomScene = (room: RoomScene) => setActiveRoomScene(room);
  const closeRoomScene = () => setActiveRoomScene(null);

  return (
    <ShopContext.Provider
      value={{
        navigation,
        navigateTo,
        navigateToProduct,
        navigateToCategory,
        navigateToCollection,
        navigateToRoom,
        navigateToArticle,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        qualifiesForFreeDelivery,
        freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
        freeDeliveryProgress,
        freeDeliveryRemaining,
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        wishlistCount,
        recentlyViewed,
        addRecentlyViewed,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isWishlistOpen,
        openWishlist,
        closeWishlist,
        toggleWishlistDrawer,
        isSearchOpen,
        openSearch,
        closeSearch,
        toggleSearch,
        isConsultationModalOpen,
        consultationTopic,
        openConsultationModal,
        closeConsultationModal,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        activeRoomScene,
        openRoomScene,
        closeRoomScene,
        toasts,
        removeToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
