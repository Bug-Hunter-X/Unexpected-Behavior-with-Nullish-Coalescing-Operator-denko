function foo(a, b) {
  // Use Optional Chaining and Nullish Coalescing
  const aValue = a?.toString() ?? '';
  const bValue = b?.toString() ?? '';

  if (aValue === '' || bValue === '') {
    console.warn('At least one argument is null or undefined.');
    return;
  }

  // Perform operation with aValue and bValue
  console.log('a:', aValue, 'b:', bValue);
}

// Example Usage
foo(null, 2);
foo(1, null);
foo(null, null);
foo(1, 2);
foo(undefined, 2);
foo(1, undefined);
foo(); // calling without arguments