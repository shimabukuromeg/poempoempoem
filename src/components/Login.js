import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { me } from "../api.js";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contaier: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 56,
    marginTop: 44,
  },
}));

export const loginMutation = gql`
  mutation login($accountID: String!, $password: String!) {
    login(account_id: $accountID, password: $password) {
      access_token
    }
  }
`;

export const Login = ({ history }) => {
  const classes = useStyles();
  const [accountID, setAccountID] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(loginMutation, {
    update: (_proxy, response) => {
      if (response.data.login.access_token) {
        localStorage.setItem("token", response.data.login.access_token);
        me();
        history.push("/");
      } else {
        alert("ログイン情報が不正です。");
        setAccountID("");
        setPassword("");
      }
    },
    variables: { accountID, password },
  });

  return (
    <>
      <div className={classes.contaier}>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>

          <Input
            type="text"
            value={accountID}
            onChange={(e) => setAccountID(e.target.value || "")}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">パスワード</InputLabel>

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value || "")}
          />
        </FormControl>

        <Button variant="contained" onClick={() => login()}>
          ログイン
        </Button>
      </div>
    </>
  );
};

export default withRouter(Login);
