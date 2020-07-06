// import "../App.css";
import { PoemList } from "./PoemList";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const useStyles = makeStyles((theme) => ({
  contaier: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 56,
    marginTop: 44,
  },
}));

export const ROOT_QUERY = gql`
  query {
    poems {
      id
      image
      text
      likes {
        account_id
      }
      user {
        account_id
      }
      created_at
    }
  }
`;

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contaier}>
        <Query query={ROOT_QUERY}>
          {({ data, loading }) =>
            loading ? (
              <p>loading poems...</p>
            ) : (
              <PoemList poems={data.poems}></PoemList>
            )
          }
        </Query>
      </div>
    </>
  );
};
