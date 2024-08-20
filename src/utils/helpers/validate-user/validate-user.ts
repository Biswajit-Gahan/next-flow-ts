"use server"

import {cookies} from "next/headers";
import CONFIG from "@/utils/configurations/config";
import jwt from "jsonwebtoken";

type ValidateUserReturnType = {
    uuid: string | null,
    iat: number | null,
    exp: number | null,
    message: string,
    isAuthenticated: boolean,
}

type JwtVerifyReturnType = {
    uuid: string,
    iat: number,
    exp: number
}

export default async function validateUser(): Promise<ValidateUserReturnType> {
    try {
        const accessToken = cookies().get(CONFIG.COOKIES_CONFIG.KEY_ACCESS_TOKEN)?.value;
        if(!accessToken) return {
            uuid: null,
            iat: null,
            exp: null,
            message: "Token not found.",
            isAuthenticated: false
        };
        const validateToken = jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY as string) as JwtVerifyReturnType;

        return {
            uuid: validateToken.uuid,
            iat: validateToken.iat,
            exp: validateToken.exp,
            message: "Validation Successful.",
            isAuthenticated: true,
        };
    } catch(error) {
        const {message} = error as Error;

        return {
            uuid: null,
            iat: null,
            exp: null,
            message,
            isAuthenticated: false,
        };
    }
}