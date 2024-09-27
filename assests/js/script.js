/*Wait for the DOM to finish loading before running the game*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button"); /*buttons outputs an array of all buttons */
    /*retrieve the data type of each button to distigush what button does what*/
    /*Get users choice and rules button*/
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "rules-btn") {

            } else {
                let userChoice = this.getAttribute("data-type");
                alert(`You clicked ${userChoice}.`);
            }
        })
    }

    
})
