for(var i=1; i<=100; i++){
    var three = i % 3;
    var five = i % 5;
    var fifteen = i % 15;
    if(fifteen == 0){
        console.log("FizzBuzz");
    }
        else if(five == 0){
            console.log("Buzz")
        }
            else if(three == 0){
                console.log("Fizz")
            }
                else{
                    console.log(i)
        }
}



