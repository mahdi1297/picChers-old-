import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toasts = ({ type, message }) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      break;
  }

  return (
    <ToastContainer
      limit={1}
      style={{ position: "fixed", top: "100px", right: "30px" }}
    />
  );
};

export default Toasts;
