import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

import Home from './custom/Home.jsx'
import Blog from './Blog.jsx'
//we connected to api here
let sitename = "My React App"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home deets={sitename} author ="Mark Zukerberg"/> */}
    <Blog />
  </StrictMode>,
)
