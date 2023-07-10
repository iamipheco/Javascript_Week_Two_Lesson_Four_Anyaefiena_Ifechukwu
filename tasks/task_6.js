// Arrow function for greet
const greet = (name = 'Guest') => {
  console.log(`Hello, ${name}! Nice to meet you.`)
}

// Testing the arrow function by calling it with different names
greet() // Without passing a name (uses default value)
greet('Chidiebube')
greet('Chidimma')
