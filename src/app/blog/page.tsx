import { blogPostsData } from '@/lib/data';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function BlogPage() {
  const allCategories = Array.from(new Set(blogPostsData.map(post => post.category)));

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The TourVerse Blog</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Inspiration, tips, and stories from our world of travel.
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Blog Posts */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPostsData.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 h-11" />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {allCategories.map(category => (
                <Badge key={category} variant="secondary" asChild>
                    <Link href="#">{category}</Link>
                </Badge>
              ))}
            </div>
          </div>

           {/* Recent Posts */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Recent Posts</h3>
            <ul className="space-y-3">
              {blogPostsData.slice(0, 3).map(post => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors group">
                        <span className="font-medium block">{post.title}</span>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                    </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

       <div className="flex justify-center mt-16">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>
    </div>
  );
}
