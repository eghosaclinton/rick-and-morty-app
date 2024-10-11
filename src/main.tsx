import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StateContext } from './context/StateContext.tsx'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'sonner'
// import reportWebVitals from './reportWebVitals';
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
      </StateContext>
      <Toaster />
    </ApolloProvider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
