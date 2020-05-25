import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import client from './apollo';
import { ApolloProvider } from '@apollo/react-hooks';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />, document.getElementById('root')
  </ApolloProvider>
);