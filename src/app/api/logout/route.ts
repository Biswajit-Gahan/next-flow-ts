import {NextRequest, NextResponse} from "next/server";
import CONFIG from "@/utils/configurations/config";
import jwt from "jsonwebtoken";
import helpers from "@/utils/helpers/helpers";

export type LogoutGetApiReturnType = {
    data: null,
    message: string,
    status: boolean,
}

export async function GET(request: NextRequest): Promise<NextResponse<LogoutGetApiReturnType>> {
    try {
        const accessToken = request.cookies.get(CONFIG.COOKIES_CONFIG.KEY_ACCESS_TOKEN)?.value;

        if (!accessToken) return NextResponse.json({
            data: null,
            message: CONFIG.MESSAGE_CONFIG.AUTHORIZATION_HEADER_MISSING,
            status: false,
        }, {status: CONFIG.SERVER_STATUS_CODES.UNAUTHORIZED});

        const decodedToken = jwt.decode(accessToken) as {uuid: string} | null;

        if(!decodedToken) return NextResponse.json({
            data: null,
            message: CONFIG.MESSAGE_CONFIG.INVALID_TOKEN,
            status: false,
        }, {status: CONFIG.SERVER_STATUS_CODES.UNAUTHORIZED});

        const foundTokenInDb = await helpers.DATABASE.DB_MODELS.USER_AUTH_MODEL.findOne({userId: `${decodedToken?.uuid}`});

        if(!foundTokenInDb || (foundTokenInDb.token !== accessToken)) return NextResponse.json({
            data: null,
            message: CONFIG.MESSAGE_CONFIG.NOT_AUTHORIZED,
            status: false,
        }, {status: CONFIG.SERVER_STATUS_CODES.UNAUTHORIZED});

        await helpers.DATABASE.DB_MODELS.USER_AUTH_MODEL.findOneAndUpdate(
            {userId: decodedToken.uuid},
            {token: ""}
        )

        const headers = new Headers();
        headers.append(
            "Set-Cookie",
            `${CONFIG.COOKIES_CONFIG.KEY_ACCESS_TOKEN}=; HttpOnly; Secure; Path=/; Max-Age=0`,
        )

        return NextResponse.json({
            data: null,
            message: CONFIG.MESSAGE_CONFIG.LOGOUT_SUCCESS,
            status: true,
        }, {
            status: CONFIG.SERVER_STATUS_CODES.SUCCESS,
            headers,
        });

    } catch(error) {
        const {message} = error as Error;
        return NextResponse.json({
            data: null,
            message,
            status: false,
        }, {status: CONFIG.SERVER_STATUS_CODES.SERVER_ERROR});
    }
}