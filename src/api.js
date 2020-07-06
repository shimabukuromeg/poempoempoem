import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost/graphql",
  request: (operation) => {
    operation.setContext((context) => ({
      headers: {
        ...context.headers,
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }));
  },
});

export const getPoems = () => {
  const query = gql(`
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
  `);
  const poems = client
    .query({ query })
    .then(({ data }) => data.poems)
    .catch(console.error);
  return poems;
};

export const like = (poem_id, is_like) => {
  const mutation = gql(`
   mutation {
    likePoem(poem_id: ${poem_id}, is_like: ${is_like})
  }
`);
  return client
    .mutate({ mutation })
    .then(({ data }) => data.likePoem.is_like)
    .catch(console.error);
};

export const me = () => {
  const query = gql(`
    query {
      me {
        account_id
      }
    }
  `);
  client
    .query({ query })
    .then(({ data }) => localStorage.setItem("me", JSON.stringify(data.me)))
    // .then(({ data }) => data.me)
    .catch(console.error);
};
