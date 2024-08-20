const DEFAULT_PATHS = {
    HOME: "/",
    PRODUCTS: "/products",
    GALLERY: "/gallery",
    LOGIN: "/login",
    REGISTER: "/register",
    product: (id: string): string => {
        return `/products/${id}`
    }
}

const API_PATHS = {
    LOGIN: "/login",
    REGISTER: "/register",
    BASE_URL: "/api",
    LOGOUT: "/logout",
}


const PATHS_CONFIG = {
    DEFAULT_PATHS,
    API_PATHS,
}

export default PATHS_CONFIG;