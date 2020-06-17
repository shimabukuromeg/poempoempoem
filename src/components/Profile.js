import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contaier: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 56,
    marginTop: 44,
  },
}));

export const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.contaier}>profile</p>
    </>
  );
};
