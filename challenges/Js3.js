/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  // your code here
  const res = []
  const length = Object.keys(data[0]).length
  const keys = Object.keys(data[0])
  for (let i = 0; i < length; i++) {
    if( keys[i] === 'firstName'){
      if(data[0].firstName !== data[1].firstName) {
        res.push(keys[i])
      }
    }
    
    if( keys[i] === 'lastName'){
      if(data[0].lastName !== data[1].lastName) {
        res.push(keys[i])
      }
    }
    
    if( keys[i] === 'age'){
      if(data[0].age !== data[1].age) {
        res.push(keys[i])
      }
    }
  }
  return res
}

console.log(result(data));
