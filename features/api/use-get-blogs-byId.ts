import { client } from "@/lib/hono"
import { useQuery } from "@tanstack/react-query"

export const useGetBlogById = (blogSlug: any) => {
    const query = useQuery({
        queryKey: ["blogs", blogSlug],
        queryFn: async () => {
            const response = await client.api.blog[":blogSlug"].$get({
                param: blogSlug
            });

            if(!response.ok){
                throw new Error("Failed to fetch blog post")
            }

            const { data } = await response.json()
            return data;
        }
    })

    return query;
}