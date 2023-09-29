function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

  function findMaxValue(arr){
    let max = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }
  
  function descendingArray (arr) {
    let sortedDescendingArray = [];
    while (arr.length > 0) {
      let min = findMinValue(arr);
      sortedDescendingArray.push(min);
      arr.splice(arr.indexOf(min), 1);
    } 
    return sortedDescendingArray;
  }

  function ascendingArray (arr) {
    let sortedAscendingArray = [];
    while (arr.length > 0) {
      let max = findMaxValue(arr);
      sortedAscendingArray.push(max);
      arr.splice(arr.indexOf(max), 1);
    } 
    return sortedAscendingArray;
  }

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


//Sort each array in ascending order.

console.log(ascendingArray(nums1));

console.log(ascendingArray(nums3));

//Sort each array in decending order.


console.log(descendingArray(nums2));


//Does it altar the arrays? Yes!
console.log(nums1);
console.log(nums2);
console.log(nums3);
