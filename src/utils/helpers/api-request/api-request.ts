import CONFIG from "@/utils/configurations/config";

type RequestParams<X> = {
    endpoint: string,
    method: "POST" | "PUT" | "DELETE" | "PATCH" | "GET",
    token: string | null,
    data: X
}

type RequestReturnType<Y> = {
    result: Y | null,
    error: string | null,
    statusCode: number,
}

export default async function apiRequest<X, Y>({endpoint, method, data, token}: RequestParams<X>): Promise<RequestReturnType<Y>> {
    try {
        const fetchResponse = await fetch(
            CONFIG.PATHS_CONFIG.API_PATHS.BASE_URL + endpoint,
            {
                method,
                body: data === null ? null : JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            }
        )

        const result = await fetchResponse.json();

        return {
            result,
            error: null,
            statusCode: fetchResponse.status
        }
    } catch (error) {
        const {message} = error as Error;
        return {
            result: null,
            error: message,
            statusCode: 500,
        }
    }
}