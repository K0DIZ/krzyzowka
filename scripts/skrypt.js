let correctAnswers = ["program", "linux", "gmail", "rekurencja", "formatowanie", "youtube", "reinstalacja", "java", "tor", "tcp", "malware"];
let finalAnswer = "informatyka";


$(document).ready(function() {
    $("#submit").click(function(){
        let userFinalAnswer = ["","","","","","","","","","",""];
        let userAnswers = []
        isCorrect = true;
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
                    isCorrect = false;
                };
            };
            tempUserFinalAnswer = document.getElementsByClassName(`f${j}`)[0].value.toLowerCase();
            document.getElementsByClassName(`p${j}`)[0].innerHTML = tempUserFinalAnswer;
            userFinalAnswer[j] = tempUserFinalAnswer;
        };
            for (f = 0; f < finalAnswer.length; f++) {
                if (finalAnswer[f] == userFinalAnswer[f]) {
                    document.getElementsByClassName(`p${f}`)[0].style.backgroundColor = "green";
                }
                else {
                    document.getElementsByClassName(`p${f}`)[0].style.backgroundColor = "red";
                    isCorrect = false;
                };
            };
        result = document.getElementById("p-user-final-result");
        console.log(userFinalAnswer);
        console.log(finalAnswer);
        console.log(isCorrect);
        for (d = 0; d < finalAnswer.length; d++) {
            if (userFinalAnswer[d] != finalAnswer[d]) {
                isCorrect = false;
            }
        };
        if (isCorrect) {
            result.innerHTML = "Gratulacje! Krzyżówka rozwiązana poprawnie!";
            result.style.color = "green";
        }
        else {
            result.innerHTML = "Nie wszystkie odpowiedzi są poprawne!";
            result.style.color = "red";
        };
    });
    $("#reset").click(function() {
        for (c = 0; c < finalAnswer.length; c++) {
            document.getElementsByClassName(`p${c}`)[0].innerHTML = "";
            document.getElementsByClassName(`p${c}`)[0].style.backgroundColor = "white";
            for (j = 0; j < correctAnswers[c].length; j++){
                document.getElementsByClassName(`q${c}`)[j].style.backgroundColor = "white";
            };
        };
        result.innerHTML = "";
    });
});