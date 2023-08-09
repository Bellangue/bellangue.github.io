currentLanguage = localStorage.getItem("currentLanguage");

const questionElements = document.getElementsByClassName("questionElements");
const hintButton = document.getElementById("hintButton");
const confirmButton = document.getElementById("confirmButton");
const endText = document.getElementById("endText");
const snailPicture = document.getElementById("snailPicture");
snailPicture.style.display = 'none';

var selected = sessionStorage.getItem("selected");

let currentLessonJson = lessonJSONData[selected];
let currentQuestionNo;


var selectedAnswer;

const necessaryQuestions = 5;
let doneQuestions = 0;
let totalQuestions = 0;

setQuestion();

const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${currentLanguage}.png"/>`;

function setQuestion() {
    currentQuestionNo = Math.round(Math.random() * (currentLessonJson.length - 1));
    selectedAnswer = undefined;
    endText.textContent = "";
    hintButton.textContent = `Give Answer`;
    confirmButton.textContent = "Confirm Answer";
    confirmButton.style.backgroundColor = "#c2f4c2";
    questionElements[0].textContent = currentLessonJson[currentQuestionNo].Content;
    questionElements[1].textContent = currentLessonJson[currentQuestionNo].Question;
    let shuffledOptions = currentLessonJson[currentQuestionNo].Options;
    shuffledOptions = shuffle(shuffledOptions);
    for (let i = 0; i < 4; ++i) {
        questionElements[i + 2].textContent = shuffledOptions[i];
    }
    for (let i = 2; i < 6; ++i) {
        questionElements[i].style.backgroundColor = "#c2c2f4"
    }
}

for (let i = 2; i < 6; ++i) {
    questionElements[i].addEventListener("click", function () {
        selectedAnswer = questionElements[i].textContent;
        for (let j = 2; j < 6; ++j) {
            questionElements[j].style.backgroundColor = "#c2c2f4"
        }
        questionElements[i].style.backgroundColor = "#c2f4c2"
    });
}

confirmButton.addEventListener("click", function () {
    if (confirmButton.textContent === "Confirm Answer") {
        if (selectedAnswer === undefined) {
            alert("You did not input an answer. Try again.");
        } else {
            ++totalQuestions;
            if (checkIfCorrect()) {
                endText.textContent = "Correct! " + currentLessonJson[currentQuestionNo].Translation;
                endText.style.color = "green";
                confirmButton.textContent = "Next...";
                ++doneQuestions;
            } else {
                endText.textContent = "Incorrect! " + currentLessonJson[currentQuestionNo].Translation;
                endText.style.color = "red";
                confirmButton.textContent = "Next...";
                confirmButton.style.backgroundColor = "#ee7070";
            }
        }
    } else if (confirmButton.textContent === "Next...") {
        if (doneQuestions === necessaryQuestions) {
            for (let i = 2; i < 9; ++i) {
                questionElements[i].style.display = 'none';
            }
            questionElements[0].textContent = `You got ${doneQuestions}/${totalQuestions} correct!`
            let dosEarnt = 20 - (5 * (totalQuestions - necessaryQuestions));
            if (dosEarnt < 5) dosEarnt = 5;
            questionElements[1].textContent = `Lesson Completed! You earnt ${dosEarnt} Drops of Sunlight!`
            const currentDos = +localStorage.getItem(`${currentLanguage}dos`);
            localStorage.setItem(`${currentLanguage}dos`, currentDos + dosEarnt);
            snailPicture.style.display = '';

        } else {
            setQuestion();
        }
    }
});

snailPicture.addEventListener("click", function () {
    window.location.href = "reading.html";
});

function checkIfCorrect() {
    if (currentLessonJson[currentQuestionNo].Answers.includes(selectedAnswer)) {
        return true;
    }
    return false;
}

hintButton.addEventListener("click", function () {
    hintButton.textContent = `Wait for the Answer...`;
    setTimeout(showHint, 5000);
});

function showHint() {
    hintButton.textContent = currentLessonJson[currentQuestionNo].Answers;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}