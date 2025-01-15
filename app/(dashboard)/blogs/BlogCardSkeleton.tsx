import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function BlogCardSkeleton() {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300">
      <CardHeader className="p-0">
        <div className="w-full h-48 bg-gray-200 animate-pulse" />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        {/* Title skeleton */}
        <div className="h-7 bg-gray-200 rounded-md animate-pulse mb-2 w-3/4" />
        
        {/* Subtitle skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
        </div>

        {/* Author and date skeleton */}
        <div className="flex items-center space-x-4 text-sm mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse mr-1" />
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse mr-1" />
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Role badge skeleton */}
        <div className="w-20 h-5 bg-gray-200 rounded-full animate-pulse" />
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
        <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
      </CardFooter>
    </Card>
  )
} 