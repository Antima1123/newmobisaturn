import { client } from "@/lib/hono"
import { useQuery } from "@tanstack/react-query"

export const getAllBlogs = () =>{
    const query = useQuery({
        queryKey: ["blogs"],
        queryFn: async()=>{
            const response = await client.api.blog.$get()

            if(!response){
                throw new Error("failed to fetch blogs");
            }
            const { data } = await response.json();
            return data;
        }
    })
    return query;
}