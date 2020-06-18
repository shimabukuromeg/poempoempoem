import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultIcon from "./insta-default-icon.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    borderRadius: "50%",
    width: (props) => props.width || "32px",
    height: (props) => props.height || "32px",
  },
}));

export const ProfileIcon = ({ width, height }) => {
  const classes = useStyles({ width, height });
  return <img alt="" src={defaultIcon} className={classes.icon}></img>;
};
