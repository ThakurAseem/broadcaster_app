import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import DashBoard from "./pages/DashBoard/DashBoard";
import NewsDetails from "./pages/News/NewsDetails";
import Weather from "./pages/DashBoard/Weather";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TextEditor from "./pages/TextEditor/TextEditor";
import Logout from "../src/pages/logout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={TextEditor} />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/details" component={NewsDetails} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
