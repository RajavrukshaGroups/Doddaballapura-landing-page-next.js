import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  MessageCircle,
  Sprout,
  Quote,
  Bookmark,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RELATED_BLOGS_DATA } from '../../data/blogsData';
import { Breadcrumbs } from './Breadcrumbs';

export const BlogDetailsPage = ({
  post,
  allPosts,
  onBackToBlogs,
  onSelectPost,
  onOpenEnquire,
}) => {

  const router = useRouter();
  const navigate = (path) => router.push(path);
  const [activeSectionId, setActiveSectionId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/defencehabitat",
      hoverClass: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "https://x.com/DefenceSociety",
      hoverClass: "hover:bg-black hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/defence_habitat/",
      hoverClass: "hover:bg-[#E4405F] hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://api.whatsapp.com/send/?phone=918884413931&text&app_absent=0",
      hoverClass: "hover:bg-[#25D366] hover:text-white",
    },
  ];

  // Find previous and next posts
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Track scroll progress & active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Track active section for table of contents
      if (post.tableOfContents && post.tableOfContents.length > 0) {
        const sectionElements = post.tableOfContents.map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }));

        const scrollPosition = window.scrollY + 200;
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const item = sectionElements[i];
          if (item.element && item.element.offsetTop <= scrollPosition) {
            setActiveSectionId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSectionId(sectionId);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleShareSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative">
      {/* Reading Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-stone-200/50">
        <div
          className="h-full bg-[#c59a52] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumbs matching image */}
        <Breadcrumbs
          items={[
            { label: 'HOME', onClick: onBackToBlogs },
            { label: 'BLOGS', onClick: onBackToBlogs },
            { label: post.title.toUpperCase(), active: true },
          ]}
        />

       

        {/* Article Header */}
        <header className="mb-8 max-w-4xl">
          {/* Category Pill Tag */}
          <div className="mb-4">
            <span className="inline-block bg-[#f3efe8] text-[#473e31] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-stone-200/70">
              {post.category}
            </span>
          </div>

          {/* Big Editorial Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 tracking-tight leading-[1.2] mb-5">
            {post.title}
          </h1>

      
        </header>

        {/* Hero Panoramic Image */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-stone-200/90 shadow-sm bg-stone-100">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img
              src={post.image?.src || post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        
        </div>

        {/* 2-Column Grid: Main Body (68%) & Sticky Sidebar (32%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Article Body */}
          <article className="lg:col-span-8 prose-stone max-w-none">
            {/* Introductory Paragraphs */}
            {post.content?.introduction && (
              <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed font-sans mb-10">
                {post.content.introduction.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-stone-900 leading-relaxed font-normal' : ''}>
                    {/* Render with highlighted links matching the image */}
                    {para.includes('locations') || para.includes('Doddaballapur') ? (
                      <span>
                        {para.split('locations').map((part, pIdx, arr) => (
                          <React.Fragment key={pIdx}>
                            {part}
                            {pIdx < arr.length - 1 && (
                              <button
                                onClick={onOpenEnquire}
                                className="text-[#a57b32] underline hover:text-[#886221] cursor-pointer font-medium"
                              >
                                locations
                              </button>
                            )}
                          </React.Fragment>
                        ))}
                      </span>
                    ) : (
                      para
                    )}
                  </p>
                ))}
              </div>
            )}

            {/* Stylized Blockquote Callout Box */}
            {post.content?.quote && (
              <div className="my-10 relative bg-[#f9f6f0] rounded-xl p-6 sm:p-8 border border-[#e8e2d5] shadow-xs">
                <div className="flex gap-4">
                  <div className="shrink-0 text-[#c59a52]">
                    <Quote className="w-8 h-8 fill-current opacity-80" />
                  </div>
                  <blockquote className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                    &ldquo;{post.content.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            )}

            {/* Detailed Content Sections */}
            <div className="space-y-12">
              {post.content?.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 space-y-5"
                >
                  {/* Subheading with gold accent underline matching design */}
                  <div className="pb-3 border-b-2 border-[#c59a52]/40">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                      {section.heading}
                    </h2>
                  </div>

                  {/* Paragraphs */}
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base text-stone-700 leading-relaxed font-sans"
                    >
                      {p.includes('Plots for sale in Doddaballapur') ? (
                        <span>
                          {p.split('Plots for sale in Doddaballapur').map((frag, fIdx, fArr) => (
                            <React.Fragment key={fIdx}>
                              {frag}
                              {fIdx < fArr.length - 1 && (
                                <button
                                  onClick={onOpenEnquire}
                                  className="text-[#a57b32] font-semibold underline hover:text-[#886221] cursor-pointer"
                                >
                                  Plots for sale in Doddaballapur
                                </button>
                              )}
                            </React.Fragment>
                          ))}
                        </span>
                      ) : (
                        p
                      )}
                    </p>
                  ))}

                  {/* Key Takeaways list if available */}
                  {section.keyTakeaways && (
                    <div className="my-6 p-5 rounded-lg bg-stone-50 border border-stone-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                        Strategic Highlights
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-700">
                        {section.keyTakeaways.map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c59a52] mt-2 shrink-0" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlight box if available */}
                  {section.highlightBox && (
                    <div className="my-6 p-5 rounded-xl bg-[#1c3127]/5 border border-[#1c3127]/15">
                      <h4 className="font-serif font-bold text-base text-[#1c3127] mb-1.5">
                        {section.highlightBox.title}
                      </h4>
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {section.highlightBox.description}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>


            {/* Previous & Next Post Navigator */}
            {/* <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <button
                  onClick={() => onSelectPost(prevPost)}
                  className="p-4 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                    <span>Previous Article</span>
                  </div>
                  <h5 className="font-serif font-bold text-stone-900 text-sm group-hover:text-[#c59a52] line-clamp-2">
                    {prevPost.title}
                  </h5>
                </button>
              ) : <div />}

              {nextPost ? (
                <button
                  onClick={() => onSelectPost(nextPost)}
                  className="p-4 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all text-right group cursor-pointer sm:col-start-2"
                >
                  <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    <span>Next Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h5 className="font-serif font-bold text-stone-900 text-sm group-hover:text-[#c59a52] line-clamp-2">
                    {nextPost.title}
                  </h5>
                </button>
              ) : <div />}
            </div> */}
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Table of Contents Widget matching screenshot */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-xs">
                <h3 className="text-lg font-bold text-blue-900 pb-3 border-b border-stone-100 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2.5">
                  {post.tableOfContents.map((item, idx) => {
                    const isActive = activeSectionId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left flex items-start gap-3 text-xs sm:text-[13px] leading-snug py-1.5 px-2 rounded-lg transition-colors cursor-pointer group ${
                          isActive
                            ? 'bg-[#f7f3ea] text-[#1c3127] font-bold border-l-2 border-[#c59a52]'
                            : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-[#c59a52] text-white'
                              : 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="line-clamp-2">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Doddaballapur Plots Interest CTA Card */}
            <div className="bg-[#fcfaf7] rounded-xl p-6 border border-[#e8dfcf] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#f3ecde] flex items-center justify-center text-[#c59a52]">
                <Sprout className="w-5 h-5 text-[#c59a52]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 leading-snug">
                  Interested in Plots in Doddaballapur?
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Get in touch with our team for the best plots and investment options.
                </p>
              </div>
              <button
                onClick={()=> navigate('/contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#c59a52] hover:bg-[#d4a85f] active:bg-[#b58b44] text-[#192b22] transition-colors shadow-xs cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Share This Article Widget */}
            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-xs">
              <h4 className="font-serif text-base font-bold text-blue-900 mb-3">
                Share This Article
              </h4>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ name, icon: Icon, url, hoverClass }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className={`w-9 h-9 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs cursor-pointer ${hoverClass}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
                <button
                  onClick={handleCopyLink}
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-800 hover:text-white text-stone-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer relative shadow-xs"
                  aria-label="Copy Link"
                  title="Copy link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
              {copiedLink && (
                <p className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Link copied to clipboard!
                </p>
              )}
            </div>

            {/* Related Blogs Widget matching showcase */}
            {/* <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-stone-900 pb-3 border-b border-stone-100 mb-4">
                Related Blogs
              </h3>
              <div className="space-y-4">
                {RELATED_BLOGS_DATA.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      const found = allPosts.find((p) => p.id === item.id || p.slug === item.slug);
                      if (found) {
                        onSelectPost(found);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="group flex items-center gap-3.5 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                      <img
                        src={item.image?.src || item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-800 group-hover:text-[#b38636] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-400 mt-1">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
