import { makeStyles } from "@material-ui/core/styles";

const bookStyles = makeStyles((theme) => ({
  bookContainer: {
    padding: "15px 20px !important",
    width: "100%",
    background: "#fffff",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
    borderRadius: "20px",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  bookCover: {
    background: "#F1F1F1",
    borderRadius: "20px",
    width: "100%",
  },
  coverImage: {
    padding: "15px 25px",
    borderRadius: "10px",
    width: "70%",
    marginLeft: "14%",
  },
  author: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  bookPrice: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export default bookStyles;
