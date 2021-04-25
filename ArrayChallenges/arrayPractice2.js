function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    // var next = 1;
    for (i=0; i < n - 2; i++){
        var fibSum = fibArr[i] + fibArr[i + 1];
        fibArr.push(fibSum)
        // next++;
        
    }
    return fibArr;
    
}
var result = fibonacciArray(5);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]