// Use closure
// Create a function that returns another function.
// The inner function should have access to the variables defined in the outer function.
// Call the outer function and store the returned inner function in a variable.
// Call the inner function and observe that it still has access to the outer variables.

function outFunc (x) {
  const y = 7

  function inFunc (z) {
    return x * y * z
  }

  return inFunc(9)
}

console.log(outFunc(4))
