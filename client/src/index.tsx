import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components/app/App'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
