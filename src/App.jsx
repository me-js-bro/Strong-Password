import { RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { router } from './Routes/Routes'
import Footer from './Shared/Footer/Footer'

function App() {

  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
        <Footer />
    </>
  )
}

export default App
