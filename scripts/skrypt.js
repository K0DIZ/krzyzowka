let correctAnswers = ["program", "linux", "gmail", "rekurencja", "formatowanie", "youtube", "reinstalacja", "java", "tor", "ftp", "malware"];
let finalAnswer = "informatyka";


$(document).ready(function() {
    $("#submit").click(function(){
        let userFinalAnswer = "";
        let userAnswers = []
        for (j = 0; j < correctAnswers.length; j++){
            let tempTable = [];
            for (i = 0; i < correctAnswers[j].length; i++) {

                tempTable[i] = document.getElementsByClassName(`q${j}`)[i].value.toLowerCase();
            };
            userAnswers[j] = tempTable;
            for (k = 0; k < correctAnswers[j].length; k++) {
                if (userAnswers[j][k] == correctAnswers[j][k]) {
                    document.getElementsByClassName(`q${j}`)[k].style.backgroundColor = "green";
                }
                else {
                    document.getElementsByClassName(`q${j}`)[k].style.backgroundColor = "red";
                };
            };
            tempUserFinalAnswer = document.getElementsByClassName(`f${j}`)[0].value.toLowerCase();
            userFinalAnswer += tempUserFinalAnswer;
        };
        console.log(userFinalAnswer);
    });
});