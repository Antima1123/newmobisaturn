import { getStaticBlogs } from '@/lib/get-static-blogs'
import { BlogList } from './components/BlogList'
import { Metadata } from 'next'
import { SuggestedBlogs } from '@/components/blogs/suggestedBlogs'

export const metadata: Metadata = {
    title: 'Blog - AdByteHub',
    description: 'Read our latest articles and insights'
}

// Reduce revalidation frequency to decrease server load
export const revalidate = 7200; // 2 hours instead of 1

export default async function BlogPage() {
    // Add pagination to limit initial data size
    const blogs = await getStaticBlogs(1, 12) // Get first 12 blogs initially
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
            <main className="max-w-7xl mx-auto py-12 px-24 sm:px-6 lg:px-8">
                <BlogList initialBlogs={blogs} />
                <SuggestedBlogs/>
            </main>
        </div>
    )
}

