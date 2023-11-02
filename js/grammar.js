const lessonBar = document.getElementById("lessonBar");
const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`;

var selected = -1;
const repetitions = 3;
const counter = localStorage.getItem(`${localStorage.getItem("currentLanguage")}grammar`);
const lessonElements = document.getElementsByClassName("lessonIcon");

for (let i = 0; i < lessonElements.length; ++i) {

    let timesDone = -1;
    timesDone = counter - (i * repetitions);
    if (timesDone > 3) timesDone = 3;
    if (timesDone < 0) timesDone = 0;
    if (timesDone >= 1) {
        lessonElements[i].style = `
        border-radius: 50%;
        background-color: #c2f4c2;
        border: 3.5px solid #c2c2f4;`

    }
    if (timesDone === 3) {
        lessonElements[i].style = `
        rotate: 360deg;
        transition: rotate 1s;
        border-radius: 50%;
        background-color: #c2c2f4;
        border: 3.5px solid #c2f4c2;`
    }




    lessonElements[i].addEventListener("click", function () {
        selected = i;
        let timesDone = -1;
        timesDone = counter - (selected * repetitions);
        if (timesDone > 3) timesDone = 3;
        if (timesDone < 0) timesDone = 0;
        lessonBar.textContent = `${i + 1}) ${lessonNameData[i]} ${timesDone}/3`;
    });
}

lessonBar.addEventListener("click", function () {
    if (localStorage.getItem("username") === null) {
        alert("You have not got an account. Go to the Home screen to automatically get one.")
    } else if (lessonBar.textContent !== "Select a Lesson to Begin!") {
        if (+counter >= selected * repetitions) {
            sessionStorage.setItem("selected", selected)
            window.location.href = "grammar_exercises.html";
        } else {
            alert("Complete each of the previous lessons 3 times before trying this one.")
        }
    } else alert("You have not selected a lesson. Click on a snail first.")
});