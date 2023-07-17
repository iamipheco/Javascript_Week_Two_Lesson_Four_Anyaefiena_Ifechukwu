// Understand function scope
// Create a variable inside a function and try to access it outside the function.
// Declare a variable outside a function and try to access it inside the function.

const name = 'IPHECO'

function greet () {
  const message = 'hello'
  console.log(name)
}

greet() //
// console.log(message) //
