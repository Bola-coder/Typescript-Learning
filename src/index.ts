let sales: number = 123_456_789;
const course: String = "Typescript";
const isPublished: Boolean = true;
let level; // Type any
// Arrays
let numbers: number[] = [1, 2, 3, 4];

// Tuples with fixed lenght.
let users: [number, string] = [1, "Bolarinwa"];

enum Size {
  Small = 1,
  Medium,
  Large,
}
//  Declaring the enum using the constant keyword makes the compiler generate more optimized code.
// Values for all have to be set if we're using string variables.
let mySize: Size = Size.Medium;
console.log(mySize);

// Creating functions with return type annotattions:
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}
calculateTax(10_000, 2016);
