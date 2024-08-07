import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import CONFIG from "@/utils/configurations/config";
import LoginForm from "@/app/(pages)/login/login-form/login-form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login"
}

export default function Login() {
    return <section className={styles.container}>
        <Navbar />
        <section className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <h1 className={styles.heading}>Hello User!</h1>
                <p className={styles.description}>Please enter your credentials to continue.</p>
                <LoginForm />
                <p className={styles.info}>Not registered yet? <Link className={styles.webLink} href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.REGISTER} prefetch={false}>Register Here.</Link></p>
            </div>
        </section>
    </section>
}