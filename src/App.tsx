import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from "./graphql/apollo"
import Category from './Category';
const App = () => {
  return (
   <Category/>
  );
}

export default App;
