
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from '@/Routes/AppRoutes.jsx'
import { Navbar } from './Components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes /> 

    </Router>
      
  )
}

export default App

