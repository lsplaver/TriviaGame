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
    
    function QuestionObject(questionNum, questionTriviaQuestion, questionAnswer1,
        questionAnswer2, questionAnswer3, questionAnswer4, questionCorrectAnswer) {
            this.questionNum = questionNum;
            this.questionTriviaQuestion = questionTriviaQuestion;
            this.questionAnswer1 = questionAnswer1;
            this.questionAnswer2 = questionAnswer2;
            this.questionAnswer3 = questionAnswer3;
            this.questionAnswer4 = questionAnswer4;
            this.questionCorrectAnswer = questionCorrectAnswer;
    }

    var questionArray = [];
    console.log("The value of questionArray is: " + questionArray);

    function setQuestionObject() {
        // questionObject = new QuestionObject(-1, "A question", "answer1", "anser2",
        //     "answertr3", "ansdwert4", 0);
        // console.log("The value of questionObject: " + questionObject.toString());
        // questionArray.push(questionObject);
        questionObject = new QuestionObject(1, "What type of game system is Pathfinder RPG?",
            "Pen & Paper", "PC", "Figurines", "GURPs", 1);
        questionArray.push(questionObject);
        questionObject = new QuestionObject(2, "What type of game were the old Fallout games?",
            "Pen & Paper", "XBox", "ARPG", "RPG", 4);
        questionArray.push(questionObject);
        questionObject = new QuestionObject(3, "What type of game have the newer Fallout games been?",
            "Pen & Paper", "RPG", "ARPG", "Casual", 3);
        questionArray.push(questionObject);
        questionObject = new QuestionObject(4, "How many Might and Magic (Not Heroes) games have"
            + " there been?", "Too Many", "10", "15", "8", 2);
        questionArray.push(questionObject);
        questionObject = new QuestionObject(5, "What type of game is an ARPG?",
            "Strategy", "Role-Playing", "Action Role-Playing", "Adventure Role-Playing", 3);
        questionArray.push(questionObject);
        questionObject = new QuestionObject(6, "Which game system does the Baldur's Gate series use?",
            "Pathfinder", "2nd Edition AD&D", "ShadowRun", "GURPs", 2);
        questionArray.push(questionObject);
        // questionObject = new QuestionObject(7, "What type of game system is Pathfinder RPG?",
        //     "Pen & Paper", "PC", "Figurines", "GURPs", 1);
        // questionArray.push(questionObject);
        // questionObject = new QuestionObject(8, "What type of game system is Pathfinder RPG?",
        //     "Pen & Paper", "PC", "Figurines", "GURPs", 1);
        // questionArray.push(questionObject);
        // questionObject = new QuestionObject(9, "What type of game system is Pathfinder RPG?",
        //     "Pen & Paper", "PC", "Figurines", "GURPs", 1);
        // questionArray.push(questionObject);
        // questionObject = new QuestionObject(10, "What type of game system is Pathfinder RPG?",
        //     "Pen & Paper", "PC", "Figurines", "GURPs", 1);
        // questionArray.push(questionObject);
    }

    setQuestionObject();

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