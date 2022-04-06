import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

