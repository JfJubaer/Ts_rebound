// app/components/FunctionTypes.tsx
"use client";

// ============================================
// FUNCTION TYPES - How to type functions
// ============================================

const FunctionTypes = () => {
  // 1. Function with typed parameters and return type
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  // 2. Void return type (function returns nothing)
  const logMessage = (message: string): void => {
    console.log(message);
    // No return statement
  };

  // 3. Optional parameters (use ?)
  const greetUser = (name: string, greeting?: string): string => {
    if (greeting) {
      return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
  };

  // 4. Default parameters
  const multiply = (a: number, b: number = 2): number => {
    return a * b;
  };

  // 5. Rest parameters (...args)
  const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
  };

  // 6. Function type (callback)
  const processData = (
    data: string[],
    callback: (item: string) => void,
  ): void => {
    data.forEach((item) => callback(item));
  };

  // Examples
  const sum = addNumbers(5, 3); // TypeScript knows this is a number
  const greeting = greetUser("John"); // Uses default greeting
  const customGreeting = greetUser("Jane", "Good morning"); // Uses custom
  const product = multiply(5); // b defaults to 2, result = 10
  const total = sumAll(1, 2, 3, 4, 5); // result = 15

  // Demonstrate callback
  const fruits = ["apple", "banana", "orange"];
  processData(fruits, (fruit) => {
    console.log(`Processing: ${fruit}`);
  });

  return (
    <div className="p-4 space-y-2">
      <h2 className="font-bold">Function Types Demo</h2>
      <p>Sum: {addNumbers(10, 20)}</p>
      <p>Greeting: {greetUser("John")}</p>
      <p>Custom: {greetUser("Jane", "Good morning")}</p>
      <p>Multiply (5 × default 2): {multiply(5)}</p>
      <p>Sum all: {sumAll(1, 2, 3, 4, 5)}</p>
    </div>
  );
};

export default FunctionTypes;
