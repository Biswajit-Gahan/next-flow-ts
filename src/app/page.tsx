import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import CONFIG from "@/utils/configurations/config";

export default function Home() {
    return (
        <section className={styles.container}>
            <Navbar />
            <section className={styles.wrapper}>
                <h1 className={styles.heading}>Welcome to the NextFlow project.</h1>
                <p className={styles.description}>
                    Visit our&nbsp;
                    <Link className={styles.pageLink} href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS}>Products</Link> and&nbsp;
                    <Link className={styles.pageLink} href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY}>Gallery</Link> pages to find all the exiting things.
                </p>
            </section>
        </section>
    );
}
