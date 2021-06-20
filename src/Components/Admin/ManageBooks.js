import React, { useEffect, useState } from "react";
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
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import adminStyles from "./AdminStyles";

const ManageBooks = () => {
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
  // for table///////////////////////////////////////////
  // const useStyles = makeStyles({
  //   table: {
  //     minWidth: 700,
  //   },
  // });
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  // for table///////////////////////////////////////////

  // main section here //
  // const { name, author, price } = book;
  //read books data and set them to a state//
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // delete book data on clicking delete button///
  const deleteBook = (id) => {
    fetch(`http://localhost:4000/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Deleted Successfully", result);
      });
  };
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

        {/* main section */}

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Book Name</StyledTableCell>
                <StyledTableCell align="left">Author</StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <StyledTableRow key={book.name}>
                  <StyledTableCell align="left" component="th" scope="row">
                    {book.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{book.author}</StyledTableCell>
                  <StyledTableCell align="left">{book.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      className={classes.deleteBtn}
                      onClick={() => deleteBook(book._id)}
                      variant="contained"
                      disableElevation
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
};

export default withRouter(ManageBooks);
