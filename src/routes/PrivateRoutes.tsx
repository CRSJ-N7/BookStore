import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { type RootState } from "../store/store";
import { useSelector } from "react-redux";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
