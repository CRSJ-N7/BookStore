import { type PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { type RootState } from "../store/store";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export const ProtectedAuthRoute = ({ children }: PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (user) {
    return <Navigate to="/profile" />;
  }

  return children;
};
export default PrivateRoute;
