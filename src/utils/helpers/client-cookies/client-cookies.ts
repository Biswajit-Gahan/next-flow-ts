const CLIENT_COOKIES = {
    getCookie: (key: string): string | null => {
        const cookies = document.cookie.split(';');

        const foundData = cookies.find(cookie => cookie.includes(`${key}=`));

        if(!foundData) return null;

        return foundData.split('=')[1];
    },
    setCookie: (key: string, value: string, expireTime: string) => {
        document.cookie = `${key}=${value};expires=${expireTime};path="/";`;
    },

    setExpires: (HOURS: number = 24): string => {
        const MINUTES = 60;
        const SECONDS = 60;
        const MILLISECONDS = 1000;
        return new Date(Date.now() + (HOURS * MINUTES * SECONDS * MILLISECONDS)).toString();
    }
}

export default CLIENT_COOKIES;