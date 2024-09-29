/*Wait for the DOM to finish loading before running the game*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button"); /*buttons outputs an array of all buttons */
    /*retrieve the data type of each button to distigush what button does what*/
    /*Get users choice and rules button*/
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "rules-btn") {
                document.getElementById("rules-screen-hidden").style.display = "flex";
            } else {
                let userChoice = this.getAttribute("data-type");
                let computerChoice  = getCompChoice();
                let result = getResult(userChoice,computerChoice);
                
                document.getElementById("result").textContent = result;
                document.getElementById("user-choice").textContent = userChoice;
                document.getElementById("comp-choice").textContent = computerChoice;
            }
        })
        
    }

    let closingButton = document.getElementById("close");
    closingButton.addEventListener("click", function(){
        document.getElementById("rules-screen-hidden").style.display = "none";
    })
})


function getCompChoice(){
    const choices = ["rock","paper", "scissors","lizard","spock"];
    return choices[Math.floor(Math.random()*5)];

}

function getResult(userChoice,computerChoice){
    const outcomes = {
        rock: { scissors: 'crushes', lizard: 'crushes' },
        paper: { rock: 'covers', spock: 'disproves' },
        scissors: { paper: 'cuts', lizard: 'decapitates' },
        lizard: { paper: 'eats', spock: 'poisons' },
        spock: { scissors: 'smashes', rock: 'vaporizes' }
    };

    if(userChoice === computerChoice){
        return "Draw!";
    } else if(outcomes[userChoice][computerChoice]){
        return "Win!"
    } else{
        return "Lose!"
    }


}