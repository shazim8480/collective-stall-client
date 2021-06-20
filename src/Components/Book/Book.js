import { Grid } from "@material-ui/core";
import React from "react";
import bookStyles from "./BookStyle";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const Book = ({ book }) => {
  const classes = bookStyles();
  const { name, author, price, imageURL, _id } = book;
  // buy now btn onClick //
  let history = useHistory();
  const handleClickToCheckOut = () => {
    history.push("/checkOut/" + _id);
  };
  return (
    <>
      {/* <Container> */}
      <Grid className={classes.bookContainer} item xs={10} lg={3}>
        <div className={classes.bookCover}>
          <img className={classes.coverImage} src={imageURL} alt="" />
        </div>
        <div className={classes.author}>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle">
            {author}
          </Typography>
        </div>
        <div className={classes.bookPrice}>
          <Typography color="primary" variant="h5">
            {price}
          </Typography>
          <Button
            disableElevation
            onClick={handleClickToCheckOut}
            // component={Link}
            variant="contained"
            color="primary"
          >
            Buy Now
          </Button>
        </div>
      </Grid>
      {/* </Container> */}
    </>
  );
};

export default Book;
