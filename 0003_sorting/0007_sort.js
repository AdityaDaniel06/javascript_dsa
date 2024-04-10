// array.sort built in js
// Swapping
// ES5 var temp = arr[i]
// arr[i] = arr[j]
// arr[j] = temp

// ES6+ const swap = (arr , x, y) => {
// [arr[x], arr[y]] = [arr[y], arr[x]]
// }

// bubble sort
function bubbleSort(arr) {
  let noSwaps; // avoid unnecessary swaps
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// console.log(bubbleSort([1, 45, 5, 9, 7, 8]));

// selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([2, 0, 5, 7, 89, 11, 65, 4, 21]));

// +++++insertion sort+++++
// instead of finding the largest element at a time or finding the smallest element at a time,
//it takes each element and places it where it should go in the sorted position.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // to keep track of value we are looking at.
    //  we wanna work backwards eg: last element = 4
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // comparing current no with previous no 76
      // if prev.(76) element is greater than current(4), we put 76 in 4 position
      arr[j + 1] = arr[j];
    }
    // to insert the current element at right position
    arr[j + 1] = currentVal;
    console.log("insertionsort", arr);
  }
  return arr;
}

insertionSort([2, 9, 0, 96, 111, 76, 4]);
