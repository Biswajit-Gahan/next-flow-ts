import styles from "./navbar.module.css";
import Link from "next/link";
import CONFIG from "@/utils/configurations/config";
import Logout from "@/components/navbar/logout/logout";

function SignedInPaths() {
    return <ul className={styles.navList}>
        <li className={styles.navLink}>
            <Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME} prefetch={false}>Home</Link>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS} prefetch={false}>Products</Link>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY} prefetch={false}>Gallery</Link>
        </li>
        <li className={styles.divider}></li>
        <Logout />
    </ul>
}

function SignedOutPaths() {
    return <ul className={styles.navList}>
        <li className={styles.navLink}>
            <Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME} prefetch={false}>Home</Link>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN} prefetch={false}>Login</Link>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.navLink}>
            <Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.REGISTER} prefetch={false}>Register</Link>
        </li>
    </ul>
}

export default function Navbar() {
    const flag = false;
    return <nav className={styles.container}>
        <div className={styles.brandName}><Link href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME}>NextFlow</Link></div>

        {
            flag ? <SignedInPaths/> : <SignedOutPaths/>
        }
    </nav>
}