/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: 'Kai', lastName: 'Lyons' },
  { firstName: 'Belle', lastName: 'Norton' },
  { firstName: 'Finnley', lastName: 'Rennie' },
  { firstName: 'Tatiana', lastName: 'Dickerson' },
  { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
  // your code here
  let arr = []
  let length = Object.keys(students).length
  
  // Sort the firstName
  students.sort((a, b) => {
    let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });
  
  // Get the array students to new array
  for (let i = 0; i < length; i+=2){
    if (i <= length-1){
      arr.push(students.slice(i, i+groups-1))
    }
    else {
      arr.push(students.slice(length-1, length))
    }
  }
  return arr
}

console.log(result(students, groups));
