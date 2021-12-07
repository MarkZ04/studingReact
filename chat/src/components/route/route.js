import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth, to = "/", children }) => {
  return !!isAuth ? children : <Navigate replace to={to} />;
};

export const PublicRoute = ({ isAuth, to = "/", children }) => {
  return !isAuth ? children : <Navigate replace to={to} />;
};