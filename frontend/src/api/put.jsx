import { BASE_API_URL } from "../utils/constants";
import { toastFailure, toastSuccess } from "../utils/Toastify";

export const handleUpdate = async (url, params) => {
    try {
        const response = await fetch(`${BASE_API_URL}${url}`, params);
        if (response.status === 201) {
            toastSuccess('MAJ réussi');
            return await response.json();
        } else {
            if (response.status === 401) {
                localStorage.removeItem('user');
                localStorage.removeItem('isLogged');
                toastFailure('Session expirée');
            }
            toastFailure('Echec de MAJ');
        }
    } catch (err) {
        toastFailure('Echec de MAJ');
    }

};