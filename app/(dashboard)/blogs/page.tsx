import { Suspense } from 'react'
import { getStaticBlogs } from '@/lib/get-static-blogs'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { BlogCardSkeleton } from './BlogCardSkeleton'

const BlogList = dynamic(() => import('./components/BlogList'), {
    loading: () => <BlogListSkeleton />
})

const SuggestedBlogs = dynamic(() => import('@/components/blogs/suggestedBlogs').then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

export const metadata: Metadata = {
    title: 'Blog - AdByteHub',
    description: 'Read our latest articles and insights'
}

// Increase revalidation time significantly
export const revalidate = 86400; // 24 hours

export default async function BlogPage() {
    // Reduce initial data load
    const blogs = await getStaticBlogs(1, 4)
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Suspense fallback={<BlogListSkeleton />}>
                    <BlogList initialBlogs={blogs} />
                </Suspense>
                <Suspense fallback={null}>
                    <SuggestedBlogs />
                </Suspense>
            </main>
        </div>
    )
}

function BlogListSkeleton() {
    return (
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
            ))}
        </div>
    )
}

