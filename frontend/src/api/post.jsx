import { redirect } from 'react-router-dom';

import { AGENT_BASE_URL, BASE_API_URL } from '../utils/constants';
import { toastFailure, toastSuccess } from '../utils/Toastify';
import { handleGet } from './get';

export async function handlePost(auth, headers, body, url, setData, item, setInLoading, fx, getUrl, print, setCanFecth) {
    const params = {
        method: "POST",
        headers,
        body
    };
    setInLoading(true);
    try {
        const response = await fetch(`${BASE_API_URL}${url}`, params);
        const responseData = await response.json();
        if (response.status === 201) {
            setInLoading(false);
            setData(responseData);
            localStorage.setItem(item, JSON.stringify(responseData));
            fx(false);
            print(true);
            handleGet(auth, getUrl, setData, '');
            setCanFecth(true);
            toastSuccess('Enregistrement réussi');
        } else {
            if (response.status === 401) {
                localStorage.removeItem('user');
                localStorage.removeItem('isLogged');
                toastFailure("Session expirée");
            }
            toastFailure(responseData.msg || "Erreur d'enregistreeeeeeeeeeement");
            setData(null);
        }
        console.log(response.status);
    } catch (err) {
        toastFailure(responseData.msg || "Erreur d'enregistrement");
        toastFailure("Erreur d'enregistrement");
        setInLoading(false);
    }
};

export async function handleLogin(username, password, rememberMe, setLoginStatus, setUserType, setInLoading, setLocalUserData) {
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
        if (response.status === 200) {
            setLocalUserData(responseData);
            localStorage.setItem('user', JSON.stringify(responseData));
            setInLoading(false);
            setUserType(responseData.type);
            if (rememberMe.current.checked) {
                localStorage.setItem('isLogged', true);
            }
            setLoginStatus(true);
            toastSuccess('Connecté');
            redirect('/index');
        } else {
            setInLoading(false);
            toastFailure('Echec de connexion');
            return redirect('/login');
        }
    } catch (err) {
        setInLoading(false);
        toastFailure(err.json());
        return redirect('/login');
    }
}