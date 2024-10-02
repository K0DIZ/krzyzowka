// correct answers
let correctAnswers = ["program", "linux", "gmail", "rekurencja", "formatowanie", "youtube", "reinstalacja", "java", "tor", "tcp", "malware"];
let finalAnswer = "informatyka";


$(document).ready(function() {
    // check answers on click
    $("#submit").click(function(){
        // create answers tables and isCorrect variable
        let userFinalAnswer = ["","","","","","","","","","",""];
        let userAnswers = ["","","","","","","","","","",""]
        isCorrect = true;
        for (j = 0; j < correctAnswers.length; j++){
            let tempTable = [];
            for (i = 0; i < correctAnswers[j].length; i++) {

                tempTable[i] = document.getElementsByClassName(`q${j}`)[i].value.toLowerCase();
            };
            // change color of the crossword if answer is correct or incorrect
            userAnswers[j] = tempTable;
            for (k = 0; k < correctAnswers[j].length; k++) {
                if (userAnswers[j][k] == correctAnswers[j].charAt(k)) {
                    document.getElementsByClassName(`q${j}`)[k].style.backgroundColor = "limegreen";
                }
                else {
                    document.getElementsByClassName(`q${j}`)[k].style.backgroundColor = "red";
                    isCorrect = false;
                };
            };
            // add letters to final answers
            tempUserFinalAnswer = document.getElementsByClassName(`f${j}`)[0].value.toLowerCase();
            document.getElementsByClassName(`p${j}`)[0].innerHTML = tempUserFinalAnswer;
            userFinalAnswer[j] = tempUserFinalAnswer;
        };
        // change color of the final answer if letters are correct or incorrect
            for (f = 0; f < finalAnswer.length; f++) {
                if (finalAnswer.charAt(f) == userFinalAnswer[f]) {
                    document.getElementsByClassName(`p${f}`)[0].style.backgroundColor = "limegreen";
                }
                else {
                    document.getElementsByClassName(`p${f}`)[0].style.backgroundColor = "red";
                    isCorrect = false;
                };
            };
        // check if all answers are ok and add comunicate
        result1 = document.getElementById("p-user-final-result");
        for (d = 0; d < finalAnswer.length; d++) {
            if (userFinalAnswer[d] != finalAnswer.charAt(d)) {
                isCorrect = false;
            }
        };
        // comunicate if correct
        if (isCorrect) {
            result1.innerHTML = "Gratulacje! Krzyżówka rozwiązana poprawnie!";
            result1.style.color = "limegreen";
        }
        // comunicate if incorrect
        else {
            result1.innerHTML = "Nie wszystkie odpowiedzi są poprawne!";
            result1.style.color = "red";
        };
    });
    // onclick reset button
    $("#reset").click( function() {
        window.location.reload();
    });
});