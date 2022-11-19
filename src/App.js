import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import authOperations from "./redux/auth/auth-operations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

const AchimenesPage = lazy(() => import("./pages/AchimenesPage/AchimenesPage"));
const VioletsPage = lazy(() => import("./pages/VioletsPage/VioletsPage"));
const GeranPage = lazy(() => import("./pages/GeranPage/GeranPage"));
const PrivateCollectionPage = lazy(() =>
  import("./pages/PrivateCollectionPage/PrivateCollectionPage")
);

const LoginForm = lazy(() => import("./pages/LoginPage/LoginForm"));
const RegisterForm = lazy(() => import("./pages/RegisterPage/RegisterForm"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={5000} pauseOnHover theme="colored" />
      <Header />
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <PublicRoute path="/" exact component={HomePage} />

          <PublicRoute path="/achimenes" component={AchimenesPage} />

          <PublicRoute path="/violets" component={VioletsPage} />

          <PublicRoute path="/gerans" component={GeranPage} />

          <PublicRoute
            path="/login"
            restricted
            redirectTo="/collections"
            component={LoginForm}
          />
          <PublicRoute path="/register" restricted component={RegisterForm} />

          <PrivateRoute
            path="/collections"
            component={PrivateCollectionPage}
            redirectTo="/login"
          />
        </Suspense>
      </Switch>
      <Footer />
    </>
  );
}
