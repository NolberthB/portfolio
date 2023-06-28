
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from '@/Routes/AppRoutes.jsx'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

function App() {
  return (
    <Router>
      
      <Header />
      <main>
        <AppRoutes /> 
      </main>
      <Footer />

    </Router>
      
  )
}

export default App

