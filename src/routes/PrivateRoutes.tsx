import { type PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { type RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/hooks";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  console.log("PrivateRoute user:", user, "loading:", loading);

  if (loading) return null;

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export const ProtectedAuthRoute = ({ children }: PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  if (loading) return null;

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default PrivateRoute;
