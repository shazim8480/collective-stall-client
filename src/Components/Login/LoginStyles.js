import { makeStyles } from "@material-ui/core/styles";
const LoginStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  googleSubmit: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  GoogleIcon: {
    position: "absolute",
    left: "40%",
    top: "72%",
    width: "29px",
    height: "29px",
  },
}));
export default LoginStyles;
