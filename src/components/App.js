import Header from "./components/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Switch, NavLink } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import CreateAccount from "./components/Login/CreateAccount";
import ForgetPass from "./components/Login/ForgetPass";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <NavLink className="login" to="/login">
        Login/SignUp
      </NavLink>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={CreateAccount} />
        <Route path="/frogetpassword" exact component={ForgetPass} />
      </Switch>
    </div>
  );
}
