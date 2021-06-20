import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import adminStyles from "./AdminStyles";

const AddBooks = () => {
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
  // add book section////////////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // this triggers validation event on change//
  });
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit = (data) => {
    const bookData = {
      name: data.name,
      author: data.author,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:4000/addBook`;
    console.log(bookData);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then((res) => {
      console.log("server side response", res);
    });
  };

  // for image handling //////////////////////////////////
  const handleImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "22477639cefee084ec3b3ca78f7fdfd2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
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
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <Typography variant="h6">Book Name</Typography>
              <TextField
                name="name"
                label="Enter Name"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
                id="name"
                {...register("name", { required: "*Book Name is required" })}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Typography variant="h6">Author Name</Typography>
              <TextField
                name="author"
                label="Enter Author"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
                id="author"
                {...register("author", { required: "*Book Name is required" })}
                error={Boolean(errors.author)}
                helperText={errors.author?.message}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <Typography variant="h6">Add Price</Typography>
              <TextField
                name="price"
                label="Enter Price"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
                id="price"
                {...register("price", { required: "*Price is required" })}
                error={Boolean(errors.price)}
                helperText={errors.price?.message}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Typography variant="h6">Upload Book Cover</Typography>
              <div className={classes.uploadContainer}>
                <input
                  name="Upload Cover"
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </main>
    </div>
  );
};

export default withRouter(AddBooks);
