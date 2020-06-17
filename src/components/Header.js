import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    borderBottom: "solid 1px #d3d3d3",
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "white",
  },
  content: {
    padding: "0px, 16px",
    marginTop: "6px",
  },
}));

export const Header = ({ accountId }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>
    </div>
  );
};
