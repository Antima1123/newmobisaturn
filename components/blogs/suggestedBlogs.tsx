"use client"
import { getSuggestedBlogs } from "@/features/api/use-get-suggested";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function SuggestedBlogs() {
    const { data, isLoading } = getSuggestedBlogs();


    return (
        <div className="mt-16 max-w-7xl mx-auto px-8 md:px-0">
            <h2 className="text-2xl font-bold mb-8">Suggested Articles</h2>
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
                {data?.map((blog) => (
                    <Link  key={blog.id} href={`${process.env.NEXT_PUBLIC_APP_TYPE}/blog/${blog?.slug}`}>
                    <div className="overflow-hidden hover:cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-32">
                            <img
                                src={blog.coverimage}
                                alt={blog.title}
                                className="w-full h-full object-contain"
                                />
                        </div>
                        <div className="p-4">

                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.subtitle}</p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
}