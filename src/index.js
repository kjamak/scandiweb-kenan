import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import GlobalStyle from "./globalStyles";
import client from "./graphqlConnection";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ApolloProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
