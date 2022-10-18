
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'

const App = () => {
  return (
    <main>
      <Routes>

      <Route path="/"
          element={<Landing daytime={daytime} />}
          />
      <Route path="/burgers"
          element={<BurgerShop />}
          />
          
      </Routes>
    </main>
  )
}

export default App