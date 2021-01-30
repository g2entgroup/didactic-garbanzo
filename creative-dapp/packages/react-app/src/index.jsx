import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './store';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App";

let subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract"

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
    <App subgraphUri={subgraphUri}/>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root"),
);
