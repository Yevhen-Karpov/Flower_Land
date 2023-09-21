import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import authOperations from "./redux/auth/auth-operations";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/layout";
import HomePage from "./pages/HomePage/HomePage";
// import PrivateRoute from "./components/Routes/PrivateRoute";
// import PublicRoute from "./components/Routes/PublicRoute";

const AchimenesPage = lazy(() => import("./pages/AchimenesPage/AchimenesPage"));
const VioletsPage = lazy(() => import("./pages/VioletsPage/VioletsPage"));
const GeranPage = lazy(() => import("./pages/GeranPage/GeranPage"));
const CommentsPage = lazy(() => import("./pages/CommentsPage/CommentsPage"));
const PrivateCollectionPage = lazy(() =>
  import("./pages/PrivateCollectionPage/PrivateCollectionPage")
);

const LoginForm = lazy(() => import("./pages/LoginPage/LoginForm"));
const RegisterForm = lazy(() => import("./pages/RegisterPage/RegisterForm"));
const AchimenesDetailsView = lazy(() => import("./views/AchimenesDetailsView"));
const VioletsDetailsView = lazy(() => import("./views/VioletsDetailsView"));
const GeranDetailsView = lazy(() => import("./views/GeranDetailsView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="achimenes" element={<AchimenesPage />}>
            <Route path=":achimeneId" element={<AchimenesDetailsView />} />
          </Route>

          <Route path="violets" element={<VioletsPage />}>
            <Route path=":violetId" element={<VioletsDetailsView />} />
          </Route>

          <Route path="gerans" element={<GeranPage />}>
            <Route path=":geranId" element={<GeranDetailsView />} />
          </Route>

          <Route path="comments" element={<CommentsPage />} />

          <Route
            path="/login"
            restricted
            redirectTo="/collections"
            element={<LoginForm />}
          />
          <Route path="/register" restricted element={<RegisterForm />} />

          <Route
            path="/collections"
            element={<PrivateCollectionPage />}
            redirectTo="/login"
          />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}
