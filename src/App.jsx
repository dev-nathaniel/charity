// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Gallery from './pages/gallery'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/gallery",
    element: <Gallery />
  }
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
 