// app/components/BasicTypes.tsx
"use client";

// ============================================
// BASIC TYPES - The foundation of TypeScript
// ============================================

// 1. Basic type annotations
const BasicTypes = () => {
  // String type
  const name: string = "John Doe";

  // Number type (integers and floats)
  const age: number = 25;
  const price: number = 99.99;

  // Boolean type
  const isActive: boolean = true;

  // Array types (two ways to write them)
  const fruits: string[] = ["apple", "banana", "orange"];
  const numbers: Array<number> = [1, 2, 3, 4, 5];

  // Tuple - fixed length array with specific types
  const person: [string, number, boolean] = ["Alice", 30, true];
  // person[0] is string, person[1] is number, person[2] is boolean

  // Any - avoid if possible (disables type checking)
  let something: any = "could be anything";
  something = 42; // TypeScript won't complain

  // Unknown - safer than any (must check type before using)
  let userInput: unknown = "hello";
  if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // Safe!
  }

  return (
    <div className="p-4">
      <h2>Basic Types Demo</h2>
      <p>Name: {name} (string)</p>
      <p>Age: {age} (number)</p>
      <p>Active: {isActive ? "Yes" : "No"} (boolean)</p>
      <p>Fruits: {fruits.join(", ")} (array)</p>
      <p>
        Person: {person[0]}, Age {person[1]} (tuple)
      </p>
    </div>
  );
};

export default BasicTypes;
