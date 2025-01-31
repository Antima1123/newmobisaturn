"use client"
import Image from "next/image"
import { CalendarIcon, Share2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Share } from "@/components/share"
import { useOpenContactUs } from "@/hook/contact-open"
import { useGetBlogById } from "@/features/api/use-get-blogs-byId"
import { useParams } from "next/navigation"
import SuggestedBlogs from "@/components/blogs/suggestedBlogs"
import AdsBanner from "@/components/adstera/banner/AdsBanner"
export default function BlogPost() {
  const params = useParams();
  const blogQuery = useGetBlogById(params)
  const post = blogQuery.data;
  const isLoading = blogQuery.isLoading
  const content = post?.content!.replace(/[`'"]/g, "").trim();
  const {onOpen, isOpen} = useOpenContactUs()

  if(isLoading){
    return (
      <div className=" min-h-screen w-full items-center justify-center flex">
        <h2>Please wait</h2>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="space-y-8 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {post?.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {post?.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post?.authorAvatar!} alt={post?.authorName} />
            <AvatarFallback>{post?.authorName}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="font-medium">{post?.authorName}</div>
            <div className="text-sm text-muted-foreground">{post?.authorRole}</div>
          </div>
          <div className="gap-4 ml-auto flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {post?.publishdate}
            <Share2 size={26} onClick={()=>onOpen()} className=" cursor-pointer"/>
            {isOpen && 
                <div className="w-screen h-screen inset-0 fixed bg-black bg-opacity-75 items-center justify-center flex z-[100]">
                    <Share url={`${process.env.NEXT_PUBLIC_APP_TYPE!}blog/${post?.slug}`}/>
                </div>  
            }
          </div>
        </div>

        <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
          <Image
            src={post?.coverimage!}
            alt="adbytehub"
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>
      <AdsBanner
        formate="iframe"
        width="728"
        height="90"
        key_id="df451ec6bc6b5969843143bf81a0eca3"
        src="//perkyexcitedlyscenario.com/df451ec6bc6b5969843143bf81a0eca3/invoke.js"
        type="text/javascript"
      />

      <div 
        className="prose prose-gray max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content! }}
      />

      <AdsBanner
        formate="iframe"
        width="728"
        height="90"
        key_id="df451ec6bc6b5969843143bf81a0eca3"
        src="//perkyexcitedlyscenario.com/df451ec6bc6b5969843143bf81a0eca3/invoke.js"
        type="text/javascript"
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
      <SuggestedBlogs />
    </article>
  )
}