'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Search, Tag, Clock, User, ThumbsUp, MessageCircle, Share2, Mail, ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Proven Strategies to Boost Your Marketing ROI",
    excerpt: "Discover the top strategies that can significantly improve your marketing return on investment...",
    author: "Jane Doe",
    date: "2023-05-15",
    readTime: "5 min read",
    tags: ["Marketing", "ROI", "Strategy"],
    likes: 127,
    comments: 23,
    shares: 45,
    image: "/blog-1.webp"
  },
  {
    id: 2,
    title: "The Future of AI in Digital Marketing: What to Expect",
    excerpt: "Explore how artificial intelligence is reshaping the landscape of digital marketing and what it means for your business...",
    author: "John Smith",
    date: "2023-05-10",
    readTime: "7 min read",
    tags: ["AI", "Digital Marketing", "Technology"],
    likes: 203,
    comments: 31,
    shares: 78,
    image: "/blog-2.jpeg"
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity in the Digital Age",
    excerpt: "Learn the essential steps to create and maintain a powerful brand identity that resonates with your audience in today's digital world...",
    author: "Emily Johnson",
    date: "2023-05-05",
    readTime: "6 min read",
    tags: ["Branding", "Digital Marketing", "Identity"],
    likes: 156,
    comments: 19,
    shares: 62,
    image: "/blog-3.webp"
  }
]

const categories = ["All", "Marketing", "Technology", "Branding", "Social Media", "Content Strategy"]

export default function EnhancedMarketingBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === "All" || post.tags.includes(selectedCategory)) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const expandedPostData = expandedPost ? blogPosts.find(post => post.id === expandedPost) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Marketing Insights</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Latest Marketing Insights</h2>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="relative">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedCategory} <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-10"
                  >
                    <div className="py-1">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setSelectedCategory(category)
                            setIsDropdownOpen(false)
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
                <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl font-bold mb-2">{post.title}</CardTitle>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <User size={16} className="mr-1" /> {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" /> {post.readTime}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag size={12} className="mr-1" /> {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
                    <div className="flex space-x-4">
                      <span className="flex items-center text-sm text-gray-500">
                        <ThumbsUp size={16} className="mr-1" /> {post.likes}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <MessageCircle size={16} className="mr-1" /> {post.comments}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Share2 size={16} className="mr-1" /> {post.shares}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-600 hover:text-indigo-800"
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {expandedPostData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setExpandedPost(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={expandedPostData.image} 
                    alt={expandedPostData.title} 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-3xl font-bold mb-4">{expandedPostData.title}</h2>
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${expandedPostData.author}`} />
                      <AvatarFallback>{expandedPostData.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{expandedPostData.author}</p>
                      <p className="text-sm text-gray-500">{expandedPostData.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {expandedPostData.excerpt}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="flex justify-end">
                    <Button onClick={() => setExpandedPost(null)}>Close</Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Free Marketing eBook</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Download our comprehensive guide to modern marketing strategies.</p>
              </CardContent>
              <CardFooter>
                <Button>Download Now <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Marketing Webinar Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join our expert-led webinars on the latest marketing trends.</p>
              </CardContent>
              <CardFooter>
                <Button>Register <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          </div>
        </section> */}
      </main>
    </div>
  )
}