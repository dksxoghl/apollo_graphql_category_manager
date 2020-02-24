import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
    uri: "/",
    // headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"   //default json
    // },
    // defaultSerializer: (data: any, headers: Headers) => {
    //     const formData = new FormData();
    //     for (let key in body) {
    //         formData.append(key, body[key]);
    //     }
    //     headers.set("Content-Type", "x-www-form-encoded")
    //     return { body: formData, headers };
    // }
});
export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
});

