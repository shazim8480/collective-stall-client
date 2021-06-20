import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Orders from "./Components/Orders/Orders";
import CheckOut from "./Components/CheckOut/CheckOut";
import Error from "./Components/Error/Error";
import AddBooks from "./Components/Admin/AddBooks";
import ManageBooks from "./Components/Admin/ManageBooks";

export const UserContext = createContext();

const theme = createMuiTheme({
  typography: {
    fontFamily: "'IBM Plex Serif', serif",

    button: {
      fontFamily: "'IBM Plex Serif', serif",
      textTransform: "capitalize",
      fontSize: "18px",
      fontWeight: 600,
    },
  },
});
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <Route path="/manageBooks">
                <ManageBooks />
              </Route>
              <Route path="/addBooks">
                <AddBooks />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/orders">
                <Orders />
              </PrivateRoute>
              <PrivateRoute path="/checkOut/:id">
                <CheckOut />
              </PrivateRoute>
              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
