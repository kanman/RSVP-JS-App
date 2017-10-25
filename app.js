
//1. Declaration of main variables for the form UI

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

//2. function to create the UI elements: 'li', 'label', 'checkbox' and 'button'

function createLI(text) {
    const li = document.createElement('li');
    li.textContent = text;
       
    const label = document.createElement('label');
    label.textContent = ' confirmed';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    
    li.appendChild(label);
    

//Adding in an edit button before the remove button

    const editButton = document.createElement('button');
    editButton.textContent = "edit";
    li.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    li.appendChild(removeButton);  
    return li; 
 


}
//3. Form Submission function

form.addEventListener('submit', (e) => {
e.preventDefault();   

const text = input.value;

input.value = '';

//4. Create 'li', 'label' and 'checkbox' elements under the parent node


const li = createLI(text);

ul.appendChild(li);
});

//5. After form submission, we add the event handler in for the changed checkbox state (check, uncheck)
//On check/uncheck, the 'li' will be marked or unmarked.

ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;

//Our variable (listItem) is set to the checkbox, which is a child of the label node, which is a child of the
//"li" node.

const listItem = checkbox.parentNode.parentNode;


//If statement to activate classname styles if the checkbox is checked.
    if (checked) {
    listItem.className = 'responded';    
    } else {
    listItem.className = '';    
    }    

});

//6. Add an event listener to the button click event so it filters up the dom to the 'ul'. 
//Remove the 'li' element if the click event is targetting the button element.

ul.addEventListener('click', (e) => {
//1.filter out elements on the 'ul' that are not buttons
//2.Use the removeChild method to remove the 'li' from the 'ul'

if (e.target.tagName === 'BUTTON') {

//Add another 'if' statement to check the text content of the buttons and ignore if it finds an 'edit' text.
//So that the edit button is not removed on a 'click' even in the 'ul'.
const button = e.target;
const li = e.target.parentNode;
const ul = li.parentNode;

if(button.textContent === 'remove'){     
ul.removeChild(li);    
        } else if (button.textContent === 'edit') {
console.log('edit');
            }
        }
});







