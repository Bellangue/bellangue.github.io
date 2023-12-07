currentLanguage = localStorage.getItem("currentLanguage");

const questionElements = document.getElementsByClassName("questionElements");
const hintButton = document.getElementById("hintButton");
const confirmButton = document.getElementById("confirmButton");
const endText = document.getElementById("endText");
const snailPicture = document.getElementById("snailPicture");
snailPicture.style.display = 'none';

var selected = sessionStorage.getItem("selected");
const counter = localStorage.getItem(`${localStorage.getItem("currentLanguage")}listening`);

let currentLessonJson = lessonJSONData[selected];
let currentQuestionNo;
const repetitions = 3;

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
    hintButton.textContent = `Give your Hint`;
    confirmButton.textContent = "Confirm Answer";
    confirmButton.style.backgroundColor = "#c2f4c2";
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
                endText.textContent = "Incorrect! " + currentLessonJson[currentQuestionNo].Answers + ": " + currentLessonJson[currentQuestionNo].Translation;
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

            sessionStorage.setItem("combo", +sessionStorage.getItem("combo") + 1);
            localStorage.setItem("caterpillar", +sessionStorage.getItem("combo") + (+localStorage.getItem("caterpillar")));


            if (+counter < (selected + 1) * repetitions) {
                localStorage.setItem(`${localStorage.getItem("currentLanguage")}listening`, +counter + 1)
            }
        } else {
            setQuestion();
        }
    }
});

snailPicture.addEventListener("click", function () {
    window.location.href = "listening.html";
});

function checkIfCorrect() {
    if (currentLessonJson[currentQuestionNo].Answers.includes(selectedAnswer)) {
        return true;
    }
    return false;
}

hintButton.addEventListener("click", function () {
    hintButton.textContent = `Wait for your Hint...`;
    setTimeout(showHint, 3000);
});

function showHint() {
    hintButton.textContent = localStorage.getItem(`${localStorage.getItem("currentLanguage")}:Listening:${selected},${currentQuestionNo}`);
    if (localStorage.getItem(`${localStorage.getItem("currentLanguage")}:Listening:${selected},${currentQuestionNo}`) === null || localStorage.getItem(`${localStorage.getItem("currentLanguage")}:Listening:${selected},${currentQuestionNo}`) === "") {
        hintButton.textContent = "You have not given yourself a hint.";
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const synth = window.speechSynthesis;
voices = synth.getVoices();

const soundSpeaker = document.getElementById("soundSpeaker");

const contentSpeaker = document.getElementById("contentText");

contentSpeaker.addEventListener("click", function () {
    if (doneQuestions !== necessaryQuestions) {
        let soundToMake = new SpeechSynthesisUtterance(currentLessonJson[currentQuestionNo].Content);
        if (currentLanguage === "fr") {
            soundToMake.lang = "fr-FR";
        }
        else if (currentLanguage === "pt") {
            soundToMake.lang = "pt-BR";
        }
        else if (currentLanguage === "nl") {
            soundToMake.lang = "nl-NL";
        }
        else if (currentLanguage === "rz") {
            soundToMake.lang = "en-UK";
        } synth.speak(soundToMake);
    }
});