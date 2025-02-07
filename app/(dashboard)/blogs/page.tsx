import { Suspense } from 'react'
import { getStaticBlogs } from '@/lib/get-static-blogs'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { BlogCardSkeleton } from './BlogCardSkeleton'

const BlogList = dynamic(() => import('./components/BlogList'), {
    loading: () => <BlogListSkeleton />
})

const SuggestedBlogsWrapper = dynamic(() => import('./components/SuggestedBlogsWrapper'))

export const metadata: Metadata = {
    title: 'Blog - AdByteHub',
    description: 'Read our latest articles and insights'
}

// Increase revalidation time significantly
export const revalidate = 86400; // 24 hours

export default async function BlogPage() {
    // Reduce initial data load
    const blogs = await getStaticBlogs(1, 6)
    
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* <Suspense fallback={<BlogListSkeleton />}> */}
                    <BlogList initialBlogs={blogs} />
                {/* </Suspense> */}
                {/* <Suspense fallback={null}> */}
                    <SuggestedBlogsWrapper />
                {/* </Suspense> */}
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

