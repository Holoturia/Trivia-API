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
    <p>${data.results[0].question}</p>
    <button onclick="checkResult(document.getElementById('a1').value)" id="a1" value="${answers[0]}">${answers[0]}</button>
    <button onclick="checkResult(document.getElementById('a2').value)" id="a2" value="${answers[1]}">${answers[1]}</button>
    <button onclick="checkResult(document.getElementById('a3').value)" id="a3" value="${answers[2]}">${answers[2]}</button>
    <button onclick="checkResult(document.getElementById('a4').value)" id="a4" value="${answers[3]}">${answers[3]}</button>
    `;

    //Restart result div
    document.getElementById("result").innerHTML = "";
}

//Checks user's result
function checkResult(playerAnswer){

    if (playerAnswer == correctAnswer){
        document.getElementById("result").innerHTML = `<p>Correct!</p>`;
    }
    else{
        document.getElementById("result").innerHTML = `<p>Incorrect! The correct answer is: ${correctAnswer}</p>`;
    }

    //Disable buttons
    document.getElementById("a1").disabled = true;
    document.getElementById("a2").disabled = true;
    document.getElementById("a3").disabled = true;
    document.getElementById("a4").disabled = true;
}