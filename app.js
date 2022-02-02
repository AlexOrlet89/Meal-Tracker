const form = document.getElementById('add-ingredients');
const ingredientslist = document.getElementById('activeIngredients');
const remove = document.getElementById('remove');

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
    console.log(ingredients);
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
}) ;