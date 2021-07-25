//just for btn css style
let button = document.getElementById('btn')
document.documentElement.onclick = function (){
    btn.style.left = 40 + "%";
}
let txt = document.getElementById('txtbox');
button.onclick = function(){
    txt.style.transition = 0.5 + "s"
    txt.style.width=200 + "px";
    txt.style.left = 600 + "px"
}


//data
let message = document.querySelector('.result')
let score = 0;
let gameState = false;
let names = ["mahdi","aria","sadra","mamad","arman","shahed","farbod","arad","farzam"];
let scramble = "";
let scrambled = "";

btn.addEventListener("click",function (){

    console.log("Clicked");
    if (!gameState) {
        gameState = true;
        btn.innerHTML = "Guess";
        txt.value = "";
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else {
        let tempGuess = txt.value;
        score++;
        if (tempGuess === scramble) {
            txt.value = "";
            gameState = false;
            message.innerHTML = "Correct it was " + scramble + " it look " + score + " guesses";
            button.innerHTML = "Start";
        }
        else {
            txt.value = "";
            message.innerHTML = "Wrong " + scrambled;
        }

    }

})

function createWord(){

    let randomIndex = Math.floor(Math.random() * names.length);
    let tempWord = names[randomIndex];
    let rand = randomArray(tempWord.split(""));
    message.innerHTML = rand.join("")

    return tempWord;

}

function randomArray(arr){

    for (let i = arr.length - 1;i > 0;i--) {
        let temp = arr[i];

        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;

}
