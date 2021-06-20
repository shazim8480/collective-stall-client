import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useContext } from "react";
import { UserContext } from "../../App";

const OrderCollection = ({ order }) => {
  const { _id, name, price } = order;
  const [loggedInUser] = useContext(UserContext);

  return (
    <TableRow key={_id}>
      <TableCell component="th" scope="row">
        {_id}
      </TableCell>
      <TableCell align="center">{loggedInUser.email}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">1</TableCell>
      <TableCell align="center">{price}</TableCell>
    </TableRow>
  );
};

export default OrderCollection;
