import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryDiscovery } from './components/CategoryDiscovery';
import { NewArrivalsCarousel } from './components/NewArrivalsCarousel';
import { EditorialMaterialSection } from './components/EditorialMaterialSection';
import { CollectionsSection } from './components/CollectionsSection';
import { FeaturedGrid } from './components/FeaturedGrid';
import { RoomInspiration } from './components/RoomInspiration';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CollectionDetailPage } from './components/CollectionDetailPage';
import { DesignServicesPage } from './components/DesignServicesPage';
import { ShowroomsPage } from './components/ShowroomsPage';
import { JournalPage } from './components/JournalPage';
import { JournalArticleView } from './components/JournalArticleView';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ToastNotification } from './components/ToastNotification';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { getProductById, products } from './data/products';

const AppContent: React.FC = () => {
  const { navigation } = useShop();

  // Determine current active product if on product page
  const currentProduct = navigation.productId
    ? getProductById(navigation.productId) || products[0]
    : products[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1A18] font-sans selection:bg-[#DDD5C7] selection:text-[#1C1A18]">
      {/* Toast Notifications */}
      <ToastNotification />

      {/* Global Header with Mega Menus */}
      <Header />

      {/* Main Content Pages */}
      <main className="flex-grow">
        {navigation.page === 'home' && (
          <>
            <Hero />
            <CategoryDiscovery />
            <NewArrivalsCarousel />
            <EditorialMaterialSection />
            <CollectionsSection />
            <FeaturedGrid />
            <RoomInspiration />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'shop' && (
          <>
            <ShopPage />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'product' && (
          <>
            <ProductDetailPage product={currentProduct} />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'collection' && (
          <>
            <CollectionDetailPage collectionId={navigation.collectionId || 'sienna'} />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'design-services' && (
          <>
            <DesignServicesPage />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'showrooms' && (
          <>
            <ShowroomsPage />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'journal' && (
          <>
            <JournalPage />
            <NewsletterSection />
          </>
        )}

        {navigation.page === 'journal-article' && (
          <>
            <JournalArticleView articleId={navigation.articleId || 'the-language-of-natural-materials'} />
            <NewsletterSection />
          </>
        )}
      </main>

      {/* Slide-out Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ConsultationModal />
      <QuickViewModal />

      {/* Global Luxury Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
