import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
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

    return () => {
      // any clean up operations go here
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      {/* BEM */}
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* Default path */}
          <Route Path="/">
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
