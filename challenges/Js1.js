/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
   // Your Code Here
   // I use XOR method
   numbers.a = numbers.a ^ numbers.b   // a = 010 + 100 = 110 (6)
   numbers.b = numbers.a ^ numbers.b   // b = 110 + 100 = 010 (2)
   numbers.a = numbers.a ^ numbers.b   // a = 110 + 010 = 100 (4)
   
   return numbers
}
 
console.log(result(numbers));
 