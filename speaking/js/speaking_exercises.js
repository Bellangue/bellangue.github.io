currentLanguage = localStorage.getItem("currentLanguage");

const questionElements = document.getElementsByClassName("questionElements");
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
    confirmButton.textContent = "Confirm Answer";
    confirmButton.style.backgroundColor = "#c2f4c2";
    questionElements[0].textContent = currentLessonJson[currentQuestionNo].Content;
}

confirmButton.addEventListener("click", function () {
    if (confirmButton.textContent === "Confirm Answer") {
        if (questionElements[2].value === "") {
            alert("You did not input an answer. Try again.");
        } else {
            ++totalQuestions;
            if (checkIfCorrect()) {
                endText.textContent = "Correct! " + currentLessonJson[currentQuestionNo].Translation;
                endText.style.color = "green";
                confirmButton.textContent = "Next...";
                ++doneQuestions;
            } else {
                endText.textContent = "Incorrect! " + currentLessonJson[currentQuestionNo].Answers + ": " + currentLessonJson[currentQuestionNo].Translation;
                endText.style.color = "red";
                confirmButton.textContent = "Next...";
                confirmButton.style.backgroundColor = "#ee7070";
            }
        }
    } else if (confirmButton.textContent === "Next...") {
        if (doneQuestions === necessaryQuestions) {
            for (let i = 2; i < 5; ++i) {
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
    window.location.href = "stickinsects.html";
});

function checkIfCorrect() {
    if (currentLessonJson[currentQuestionNo].Answers.includes(questionElements[2].value)) {
        return true;
    }
    return false;
}

const synth = window.speechSynthesis;
voices = synth.getVoices();

const contentSpeaker = document.getElementById("contentSpeaker");

contentSpeaker.addEventListener("click", function () {
    let soundToMake = new SpeechSynthesisUtterance(questionElements[0].textContent);
    if (currentLanguage === "fr") {
        soundToMake.lang = "fr-FR";
    } else if (currentLanguage === "pt") {
        soundToMake.lang = "pt-PT";
    } else if (currentLanguage === "nl") {
        soundToMake.lang = "nl-NL";
    } else if (currentLanguage === "rz") {
        soundToMake.lang = "en-UK";
    }    
    synth.speak(soundToMake);
});