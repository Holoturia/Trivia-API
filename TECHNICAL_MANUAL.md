# Trivia API Web Technical Manual
This manual contains a description of the composition of the Trivia API web and its functionalities.

## Composition
This web  is formed by the following pages:
### Home page
This is the page that loads when you enter the web for the first time. It contains a general information about the web.
- HTML: index.html
- CSS linked: index.css, nav.css
### Trivia page
This page contains the trivia game.
- HTML: triviaGame.html
- CSS linked: triviaGame.css, nav.css
- JS linked: triviaDemo.js
### About Us page
This page contains information about the project.
- HTML: aboutUs.html
- CSS linked: index.css, nav.css, aboutUs.css

## CSS

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
- 16 Entertainment: Board Gammes
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

## Trivia Back-end (Javascript)
The back-end which manages the trivia questions is only formed by the triviaDemo.js file, which is attached to the triviaGame.html file.
This script connects to the API, gets the question and prints the data to the html.