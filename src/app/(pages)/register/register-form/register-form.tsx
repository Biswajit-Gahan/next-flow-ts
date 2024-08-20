"use client";

import styles from "../page.module.css";
import React from "react";
import helpers from "@/utils/helpers/helpers";
import {RegisterApiPostRequestBodyType, RegisterApiPostReturnType} from "@/app/api/register/route";
import CONFIG from "@/utils/configurations/config";
import {useRouter} from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userId = formData.get("user-id");
        const userPassword = formData.get("user-password");
        const userName = formData.get("user-name");

        if(!userId || !userPassword || !userName) {
            alert("Invalid credentials entered.");
        } else {
            const responseData = await helpers.API_REQUEST<RegisterApiPostRequestBodyType, RegisterApiPostReturnType>(
                {
                    endpoint: CONFIG.PATHS_CONFIG.API_PATHS.REGISTER,
                    method: "POST",
                    token: null,
                    data: {
                        userId: +userId,
                        password: `${userPassword}`,
                        userName: `${userName}`,
                    }
                }
            )

            if(!responseData.result) {
                alert(responseData.error)
            } else {
                if(!responseData.result.status) {
                    alert(responseData.result.message)
                } else {
                    router.push(CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN);
                }
            }
        }
    }

    return <form className={styles.form} onSubmit={handleFormSubmit}>
        <input className={styles.input} type="text" name={"user-name"} placeholder={"User Name"} autoComplete={"off"}/>
        <input className={styles.input} type="text" name={"user-id"} placeholder={"User ID"} autoComplete={"off"}/>
        <input className={styles.input} type="password" name={"user-password"} placeholder={"Password"}
               autoComplete={"off"}/>
        <button className={styles.button} type={"submit"}>Register</button>
    </form>
}