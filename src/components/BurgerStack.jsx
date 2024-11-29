const BurgerStack = ({ chosenIngredients, removeFromBurger }) => {
  return (
    <>
      <h1>Burger: </h1>
      <ul>
        {chosenIngredients.map((ingredient, index) => (
          <li
            key={index}
            style={{ backgroundColor: ingredient.color }}
            onClick={() => removeFromBurger(index)}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;
