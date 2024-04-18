# Trivia API Web Technical Manual
This manual contains a description of the composition of the Trivia API web and its functionalities.

## Composition
This web  is formed by the following pages:
### Home page
This is the page that loads when you enter the web for the first time. It contains a general information about the web.
- HTML: index.html
- CSS linked: webStyles.css, index.css, nav.css
### Trivia page
This page contains the trivia game.
- HTML: triviaGame.html
- CSS linked: webStyles.css, triviaGame.css, nav.css
- JS linked: triviaDemo.js
### About Us page
This page contains information about the project.
- HTML: aboutUs.html
- CSS linked: webStyles.css, nav.css, aboutUs.css

## CSS
This web pages have 3 css files linked:
- **webStyles.css**: every page will load this css. This contains general styles for the whole web.
- **nav.css**: every page will load this css. This contains styles for the navbar in all pages.
- **index.css/triviaGame.css/aboutUs.css**: each page will load its own css file. This contains specific styles for the linked page.

## Trivia API
To get data from the Open Triva Database, this web uses this URL:
https://opentdb.com/api.php?amount=1&type=multiple

**It is important to remember the API won't allow more than 1 request every 5 seconds!**

With this URL, the API will respond with 1 trivia question with multiple answers to choose (one of them being the correct answer).

Additionally, you can add to the URL "&category=x" to add a certain category and "&difficulty=x" to add a certain difficulty.
### All categories
- 9 General knowledge
- 10 Entertainment: Books
- 11 Entertainment: Movies
- 12 Entertainment: Music
- 13 Entertainment: Musical and Theaters
- 14 Entertainment: Television
- 15 Entertainment: Videogames
- 16 Entertainment: Board Games
- 17 Science and Nature
- 18 Science: Computers
- 19 Science: Mathematics
- 20 Mythology
- 21 Sports
- 22 Geography
- 23 History
- 24 Politics
- 25 Art
- 26 Celebrities
- 27 Animals
- 28 Vehicles
- 29 Entertainment:Comics
- 30 Science: Gadgets
- 31 Entertainment: Japanese Anime and Manga
- 32 Cartoon and animation
### All difficulties
- easy
- medium
- hard

## Trivia Game Back-end (Javascript)
The back-end which manages the trivia questions is only formed by the triviaDemo.js file, which is attached to the triviaGame.html file.
This script connects to the API, gets the question and prints the data to the html.
In the html, the user clicks one of the 4 buttons. Each of them call a function from the js file that checks if the answer selected from the user is correct.

### All functions
- **getQuestion()**: this is called when the "Ask me!" button is pressed. It gets the filtres the user chooses and calls the fetchQuestion() with the filtres.
- **fetchQuestion(category, difficulty)**: this function requires 2 string values. One for category and the other for difficulty. This function will request the API for a question with the values entered. It then calls printData().
- **printData(data)**: this function requires 1 object (which is the API data). It then gets the answers and put them in an array. This array gets shuffled so the correct answer never is in the same position. The function will now start printing data. It will print the question as paragraph and the answers as buttons.
- **checkResult(playerAnswer)**: this function requires 1 string value. It will get the value from the button selected and check if the answer is correct. If it is correct it will print an image. If it is incorrect it will print a paragraph saying it's incorrect and show the correct answer. Finally, the function will disable the buttons so the user can't choose another answer.
