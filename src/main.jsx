import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Index from './context/Index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Index>
     <App />
    </Index>
  </StrictMode>,
)
