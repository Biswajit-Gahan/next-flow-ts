"use client";

import styles from "../page.module.css";
import React from "react";
import helpers from "@/utils/helpers/helpers";
import CONFIG from "@/utils/configurations/config";
import {LoginPostApiRequestBodyType, LoginPostApiReturnType} from "@/app/api/login/route";
import {useSearchParams} from "next/navigation";

export default function LoginForm() {
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userId = formData.get("user-id");
        const userPassword = formData.get("user-password");

        if(!userId || !userPassword) {
            alert("Invalid credentials entered.");
        } else {
            const responseData = await helpers.API_REQUEST<LoginPostApiRequestBodyType, LoginPostApiReturnType>(
                {
                    endpoint: CONFIG.PATHS_CONFIG.API_PATHS.LOGIN,
                    method: "POST",
                    token: null,
                    data: {
                        userId: +userId,
                        password: `${userPassword}`,
                    }
                }
            )

            if(!responseData.result) {
                alert(responseData.error)
            } else {
                if(!responseData.result.status) {
                    alert(responseData.result.message)
                } else {
                    redirect ? window.location.replace(redirect) : window.location.replace(CONFIG.PATHS_CONFIG.DEFAULT_PATHS.HOME);
                }
            }
        }
    }

    return <form className={styles.form} onSubmit={handleFormSubmit}>
        <input className={styles.input} type="text" name={"user-id"} placeholder={"User ID"} autoComplete={"off"}/>
        <input className={styles.input} type="password" name={"user-password"} placeholder={"Password"}
               autoComplete={"off"}/>
        <button className={styles.button} type={"submit"}>Login</button>
    </form>
}