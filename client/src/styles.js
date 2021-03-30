import { makeStyles } from "@material-ui/core/styles";

import backgroundImage from "./images/background-image.jpg";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ba1f33",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    padding: "5px",
    borderRadius: 10,
  },
  image: {
    marginLeft: "10px",
  },
  main: {
    position: "absolute",
    backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(${backgroundImage})`,
    backgroundSize: "cover",
    minWidth: "100vw",
    minHeight: "100vh",
  },
  [theme.breakpoints.down("sm")]: {
    // means only for small devices, the reason i'm reversing it is that I want the form to be on top on mobile devices
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
