import { makeStyles } from "@material-ui/core/styles";
const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontWeight: 700,
  },
  navBtn: {
    fontWeight: 700,
    marginLeft: theme.spacing(5),
    fontSize: "18px",
  },
  menuList: {
    display: "flex",
    // flex: 1,
  },
  title: {
    // [theme.breakpoints.down("xs")]: {},
    flexGrow: 1,
    fontWeight: 600,
    // marginRight: theme.spacing(4),
  },
  brandLogo: {
    height: "150px",
    width: "200px",
  },
}));
export default headerStyles;
