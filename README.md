# Rock Paper Scissors Lizard Spock #

## Description ##

The game Rock Paper Scissors Lizard Spock is an expanded iteration of the traditional hand game Rock Paper Scissors. Popularized by the TV show "The Big Bang Theory," it introduces two additional choices—Lizard and Spock—to the original three (Rock, Paper, and Scissors), elevating it to a more intricate and strategic game.

![Reposivity](assests/images/am-i-resposive.webp)

## Game Rules ##

### Understanding the Game ###

**Objective:** The game is played by both the user and the computer. The idea is to outsmart the computer by choosing a hand that outperforms its own.

**Choices:** You can choose one of five hands: Rock, Paper, Scissors, Lizard, or Spock.

**Winning Rules:**
- Rock crushes Scissors and crushes Lizard.
- Paper covers Rock and disproves Spock.
- Scissors cuts Paper and decapitates Lizard.
- Lizard eats Paper and poisons Spock.
- Spock smashes Scissors and vaporizes Rock.

### Starting the Game ###

- **Access the Game:** Open the web page containing the Rock Paper Scissors Lizard Spock game.
- **View Scores:** At the top of the game screen, you will see your score and the computer's score.
- **Select a move:** Click on one of the five buttons representing your choice:

### Gamplay ###

- **Computer’s Choice:** After you select your choice, the computer will randomly choose one of the five options.
- **Result Display:** The game will generate:

  - Your Choice: What you selected.
  - Computer's Choice: What the computer selected.
  - Result: Whether you won, lost, or tied.
  
### Winning the Game ###
- The game continues until either you or the computer reaches a score of 5.
- End of Game: When someone wins, a game over message will appear.

## User Experience ##

## Project Goals ##

- Design an intuitive interface that is easy to use.
- Improve the user experience by providing visual feedback for each action (button clicks, game results) to make the game more engaging.
- Mobile Compatibility: Make sure the game is responsive and playable on a variety of devices, including phones, tablets, and computers.

## Target Audience ##

- Casual players seeking an easy-to-learn game to pass the time.
- Fans of the original “Big Bang Theory” reference and those who appreciate quirky, pop culture-inspired games.

## Design ##

### **Colours** ###

**Background Gradient:**

- Dark Blue: #0d2b52
- Lighter Blue: #174685

![Reposivity](assests/images/background-colors.webp)

**Buttons:**

- White: #ffffff (used for score containers)
- Red: #ad0e08 (for the rock button)
- Black: #242323 (for the paper button)
- Yellow: #d3c60f (for the scissors button)
- Green: #097028 (for the lizard button)
- Blue: #2422a8 (for the Spock button)

![Reposivity](assests/images/buttons-color.webp)

### **Typography** ###

- Oswald: Imported from Google Fonts, applied to the entire body of the document.
- All icons sourced from [Font Aewsome](https://fontawesome.com/)

## **Features** ##
The Rock Paper Scissors Lizard Spock game screen is designed to captivate and guide users through the game effortlessly. At the top, the game's name is showcased in a unique, stacked style, drawing attention to the header. Just below, a dynamic scoreboard keeps track of the user and computer scores. The central game area features five vibrant buttons, each representing a hand gesture—rock, paper, scissors, lizard, and Spock—with easily recognizable icons. Upon clicking a button, the user's choice, the computer's choice, and the round's outcome are promptly displayed. Moreover, the interface includes a rules button to offer new players an overlay with the game rules, as well as a concealed game over screen to notify users when the game concludes, ensuring an intuitive and engaging gaming experience.

### **Game Screen** ###

| Desktop                                                                            | Mobile                                                                           |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img src="./assests/images/home-screen-desktop.webp" alt="desktop image"/>            | <img src="./assests/images/home-screen-mobile.webp" alt="mobile image"/> |

### **Rules Screen** ###

![Rules Screen](assests/images/rules-screen-two.webp)

### **Game Over Screen** ###

![Game Over Screen](assests/images/game-over-screen.webp)

 ## **Testing** ##
 
- Consistently tested Rock Paper Scissors Lizard Spock across different browsers, including Chrome, Firefox, Safari, and Edge.
- Ensured that the layout adapts properly by testing responsiveness on various devices such as desktops, tablets, and mobile phones, as well as different screen sizes.

## **Manual Testing** ##

### **Game Screen** ###

**Choice Buttons - Click**

- Buttons: Rock, Paper, Scissors, Lizard, Spock
- Verify that the user's choice is correctly displayed.
- Check that the computer's choice is randomly selected and displayed.
- Confirm that the result (win/lose) is displayed correctly based on the game's rules.
- Ensure that the scores for both the user and the computer update correctly.
- Once the scores reach five make sure game over screen displays and data resets.

**Rules Button - Click**

- Verify that the rules overlay screen becomes visible.
- Check that the rules image is displayed correctly.
- Ensure the close button on the rules screen works and hides the overlay when clicked.

### Rules Screen ###

**Closing Button - Click**
- verify the closing buttong hides the overlay when clicked

### Game Over Screen ###

**Closing Button - Click**
- verify the closing buttong hides the game over screen.

## Bugs ##


**Solved Bugs**

- When implementing the game Over function the code would not finish the game after the scores for the user and the computer reached five.
- The incrementedScore functions were being called in the getresult function and the scores could not be read - this would mean the gameOver would not finish the game.
- To fix the issue, variables were defined after a choice button was clicked to increment the scores, so that the gameOver funtion can be called and the scores can be used to finish the game.

![Bug Fix](assests/images/bug-fix.webp)

### Validator Testing ###

**HTML - W3C Validator**

![Bug Fix](assests/images/html-valid.webp)

- The warning can be ignored as is filled with content when the user either wins or loses the game.
- No erros have been detected.

**CSS - (Jigsaw) Validator**

![Bug Fix](assests/images/css-valid.webp)

- The warning can be ignored as the imoprted styles are from [google fonts](https://fonts.google.com/).
- No errors were detected.

**JavaScript - JShint Validator**

![Bug Fix](assests/images/js-hint.webp)

- No erros were detected.

## Google Lighthouse ##

![Bug Fix](assests/images/lighthouse.webp)

- To improve accessability we can add names for the choices buttons - these names can appear under the button for readability.

## Deployment ##

**Manual Deployment**

Rock Paper Lizard Spock has been deployed to Github pages as follows:

- Go to **Settings** tab in the Github Repository.
- From the **"Code and automation"** section, select **pages**.
- Set source to 'Deploy from Branch', make sure **Main branch** is selected.
- Under Branch, click **save**.
- The page will be automatically refreshed, in the **Enviroments** section you will be able to veiw the live site.
  

 The live site can be found: https://craig-grant630.github.io/Rock-Paper-Scissors-Lizard-Spock/

 **Forking Repository**
- Go to the GitHub repository.
- Select **"Fork"** button on the page.
- This will create a copy of the repository in your GitHub account.

**Clone Repository**

- Go to the GitHub Repository.
- Click the Code button and copy the link.
- In Gitpod, type "git clone **repository link copied**.git" and enter.

## Credits

- The inspiration for design of the buttons were taken from CI [Love Maths](https://craig-grant630.github.io/Love-maths/)



