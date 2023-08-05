import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: "cache-first",
        },
    },
    link: createHttpLink({
        uri: "http://localhost:4000/",
        credentials: "include",
    }),
});

export default apolloClient;