import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // firebase authentication login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if succesfully created new user and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      // if there is any error, catch it and send an alert
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          className="login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's FAKE CLONE Conditions of Use
            and Privacy Notice.
          </p>
          <button
            type="submit"
            onClick={register}
            className="login__registerButton"
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
