import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Book from "../Book/Book";
import Grid from "@material-ui/core/Grid";

import { Container } from "@material-ui/core";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/books`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);
  return (
    <Container>
      {/* header component */}
      <Header />
      {/* Book component */}
      <Grid container justify="space-evenly" alignItems="center" spacing={3}>
        {books.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
