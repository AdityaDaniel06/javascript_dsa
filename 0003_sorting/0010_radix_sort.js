function getDigit(num , place){
    return Math.floor(Math.abs(num) / Math.pow(10 , place)) % 10 ;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor( Math.log10(Math.abs(num))) +1;
}

function mostDigit(num){
    let maxDigits = 0;
    for( let i =0 ; i< num.length; i++ ){
        maxDigits = Math.max(maxDigits, digitCount( nums[i]));
    }
    return maxDigits;
}

