import { selectIsLoggedIn } from "redux/auth/selectors";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export const RestrictedRoute = ({ children: Component, redirectTo = '/' }) => {
    const isLoading = useSelector(selectIsLoggedIn);
  return isLoading ? <Navigate to={redirectTo} /> : Component;
};