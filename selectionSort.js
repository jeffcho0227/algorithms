/*
similar to bubble sort, but instead of first placing large values into sorted position,
it places small values into sorted position

_ indicates the smallest 
* indicates what's compared
^ indicates the moving pointer
    _
[5, 3, 4, 1, 2]
 *  ^
    _
[5, 3, 4, 1, 2]
 *     ^
          _
[5, 3, 4, 1, 2]
 *        ^
          _
[5, 3, 4, 1, 2]
 *           ^
 _
[1, 3, 4, 5, 2]

final output => [1, 2, 3, 4, 5];

Time Complexity: O(n^2);

*/

const selectionSort = (arr) => {
  
  for (let i = 0; i < arr.length; i++) {
    let currentMin = i;
    for(let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[currentMin]) {
        currentMin = j;
      }
      let temp = arr[i];
      arr[i] = arr[currentMin];
      arr[currentMin] = temp;
    }
  }
  return arr;
}

let test = selectionSort([34, 22, 10, 19, 17]);
console.log(test);