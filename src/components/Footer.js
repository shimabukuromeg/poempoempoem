import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ProfileIcon } from "./ProfileIcon";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "44px",
    borderTop: "solid 1px #d3d3d3",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export const Footer = ({ accountId }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className={classes.container}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.content}
        >
          <BottomNavigationAction to="/" icon={<HomeIcon />} component={Link} />
          <BottomNavigationAction icon={<AddBoxIcon />} />
          <BottomNavigationAction
            to="/profile"
            icon={<ProfileIcon />}
            component={Link}
          />
        </BottomNavigation>
      </div>
    </>
  );
};
