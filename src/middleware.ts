import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import CONFIG from "@/utils/configurations/config";

export function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const accessToken = cookies().get(CONFIG.COOKIES_CONFIG.KEY_ACCESS_TOKEN)?.value;

    const RESTRICTED_PATHS = [
        CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS,
        CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY,
    ];

    const AUTH_PATHS = [
        CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN,
        CONFIG.PATHS_CONFIG.DEFAULT_PATHS.REGISTER,
    ];

    if(pathName.includes("fallback")) {
        const headers = new Headers();
        headers.append(
            "Set-Cookie",
            `${CONFIG.COOKIES_CONFIG.KEY_ACCESS_TOKEN}=""; httpOnly; Secure; Path=/; Max-Age=0`,
        )

        return NextResponse.redirect(
            new URL(CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN, request.nextUrl), {
                headers
            }
        )
    }

    if(RESTRICTED_PATHS.includes(pathName) && !accessToken){
        return NextResponse.redirect(new URL(
            `${CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN}?redirect=${pathName}`,
            request.nextUrl
        ));
    }

    if(AUTH_PATHS.includes(pathName) && accessToken) {
        return NextResponse.redirect(new URL(
            CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME,
            request.nextUrl
        ))
    }

    const response =  NextResponse.next();
    response.headers.set("pathname", pathName);
    return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
}