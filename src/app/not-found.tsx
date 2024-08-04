import styles from "./not-found.module.css";
import Navbar from "@/components/navbar/navbar";
import CONFIG from "@/utils/configurations/config";
import Link from "next/link";

export default function NotFound() {
    const WEB_LINKS = [
        {
            LINK: CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME,
            NAME: "Home",
        },

        {
            LINK: CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS,
            NAME: "Products",
        },

        {
            LINK: CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY,
            NAME: "Gallery",
        }
    ];

    return <section className={styles.container}>
        <Navbar />
        <section className={styles.wrapper}>
            <h1 className={styles.heading}>I am pretty sure, your are lost in the space.</h1>
            <p className={styles.description}>Please go back to the earth by visiting below links.</p>
            <div className={styles.webLinkContainer}>
                {
                    WEB_LINKS.map((webLink, index) => {
                        return <Link className={styles.webLink} href={webLink.LINK} key={index} prefetch={false}>{webLink.NAME}</Link>
                    })
                }
            </div>
        </section>
    </section>
}