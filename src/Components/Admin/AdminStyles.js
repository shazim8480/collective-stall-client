import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const adminStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  //   addBooks //////////////
  formContainer: {
    background: "#fff",
    borderRadius: "10px",
  },
  uploadContainer: {
    marginTop: "30px",
  },
  errorText: {
    color: "red",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  //   manage books//\
  manageHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 100px",
    alignItems: "center",
    height: "54px",
    background: "#F5F6FA",
    borderRadius: "13px",
    marginRight: theme.spacing(8),
  },
  deleteBtn: {
    marginRight: theme.spacing(1),
  },
  manageBooks: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
}));

export default adminStyles;
