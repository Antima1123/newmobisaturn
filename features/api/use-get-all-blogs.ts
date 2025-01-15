import { client } from "@/lib/hono"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const getAllBlogs = (page: number = 1) => {
    const query = useQuery({
        queryKey: ["blogs", page],
        queryFn: async () => {
            const response = await client.api.blog.$get({
                query: { page: String(page), limit: "9" }
            });

            if(!response.ok) {
                throw new Error("failed to fetch blogs");
            }
            return response.json();
        },
        staleTime: 5 * 60 * 1000, // Cache for 5 minutes
        gcTime: 10 * 60 * 1000, // Keep unused data in cache for 10 minutes
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false, // Prevent unnecessary refetches
        retry: 1, // Only retry once on failure
    });
    return query;
}