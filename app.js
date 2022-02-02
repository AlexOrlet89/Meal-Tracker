const form = document.getElementById('add-ingredients');
const ingredientslist = document.getElementById('activeIngredients');

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
    renderIngredient();
    console.log(ingredients);
});

function renderIngredient() {
    ingredientslist.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredients(ingredient);
        ingredientslist.append(li);
    }
}

function renderIngredients(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement.value} of ${item.ingredient}`;
    return li;
}