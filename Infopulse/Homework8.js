// Task 1: Write a function to open a new window using window.open(). Make sure to set the size of the new window to 400px by 400px.
//Use window.location to display the current URL in an alert.Create a button that, when clicked, will display the user's 
//screen dimensions (height and width) using window.screen.


function openNewWindow(){const windowFeatures = "left=100,top=100,width=400px,height=400px";
    const handle = window.open(
      "",
      "",
      windowFeatures,
    );}

    openNewWindow();

    alert('Current URL is: ' + location);



document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('getUserScreen').addEventListener('click', () => {
        alert('Height is ' + window.screen.height + ' Width is ' + window.screen.width);
    })
  }) 

// Task 2: Create a countdown timer that starts from 10 and decreases by 1 every second using setInterval. 
// Once it reaches 0, it should display "Time's up!" in an alert.Use setTimeout to delay changing the background color of the page for 5 seconds after loading.

let counter = 10000;

function counterDecrease (){
    const intervalId = setInterval(() => {

        counter -= 1000
    console.log(counter);
    if (counter == 0) {
       alert("Time's up!");
       clearInterval(intervalId);
    }

    }, 1000)
    
}

counterDecrease();


document.addEventListener('DOMContentLoaded', () =>{

    window.setTimeout(() => {

        document.body.style.backgroundColor = 'green';
    }, 5000);
    
  }) 

// Create a form with two input fields (Name and Email) and a submit button. When the form is submitted, capture the values of the input fields
// and display them in a div below the form without reloading the page.Add three buttons (red, green, blue). 
// Each button should change the background color of a div to its respective color when clicked.Create a paragraph with some placeholder text. 
// Add a button that, when clicked, will append a new sentence to the paragraph.



document.addEventListener('DOMContentLoaded', () => {
    
    let name1 = document.getElementById('name');
    let email = document.getElementById('email');
    let submit = document.getElementById('submit');
    let nameEmail = document.getElementById('nameEmail');
    let red = document.getElementById('red');
    let blue = document.getElementById('blue');
    let green = document.getElementById('green');
    let paragraph = document.getElementById('paragraph');
    let addText = document.getElementById('addText');
    
        submit.addEventListener('click', () => {
            let nameValue = name1.value.trim();
            let emailValue = email.value.trim();

            if (nameValue && emailValue) {
                nameEmail.innerHTML = `Name: ${nameValue}<br>Email: ${emailValue}`;
            }
        });

        red.addEventListener('click', () => {
           nameEmail.style.backgroundColor = 'red';
        });

        blue.addEventListener('click', () => {
            nameEmail.style.backgroundColor = 'blue';
         });

         green.addEventListener('click', () => {
            nameEmail.style.backgroundColor = 'green';
         });

         addText.addEventListener('click', () => {
            let nameValue = name1.value.trim();
            paragraph.append(nameValue);
         });
    
});

