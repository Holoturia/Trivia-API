const APILink = "https://opentdb.com/api.php?amount=1&type=multiple";

function getQuestion(){
    let category, difficulty;

    category = document.getElementById("category").value;
    difficulty = document.getElementById("difficulty").value;

    printData(fetchQuestion(category, difficulty));
}

function fetchQuestion(category, difficulty){
    let link = APILink;

    if (category != "random" || category == ""){
        link += "&category=" + category;
    }

    if (difficulty != "random" || difficulty == ""){
        link += "&difficulty=" + difficulty;
    }

    fetch(link)
    .then(function getResult(result){
        return result.json();
    })
    .then(function getData(data){
        return data;
    })
}

function printData(data){
    document.getElementById("output") = data.results[0].question;
}