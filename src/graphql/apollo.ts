import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink,HttpLink  } from "apollo-link-http";

const link = createHttpLink({ uri: "https://apollo-category.herokuapp.com/v1/graphql",
// headers: {"x-hasura-admin-secret":"1234"}
});
// link: "http://121.134.238.182:26060/console",
export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

