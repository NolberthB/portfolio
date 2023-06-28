import { Link } from 'react-router-dom'

import './main.css'

const Header = () => {

  return (

    <header>
      <nav>
        <ul>
          <li> 
            <Link to="/"> HOME </Link>  
          </li>

          <li> 
            <Link to="/cv"> CV </Link>  
          </li>

          <li> 
            <Link to="/portfolio"> PORTFOLIO </Link>  
          </li>
        </ul>
      </nav>
    </header>
    
  )
}

export { Header }
