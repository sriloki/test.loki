// Example JavaScript file

// Function to check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Function to calculate the factorial of a number
function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

// Function to reverse a string
function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

// Function to generate Fibonacci sequence
function generateFibonacciSequence(length) {
  let sequence = [0, 1];
  for (let i = 2; i < length; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

// Example usage of the functions
checkEvenOdd(5);
console.log("Factorial of 4 is: " + calculateFactorial(4));
console.log("Reversed string: " + reverseString("Hello, world!"));
console.log("Fibonacci sequence of length 8: " + generateFibonacciSequence(8).join(", "));
