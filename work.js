let screen = '0';
let runningTotal = 0;
let previousOperator;
let newScreen = document.querySelector('.screen');

function buttonClick(value){
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number){
  if (screen === '0'){
    screen = number;
  }else{
    screen += number;
  }
}

function handleMath(value){
  if (screen === "0"){
    return;
}
  const intScreen = parseInt(screen) 
  if (runningTotal === 0){
    runningTotal = intScreen;
  }else{
    flushOperation(intScreen);
  } 

  previousOperator = value;
  screen = "0"
}

function flushOperation(intScreen){
    if (previousOperator === '+'){
      runningTotal += intScreen;  
    } else if (previousOperator === '-'){
        runningTotal -= intScreen;
    } else if (previousOperator === '*'){
        runningTotal *= intScreen;
    } else if (previousOperator === '/'){
        runningTotal /= intScreen;
    }
}

function handleSymbol(symbol){
    switch (symbol){
        case 'C':
            screen = "0";
            break;
        case '=':
        if (previousOperator === null){
            return;
        }
        flushOperation(parseInt(screen));

        screen = "" + runningTotal;
        runningTotal = 0;
        break;    
        case '←':
         screen = screen.substring(0, screen.length -1);
        break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleMath(symbol)
            break;         

    }

}

function init() {
    document
    .querySelector('.buttons')
    .addEventListener('click',function(event) {
     buttonClick(event.target.innerText);   
    })
}

function rerender(){
    newScreen.innerText = screen;
}
init();