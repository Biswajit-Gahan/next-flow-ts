import {NextRequest, NextResponse} from "next/server";
import helpers from "@/utils/helpers/helpers";
import CONFIG from "@/utils/configurations/config";
import bcrypt from "bcrypt";

export type RegisterApiPostReturnType = {
    status: boolean,
    message: string,
    data: null
}

export type RegisterApiPostRequestBodyType = {
    userId: number | null,
    password: string | null,
    userName: string | null,
}

export async function POST(request: NextRequest): Promise<NextResponse<RegisterApiPostReturnType>> {
    try {
        const {userId = null, password = null, userName = null}: RegisterApiPostRequestBodyType = await request.json();

        if(!userId || !password || !userName) return NextResponse.json(
            {
                status: true,
                message: CONFIG.MESSAGE_CONFIG.INVALID_REQUEST_PARAMETERS,
                data: null
            },
            {
                status: CONFIG.SERVER_STATUS_CODES.SUCCESS,
            }
        )

        const bcryptString = await bcrypt.hash(`${password}`, 8);

        if (bcryptString.charAt(0) !== "$") throw new Error(bcryptString);

        const connectDb = await helpers.DATABASE.METHODS.connectDb();

        if (!connectDb.connectionState) throw new Error(connectDb.message);

        const newUser = new helpers.DATABASE.DB_MODELS.USER_MODEL({
            userId,
            userName,
            password: bcryptString,
        });

        await newUser.save();

        return NextResponse.json(
            {
                status: true,
                message: "User registered successfully.",
                data: null
            },
            {
                status: CONFIG.SERVER_STATUS_CODES.SUCCESS,

            }
        )

    } catch(error) {
        const {message} = error as Error;
        return NextResponse.json(
            {
                status: false,
                message,
                data: null
            },
            {status: CONFIG.SERVER_STATUS_CODES.SERVER_ERROR}
        )
    }
}