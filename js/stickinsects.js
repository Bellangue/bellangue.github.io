const lessonBar = document.getElementById("lessonBar");
const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`;

var selected = -1;
const lessonElements = document.getElementsByClassName("lessonIcon");


for (let i = 0; i < lessonElements.length; ++i) {
    lessonElements[i].addEventListener("click", function () {
        selected = i;
        lessonBar.textContent = `Stick Insect: ${lessonNameData[i]}`;
    });
}

lessonBar.addEventListener("click", function () {
    if (localStorage.getItem("username") === null) {
        alert("You have not got an account. Go to the Home screen to automatically get one.")
    } else if (lessonBar.textContent !== "Select a Lesson to Begin!") {
        sessionStorage.setItem("selected", selected)
        window.location.href = "stickinsect_exercises.html";
    } else alert("You have not selected a lesson. Click on a stick insect first.")
});