
// Q). Given an unsorted array of size n. Array elements are in the range from 1 to n. Some numbers from set {1, 2, …n} are missing and some numbers occur twice in the array. Find these two sets of numbers.
// Example 1:
//   Input: arr[] = {3, 1, 3, 5}
//   Output: Missing = [2, 5], Repeating = [3]
//   Explanation: 2, 5 is missing and 3 occurs twice 
// Example 2:
//   Input: arr[] = {4, 3, 6, 2, 1, 1}
//   Output: Missing = [5], Repeating = [1]



const Arr = [2, 3,3, 4, 5,]
const Arr1 = Arr.map(a => {
    
    return  a
})

console.log(Arr1)
let count = 10;
let missing=[];
for (let i = 1; i <= count; i++) {
  if (Arr1.indexOf(i) === -1) {
    missing.push(i)
  }
 }
console.log(missing)

const Duplicates = Arr => Arr.filter((item, index) => Arr.indexOf(item) !== index)
const duplicateElements =Duplicates(Arr);
console.log(duplicateElements); 
