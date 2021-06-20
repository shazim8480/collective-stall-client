import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

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

const CheckOut = () => {
  const [loggedInUser] = useContext(UserContext);
  ///FINDING THE individual book id for showing the details for each book
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  }, [id]);

  // handle booking event handler//
  const handleOrder = () => {
    //   copying all booking infos into this button handler using spread operator//
    const orderDetails = {
      ...loggedInUser,
      ...bookData,
      orderTime: new Date(),
    };
    fetch("http://localhost:4000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails), // attention //
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const classes = useStyles();

  return (
    <Container>
      {/* header component */}
      <Header />
      {/* CheckOut section here */}
      <Typography align="center" gutterBottom variant="h5">
        CheckOut
      </Typography>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={bookData.name}>
              <TableCell component="th" scope="row">
                {bookData.name}
              </TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">{bookData.price}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.orderBtn}>
        <Button
          onClick={() => handleOrder()}
          component={Link}
          to="/orders"
          variant="contained"
          color="primary"
          disableElevation
        >
          See Orders
        </Button>
      </div>
    </Container>
  );
};

export default CheckOut;
