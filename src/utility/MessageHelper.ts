import { toast, ToastPosition, Theme } from 'react-toastify';

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

export const notifyUser = (type: TypeOptions, message: string, theme: Theme = 'light', position: ToastPosition = 'top-center', autoClose = 5000, hideProgressBar = false) => {
  return toast?.[type](message, {
    position,
    autoClose,
    hideProgressBar,
    theme,
    pauseOnHover: true,
    progress: undefined
  });
};