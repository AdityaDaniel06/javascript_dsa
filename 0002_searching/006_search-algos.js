// linear search in js --> indexOf , includes , find, findIndex
// O(n)
function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 2));

// Binary search ---> concept= Divide and conquer
// works on sorted arrays only
// best case O(1)  worst n avg O(log n)

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) {
    return mid;
  } else {
    while (arr[mid] !== val && left <= right) {
      if (val < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }
  }
  // if (arr[mid] === val) return mid;
  // else return -1;
  return arr[mid] === val ? mid : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

// basic String Search
//Search a substring in a string

function stringSearch(str, substr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (substr[j] !== str[i + j]) {
        break;
      }
      if (j === substr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

stringSearch("lorie loled", "lol");
