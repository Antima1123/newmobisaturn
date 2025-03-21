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
                   <div className='flex gap-4'>
                        <a target="_blank"  rel="nofollow" href="http://tjzuh.com/g/2cfs9quawo4b176ae02c367a95e887/?i=4&subid=adbyteweb"><img className='w-1200 h-80 mt-24' src="http://ad.admitad.com/b/2cfs9quawo4b176ae02c367a95e887/" alt="Puzzle Movies"/></a>
                        <a target="_blank" rel="nofollow" href="https://naiawork.com/g/y8c1lkxl9o4b176ae02c1715a9e553/?i=4&subid=AdbyteWeb"><img className='w-1200 h-80 mt-24' src="https://ad.admitad.com/b/y8c1lkxl9o4b176ae02c1715a9e553/" alt="War Thunder [CPP] Many GEOs"/></a>
                   </div>
                {/* </Suspense> */}
                {/* <Suspense fallback={null}> */}
                    <SuggestedBlogsWrapper />
                    <a target="_blank" rel="nofollow" href="https://rzekl.com/g/4zoo8srvfz4b176ae02c312b8f391a/?i=4&subid=adbytehubweb"><img className='max-w-5xl mx-auto mt-24' src="https://ad.admitad.com/b/4zoo8srvfz4b176ae02c312b8f391a/" alt="ChicMe WW"/></a>
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

