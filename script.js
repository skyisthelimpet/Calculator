
let buttons = document.getElementsByClassName('btn');
let main = document.getElementById('MAIN').innerText;

let expression = '';


document.getElementById('del').addEventListener('click', function (event) {
    let text = document.getElementById('MAIN').innerText;
    text = text.slice(0, -1);

    document.getElementById('MAIN').innerText = text
    console.log(('Clicked'))
})

document.getElementById('reset').addEventListener('click', function (event) {
    document.getElementById('MAIN').innerText = '';
})

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', function (event) {
        if (this.id != '=' && this.id != 'del' && this.id != 'reset') {
            document.getElementById('MAIN').innerText += this.id;
        } else if (this.id === '=') {
            expression = document.getElementById('MAIN').innerText;
            console.log(expression)
            console.log(handleCalculation(expression));
            
        }
    })
}

function handleCalculation(expression) {
    let operators = ['+', '-', '/', 'x'];
    let operatorFound = true;
    let operator ='';
    while (operatorFound) {
        if (expression.search(/[+]/) != -1) {
            operatorFound = false;
            operator = '+';
        }else if (expression.search(/[-]/) != -1) {
            operatorFound = false;
            operator = '-';
        }else if (expression.search(/[x]/) != -1) {
            operatorFound = false;
            operator = 'x';
        }else if (expression.search(/[/]/) != -1) {
            operatorFound = false;
            operator = '/';
        }
    }
    console.log(operator)

    let numbers = expression.split(operator);
    console.log('First Number : ' + numbers[0])
    console.log('Second Number : ' + numbers[1])
    
    switch (operator) {
        case '+':
            document.getElementById('MAIN').innerText = parseFloat(numbers[0]) + parseFloat(numbers[1])
            break;
        case '-':
            document.getElementById('MAIN').innerText = parseFloat(numbers[0]) - parseFloat(numbers[1])
            break;
        
        case 'x':
            document.getElementById('MAIN').innerText = parseFloat(numbers[0]) * parseFloat(numbers[1])
            break;

        case '/':
            document.getElementById('MAIN').innerText = parseFloat(numbers[0]) / parseFloat(numbers[1])
            break
        default:
            break;
    }

}









