import { getStaticBlogs } from '@/lib/get-static-blogs'
import { BlogList } from './components/BlogList'
import { Metadata } from 'next'
import { SuggestedBlogs } from '@/components/blogs/suggestedBlogs';

export const metadata: Metadata = {
    title: 'Blog - AdByteHub',
    description: 'Read our latest articles and insights'
}

export const revalidate = 3600;

export default async function BlogPage() {
    const blogs = await getStaticBlogs()

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
            <main className="max-w-7xl mx-auto py-12 px-24 sm:px-6 lg:px-8">
                <BlogList initialBlogs={blogs} />
                <SuggestedBlogs/>
            </main>
        </div>
    )
}

