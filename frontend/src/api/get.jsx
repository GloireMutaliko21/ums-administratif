import { API_URL } from "../utils/constants";

export async function handleGet(auth, url, setData, item) {
    const params = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`
        }
    };
    try {
        const response = await fetch(`${API_URL}${url}`, params);
        if (response.status === 200) {
            const responseData = await response.json();
            setData(responseData);
            item && localStorage.setItem(item, JSON.stringify(responseData));
        } else {
            setData(null);
        }
    } catch (err) {
        console.log(err);
    }
}