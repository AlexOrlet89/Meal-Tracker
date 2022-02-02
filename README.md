## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**

for simplicity's sake and  out of fear of CSS and nesting issues, we are going to use a design very similar to the demos. 

An add ingredients section in grid form, i'm thinking like this:
'h2 h2'
'form ul'
'addbutton removebutton'

a save meal section, topdown like:
'h3'
'label input'
'save meal button'

and finally a saved meals section
'h4'
'ul'
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
ingredientsForm
addButton
removeButton
ingredientsList
mealInput
saveButton
mealList


1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**a
addButton.addEventListener('submit')
text from each input is put into an array and the ul is updated to reflect added objects.

removeButton.addEventListener('submit')
last item on ul array is popped off and ul is updated to reflect new state.
saveEventListener('submit')
new declaration for amount of ingredients in array is created using array.length. this object is paired with meal name and added to saved meal ul array below.

1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
