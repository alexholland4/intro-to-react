import routes from '~react-pages'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

import {
  BrowserRouter,
  useRoutes,
} from 'react-router-dom'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)