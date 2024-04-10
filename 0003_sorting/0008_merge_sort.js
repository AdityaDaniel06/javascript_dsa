// concept divide and concerned

// merging arrays
function mergeSortedArray(arr1, arr2) { // function works only on 2 sorted arrays
  let results = [];
  let i = 0;
  let j = 0;
  // looping both arrays at same time
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // if arrays length unequal remaining elements are pushed
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

console.log(mergeSortedArray([1,10, 50], [2,14, 99, 100]));
function mergeSort(arr) { // uses recursion 
  if (arr.length <= 1) return arr;  // base case
  // let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  // let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  let mid = Math.floor(arr.length / 2);  // breaking arrays in 2 halfs  until length is 1
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArray(left, right);
}
console.log(mergeSort([10, 24, 76, 71, 1, 0, 64]), "mergeSort");
