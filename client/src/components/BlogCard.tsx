import { Link } from "wouter";
import { Clock, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card 
      className={`overflow-hidden hover-elevate group ${featured ? "md:flex" : ""}`}
      data-testid={`card-blog-${post.id}`}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className={`relative overflow-hidden bg-muted ${featured ? "md:w-96 aspect-video md:aspect-auto md:h-full" : "aspect-video"}`}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <Badge className="absolute top-3 left-3">{post.category}</Badge>
        </div>
      </Link>

      <div className="p-5 flex-1">
        <Link href={`/blog/${post.slug}`}>
          <h3 
            className={`font-heading font-semibold text-foreground hover:text-primary transition-colors mb-2 line-clamp-2 ${
              featured ? "text-xl" : "text-lg"
            }`}
            data-testid={`text-blog-title-${post.id}`}
          >
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
