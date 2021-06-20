import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import OrderCollection from "./OrderCollection";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: "30px",
  },
  orderBtn: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "15px",
  },
});

const Orders = () => {
  const classes = useStyles();
  const [loggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]); // must set it to empty array in order for "orders.map" to work//

  // reading the api from database//
  useEffect(() => {
    //sending query parameters for separate user bookings//
    fetch("http://localhost:4000/orders?email=" + loggedInUser.email, {
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);

  return (
    <Container>
      {/* header component */}
      <Header />
      {/* CheckOut section here */}
      <Typography gutterBottom variant="h5" align="center">
        All Orders
      </Typography>
      {/* Table section here*/}
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Order Id</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">Book Description</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderCollection key={order._id} order={order}></OrderCollection>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table section here*/}

      <div className={classes.orderBtn}>
        <Button
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
          disableElevation
        >
          Confirm
        </Button>
      </div>
    </Container>
  );
};

export default Orders;
