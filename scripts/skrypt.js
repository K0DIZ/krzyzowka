let correctAnswers = ["program", "linux", "gmail", "rekurencja", "formatowanie", "youtube", "reinstalacja", "java", "tor", "ftp", "malware"];
let finalAnswer = "informatyka";
$(document).ready(function() {
    $("#submit").click(function(){
        let userAnswers = []
        for (j = 0; j < correctAnswers.length; j++){
            let tempTable = [];
            for (i = 0; i < correctAnswers[j].length; i++) {

                tempTable[i] = document.getElementsByClassName(`q${j}`)[i].value.toLowerCase();
            };
            userAnswers[j] = tempTable;
            console.log(tempTable);
        };
        console.log(userAnswers);
    });
});