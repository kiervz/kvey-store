import { toast, ToastPosition, Theme } from 'react-toastify';

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

export const notifyUser = (type: TypeOptions, message: string, position: ToastPosition = 'top-right', autoClose: number = 5000, hideProgressBar: boolean = false, theme: Theme = 'light') => {
  return toast?.[type](message, {
    position,
    autoClose,
    hideProgressBar,
    theme,
    pauseOnHover: true,
    progress: undefined
  });
};