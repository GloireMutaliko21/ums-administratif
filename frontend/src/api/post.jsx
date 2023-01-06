import { AGENT_BASE_URL, BASE_API_URL } from '../utils/constants';

export async function handlePost(auth, body, url, contentType, setData, data, item, setInLoading) {
    const params = {
        method: "POST",
        headers: {
            'Content-Type': contentType,
            'Authorization': `Bearer ${auth}`
        },
        body
    };
    setInLoading(true);
    try {
        const response = await fetch(`${BASE_API_URL}${url}`, params);
        if (response.status === 201) {
            const responseData = await response.json();
            await setData(responseData);
            localStorage.setItem(item, JSON.stringify(responseData));
            // setAbleToLogin(true);

            setLoginStatus(true);
        } else {
            setData(null);
            // setAbleToLogin(false);
        }
    } catch (err) {
        setInLoading(false);
        // setAbleToLogin(false);
        console.log(err);
    }
};

export async function handleLogin(username, password, rememberMe, setLoginStatus, setUserType, setInLoading) {
    const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    }
    setInLoading(true);
    try {
        const response = await fetch(`${BASE_API_URL}${AGENT_BASE_URL}/login`, params);
        const responseData = await response.json();
        if (response.status === 201) {
            localStorage.setItem('user', JSON.stringify(responseData));
            setInLoading(false);
            setUserType(responseData.type);
            if (rememberMe.current.checked) {
                localStorage.setItem('isLogged', true);
            }
            setLoginStatus(true);
        }
    } catch (err) {
        setInLoading(false);
        // setErrorLoginMsg(err.json());
        console.log(err);
    }
}