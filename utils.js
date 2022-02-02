export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement} of ${item.ingredient}`;
    return li;
}

export function renderMeal(item) {
    const li = document.createElement('li');
    li.textContent = `${item.mealName}, ${item.numOfIngredients} ingredients`;
    return li;
}

