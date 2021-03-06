$(document).ready(function () {
    function initialButtons() {
        for (var x = 0; x < 4; x++) {
            var newBtn = $("<button></button>");
            newBtn = $(newBtn).attr("id", ("btnAnswer" + (x + 1))).text(("Empty answer button #" + (x + 1)));
            $("#answerButtons").append(newBtn);
            var newBr = $("<br>");
            $("#answerButtons").append(newBr);
        }
    }

    function initializeVariables() {
        console.log("initial correctAnswerChosen value: " + initCorrAnswrChsn());
        console.log("initial totalCorrect value: " + initTotCorct());
        console.log("initial totalIncorrect value : " + initTotIncorct());
        console.log("initial totalUnanswered value: " + initTotUnanswr());
        console.log("initial newGame value: " + initNewGame());
    }

    function initCorrAnswrChsn() {
        correctAnswerChosen = false;
        return correctAnswerChosen;
    }

    function initTotCorct() {
        totalCorrect = 0;
        return totalCorrect;
    }

    function initTotIncorct() {
        totalIncorrect = 0;
        return totalIncorrect;
    }

    function initTotUnanswr() {
        totalUnanswered = 0;
        return totalUnanswered;
    }

    function initNewGame() {
        newGame = true;
        return newGame;
    }

    var timeRemaining, questionArray = [], newGame, correctAnswerChosen, totalCorrect, totalIncorrect, totalUnanswered, betweenQuestions;

    function initBetweenQuestions() {
        betweenQuestions = false;
        return betweenQuestions;
    }

    function initTimeRemaining() {
        timeRemaining = 30;
        return timeRemaining;
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

    console.log("The value of questionArray is: " + questionArray);

    function setQuestionObject() {
        questionObject = new QuestionObject(1, "What type of game system is Pathfinder RPG?",
            "Pen & Paper", "PC", "Figurines", "GURPs", "Pen & Paper");
        questionArray.push(questionObject);
        questionObject = new QuestionObject(2, "What type of game were the old Fallout games?",
            "Pen & Paper", "XBox", "ARPG", "RPG", "RPG");
        questionArray.push(questionObject);
        questionObject = new QuestionObject(3, "What type of game have the newer Fallout games been?",
            "Pen & Paper", "RPG", "ARPG", "Casual", "ARPG");
        questionArray.push(questionObject);
        questionObject = new QuestionObject(4, "How many Might and Magic (Not Heroes) games have"
            + " there been?", "7", "10", "15", "20", "10");
        questionArray.push(questionObject);
        questionObject = new QuestionObject(5, "What type of game is an ARPG?",
            "Strategy", "Role-Playing", "Action Role-Playing", "Adventure Role-Playing", "Action Role-Playing");
        questionArray.push(questionObject);
        questionObject = new QuestionObject(6, "Which game system does the Baldur's Gate series use?",
            "Pathfinder", "2nd Edition AD&D", "ShadowRun", "GURPs", "2nd Edition AD&D");
        questionArray.push(questionObject);
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

    var intervalId, questionNumber, timeoutId;

    function initQuestionNumber() {
        questionNumber = 0;
        return questionNumber;
    }

    function initialQuestion() {
        resetIntervalId();
        questionNumber = initQuestionNumber();
    }

    function resetIntervalId() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000);
    }

    function currentQuestion(questionNumber) {
        if (questionNumber < 6) {
            timeRemaining = initTimeRemaining();
            populateButtons(questionNumber);
            resetIntervalId();
            initBetweenQuestions();
            return timeRemaining;
        }
        else {
            // display scores and end game screen before looping into the next game
            $("button").hide();
            $("#triviaQuestion").text("Here is your score for this game");
            displayScores(totalCorrect, totalIncorrect, totalUnanswered);
            $(".score").show();
            clearInterval(intervalId);
            timeRemaining = 5;
            intervalId = setInterval(decrementTimer, 1000);

            newGame = true;
            resetGame(newGame);
        }
        return questionNumber;
    }

    function initializeScoreBody() {
        var newDiv = $("<div>");
        newDiv = $(newDiv).attr("class", "score").attr("id", "totalCorrectScore").hide();
        $("#scoreBody").append(newDiv);
        newDiv = $("<div>");
        newDiv = $(newDiv).attr("class", "score").attr("id", "totalIncorrectScore").hide();
        $("#scoreBody").append(newDiv);
        newDiv = $("<div>");
        newDiv = $(newDiv).attr("class", "score").attr("id", "totalUnansweredScore").hide();
        $("#scoreBody").append(newDiv);
        displayScores(initTotCorct(), initTotIncorct(), initTotUnanswr());
    }

    function displayScores(totalCorrect, totalIncorrect, totalUnanswered) {
        $("#totalCorrectScore").text("You got " + totalCorrect + " answers correct");
        $("#totalIncorrectScore").text("You got " + totalIncorrect + " answers incorrect");
        $("#totalUnansweredScore").text("You left " + totalUnanswered + " questions unanswered");
    }

    function displayTimeRemaining(timeRemaining) {
        $("#timeRemaining").text("Time Remaining: " + timeRemaining);
        console.log("The current timeRemaining is: " + timeRemaining);
        if (questionNumber === 0) {
            newGame = true;
            return newGame;
        }
    }

    displayTimeRemaining(timeRemaining);

    function decrementTimer() {
        timeRemaining--;
        displayTimeRemaining(timeRemaining);

        if ((timeRemaining === 0) && (!betweenQuestions)) {
            totalUnanswered++;
            $("button").hide();
            $("#triviaQuestion").text("Time's Up! You were unable to answer in the allotted time");
            clearTimeout(timeoutId);
            timeoutId = setTimeout(showButtons(timeoutId), 5000);
            clearInterval(intervalId);
            timeRemaining = 5;
            intervalId = setInterval(decrementTimer, 1000);
            questionNumber++;
            currentQuestion(questionNumber);
        }

        else if ((timeRemaining === 0) && (betweenQuestions)) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout($("button").show(), 1000);
            clearInterval(intervalId);
            questionNumber++;
            currentQuestion(questionNumber);
        }

        return timeRemaining;
    }

    function showButtons(timeoutId) {
        if (timeoutId === 5000) {
            $("button").show();
            clearTimeout(timeoutId);
        }
    }

    decrementTimer(timeRemaining);

    function populateButtons(questionNumber) {
        var x = questionNumber;
        $("#btnAnswer1").text(questionArray[x].questionAnswer1);
        $("#btnAnswer2").text(questionArray[x].questionAnswer2);
        $("#btnAnswer3").text(questionArray[x].questionAnswer3);
        $("#btnAnswer4").text(questionArray[x].questionAnswer4);
        $("#triviaQuestion").text(questionArray[x].questionTriviaQuestion);
    }

    if (newGame) {
        resetGame();
    }

    function resetGame() {
        $(".score").hide();
        $("button").show();
        initCorrAnswrChsn();
        initQuestionNumber();
        initTotCorct();
        initTotIncorct();
        initTotUnanswr();
        initTimeRemaining();
        initialQuestion();
        initializeScoreBody();
        currentQuestion(questionNumber);
        initBetweenQuestions();
        newGame = false;
        return newGame;
    }

    var btnClick;
    $("body").on("click", "button", function () {
        btnClick = event.srcElement.id;
        switch (btnClick) {
            case "btnAnswer1":
                isAnswerCorrect(btnClick);
                break;
            case "btnAnswer2":
                isAnswerCorrect(btnClick);
                break;
            case "btnAnswer3":
                isAnswerCorrect(btnClick);
                break;
            case "btnAnswer4":
                isAnswerCorrect(btnClick);
                break;
            default:
                break;
        }

        function isAnswerCorrect(btnClick, questionNumber) {
            var z = questionNumber;
            var x = $("#" + btnClick).text();
            for (var y = 0; y < 6; y++) {
                if ($("#triviaQuestion").text() === questionArray[y].questionTriviaQuestion) {
                    if (x === questionArray[y].questionCorrectAnswer) {
                        totalCorrect++;
                        $("button").hide();
                        $("#triviaQuestion").text("You guessed correctly!!");
                        clearInterval(intervalId);
                        timeRemaining = 5;
                        intervalId = setInterval(decrementTimer, 1000);
                        betweenQuestions = true;
                    }

                    else {
                        totalIncorrect++;
                        $("button").hide();
                        $("#triviaQuestion").text("You guessed incorrectly!!");
                        clearInterval(intervalId);
                        timeRemaining = 5;
                        intervalId = setInterval(decrementTimer, 1000);
                        betweenQuestions = true;
                    }
                }
            }
        }
    });
});