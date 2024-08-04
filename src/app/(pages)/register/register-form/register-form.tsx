"use client";

import styles from "../page.module.css";
import React from "react";

export default function RegisterForm() {
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return <form className={styles.form} onSubmit={handleFormSubmit}>
        <input className={styles.input} type="text" name={"user-name"} placeholder={"User Name"} autoComplete={"off"}/>
        <input className={styles.input} type="text" name={"user-id"} placeholder={"User ID"} autoComplete={"off"}/>
        <input className={styles.input} type="password" name={"user-password"} placeholder={"Password"}
               autoComplete={"off"}/>
        <button className={styles.button} type={"submit"}>Register</button>
    </form>
}