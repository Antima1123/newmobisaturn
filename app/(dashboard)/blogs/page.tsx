import { Suspense } from 'react'
import { getStaticBlogs } from '@/lib/get-static-blogs'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { BlogCardSkeleton } from './BlogCardSkeleton'
import AdsBanner from '@/components/adstera/banner/AdsBanner'

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
                    {/* <AdsBanner
                        formate="iframe"
                        width="728"
                        height="90"
                        key_id="df451ec6bc6b5969843143bf81a0eca3"
                        src="//perkyexcitedlyscenario.com/df451ec6bc6b5969843143bf81a0eca3/invoke.js"
                        type="text/javascript"
                    /> */}
                    <a target="_blank" rel="nofollow" href="https://dhwnh.com/g/t7abkvu4yb4b176ae02c42f9f2178b/?i=4&subid=Adweb&erid=2VSb5z5QvAC"><img className='w-80 h-80 mt-24' src="https://aflink.ru/b/t7abkvu4yb4b176ae02c42f9f2178b/" alt="Puzzle Movies"/></a>
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

