const lessonBar = document.getElementById("lessonBar");
const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`;

var selected = -1;
const repetitions = 3;
const counter = localStorage.getItem(`${localStorage.getItem("currentLanguage")}reading`);
const lessonElements = document.getElementsByClassName("lessonIcon");

console.log(counter);

for (let i = 0; i < lessonElements.length; ++i) {
    lessonElements[i].addEventListener("click", function () {
        lessonBar.textContent = `${i + 1}) ${lessonNameData[i]} 3/3`;
        selected = i;
    });
}

lessonBar.addEventListener("click", function () {
    if (localStorage.getItem("username") === null) {
        alert("You have not got an account. Go to the Home screen to automatically get one.")
    } else if (lessonBar.textContent !== "Select a Lesson to Begin!") {
        if (+counter >= selected*repetitions) {
            sessionStorage.setItem("selected", selected)
            window.location.href = "reading_exercises.html";
        } else {
            alert("Complete each of the previous lessons 3 times before trying this one.")
        }
    } else alert("You have not selected a lesson. Click on a snail first.")
});
