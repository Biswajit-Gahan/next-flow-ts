const MESSAGE_CONFIG = {
    INVALID_CONTEXT: (contextName: string): string => {
        return `This ${contextName} cannot be used in this component.`
    },
    INVALID_REQUEST_PARAMETERS: "Invalid request parameters are provided. Please give correct parameters as required.",
    SERVER_ERROR: "Server Error Occurred.",
    INVALID_CREDENTIALS: "Invalid credentials.",
    AUTHORIZATION_HEADER_MISSING: "Authorization header is missing.",
    INVALID_TOKEN: "Invalid token received.",
    NOT_AUTHORIZED: "You are not authorized to logout.",
    LOGOUT_SUCCESS: "You are logged out.",
}

export default MESSAGE_CONFIG;