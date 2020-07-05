import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


import { InfoContainer } from "./infoContainer/infoContainer"

import './App.css';


function App() {
  const client = new ApolloClient({
    uri: 'https://bahnql.herokuapp.com/graphql',
  });

  return (
    <ApolloProvider className="App" client={client}>
      <InfoContainer />
    </ApolloProvider>
  );
}

export default App;
