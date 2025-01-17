'use client'

import { useEffect, useRef, useState } from 'react'
import { BlogCard } from './BlogCard'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { useVirtualizer } from '@tanstack/react-virtual'

export default function BlogList({ initialBlogs }: { initialBlogs: any[] }) {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const parentRef = useRef<HTMLDivElement>(null)

    const filteredPosts = initialBlogs.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const rowVirtualizer = useVirtualizer({
        count: filteredPosts.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 400,
        overscan: 5
    })

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

            <div 
                ref={parentRef} 
                className="h-[800px] overflow-auto"
            >
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 absolute top-0 left-0 w-full">
                        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                            <BlogCard
                                key={filteredPosts[virtualRow.index].id}
                                post={filteredPosts[virtualRow.index]}
                                onClick={handleRoute}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 