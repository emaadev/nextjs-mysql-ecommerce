import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return <Toaster position="bottom-center" reverseOrder={true} />;
};

export default ToastProvider;
