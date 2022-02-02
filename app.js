const form = document.getElementById('add-ingredients');
const ingredientslist = document.getElementById('activeIngredients');
const remove = document.getElementById('remove');

const save = document.getElementById('save-meal');
const mealList = document.getElementById('saved-meals');

let ingredients = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const ingredient = {
        ingredient: formData.get('ingredient'),
        quantity: formData.get('quantity'),
        measurement: formData.get('measurement')
    }; 
    ingredients.push(ingredient);
    form.reset();
    renderIngredients();
    // console.log(ingredients);
});

function renderIngredients() {
    ingredientslist.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientslist.append(li);
    }
}

function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement.value} of ${item.ingredient}`;
    return li;
}

remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

save.addEventListener('click', () => {
    const mealName = document.getElementById('meal-name');
    const li = document.createElement('li');
    li.textContent = `${mealName.value}, ${ingredients.length} ingredients`;
    mealList.append(li);
    // console.log(li);
    // const numOfIngredients = ingredients.length;
    // console.log(mealName.value, numOfIngredients);
    // renderMeal(mealName.value, ingredients.length);

});

// function renderMeal(item1, item2) {
//     const li = document.createElement('li');
//     li.textContent = `${item1}, ${item2} ingredients`;
//     console.log(li);
//     return li;
// }