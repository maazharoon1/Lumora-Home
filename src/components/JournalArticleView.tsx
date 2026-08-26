import React from 'react';
import { useShop } from '../context/ShopContext';
import { getArticleById, journalArticles } from '../data/journal';
import { getProductById } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronRight, Clock, User, Share2, ArrowLeft, ArrowRight } from 'lucide-react';

interface JournalArticleViewProps {
  articleId: string;
}

export const JournalArticleView: React.FC<JournalArticleViewProps> = ({ articleId }) => {
  const { navigateTo, navigateToArticle, showToast } = useShop();
  const article = getArticleById(articleId) || journalArticles[0];

  const relatedProducts = article.relatedProductIds
    .map(id => getProductById(id))
    .filter(Boolean);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article Link Copied', 'Link copied to your clipboard.', 'info');
    }
  };

  return (
    <div className="bg-[#FAF8F5] pb-28">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#78726A]">
          <button onClick={() => navigateTo('home')} className="hover:text-[#1C1A18]">
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigateTo('journal')} className="hover:text-[#1C1A18]">
            The Journal
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1C1A18] font-medium truncate max-w-[200px]">
            {article.title}
          </span>
        </nav>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center space-x-3 text-xs text-[#78726A]">
            <span className="uppercase tracking-widest font-semibold text-[#1C1A18] bg-[#F5F2EB] px-3 py-1 border border-[#DDD5C7]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A18] font-normal leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#78726A] font-light max-w-2xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 flex items-center justify-center space-x-6 text-xs text-[#78726A] border-y border-[#EBE6DE] py-3">
            <span className="font-medium text-[#1C1A18]">{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <button onClick={handleShare} className="hover:text-[#1C1A18] flex items-center space-x-1">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Lead Hero Image */}
        <div className="aspect-[16/10] overflow-hidden bg-[#EBE6DE] border border-[#DDD5C7] mb-12 shadow-xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rich Article Body */}
        <div className="space-y-8 text-sm sm:text-base text-[#1C1A18] font-light leading-relaxed">
          {article.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2 key={idx} className="font-serif text-2xl sm:text-3xl text-[#1C1A18] pt-6 font-normal">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={idx}
                  className="font-serif text-xl sm:text-2xl italic text-[#3C2F2F] my-8 p-6 bg-[#F5F2EB] border-l-4 border-[#1C1A18] leading-relaxed"
                >
                  "{block.text}"
                  {block.author && (
                    <footer className="text-xs uppercase tracking-wider not-italic text-[#78726A] mt-2 font-sans font-medium">
                      — {block.author}
                    </footer>
                  )}
                </blockquote>
              );
            }
            if (block.type === 'materialCallout') {
              return (
                <div key={idx} className="my-6 p-4 bg-[#F5F2EB] border border-[#DDD5C7] text-xs sm:text-sm font-medium text-[#1C1A18]">
                  {block.text}
                </div>
              );
            }
            if (block.type === 'image' && block.imageUrl) {
              return (
                <div key={idx} className="my-8">
                  <div className="aspect-[16/9] overflow-hidden bg-[#EBE6DE] border border-[#DDD5C7]">
                    <img src={block.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  {block.caption && (
                    <p className="text-xs text-[#78726A] mt-2 italic text-center">
                      {block.caption}
                    </p>
                  )}
                </div>
              );
            }
            return (
              <p key={idx} className="text-[#3C2F2F]/90 leading-loose">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Featured Products Mentioned in Story */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#DDD5C7]">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#78726A] block mb-2">
              Featured In This Story
            </span>
            <h3 className="font-serif text-2xl text-[#1C1A18] mb-8">
              Pieces Explored in the Article
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProducts.map(p => (
                p && <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Back to Journal Link */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigateTo('journal')}
            className="inline-flex items-center space-x-2 px-8 py-3.5 border border-[#1C1A18] text-xs uppercase tracking-[0.18em] font-semibold text-[#1C1A18] hover:bg-[#1C1A18] hover:text-[#FAF8F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Journal Stories</span>
          </button>
        </div>
      </article>
    </div>
  );
};
