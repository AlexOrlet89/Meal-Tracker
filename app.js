import { renderIngredient, renderMeal } from './utils.js';

const form = document.getElementById('add-ingredients');
const ingredientslist = document.getElementById('activeIngredients');
const remove = document.getElementById('remove');

const save = document.getElementById('save-meal');
const mealList = document.getElementById('saved-meals');
const mealName = document.getElementById('meal-name');

let ingredients = [];
let meals = [];

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

export function renderIngredients() {
    ingredientslist.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientslist.append(li);
    }
}


remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

save.addEventListener('click', () => {
    const meal = {
        mealName: mealName.value,
        numOfIngredients: ingredients.length
    };
    meals.push(meal);
    console.log(meals);
    renderMeals();
    mealName.value = '';
    // renderMeal();
    // mealList.append(li);
    // console.log(li);
    // const numOfIngredients = ingredients.length;
    // console.log(mealName.value, numOfIngredients);
    // const li = document.createElement('li');
    // renderMeal(mealName.value, ingredients.length);
});

export function renderMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealList.append(li);
    }

}



// li.textContent = `${item1}, ${item2} ingredients`;
// console.log(li);