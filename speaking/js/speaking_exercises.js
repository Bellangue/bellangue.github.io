currentLanguage = localStorage.getItem("currentLanguage");

const questionElements = document.getElementsByClassName("questionElements");
const confirmButton = document.getElementById("confirmButton");
const endText = document.getElementById("endText");
const snailPicture = document.getElementById("snailPicture");
snailPicture.style.display = 'none';

var selected = sessionStorage.getItem("selected");
const counter = localStorage.getItem(`${localStorage.getItem("currentLanguage")}speaking`);

let currentLessonJson = lessonJSONData[selected];
let currentQuestionNo;
const repetitions = 3;

var selectedAnswer;

const necessaryQuestions = 5;
let doneQuestions = 0;
let totalQuestions = 0;


let canSkip = false;

setQuestion();

const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${currentLanguage}.png"/>`;

function setQuestion() {
    canSkip = false;
    currentQuestionNo = Math.round(Math.random() * (currentLessonJson.length - 1));
    selectedAnswer = undefined;
    endText.textContent = "";
    confirmButton.textContent = "Confirm Answer";
    confirmButton.style.backgroundColor = "#c2f4c2";
    questionElements[0].textContent = currentLessonJson[currentQuestionNo].Content;
}


confirmButton.addEventListener("click", function () {
    if (confirmButton.textContent === "Confirm Answer") {
        if (canSkip === false) {
            alert("Please play content and repeat the phrase.");
        } else {
            ++totalQuestions;
            endText.textContent = "Correct! " + currentLessonJson[currentQuestionNo].Translation;
            endText.style.color = "green";
            confirmButton.textContent = "Next...";
            ++doneQuestions;
        }
    } else if (confirmButton.textContent === "Next...") {
        if (doneQuestions === necessaryQuestions) {
            contentSpeaker.style.display = "none"
            endText.style.display = "none"
            questionElements[0].textContent = `You got ${doneQuestions}/${totalQuestions} correct!`
            let dosEarnt = 20 - (5 * (totalQuestions - necessaryQuestions));
            if (dosEarnt < 5) dosEarnt = 5;
            questionElements[1].textContent = `Lesson Completed! You earnt ${dosEarnt} Drops of Sunlight!`
            const currentDos = +localStorage.getItem(`${currentLanguage}dos`);
            localStorage.setItem(`${currentLanguage}dos`, currentDos + dosEarnt);
            snailPicture.style.display = '';

            sessionStorage.setItem("combo", +sessionStorage.getItem("combo")+1);
            localStorage.setItem("caterpillar", +sessionStorage.getItem("combo")+(+localStorage.getItem("caterpillar")));


            if(+counter < (selected + 1)*repetitions){
                localStorage.setItem(`${localStorage.getItem("currentLanguage")}speaking`, +counter + 1)
            }
        } else {
            setQuestion();
        }
    }
});

snailPicture.addEventListener("click", function () {
    window.location.href = "speaking.html";
});

const synth = window.speechSynthesis;
voices = synth.getVoices();

const contentSpeaker = document.getElementById("contentSpeaker");

contentSpeaker.addEventListener("click", function () {
    let soundToMake = new SpeechSynthesisUtterance(questionElements[0].textContent);

    soundToMake.addEventListener("end", (event) => {
        canSkip = true;
    });

    if (currentLanguage === "fr") {
        soundToMake.lang = "fr-FR";
    } else if (currentLanguage === "pt") {
        soundToMake.lang = "pt-PT";
    } else if (currentLanguage === "nl") {
        soundToMake.lang = "nl-NL";
    }
    // } else if (currentLanguage === "rz") {
    //     soundToMake.lang = "en-UK";
    // }
    synth.speak(soundToMake);
});
