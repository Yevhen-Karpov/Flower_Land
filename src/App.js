import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AchimenesPage from "./pages/AchimenesPage/AchimenesPage";
import VioletsPage from "./pages/VioletsPage/VioletsPage";
import GeranPage from "./pages/GeranPage/GeranPage";
import LoginForm from "./pages/LoginPage/LoginForm";
import RegisterForm from "./pages/RegisterPage/RegisterForm";
import { PrivateRoute, PublicRoute } from "./components/Routes";
// import AchimenesDetailsView from "./views/AchimenesDetailsView";
// import VioletsDetailsView from "./views/VioletsDetailsView";
// import GeranDetailsView from "./views/GeranDetailsView";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/achimenes" component={AchimenesPage} />
        {/* <Route path="/achimenes/:achimeneId" component={AchimenesDetailsView} /> */}
        <Route path="/violets" component={VioletsPage} />
        {/* <Route path="/violets/:violetId" component={VioletsDetailsView} /> */}
        <Route path="/gerans" component={GeranPage} />
        {/* <Route path="/gerans/:geranId" component={GeranDetailsView} /> */}
        <Route path="/login" restricted component={LoginForm} />
        <Route path="/register" restricted component={RegisterForm} />
      </Switch>
      <Footer />
    </>
  );
}
