"use client"
import Image from "next/image"
import { CalendarIcon, Share2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Share } from "@/components/share"
import { useOpenContactUs } from "@/hook/contact-open"
import { useGetBlogById } from "@/features/api/use-get-blogs-byId"
import { useParams } from "next/navigation"

interface Author {
  name: string
  avatar: string
  role: string
}

interface BlogPost {
  title: string
  subtitle: string
  content: string
  author: Author
  publishedDate: string
  coverImage: string
}

export default function BlogPost() {
  const params = useParams();
  const blogQuery = useGetBlogById(params)
  const blogData = blogQuery.data

  const post: BlogPost = {
    title: "Playing with Patterns: A Guide to Modern Design",
    subtitle: "Creating visual harmony through repetition and rhythm",
    content: `
      <p>Design patterns are fundamental elements that can transform ordinary spaces into extraordinary experiences. 
      They provide structure, create visual interest, and guide the viewer's eye through a composition.</p>
      
      <h2>Benefits of Design Patterns</h2>
      <p>When used effectively, patterns can:</p>
      <ul>
        <li>Create rhythm and movement</li>
        <li>Establish hierarchy and order</li>
        <li>Add depth and dimension to designs</li>
        <li>Evoke specific emotions or moods</li>
      </ul>
      
      <h2>Finding the Right Balance</h2>
      <p>The key to successful pattern implementation lies in understanding balance and scale. Too much pattern can 
      overwhelm, while too little might not achieve the desired impact. Finding that sweet spot requires practice, 
      observation, and a keen eye for detail.</p>

      <h1>Advanced Pattern Techniques</h1>
      <p>As you become more comfortable with basic patterns, you can explore advanced techniques such as:</p>
      <ul>
        <li>Pattern mixing</li>
        <li>Scale variation</li>
        <li>Color theory in patterns</li>
      </ul>
    `,
    author: {
      name: "Sarah Anderson",
      avatar: "/placeholder.svg",
      role: "Senior Design Director"
    },
    publishedDate: "November 15, 2023",
    coverImage: "/placeholder.svg?height=600&width=1200"
  }

  const {onOpen, onClose, isOpen} = useOpenContactUs()
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="space-y-8 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {post.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">{post.author.role}</div>
          </div>
          <div className="gap-4 ml-auto flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {post.publishedDate}
            <Share2 size={26} onClick={()=>onOpen()} className=" cursor-pointer"/>
            {isOpen && 
                <div className="w-screen h-screen inset-0 fixed bg-black bg-opacity-75 items-center justify-center flex z-[100]">
                    <Share/>
                </div>  
            }
          </div>
        </div>

        <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt="Blog post cover image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      <div 
        className="prose prose-gray max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 pt-6 border-t">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Share this article</span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-muted rounded-full" aria-label="Share on Twitter">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="p-2 hover:bg-muted rounded-full" aria-label="Share on LinkedIn">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

