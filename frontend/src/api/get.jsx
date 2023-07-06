import { BASE_API_URL } from "../utils/constants";
import { toastFailure } from "../utils/Toastify";

export async function handleGet(auth, url, setData, item) {
    const params = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`
        }
    };
    try {
        const response = await fetch(`${BASE_API_URL}${url}`, params);
        if (response.status === 200) {
            const responseData = await response.json();
            setData(responseData);
            item !== null && localStorage.setItem(item, JSON.stringify(responseData));
        } else {
            if (response.status === 401) {
                localStorage.removeItem('user');
                localStorage.removeItem('isLogged');
                toastFailure('Session expirée');
            }
            setData(null);
        }

    } catch (err) {
        console.log(err);
    }
}