import CLIENT_COOKIES from "@/utils/helpers/client-cookies/client-cookies";
import apiRequest from "@/utils/helpers/api-request/api-request";
import DATABASE from "@/utils/helpers/database/database";
import validateUser from "@/utils/helpers/validate-user/validate-user";

const HELPERS = {
    CLIENT_COOKIES,
    API_REQUEST: apiRequest,
    DATABASE,
    VALIDATE_USER: validateUser,
}

export default HELPERS;