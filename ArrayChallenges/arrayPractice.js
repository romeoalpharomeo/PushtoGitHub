function evenOfOdds (arr) {
    let oddTotal = 0;
    let evenTotal = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? (evenTotal += arr[i]) : (oddTotal += arr[i]);
    }
    if (oddTotal === evenTotal) {
        return "TIED"
    }
    return `${oddTotal > evenTotal ? "Odds" : "Evens"} are larger`
}
console.log(evenOfOdds([2,3,2,3,2,2]));