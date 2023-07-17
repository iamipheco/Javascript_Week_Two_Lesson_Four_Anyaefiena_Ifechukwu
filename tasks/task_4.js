// Use default parameter values
// Modify the greet function to have a default parameter value of "Guest" for the name.
// If no argument is passed when calling the function, it should use the default value.
// Call the function both with and without passing a name argument.

function greet (name = 'Guest') {
  console.log(`Hello, ${name}! Nice to meet you.`)
}

// Calling the function without passing a name argument (using the default value)
greet()

// Calling the function with a name argument
greet('Ifeanyi')
