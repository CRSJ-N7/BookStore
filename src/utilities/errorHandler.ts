import { toast } from "react-toastify";
import type { AxiosErrorWithData } from "../types/types";

const toastError = (error: unknown) => {
  const axiosError = error as AxiosErrorWithData;
  toast.error(axiosError.response?.data.message);
};

export default toastError;
