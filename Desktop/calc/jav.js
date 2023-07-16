// 6. Declare variable 'output', so as to define behavior of numbers and symbols
let output = '0'
//13. declare the runningCalc variable to create store each calculation running in the console per time
let runningCalc = 0; //  the running calc by default starts at zero till calculations begin
//8. declare variable to allow output to show on calculator screen
const screen = document.querySelector('#screen')
//14. declare previousOperator to keep track of the last mathFunction used
let previousSymbol;// dont assign anything to the variable yet
// 3. create the buttonClick function which would allow the console to log the value of each button when clicked
function buttonClick(value){
// 5. Use the isNaN(not a number) with parseInt to determine if the value input is a number or symbol
// 5b. if its a number, run function for number, and vice versa.
    if (isNaN(parseInt(value))){
        forSymbols(value);
    }else{
        forNumbers(value);
    }
    align();// use the align function here so it is called whenever a button is clicked
}

// 4. create functions to handle numbers & symbols
function forNumbers(number){
// 7. allowing multiple numerical input on the screen per time rather than one      
    if (output === '0'){
        output = number;
    }else{
        output += number;
    }

}

//11. create a function to carry out math functions
function mathSymbols(value){
    if (output === '0'){
        return; // if the ouput is 0 at any given time, when the symbols are clicked, do nothing
    }
//12. declare variable intOutput to signify integers that are clicked after a symbol
    const intOutput = parseInt(output) // declare variable intOutput to convert strings in the console to integers

    if (runningCalc === 0){
        runningCalc = intOutput; // if the running calculation is 0, then the console can only accept integers
    }else{
        flushOperator(intOutput) // if the running calculation is not 0, and the math symbols is clicked, carry out its designated math function 
    }

    previousSymbol = value; // assigning the last symbol clicked per time as the previousOperator
    output = '0' //each time a symbol is clicked, the output reverts to 0 while awaiting the next command

}

// create a function to assign 'instructions' for each time a symbol is clicked wrt intOutput
function flushOperator(intOutput){
    if (previousSymbol === '+'){
        runningCalc += intOutput
    } else if(previousSymbol === '-'){
        runningCalc -= intOutput
    } else if(previousSymbol === '*'){
        runningCalc *= intOutput
    } else if(previousSymbol === '/'){
        runningCalc /= intOutput
    }
}

function forSymbols(symbol){
//10. assign the roles for each symbol in the calculator
//10b. the switch statement can be used in a situation where multiple "if" statements are required
    switch (symbol) {
        case 'C':
            output = '0';
            break;
        case '=' :
            if (previousSymbol === null){
                return // if theres no value input, return nothing
            }
            flushOperator(parseInt(output))
            previousSymbol = null
            output = "" + runningCalc // we declared output as a string from the start, so here we add empty "" before the runningCalc to change the output to strings
            runningCalc = 0
            break;
        case '←' :
            if (output.length === 1){
                output = '0'
            } else {
                output = output.substring(0, output.length - 1);
            }
        case '+' :
        case '*' :
        case '-' :    
        case '/' :  
//12. call the mathSymbol function each time the math symbols are clicked                     
    mathSymbols(symbol);
    break;
    }

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