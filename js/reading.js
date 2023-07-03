const lessonBar = document.getElementById("lessonBar");

var selected = -1;

const lessonElements = document.getElementsByClassName("lessonIcon");


for (let i = 0; i < lessonElements.length; ++i) {
    lessonElements[i].addEventListener("click", function () {
        lessonBar.textContent = `${lessonNameData[i]} 3/3`;
        selected = i; 
    });
}

lessonBar.addEventListener("click", function () {
    if(lessonBar.textContent !== "Select a Lesson to Begin!")
    {
        sessionStorage.setItem("selected", selected)
        window.location.href = "reading_exercises.html";
    }else alert("You have not selected a lesson. Click on a snail first.")
});