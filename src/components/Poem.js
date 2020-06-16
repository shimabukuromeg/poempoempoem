import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { ProfileIcon } from "./ProfileIcon";

const useStyles = makeStyles((theme) => ({
  contaier: {
    display: "flex",
    flexDirection: "column",
    width: 375,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 16px",
  },
  poem: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 16px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "16px",
  },
  icon: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
  },
  displayName: {
    marginLeft: "12px",
    flexDirection: "column",
    alignItems: "center",
  },
  media: {
    width: "100%",
    height: 375,
  },
  avatar: {
    backgroundColor: red[500],
  },
  likeIcon: {
    padding: "8px",
  },
}));

export const Poem = ({ accountId, text, image, postDate, likeCount }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contaier}>
        <div className={classes.header}>
          <ProfileIcon></ProfileIcon>
          <div style={{ display: "flex" }}>
            <div className={classes.displayName}>{accountId}</div>
          </div>
        </div>
        <img className={classes.media} alt="" src={image}></img>
        <div className={classes.content}>
          <FavoriteBorderIcon className={classes.likeIcon}></FavoriteBorderIcon>
          <div className={classes.poem}>
            {accountId} {text}
          </div>
        </div>
      </div>
    </>
  );
};
