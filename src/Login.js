import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const login = (event) => {
    event.preventDefault(); // stops the refresh! very important!
    //login logic goes here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); // stops the refresh! very important!
    // register logic goes here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, then redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
    setOpen(false);
  };
  return (
    <div className="login">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="signup__logo"
                src="http://www.vectorico.com/wp-content/uploads/2018/02/Twitter-Logo-Blue.png"
                alt=""
              />
            </center>

            <Input
              className="signup__containerInput1"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              type="text"
            />
            <Input
              className="signup__containerInput2"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            <Button
              onClick={register}
              type="submit"
              className="login__signInButton"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <img
        className="login__logo"
        src="http://www.vectorico.com/wp-content/uploads/2018/02/Twitter-Logo-Blue.png"
        alt=""
      />
      <h1>Log in to Twitter</h1>
      <div className="login__container">
        <form>
          <Input
            className="login__containerInput1"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <Input
            className="login__containerInput2"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <Button onClick={login} type="submit" className="login__signInButton">
            Log in
          </Button>
          <h5>OR</h5>
        </form>
        <Button
          className="login__registerButton"
          type="submit"
          onClick={() => setOpen(true)}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default Login;
