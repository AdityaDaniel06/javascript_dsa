function countDown(num) {
  if (num <= 0) {
    console.log("All done!!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1; // endpoint
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//helper method recurrsion
function collectOdd(arr) {
  let result = []; // don't want to reset result everytime; so outside helper

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

collectOdd([1, 2, 3, 4, 5, 6, , 7, 8, 9]);


// Pure recursion
function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0) return newArr;

    if(arr[0] %2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6,, 7, 8, 9]);
