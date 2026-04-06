// You need separate functions for each type
function getString(value) {
  return value;
}

function getNumber(value) {
  return value;
}

function getArray(value) {
  return value;
}

// This is repetitive and annoying!
// <T> is like a "type placeholder"
function identity<T>(value: T): T {
  return value;
}

// When you use it, T becomes whatever type you need:
identity<string>("hello"); // T = string
identity<number>(42); // T = number
identity<boolean>(true); // T = boolean

// A function that returns whatever you give it
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// Now it works with ANY type:
const stringArray = wrapInArray("hello"); // type: string[]
const numberArray = wrapInArray(42); // type: number[]
const boolArray = wrapInArray(true); // type: boolean[]
const objectArray = wrapInArray({ name: "John" }); // type: { name: string }[]

function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

// Works with any array type:
const firstNumber = getFirstItem([10, 20, 30]); // type: number, value: 10
const firstString = getFirstItem(["a", "b", "c"]); // type: string, value: "a"
const firstMixed = getFirstItem([true, false]); // type: boolean, value: true

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// T and U can be different types:
const result = mergeObjects(
  { name: "John" }, // T = { name: string }
  { age: 30 }, // U = { age: number }
);
// Result type: { name: string } & { age: number } = { name: string, age: number }
console.log(result); // { name: "John", age: 30 }

// A function that takes two different types and returns a pair
function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair1 = makePair<string, number>("age", 25); // [string, number]
const pair2 = makePair<boolean, string>(true, "yes"); // [boolean, string]
const pair3 = makePair(42, "hello"); // TypeScript infers [number, string]

console.log(pair1); // ["age", 25]
console.log(pair2); // [true, "yes"]

// Without Generics - Like having different sized boxes pre-made
class StringBox {
  content: string;
  constructor(content: string) {
    this.content = content;
  }
}

class NumberBox {
  content: number;
  constructor(content: number) {
    this.content = content;
  }
}

// With Generics - Like a box that can be ANY size when you need it
class Box<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

// Now you create the box with whatever type you want:
const stringBox = new Box<string>("books"); // Box of strings
const numberBox = new Box<number>(123); // Box of numbers
const objectBox = new Box<{ name: string }>({ name: "John" }); // Box of objects

// TypeScript will catch errors:
stringBox.getContent().toUpperCase(); // ✅ Works (string has toUpperCase)
// numberBox.getContent().toUpperCase() // ❌ Error! number doesn't have toUpperCase
