import styles from "./navbar.module.css";
import a from "next/link";
import CONFIG from "@/utils/configurations/config";
import Logout from "@/components/navbar/logout/logout";
import {cookies} from "next/headers";

function SignedInPaths() {
    return <ul className={styles.navList}>
        <li className={styles.navLink}>
            <a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME} >Home</a>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS} >Products</a>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY} >Gallery</a>
        </li>
        <li className={styles.divider}></li>
        <Logout />
    </ul>
}

function SignedOutPaths() {
    return <ul className={styles.navList}>
        <li className={styles.navLink}>
            <a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME} >Home</a>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN} >Login</a>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.REGISTER} >Register</a>
        </li>
    </ul>
}

export default function Navbar() {
    const isSignedIn = cookies().get(CONFIG.COOKIES_CONFIG.KEY_ACCESS_TOKEN)?.value || null;

    return <nav className={styles.container}>
        <div className={styles.brandName}><a href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME}>NextFlow</a></div>

        {
            isSignedIn ? <SignedInPaths/> : <SignedOutPaths/>
        }
    </nav>
}