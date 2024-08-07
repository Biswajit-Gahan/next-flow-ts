import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import CONFIG from "@/utils/configurations/config";

export function middleware(request: NextRequest) {
    // const pathName = request.nextUrl.pathname;
    // const clientToken = cookies().get(CONFIG.COOKIES_CONFIG.KEY_CLIENT_TOKEN)?.value;
    //
    // const RESTRICTED_PATHS = [
    //     CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS,
    //     CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY,
    // ];
    //
    // const AUTH_PATHS = [
    //     CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN,
    //     CONFIG.PATHS_CONFIG.DEFAULT_PATHS.REGISTER,
    // ];
    //
    // if(RESTRICTED_PATHS.includes(pathName) && !clientToken){
    //     return NextResponse.redirect(new URL(
    //         `${CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN}?redirect=${pathName}`,
    //         request.nextUrl
    //     ));
    // }
    //
    // if(AUTH_PATHS.includes(pathName) && clientToken) {
    //     return NextResponse.redirect(new URL(
    //         CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME,
    //         request.nextUrl
    //     ))
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
}