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

const API_ENDPOINTS = {}


const PATHS_CONFIG = {
    DEFAULT_PATHS,
    API_ENDPOINTS,
}

export default PATHS_CONFIG;