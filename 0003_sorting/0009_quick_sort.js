//quick sort:
// We work by selecting a single element -the pivot.
//then move all the nos that are lower than pivot to the left and the no that are greater than the pivot to the right now, we're not going to sort them all.just move them to one side.

//  we know that that one number(pivot) is in the correct spot,only that one number.

// pivot helper function
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start]; // 4
  let swapIndex = start; // = 0 to keep track of position where pivot would be swapped in th end

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      // 4 > 8 Do Nothing | 4 > 2 |
      swapIndex++; // = 1 (8)
      swap(arr, swapIndex, i); // swapping the loop element with the element smaller than pivot | 8, 2
    }
  }
  swap(arr, start, swapIndex); // swap the pivot element,with the last elment which was smaller once the loop istravesed till the end
  return swapIndex; // final index of the pivot = 3
}
// pivot([4, 8, 2, 1, 5, 7, 6, 3]);
function quickSort(arr, left = 0, right = arr.length - 1) {
  if ((left < right)) {
    let pivotIndex = pivot(arr, left, right); // 3
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
const ans = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(ans);
//  [4, 8, 2, 1, 5, 7, 6, 3]
// [3, 2, 1, 4,5,6, 8, 7]  //  3
// [3 ,2,1] =3    [6,8,7]= 6
// 2 ,1            5,9
//  1              5
