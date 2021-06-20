import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";
import adminStyles from "./AdminStyles";
import { UserContext } from "../../App";

const Admin = () => {
  // use context api from app.js////////////////////
  const [loggedInUser] = useContext(UserContext);
  //list item menu handler
  const history = useHistory();
  const listItems = [
    {
      headerTitle: "Manage Books",
      pageURL: "/manageBooks",
    },
    {
      headerTitle: "Add Books",
      pageURL: "/addBooks",
    },
  ];

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };
  //list item menu handler

  const classes = adminStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Collective Stall
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {listItems.map((listItem, index) => {
              const { headerTitle, pageURL } = listItem;
              return (
                <ListItem
                  button
                  onClick={() => handleMenuClick(pageURL)}
                  key={headerTitle}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <MenuBookIcon /> : <LibraryAddIcon />}
                  </ListItemIcon>
                  <ListItemText primary={headerTitle} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography variant="h6">Welcome, {loggedInUser.name}</Typography>
      </main>
    </div>
  );
};

export default withRouter(Admin);
