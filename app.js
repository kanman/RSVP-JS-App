//Add an event listener for the DOMContentLoaded Event to ensure that the JS file is not parsed before the 
//document is loaded.
document.addEventListener('DOMContentLoaded', (e) => {
    
        //Additional UI. User generated header on first form submit.
    
        const firstForm = document.getElementById('celeb');
        const response = document.getElementById('celebration');
        const headline = document.getElementById('userheadline');
    
        firstForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            headline.innerHTML = response.value;
            response.value = '';
            });
    
        //1. Declaration of main variables for the form UI
    
        const form = document.getElementById('registrar');
        const input = form.querySelector('input');
        const mainDiv = document.querySelector('.main');
        const ul = document.getElementById('invitedList');
    
        //8. Create 3 new constant variables for our filter checkbox on the UI.
    
        const div = document.createElement('div');
        div.style.padding = "7%";
        div.style.display = "inline-block";
        const filterLabel = document.createElement('label');
        const filterCheckBox = document.createElement('input');
    
        //Set label text content and set input type to 'checkbox'.
    
        filterLabel.textContent = "Hide those who have not responded";
        filterCheckBox.type = 'checkbox';
        div.appendChild(filterLabel);
        div.appendChild(filterCheckBox);
        mainDiv.insertBefore(div, ul);
        filterCheckBox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        //Loop through the DOM to get to the checkbox;
        const lis = ul.children;
        //If statement with 'for' to show only those invitees who have registered if checkbox is checked. 
        //Hide those that haven't.
        if(isChecked) {
        for (let i = 0; i < lis.length; i += 1) {
        let li = lis[i]; 
        if (li.className === 'responded'){   
        li.style.display = '';
    
        } else { 
    
        li.style.display = 'none';   
            }
        }
    
        } else {
            for (let i = 0; i < lis.length; i += 1) {
            let li = lis[i];
            li.style.display = '';
                }
            }
    
        });
    
    
        //2. function to create the UI elements: 'li', 'label', 'checkbox' and 'button'
    
        function createLI(text) {
            const li = document.createElement('li');
    
            const span = document.createElement('span');
    
            span.textContent = text;
            li.appendChild(span);
            
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
        const li = button.parentNode;
        const ul = li.parentNode;
    
    
    
        if(button.textContent === 'remove'){     
        ul.removeChild(li);    
        } else if (button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
    
        //Change the state of the 'li' to a 'saved' state on clicking the 'save' button.
    
        } else if (button.textContent === 'save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
        }
        }
        });
    });
    
    
    
    
    
    
    