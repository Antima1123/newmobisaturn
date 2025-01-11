'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Tag, Clock, User, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllBlogs } from '@/features/api/use-get-all-blogs'
import { useRouter } from 'next/navigation'
import { useOpenContactUs } from '@/hook/contact-open'
import { Share } from '@/components/share'
export default function BlogPage() {
  
  const [searchTerm, setSearchTerm] = useState("")

  const queryBlog = getAllBlogs();
  const blogPosts = queryBlog.data || []
  const router = useRouter();
  const {onOpen, isOpen} = useOpenContactUs();

  const handleClick = (route: any) =>{
    router.push(`/blog/${route}`)
  }

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if(queryBlog.isLoading){
    return <div className='w-full min-h-screen justify-center items-center flex bg-gradient-to-br from-purple-50 to-indigo-100'>
      Loading
    </div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Our Blog</h1>
          
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                  <CardHeader className="p-0">
                    <img src={post.coverimage} alt={post.title} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl font-bold mb-2">{post.title}</CardTitle>
                    <p className="text-gray-600 mb-4">{post.subtitle}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <User size={16} className="mr-1" /> {post.authorName}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" /> {new Date(post.publishdate!).toLocaleDateString()}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <Tag size={12} className="mr-1" /> {post.authorRole}
                    </Badge>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
                  <Share2 size={26} onClick={()=>onOpen()} className=" cursor-pointer"/>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-600 hover:text-indigo-800"
                      onClick={() => handleClick(post.slug)}
                      >
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                {isOpen && 
                    <div className="w-screen h-screen inset-0 fixed bg-black bg-opacity-75 items-center justify-center flex z-[100]">
                        <Share url={`${process.env.NEXT_PUBLIC_APP_TYPE!}blog/${post?.slug}`}/>
                    </div>  
                }
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

