import { client } from "@/lib/hono"
import { useQuery } from "@tanstack/react-query"

export const getSuggestedBlogs = () => {
    const query = useQuery({
        queryKey: ["suggestedBlogs"],
        queryFn: async () => {
            const response = await client.api.suggestion.suggestedBlogs.$get();

            if(!response.ok){
                throw new Error("Failed to fetch blog post")
            }

            const { data } = await response.json()
            return data;
        }
    })

    return query;
}