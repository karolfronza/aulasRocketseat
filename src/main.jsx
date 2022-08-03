import React from 'react'
import ReactDOM from 'react-dom/client' // integrando o react, para funcionar em um ambiente web
import { App } from './App'

// Chamando o elemento raiz da página, no caso o 'root', que se encontra na index.html
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)
