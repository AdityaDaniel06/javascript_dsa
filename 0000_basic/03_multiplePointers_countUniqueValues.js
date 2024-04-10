// Input is sorted array
// output number of unique elements in a sorted array
function countUniqueValues(arr) {
  let count = 0;
  let prev = arr[0];
  if (arr.length === 0) return 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== prev) {
      count++;
      prev = arr[j];
    }
  }
  return count;
}
console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8]));
