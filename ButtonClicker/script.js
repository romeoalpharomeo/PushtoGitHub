var clicks = 0;
function countClick() {
    clicks += 1;
    document.querySelector("#numberOfClicks").innerHTML = clicks;
}