import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink  } from "apollo-link-http";

const link = createHttpLink({ uri: "https://apollo-category.herokuapp.com/v1/graphql",
});
export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

