import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { Breadcrumbs } from './Breadcrumbs';

const POSTS_PER_PAGE = 6;

export const BlogsPage = ({
  posts,
  onSelectPost,
  onOpenEnquire,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        !selectedCategory ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'HOME', onClick: () => {} },
          { label: 'BLOGS', active: true },
        ]}
      />

      {/* Header section with Title & Search bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200/80 mb-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#c59a52] uppercase block mb-2">
            OUR BLOGS
          </span>
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 tracking-tight leading-[1.15]">
            Insights for a Better Tomorrow
          </h1>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Explore expert insights, market trends and valuable tips on land investment, lifestyle and real estate in North Bangalore.
          </p>
        </div>

        {/* Search input widget */}
        <div className="w-full md:w-80 shrink-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search blogs..."
              className="w-full pl-4 pr-10 py-2.5 bg-white border border-stone-200 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#c59a52] focus:ring-2 focus:ring-[#c59a52]/20 transition-all shadow-xs"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            )}
          </div>
        </div>
      </div>

      {/* Active filter display if filtering */}
      {(selectedCategory || searchQuery) && (
        <div className="flex items-center gap-2 mb-6 text-sm text-stone-600">
          <span>Filtering by:</span>
          {selectedCategory && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4efe6] text-[#42392c] font-medium text-xs">
              Category: {selectedCategory}
              <button
                onClick={() => handleCategoryChange(null)}
                className="hover:text-stone-900 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4efe6] text-[#42392c] font-medium text-xs">
              Keyword: &quot;{searchQuery}&quot;
              <button
                onClick={() => setSearchQuery('')}
                className="hover:text-stone-900 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchQuery('');
            }}
            className="text-xs text-[#c59a52] hover:underline font-semibold ml-2 cursor-pointer"
          >
            Reset all
          </button>
        </div>
      )}

      {/* Blog Cards Grid: Full Width with 3 columns on desktop */}
      <div className="w-full">
        {paginatedPosts.length > 0 ? (
          <>
            {/* Blog Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginatedPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onSelect={onSelectPost}
                />
              ))}
            </div>

            {/* Pagination matching screenshot: < 1 2 3 4 5 > */}
            <div className="mt-12 pt-6 border-t border-stone-200/80 flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: Math.min(5, Math.max(1, totalPages)) }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-9 h-9 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    currentPage === pageNumber
                      ? 'bg-[#c59a52] text-white shadow-xs'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-stone-200">
            <p className="font-serif text-xl font-bold text-stone-800 mb-2">
              No matching articles found
            </p>
            <p className="text-stone-500 text-sm mb-6">
              Try adjusting your search criteria or explore other categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#1c3127] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#274436] transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const BlogsListingPage = BlogsPage;
export default BlogsPage;
