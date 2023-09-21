import { useSelector } from "react-redux";
import { Route, redirect } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  // redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? redirect('/') : children}
    </Route>
  );
}
