'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BlogCard } from './BlogCard'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function BlogList({ initialBlogs }: { initialBlogs: any[] }) {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 8

    const filteredPosts = initialBlogs.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

    const handleRoute = (slug: string) => {
        router.push(`/blog/${slug}`)
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <h1 className="text-4xl font-extrabold text-center text-gray-900">Our Blog</h1>
            
            <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                    <Input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setCurrentPage(1)
                        }}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <BlogCard 
                            post={post}
                            onClick={handleRoute}
                        />
                    </motion.div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                currentPage === i + 1 
                                    ? 'bg-indigo-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    )
} 