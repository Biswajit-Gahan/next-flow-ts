import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import CONFIG from "@/utils/configurations/config";
import RegisterForm from "@/app/(pages)/register/register-form/register-form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Register"
}

export default function Register() {
    return <section className={styles.container}>
        <Navbar />
        <section className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <h1 className={styles.heading}>Hello New User!</h1>
                <p className={styles.description}>Please fill-up this form continue.</p>
                <RegisterForm />
                <p className={styles.info}>Already registered? <Link className={styles.webLink} href={CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN} prefetch={false}>Login Here.</Link></p>
            </div>
        </section>
    </section>
}