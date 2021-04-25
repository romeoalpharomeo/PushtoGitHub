//Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i = 0; i <=arr.length - 1; i++){
            sum += arr[i];
            var average = sum / arr.length;
    }
    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i <= arr.length - 1; i++){
        if (arr[i] > average){
            count++;

        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4