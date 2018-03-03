$(document).ready(function() {
    function initialButtons() {
        for (var x = 0; x < 4; x++) {
            var newBtn = $("<button></button>");
            newBtn = $(newBtn).attr("id", ("btnAnswer"+(x+1))).text(("Empty answer button #" + (x+1)));
            $("#answerButtons").append(newBtn);
            var newBr = $("<br>");
            $("#answerButtons").append(newBr);
        }
    }

    function initializeVariables() {
        // correctAnswerChosen = false;
        // totalCorrect = 0;
        // totalIncorrect = 0;
        // totalUnanswered = 0;
        // newGame = true;
        console.log("initial correctAnswerChosen value: " + initCorrAnswrChsn());
        console.log("initial totalCorrect value: " + initTotCorct());
        console.log("initial totalIncorrect value : " + initTotIncorct());
        console.log("initial totalUnanswered value: " + initTotUnanswr());
        console.log("initial newGame value: " + initNewGame());
    }

    function initCorrAnswrChsn() {
        var correctAnswerChosen = false;
        return correctAnswerChosen;
    }

    function initTotCorct() {
        var totalCorrect = 0;
        return totalCorrect;
    }

    function initTotIncorct() {
        var totalIncorrect = 0;
        return totalIncorrect;
    }

    function initTotUnanswr() {
        var totalUnanswered = 0;
        return totalUnanswered;
    }

    function initNewGame() {
        var newGame = true;
        return newGame;
    }
    
//    function initQuestionArray() {
//        var obj1 = {}, obj2 = {};
//        var questionArray = [obj1, obj2];
//        return questionArray;
//    }

    // console.log("The value of questionArray: " + questionArray);
    // // var tempArray = [];
    // let tempArray = questionArray;
    var questionObject = {};
    function initQuestionObject(questionObject) {
//        /*var*/ questionObject = {
//            questionNum: 1,
//            questionTriviaQuestion: "A question",
//            questionAnswer1: "answer1",
//            questionAnswer2: "anser2",
//            questionAnswer3: "answertr3",
//            questionAnswer4: "ansdwert4",
//            questionCorrectAnswer: 0
//        };

            questionObject.questionNum = 1,
            questionObject.questionTriviaQuestion = "A question",
            questionObject.questionAnswer1 = "answer1",
            questionObject.questionAnswer2 = "anser2",
            questionObject.questionAnswer3 = "answertr3",
            questionObject.questionAnswer4 = "ansdwert4",
            questionObject.questionCorrectAnswer = 0;

        return questionObject;
    }

    console.log("The value of questionObject: " + questionObject.toString());
    var questionArray = [];
    console.log("The value of questionArray is: " + questionArray);
//    function questionMatrix(questionObject, questionArray) {
//        // questionArray[] = aQuestArray;
//        var anArray = true;
//        console.log("The value of anArray before being a boolean: " + anArray);
//        anArray = questionArray.isArray();
//        console.log("The value of anArray after checking if questionArray is an array: " + anArray);
//        questionArray.push(questionObject);
//        for (var x = 0; x < questionArray.length; x++) {
//            console.log("the value of questionArray[x] and questionObject[x] are: " + questionArray[x]);
//        }
//
//        return questionArray;
//
//    }
//
//    initQuestionArray();
    
    initQuestionObject(questionObject);

//    questionMatrix(questionObject, questionArray[]);
        questionArray.push(questionObject);
        for (var x = 0; x < questionArray.length; x++) {
            console.log("the value of questionArray[x].questionNum is: "
                + questionArray[x].questionNum);
            console.log("the value of questionArray[x].questionTriviaQuestion\n\
                is: " + questionArray[x].questionTriviaQuestion);
            console.log("the value of questionArray[x].questionAnswer1 is: "
                + questionArray[x].questionAnswer1);
            console.log("the value of questionArray[x].questionAnswer2 is: "
                + questionArray[x].questionAnswer2);
            console.log("the value of questionArray[x].questionAnswer3 is: "
                + questionArray[x].questionAnswer3);
            console.log("the value of questionArray[x].questionAnswer4 is: "
                + questionArray[x].questionAnswer4);
            console.log("the value of questionArray[x].questionCorrectAnswer \n\
                is: " + questionArray[x].questionCorrectAnswer);
        }

    initialButtons();

    initializeVariables();
})