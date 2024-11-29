const IngredientList = ({ availableIngredients, addToBurger}) => {
  return (
    <>
      <ul>
        {availableIngredients.map((ingredient, index) => (
          <li
            key={index}
            style={{ backgroundColor: ingredient.color }}
            onClick={() => addToBurger(ingredient)}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
    </>
  )
};

export default IngredientList;
