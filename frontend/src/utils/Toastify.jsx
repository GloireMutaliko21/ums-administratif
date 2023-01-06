import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = (message) => {
    return toast.success(message, {
        position: toast.POSITION.BOTTOM_LEFT
    });
};

export const toastFailure = (message) => {
    return toast.error(message, {
        position: toast.POSITION.BOTTOM_LEFT
    });
};