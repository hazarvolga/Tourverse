import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPostsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);
  const authorImage = PlaceHolderImages.find((img) => img.id === post.authorAvatarId);
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');

  return (
    <article className="container mx-auto max-w-4xl py-12 px-4">
       <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/blog" className="inline-flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
        </div>
      <header className="mb-10">
        <Badge variant="secondary" className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              {authorImage && <AvatarImage src={authorImage.imageUrl} alt={post.author} />}
              <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </header>

      {image && (
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-10">
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={image.imageHint}
          />
        </div>
      )}

      <div
        className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
