import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner"

type ResponseType = InferResponseType<typeof client.api.$post>;
type RequestType = InferRequestType<typeof client.api.$post>["json"]

export const useCreateContact = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.$post({ json })
            return await response.json();
        },
        onSuccess: () => {
            toast.success("sent successfully")
            queryClient.invalidateQueries({ queryKey: ["contact"]});
        },
        onError: () => {
            toast.error("something went wrong")
        }
    })
    return mutation
}