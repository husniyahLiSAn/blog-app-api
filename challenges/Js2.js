/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9]

function result(originalData, numbersOne, numbersTwo) {
    // Your Code Here
    // I don't understand with the direction
    
    const mergedArray = [...numbersOne,...numbersTwo].sort() 
    // [ 1, 2, 3, 3, 4, 5, 5, 7, 9, 9 ] =>  48
    const sumMerge = mergedArray.reduce((pv, cv) => pv + cv, 0)

    // [ 1, 2, 3, 4, 5, 7, 9 ] => 31
    const mergedUnique = mergedArray
            .filter((item, index) => mergedArray.indexOf(item) === index)
    
    // [ 6, 8, 10] => 24
    const sumDifference = originalData.filter(x => !mergedUnique.includes(x))
            .reduce((pv, cv) => pv + cv, 0)

    return sumMerge/sumDifference   // result => 48/24 = 2
}

console.log(result(originalData, numbersOne, numbersTwo));
