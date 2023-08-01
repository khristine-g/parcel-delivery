import "./App.css";
import Footer from "./components/footer/footer";
import SignupPage from "./components/signup/Signup";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Footer />
      </Route>
      <Route exact path="/">
        <LoginPage />
      </Route>

      <Route path="/register">
        <SignupPage />
      </Route>
    </div>
  );
}

export default App;
