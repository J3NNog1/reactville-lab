import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(100)


  return (
    <main>
      <Nav />
      <Routes>

      <Route 
          path="/"
          element={<Landing  />}
          />
      <Route 
          path="/burgers"
          element={<BurgerShop />}
          />
      <Route 
          path="/market"
          element={<SuperMarket />}
          />
      
      </Routes>
    </main>
  )
}

export default App