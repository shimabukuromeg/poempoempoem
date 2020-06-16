import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultIcon from "./insta-default-icon.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
  },
}));

export const ProfileIcon = () => {
  const classes = useStyles();
  return <img alt="" src={defaultIcon} className={classes.icon}></img>;
};
