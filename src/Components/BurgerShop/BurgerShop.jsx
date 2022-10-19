import { useState } from 'react'
import '../../styles/burger.css'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (idx) => {
    setStack (stack.filter((ing, i) => i !== idx))
  }

// Remember, the filter method returns a shallow copy of the array,
// excluding all elements that do not pass the test implemented by 
// the provided callback function.

// In the above example, if an element's index matches the
// index passed as an argument to the function, it will fail
// the test in our callback, and it will not be included in 
// our updated stack array state.

// Note, 'ing' (short for ingredient) is just a placeholder param 
// for an element in the stack array.

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} stack={stack} addToBurger={addToBurger} />
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop