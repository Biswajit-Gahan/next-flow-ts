type AsyncWrapperReturnType<T> = {
    response: T | null,
    message: string,
    status: boolean,
}

export default async function asyncWrapper<T>(fn: () => Promise<T>): Promise<AsyncWrapperReturnType<T>> {
    try {
        const response = await fn();
        return {
            response,
            message: "Success",
            status: true,
        }
    } catch (error: unknown) {
        if(error instanceof Error) {
            return {
                response: null,
                message: error.message,
                status: false,
            }
        } else {
            return {
                response: null,
                message: "Error",
                status: false,
            }
        }
    }
}