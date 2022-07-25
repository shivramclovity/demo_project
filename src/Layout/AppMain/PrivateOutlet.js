import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateOutlet = ({ allowedRoles }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.authentication);
  // console.log("allowed Roles ", allowedRoles);
  return auth?.user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
