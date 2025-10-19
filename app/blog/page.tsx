import Link from "next/link";
import Image from "next/image";
import Bubbles from "../../components/content/bubbles";
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

// This is the same data as the main blog page.
// In a real app, you would fetch this from a CMS or database.
const blogPosts = [
  {
    slug: "demystifying-seo-for-beginners",
    title: "Demystifying SEO: A Beginner's Guide to Ranking Higher",
    category: "SEO",
    author: "Jane Doe",
    date: "2023-10-26",
    image: "/blog/seo-guide.jpg",
    content: `<p>Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. This guide will walk you through the foundational pillars of SEO...</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p><h2>Understanding Keywords</h2><p>Keywords are the words and phrases that people type into search engines. As a website owner and content creator, you want the keywords on your page to be relevant to what people are searching for so they have a better chance of finding your content among the results.</p>`,
  },
  // ... add other post objects here with a 'content' property
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    // In a real app, you'd render a 404 page here.
    return (
      <div className="bg-background text-text-primary ps-8 py-16 text-center">
        Post not found
      </div>
    );
  }

  return (
    <div className="bg-background text-text-primary">
      {/* Header */}
      <Bubbles />
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold mb-2">{post.category}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex justify-center items-center gap-6 text-text-secondary">
          <span className="flex items-center gap-2">
            <FaUser /> {post.author}
          </span>
          <span className="flex items-center gap-2">
            <FaCalendarAlt /> {post.date}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div
            className="prose prose-lg dark:prose-invert max-w-none mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>
      </section>
    </div>
  );
}
