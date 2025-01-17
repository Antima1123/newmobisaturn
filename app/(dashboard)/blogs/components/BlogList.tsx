'use client'

import { useVirtualizer } from '@tanstack/react-virtual'
import { useEffect, useRef, useState } from 'react'
import { BlogCard } from './BlogCard'
import { useRouter } from 'next/navigation'

export default function BlogList({ initialBlogs }: { initialBlogs: any[] }) {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
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

    return (
        <div ref={parentRef} style={{ height: '800px', overflow: 'auto' }}>
            {/* Search input */}
            <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <BlogCard
                        key={virtualRow.key}
                        post={filteredPosts[virtualRow.index]}
                        onClick={(slug) => router.push(`/blog/${slug}`)}
                    />
                ))}
            </div>
        </div>
    )
} 