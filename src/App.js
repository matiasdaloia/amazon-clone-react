import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser.email);
      if (authUser) {
        //it means that the user just logged in / or was already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
