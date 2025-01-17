import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Tag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    subtitle: string;
    coverimage: string;
    authorName: string;
    publishdate: string;
    authorRole: string;
    slug: string;
  };
  onClick: (slug: string) => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <Card onClick={() => onClick(post.slug)} className="h-full hover:cursor-pointer flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <Image
          src={post.coverimage}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-40 object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={60}
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-bold mb-2 line-clamp-2">{post.title}</CardTitle>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.subtitle}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <User size={16} className="mr-1" /> {post.authorName}
          </span>
          <span className="flex items-center">
            <Clock size={16} className="mr-1" /> {new Date(post.publishdate).toLocaleDateString()}
          </span>
        </div>
        <Badge variant="secondary" className="text-xs">
          <Tag size={12} className="mr-1" /> {post.authorRole}
        </Badge>
      </CardContent>
    </Card>
  );
} 