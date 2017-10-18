
//Assign a variable to the 'registrar' form id - Use a constant as this won't change
//Assign a variable to the input text field to read the name submitted

const form = document.getElementById('registrar');
const input = form.querySelector('input');

//Add an event listener to the form submission that logs that submission to the console
//Use e.preventDefault to prevent the browser reloading the page on submission

form.addEventListener('submit', (e) => {
e.preventDefault();    
console.log(input.value);
});




