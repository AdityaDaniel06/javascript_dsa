//concept used: sliding window
function maxSubArray(arr, num) {
  // num: how many no to add
  let max = -Infinity; // if array has negative numbers
  if (num > arr.length) {
    return null;
  } else {
    for (let i = 0; i < arr.length - num + 1; i++) {
      let  tempSum = 0;
      for (let j = 0; j < num; j++) {
        tempSum += arr[i + j];
      }
      if (tempSum > max) {
        max = tempSum;
      }
      console.log(tempSum, max);
    }
    return max;
  }
}

maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

//Re-factored
function maxSumSubArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for( let i=num;i<arr.length;i++){
    tempSum = tempSum - arr[i-num]+ tempSum;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);