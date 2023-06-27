
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from '@/Routes/AppRoutes.jsx'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'

function App() {
  return (
    <Router>
      
      <Navbar />
      <AppRoutes /> 
      <Footer />

    </Router>
      
  )
}

export default App

