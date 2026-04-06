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
