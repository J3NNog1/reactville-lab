import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
    {props.ingredients.length
      ? props.ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            idx={idx}
            ingredient={ingredient}
            removeFromBurger={props.removeFromBurger}
          />
        ))
      : <div>No ingredients in the burger yet!</div>
    }
  </ul>
  )
}

export default BurgerStack