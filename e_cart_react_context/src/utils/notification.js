import { toast } from 'react-toastify';

export const POSITION = {
    TOP_RIGHT: 'top-right',
};

export const showSuccessMessage = (message, position = POSITION.TOP_RIGHT) => {
    toast.success(message, {
        position: position,
    });
};

export const showInfoMessage = (
    message,
    position = POSITION.TOP_RIGHT,
    theme
) => {
    toast.info(message, {
        position: position,
        theme: theme,
    });
};
