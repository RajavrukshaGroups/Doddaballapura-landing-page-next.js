import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogCard = ({ post, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(post)}
      className="group bg-white rounded-xl border border-stone-200/80 hover:border-stone-300 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={post.image?.src || post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Category Tag Pill */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-block bg-[#f3efe8]/95 backdrop-blur-sm text-[#473e31] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs border border-stone-200/60">
            {post.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-[#b38636] transition-colors leading-snug line-clamp-2 mb-3">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-stone-600 leading-relaxed line-clamp-3 mb-5 flex-1">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="pt-2 border-t border-stone-100 mt-auto flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9a702b] group-hover:text-[#b38636] transition-colors">
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
