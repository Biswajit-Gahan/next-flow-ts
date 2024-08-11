import jwt from 'jsonwebtoken';
import helpers from "@/utils/helpers/helpers";

const PRIVATE_KEY = 'FT67YU89I0OKP90876T5FR67Y8U9I0O';

const JSON_WEB_TOKEN = {
    setExpiry(time: number = 30): number {
        const ms = 1000;
        return time * ms;
    },

    async generateToken(tokenData: {uuid: string}, expiryTime: string): Promise<{token: string | null, message: string, status: boolean}> {
        const data = await helpers.asyncWrapper<string>(
            async () => {
                return jwt.sign(tokenData, PRIVATE_KEY, {expiresIn: expiryTime});
            }
        );
        return {
            token: data.response,
            message: data.message,
            status: data.status
        }
    },

    async verifyToken(token: string): Promise<{response: jwt.JwtPayload | string | null, message: string, status: boolean}> {
        const data = await helpers.asyncWrapper<jwt.JwtPayload | string>(
            async () => {
                return jwt.verify(token, PRIVATE_KEY);
            }
        );
        return {
            response: data.response,
            message: data.message,
            status: data.status,
        }
    }
}

export default JSON_WEB_TOKEN;