import {NextRequest, NextResponse} from "next/server";
import helpers from "@/utils/helpers/helpers";
import CONFIG from "@/utils/configurations/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type LoginPostApiReturnType = {
    data: { token: string } | null,
    message: string,
    status: boolean,
}

export type LoginPostApiRequestBodyType = {
    userId: number | null,
    password: string | null,
}

export async function POST(request: NextRequest): Promise<NextResponse<LoginPostApiReturnType>> {
    try {
        const {userId = null, password = null}: LoginPostApiRequestBodyType = await request.json();

        if (!userId || !password) return NextResponse.json(
            {
                data: null,
                message: CONFIG.MESSAGE_CONFIG.INVALID_REQUEST_PARAMETERS,
                status: false
            },
            {status: CONFIG.SERVER_STATUS_CODES.BAD_REQUEST}
        )

        const connectDb = await helpers.DATABASE.METHODS.connectDb();

        if (!connectDb.connectionState) throw new Error(connectDb.message);

        const foundUser = await helpers.DATABASE.DB_MODELS.USER_MODEL.findOne({userId});

        if (!foundUser) return NextResponse.json(
            {
                data: null,
                message: CONFIG.MESSAGE_CONFIG.INVALID_CREDENTIALS,
                status: false
            },
            {status: CONFIG.SERVER_STATUS_CODES.UNAUTHORIZED}
        )

        const verifyPassword = await bcrypt.compare(`${password}`, `${foundUser.password}`);

        if (!verifyPassword) return NextResponse.json(
            {
                data: null,
                message: CONFIG.MESSAGE_CONFIG.INVALID_CREDENTIALS,
                status: false
            },
            {status: CONFIG.SERVER_STATUS_CODES.UNAUTHORIZED}
        )

        const signString = jwt.sign(
            {uuid: foundUser._id,},
            `${process.env.JWT_PRIVATE_KEY}`,
            {expiresIn: `${process.env.JWT_EXPIRY_TIME}`}
        );

        await helpers.DATABASE.DB_MODELS.USER_AUTH_MODEL.findOneAndUpdate(
            {userId: foundUser._id},
            {token: signString},
            {
                new: true,
                upsert: true
            }
        );

        const headers = new Headers();
        headers.append(
            "Set-Cookie", `access-token=${signString}; HttpOnly; Secure; Path=/`
        )

        return NextResponse.json(
            {
                data: {token: signString},
                message: "Login successfully.",
                status: true,
            },
            {
                status: CONFIG.SERVER_STATUS_CODES.SUCCESS,
                headers,
            }
        )
    } catch (error) {
        const {message} = error as Error;
        return NextResponse.json(
            {
                data: null,
                message,
                status: false
            },
            {status: CONFIG.SERVER_STATUS_CODES.SERVER_ERROR}
        )
    }
}