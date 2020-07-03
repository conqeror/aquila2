import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://sifrovacka-aquila.herokuapp.com/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
  const authToken = localStorage.getItem("authToken");
  const token = authToken ? authToken.replace(/\"/g, "") : "";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
