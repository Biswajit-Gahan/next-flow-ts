"use client";

import styles from "../navbar.module.css";
import helpers from "@/utils/helpers/helpers";
import {LogoutGetApiReturnType} from "@/app/api/logout/route";
import CONFIG from "@/utils/configurations/config";

export default function Logout() {
    async function handleLogout() {
        const responseData = await helpers.API_REQUEST<null, LogoutGetApiReturnType>({
            endpoint: CONFIG.PATHS_CONFIG.API_PATHS.LOGOUT,
            method: "GET",
            token: null,
            data: null,
        })

        if(!responseData.result) {
            alert(responseData.error)
        } else {
            if(!responseData.result.status) {
                alert(responseData.result.message)
            } else {
                window.location.replace(CONFIG.PATHS_CONFIG.DEFAULT_PATHS.LOGIN);
            }
        }
    }

    return <li className={styles.navLink} onClick={handleLogout}>Logout</li>
}