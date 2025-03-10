// /////////////////// Multiple Pointers ///////////////////
// input sorted int array
// output first pair with sum equal 0
function sumZeroBasic(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZeroBasic([-4, -3, -2, -1, 0, 1, 2, 5]));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return  [arr[left],arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
