var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function swap() {
    var answer = Math.floor(Math.random() * (lifesAnswers.length) + 1);
    console.log(lifesAnswers[answer]);
    document.querySelector("#oracleAnswer").innerHTML = lifesAnswers[answer];

    document.querySelector("img").setAttribute('src', 'ballStill.jpg');

    


}

function ask() {
    var image = document.querySelector("img");
    image.setAttribute('src', 'ball.gif');
    setTimeout(swap, 1000);

}