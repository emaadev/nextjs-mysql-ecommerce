import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={true}
      toastOptions={{ duration: 3000 }}
    />
  );
};

export default ToastProvider;
