import React, { useState, useEffect } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import {ExchangeRates} from './comp';



const client = new ApolloClient({
  uri: 'http://localhost:5000/playground/',
  cache: new InMemoryCache()
});

export function App(props) {
  return (<ApolloProvider client={client}>
    <ExchangeRates />

  </ApolloProvider>
  )
}
export default App