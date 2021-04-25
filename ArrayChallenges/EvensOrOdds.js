//Given an array, determine if the values that are odd when added together are larger than the even values added together. If they are equal say that they are "tied".

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for(var i = 0; i <=arr.length - 1; i++){
        if(arr[i] % 2 === 0){
            totalEvens += arr[i];
        }
            else{
                totalOdds += arr[i];
            }
        }
        // console.log(totalOdds);
        // console.log(totalEvens);
    if(totalOdds > totalEvens){
        return "Odds are larger";
}
        else if(totalEvens > totalOdds){
            return "Evens are larger";
        }
            else{
                return "TIED"
            }
    
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9,]);
console.log(result); // we expect back "evens are larger"