import { BLOG_POSTS } from "../../../src/data/blogsData";
import BlogsContainer from "../../../src/components/Blog/BlogsContainer";


export async function generateStaticParams() {
  const params = [];
  const seen = new Set();

  BLOG_POSTS.forEach((post) => {
    if (post.slug && !seen.has(post.slug)) {
      seen.add(post.slug);
      params.push({ slug: post.slug });
    }
    if (post.id && !seen.has(post.id)) {
      seen.add(post.id);
      params.push({ slug: post.id });
    }
  });

  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return {
      title: "Real Estate & Plotted Development Blogs | Defence Housing Society",
      description:
        "Explore expert insights, market trends and valuable tips on land investment, lifestyle and real estate in North Bangalore.",
    };
  }

  return {
    title: `${post.title} | Defence Housing Society`,
    description: post.excerpt,
    keywords: [
      post.title,
      "Plots for sale in Doddaballapur",
      "Plots for sale in North Bangalore",
      "Residential plots for sale in Doddaballapur",
      "Gated community plots for sale in Doddaballapur",
      "Budget plots for sale in North Bangalore",
      "Residential Plots for sale in North Bangalore",
    ],
    alternates: {
      canonical: `https://defencehousingsociety.co.in/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://defencehousingsociety.co.in/blogs/${post.slug}`,
      siteName: "Defence Housing Society",
      type: "article",
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://defencehousingsociety.co.in/blogs/${post.slug}`,
        },
        headline: post.title,
        description: post.excerpt,
        image: post.image ? [post.image] : [],
        author: {
          "@type": "Organization",
          name: post.author || "MRCL Editorial Team",
          url: "https://defencehousingsociety.co.in",
        },
        publisher: {
          "@type": "Organization",
          name: "Defence Habitat Housing Co-Operative Society Ltd.",
          logo: {
            "@type": "ImageObject",
            url: "https://defencehousingsociety.co.in/logo.png",
          },
        },
        datePublished: "2026-09-21",
        dateModified: "2026-09-21",
        articleSection: post.category || "Real Estate",
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogsContainer initialPostSlug={slug} />
    </>
  );
}
