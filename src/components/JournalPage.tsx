import React from 'react';
import { useShop } from '../context/ShopContext';
import { journalArticles } from '../data/journal';
import { BookOpen, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const { navigateTo, navigateToArticle } = useShop();

  const featuredArticle = journalArticles[0];
  const remainingArticles = journalArticles.slice(1);

  return (
    <div className="bg-[#FAF8F5] pb-28">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#78726A]">
          <button onClick={() => navigateTo('home')} className="hover:text-[#1C1A18]">
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1C1A18] font-medium">The Lumora Journal</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-b border-[#EBE6DE] pb-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#78726A] block mb-2">
            Editorial Perspectives
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal tracking-tight">
            The Lumora Journal
          </h1>
          <p className="text-sm sm:text-base text-[#78726A] font-light mt-3 max-w-xl mx-auto leading-relaxed">
            Explorations into natural materials, architectural acoustics, slow craftsmanship, and living with enduring objects.
          </p>
        </div>
      </div>

      {/* Featured Lead Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div
          onClick={() => navigateToArticle(featuredArticle.id)}
          className="group cursor-pointer bg-[#F5F2EB] border border-[#EBE6DE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:shadow-xl transition-all duration-500"
        >
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#EBE6DE]">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#FAF8F5]">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs text-[#78726A]">
                <span className="uppercase tracking-widest font-semibold text-[#1C1A18] bg-[#F5F2EB] px-2.5 py-1">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1A18] group-hover:text-[#3C2F2F] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm text-[#78726A] font-light leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EBE6DE] flex items-center justify-between">
              <span className="text-xs text-[#78726A]">{featuredArticle.date}</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1C1A18] group-hover:text-[#3C2F2F] flex items-center space-x-1.5">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Remaining Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingArticles.map(article => (
            <div
              key={article.id}
              onClick={() => navigateToArticle(article.id)}
              className="group cursor-pointer bg-[#F5F2EB] border border-[#EBE6DE] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#EBE6DE]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between bg-[#FAF8F5]">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-[#78726A]">
                    <span className="uppercase tracking-widest font-semibold text-[#1C1A18]">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#1C1A18] group-hover:text-[#3C2F2F] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#78726A] font-light line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EBE6DE] flex items-center justify-between">
                  <span className="text-[11px] text-[#A89F91]">{article.date}</span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1C1A18] group-hover:text-[#3C2F2F]">
                    Read Story →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
