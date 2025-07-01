import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContex.jsx'
import { NotesContextProvider } from './context/NotesContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
