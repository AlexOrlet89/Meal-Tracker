// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderIngredient returns HTML for ingredient data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>8 cups of Flour</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({ quantity: 8, measurement: 'cups', ingredient: 'Flour'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderMeal returns HTML for meal data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Ice Water, 2 ingredients</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({ mealName: 'Ice Water', numOfIngredients: 2 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
