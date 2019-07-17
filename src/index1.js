import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
// import AppContainer from 'bcd-front/ui/layout/AppContainer';
// import apolloClient from 'utils/apollo-client-instance';
import LoginForm from './components/loginPage';

render(
  <BrowserRouter>
    <LoginForm />
  </BrowserRouter>
);
