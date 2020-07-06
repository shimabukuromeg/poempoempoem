import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { ProfileIcon } from "./ProfileIcon";
import { like as mutateLike } from "../api.js";

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
    padding: "4px",
  },
  likeBotton: {
    width: "fit-content",
  },
}));

export const Poem = ({ id, text, image, user, likes }) => {
  const classes = useStyles();
  const account_id = JSON.parse(localStorage.getItem("me")).account_id;

  const [like, setlike] = useState(
    !!likes.filter((like) => like.account_id === account_id).length
  );

  const submitLike = () => {
    mutateLike(id, !like);
    setlike(!like);
  };

  return (
    <>
      <div className={classes.contaier}>
        <div className={classes.header}>
          <ProfileIcon></ProfileIcon>
          <div style={{ display: "flex" }}>
            <div className={classes.displayName}>{user.account_id}</div>
          </div>
        </div>
        <img
          className={classes.media}
          alt=""
          src={`data:image/png;base64,` + image}
        ></img>
        <div className={classes.content}>
          <IconButton
            variant="contained"
            className={classes.likeBotton}
            onClick={submitLike}
          >
            {like ? (
              <FavoriteIcon
                className={classes.likeIcon}
                style={{ color: "red" }}
              ></FavoriteIcon>
            ) : (
              <FavoriteBorderIcon
                className={classes.likeIcon}
                style={{ color: "red" }}
              ></FavoriteBorderIcon>
            )}
            {likes.length}
          </IconButton>
          <div className={classes.poem}>
            {user.account_id} {text}
          </div>
        </div>
      </div>
    </>
  );
};
