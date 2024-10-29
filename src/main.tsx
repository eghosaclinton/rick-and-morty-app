import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StateContext } from './context/StateContext.tsx'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'sonner'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <StateContext>
        <App />
        <Toaster />
      </StateContext>
    </ApolloProvider>
  </StrictMode>,
)