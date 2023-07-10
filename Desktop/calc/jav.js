// 6. Declare variable 'screen', so as to define behavior of numbers and symbols
let output = '0'

//9. declare variable to allow output to show on calculator screen
const screen = document.querySelector('#screen')
// 3. create the buttonClick function which would allow the console to log the value of each button when clicked
function buttonClick(value){
// 5. Use the isNaN(not a number) with parseInt to determine if the value input is a number or symbol
// 5b. if its a number, run function for number, and vice versa.
    if (isNaN(parseInt(value))){
        forSymbols(value);
    }else{
        forNumbers(value);
    }
// use the align function here so it is called whenever a button is clicked
}

// 4. create functions to handle numbers & symbols
function forNumbers(number){
// 7. allowing multiple numerical input on the screen per time rather than one      
    if (output === '0'){
        output = number;
    }else{
        output += number;
    }
    align();
}

function forSymbols(symbol){
    console.log("symbol");
}
//1.function init to listen for clicks on all class buttons, then carry out function buttonClick to give output of the innerText of each button. 
function init(){
    document
    .querySelector('.buttons')
     .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
     })
}

// 9. function to allow ouput and screen be the same whenever it is called
function align(){
    screen.innerText = output
}

//2. call the init function else the code won't run
init();