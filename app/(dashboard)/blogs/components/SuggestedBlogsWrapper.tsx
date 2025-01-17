"use client"
import dynamic from 'next/dynamic'

const SuggestedBlogs = dynamic(() => import('@/components/blogs/suggestedBlogs').then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

export default function SuggestedBlogsWrapper() {
    return <SuggestedBlogs />
} 