import { useSelector } from "react-redux";
import { Route, redirect } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

export default function PrivateRoute({
  children,
  // redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <Route {...routeProps}>{isLoggedIn ? children : redirect("/")}</Route>;
}
