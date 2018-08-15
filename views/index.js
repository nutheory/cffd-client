import React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import '../styles/default.css'
import App from '../components/layout/app'
const url = window.location.includes("cffd.ink") ? 'http://http://cffd-elixir.herokuapp.com/' : 'http://0.0.0.0:4000/'


const requestLink = createHttpLink({
  uri: `${url}api`
})

const errorLink = onError(({ operation, response, graphQLErrors, networkError }) => {
  if (graphQLErrors) { console.log('ErrorDialog', graphQLErrors) }
  if (networkError) { console.log('NetErrorDialog', networkError) }
})

const cache = new InMemoryCache()

const link = ApolloLink.from([ errorLink, requestLink])

const client = new ApolloClient({
  link,
  cache,
})

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
