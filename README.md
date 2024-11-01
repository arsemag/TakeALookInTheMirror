# Project Title: Take A Look In the Mirror

## Project Description
- The purpose of this project is to address systemic issues related to racial, class, and gender inequalities through technology. We would like to
  educate users and provide skills to handle real-life situations. Once the user choose which matching game the would like to play we provided instructions and
  background information so that user plays the game propely and has proper infromation to be able to make the correct matches. Then at the bottom of the website
  there are examples to show the user where they might see these mircroagression occur. Lastly, the user will be able to play in ther virtual reailty to attempt to fight
  those microagressions and social status qoute. 

## Installation Instructions:
Clear instructions for installing the project, including any prerequisites

 
## Prerequisites:
- Recommended to open through Visual Studio Code

## Usage Instructions:
-  Clone the repository to your local machine.
-  Open the `final.html` file in your web browser.
-  Follow the on-screen instructions to play the game and learn about gender biases.
  

## Accessing the Website:
   - There is not a domine for this website, you would need to download the zip and open in through your file manager.

## Features
- **Interactive Gameplay:** Users match questions related to gender roles with their answers.
- **Educational Content:** Provides background information about gender bias, helping users understand its significance.
- **Dynamic Card Generation:** Cards are created dynamically using JavaScript, ensuring a fresh experience each time the game is played.
- **Feedback Mechanism:** Users can return to the home page and provide feedback on their experience.

## Code Organization
The project is structured as follows:
- **HTML Structure:** The game interface is created with HTML, including headings, paragraphs, and containers for gameplay.
- **CSS Styles:** Custom styles are applied to enhance the user interface, ensuring a visually appealing experience with responsive design.
- **JavaScript Logic:** The game's logic, including card flipping, matching mechanics, and game initialization, is handled through JavaScript.

  
## Key Classes and Functions

## HTML Elements:
- `h1`: Displays the game title.
- `p`: Contains instructions and background information.
- `div.game`: Holds the dynamically generated game cards.
  
## CSS Classes:
- `.container`: Styles for the main game container.
- `.card`: Styles for the individual cards in the game.
- `.flipped`, `.wrong-answer`, `.answer`: States for card interactions.

## JavaScript Functions:
- `createCard(card)`: Generates individual card elements.
- `flipCard(cardElement)`: Handles the flipping logic for cards.
- `checkMatch()`: Validates if two selected cards match.
- `initializeGame()`: Shuffles and displays the game cards at the start.

