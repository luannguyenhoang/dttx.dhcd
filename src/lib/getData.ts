import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.NEXT_PUBLIC_API_GRAPHQL_DTTXDHCD ||
    "http://10.10.51.16:8090/graphql",
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first"
    }
  }
});

export const getData = async (query: DocumentNode, variables?: any) => {
  try {
    const response = await client.query({
      query,
      variables,
      fetchPolicy: "cache-first"
    });

    if (!response?.data) {
      throw new Error(
        `GraphQL query failed with status: ${response?.networkStatus}`
      );
    }

    return response.data;
  } catch (error) {
    console.error("GraphQL Error:", error);
    return null;
  }
};
