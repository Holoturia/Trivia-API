const APILink = "https://opentdb.com/api.php?amount=1&type=multiple";
let correctAnswer = "";

//Gets filtres from user and fetch
function getQuestion(){
    let category, difficulty;

    category = document.getElementById("category").value;
    difficulty = document.getElementById("difficulty").value;

    try{
        fetchQuestion(category, difficulty);
    }
    catch (TypeError){
        document.getElementById("output").innerHTML = `<p>No data<p>`;
    }
}

//Get data from API and print
function fetchQuestion(category, difficulty){
    let link = APILink;

    if (category != "random" || category == ""){
        link += "&category=" + category;
    }

    if (difficulty != "random" || difficulty == ""){
        link += "&difficulty=" + difficulty;
    }

    try{
        fetch(link)
        .then(function getResult(result){
            return result.json();
        })
        .then(function getData(data){
            correctAnswer = data.results[0].correct_answer;     //Get the correct answer for later on

            printData(data);
        })
    }
    catch{

    }
    
}

//Parse data to html
function printData(data){
    let answers = [];
    answers.push(data.results[0].correct_answer);   //Get all answers into an array

    data.results[0].incorrect_answers.forEach(element => {
        answers.push(element);
    });

    answers.sort(() => Math.random() - 0.5);        //Shuffle array

    document.getElementById("output").innerHTML = `
    <p>${data.results[0].question}<p>
    <input type="radio" id="q1" name="answer" value="${answers[0]}">
    <label for="q1">${answers[0]}</label><br>
    <input type="radio" id="q2" name="answer" value="${answers[1]}">
    <label for="q2">${answers[1]}</label><br>
    <input type="radio" id="q3" name="answer" value="${answers[2]}">
    <label for="q3">${answers[2]}</label><br>
    <input type="radio" id="q4" name="answer" value="${answers[3]}">
    <label for="q4">${answers[3]}</label><br><br>
    <button onclick="checkResult()">Check result</button>
    `;
}

//Checks user's result
function checkResult(){
    let playerAnswer = document.querySelector("input[type='radio'][name=answer]:checked").value;

    if (playerAnswer == correctAnswer){
        alert("Correct!")                       //TO CHANGE!! DO SOMETHING ELSE BESIDES AN ALERT!!
    }
    else{
        alert("Incorrect!");
    }
}