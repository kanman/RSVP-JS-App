
//Declaration of main variables

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


//Form Submission function

form.addEventListener('submit', (e) => {
e.preventDefault();   

const text = input.value;

input.value = '';


const li = document.createElement('li');
li.textContent = text;


const label = document.createElement('label');
label.textContent = ' confirmed';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
label.appendChild(checkbox);

li.appendChild(label);


//Adding a button in to each 'li' so we will be able to remove an invitee.

const button = document.createElement('button');
button.textContent = 'remove';
li.appendChild(button);

ul.appendChild(li);
});

//After form submission, we add the change event handler in for the changed checkbox state (check, uncheck)

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







