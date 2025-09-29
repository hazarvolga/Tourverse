import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.imageId);
  const authorImage = PlaceHolderImages.find((img) => img.id === post.authorAvatarId);
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      {image && (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <div className="relative h-60">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
          </div>
        </Link>
      )}
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <Badge variant="secondary" asChild><Link href="#">{post.category}</Link></Badge>
        </div>
        <h3 className="text-2xl font-bold mb-3 flex-grow">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-6">{post.summary}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              {authorImage && <AvatarImage src={authorImage.imageUrl} alt={post.author} />}
              <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p>{post.date}</p>
            </div>
          </div>
           <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-primary font-semibold">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
      </CardContent>
    </Card>
  );
}
