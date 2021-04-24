//Use a loop to print odds 1-20
for(var i=1; i <= 20; i++) {
    var evens = i % 2;
    if(evens == 0){
        console.log("");
    }
        else{
            console.log(i);
        }
    i++;
}