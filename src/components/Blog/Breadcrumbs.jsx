import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-400 mb-6" aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {item.active || isLast ? (
              <span className="text-stone-800 font-bold truncate max-w-xs sm:max-w-md lg:max-w-xl">
                {item.label}
              </span>
            ) : item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                className="text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                href={item.label === 'HOME' ? '/' : '/blogs'}
                className="text-stone-500 hover:text-stone-900 transition-colors no-underline"
              >
                {item.label}
              </Link>
            )}
            {!isLast && (
              <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0 mx-0.5" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
