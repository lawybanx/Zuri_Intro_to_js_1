// calculate function
const calculate = (first, second, func) => {
  switch (func) {
    case '+':
      return first + second;

    case '-':
      return first - second;

    case '*':
      return first * second;

    case '/':
      return first / second;

    case '%':
      return first % second;

    case '**':
      return first ** second;
    default:
      return 'Invalid operation';
  }
};

// get user input
const getInput = () => {
  let firstNumber = prompt('Please enter the first number:');
  let secondNumber = prompt('Please enter the second number:');
  let operator = prompt(
    'Please select an opertaor, "+", "-", "*", "/", "%", "**(exponent)", '
  );

  const result = calculate(Number(firstNumber), Number(secondNumber), operator);

  alert(result);
};

// Add event to button
const button = document.querySelector('button');
button.addEventListener('click', e => {
  getInput();
});

// Call function
getInput();
