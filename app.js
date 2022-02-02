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
    console.log(ingredients);
});