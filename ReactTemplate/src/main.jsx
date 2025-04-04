import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/output.css'
import App from './App.jsx'
import { createStore, Provider } from 'jotai'
import { setGlobalStore } from './utils/store.js'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './query/query.js'

const store = createStore();
setGlobalStore(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  </Provider>,
)
