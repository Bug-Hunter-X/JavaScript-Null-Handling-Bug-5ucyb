function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b; 
}

console.log(foo(5, 5)); // Output: 10

try {
  console.log(foo(null, 5));
} catch (error) {
  console.error(error.message); // Output: 'Null values are not allowed.'
}

try {
  console.log(foo(5, null));
} catch (error) {
  console.error(error.message); // Output: 'Null values are not allowed.'
} 