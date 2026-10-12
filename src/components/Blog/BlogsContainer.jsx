"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BLOG_POSTS } from '../../data/blogsData';
import { BlogsPage } from './BlogsPage';
import { BlogDetailsPage } from './BlogDetailsPage';
import { EnquireModal } from './EnquireModal';
import { Toaster } from 'react-hot-toast';

export const BlogsContainer = ({ initialPostSlug = null }) => {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState(() => {
    if (initialPostSlug) {
      return (
        BLOG_POSTS.find(
          (p) => p.slug === initialPostSlug || p.id === initialPostSlug
        ) || null
      );
    }
    return null;
  });
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  useEffect(() => {
    if (initialPostSlug) {
      const found = BLOG_POSTS.find(
        (p) => p.slug === initialPostSlug || p.id === initialPostSlug
      );
      if (found) {
        setSelectedPost(found);
      }
    } else {
      setSelectedPost(null);
    }
  }, [initialPostSlug]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/blogs/${post.slug}`);
  };

  const handleBackToBlogs = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push('/blogs');
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-800">
      <Toaster position="top-right" />
      
      {selectedPost ? (
        <BlogDetailsPage
          post={selectedPost}
          allPosts={BLOG_POSTS}
          onBackToBlogs={handleBackToBlogs}
          onSelectPost={handleSelectPost}
          onOpenEnquire={() => setIsEnquireOpen(true)}
        />
      ) : (
        <BlogsPage
          posts={BLOG_POSTS}
          onSelectPost={handleSelectPost}
          onOpenEnquire={() => setIsEnquireOpen(true)}
        />
      )}

      {/* Enquire Modal */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
      />
    </div>
  );
};

export default BlogsContainer;
