import { Routes, Route} from 'react-router-dom'

import { Home } from '@/Pages/Home'
import { CV } from '@/Pages/CV'
import { Portfolio } from '@/Pages/Portfolio'
import {ErrorPage} from '@/Pages/ErrorPage'

function AppRoutes() {
  return (
    <Routes>

      <Route path='/' element={ <Home />} />
      <Route path='/cv' element={ <CV />} />
      <Route path='/portfolio' element={ <Portfolio />}/>
      <Route path='*' element={ <ErrorPage />} />

    </Routes>
  )
}

export { AppRoutes }
