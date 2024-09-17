// Create a webpage with a button that, when clicked, changes its text to "Button Clicked!".
// Add another button to the click event listener from the first button after the first click.: 
// Use addEventListener with the once option so that the click event listener is automatically removed after one click.

document.addEventListener('DOMContentLoaded', () => {

    const changeSelfName = document.getElementById('changeSelfName');


    function handleClick() {
        let newButton = document.createElement('button');
        changeSelfName.innerHTML = 'Button Clicked!';
        document.body.append(newButton);
        newButton.innerHTML = "New button";


        changeSelfName.removeEventListener('click', handleClick);
    }

    changeSelfName.addEventListener('click', handleClick);

})

// Create a nested structure of elements, such as a div containing another div and a button inside it.
// Add a click event listener to the outer div and the button.When the button is clicked, 
// use stopPropagation() to prevent the event from bubbling up to the outer div.: Try removing stopPropagation() and observe the difference in behavior.



document.addEventListener('DOMContentLoaded', () => {

    function handler(event) {

        console.log(event.target);

        event.stopPropagation();

    }

    document.getElementById('outerdiv').addEventListener('click', handler);

    document.getElementById('nestedButton').addEventListener('click', handler);

})

// Create a webpage with an input field and a button to add items to a ul list.
// When the button is clicked, insert a new li element containing the input value into the list.
// Add a button next to each list item that, when clicked, that item from the list.

function addItem() {

    const input = document.getElementById('itemInput');
    const itemValue = input.value.trim();


    if (!itemValue) return;



    const li = document.createElement('li');
    li.textContent = itemValue;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        li.remove();
    };


    li.appendChild(deleteButton);

    const ul = document.getElementById('itemList');
    ul.appendChild(li);


}