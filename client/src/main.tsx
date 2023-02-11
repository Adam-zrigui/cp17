import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient  } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
      <QueryClientProvider client={client} >    
  <BrowserRouter>
  <MantineProvider withGlobalStyles withNormalizeCSS>
       <App />      
  </MantineProvider>
  </BrowserRouter>
  </QueryClientProvider>
  </React.StrictMode>,
)
