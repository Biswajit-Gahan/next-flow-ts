import styles from "./page.module.css";
import {Metadata} from "next";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
    title: "Gallery",
}

export default function Gallery() {
    return <section className={styles.container}>
        <Navbar />
        <section className={styles.wrapper}>
            <p className={styles.text}>Welcome to the <strong className={styles.galleryText}>GALLERY.</strong></p>
        </section>
    </section>
}