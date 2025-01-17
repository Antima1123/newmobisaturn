'use client'

import { useState } from 'react'
import { BlogCard } from './BlogCard'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

const ITEMS_PER_PAGE = 12

export default function BlogList({ initialBlogs }: { initialBlogs: any[] }) {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const filteredPosts = initialBlogs.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentPosts = filteredPosts.slice(startIndex, endIndex)

    const handleRoute = (slug: string) => {
        router.push(`/blog/${slug}`)
    }

    return (
        <div className="space-y-8">
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
                {currentPosts.map((post) => (
                    <BlogCard
                        key={post.id}
                        post={post}
                        onClick={handleRoute}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center gap-2 py-4">
                    {Array.from({ length: totalPages }, (_, i) => (
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
        </div>
    )
} 