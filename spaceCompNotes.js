/*
Auxiliary space complexity to refer to space required by the algorithm, 
not including space taken up by the inputs

-most primitives(booleans, num, undefined, null) are constant space
-Strings require O(n) space (where n is the string length)
-Reference types are generally O(n), where n is the length (for arrays)
or the number of keys (for objects)

ex.

** O(1) space
** two variables(total and i), the number of variables do not increase if elements of array increase
const sum = (array) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

**O(n)
**space taken up is directly proportion to n numbers
**the variable newArr is getting longer 
const double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
*/