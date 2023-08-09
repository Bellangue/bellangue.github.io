const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`

const questionUl = document.getElementById("questionUl");

for (let i = 0; i < lessonNameData.length; ++i) {
    var questionli = document.createElement("li");
    questionli.classList.add("questionHintLi");
    questionli.textContent = `Lesson ${i + 1}) ${lessonNameData[i]}`;
    questionUl.appendChild(questionli);

    for (let j = 0; j < lessonJSONData[i].length; ++j) {
        var hintli = document.createElement("li");
        hintli.classList.add("hintHintLi");
        hintli.innerHTML = `${j + 1}) ${lessonJSONData[i][j].Content} <br> ${lessonJSONData[i][j].Question}`;
        questionUl.appendChild(hintli);

        var inputLi = document.createElement("input");
        inputLi.type = 'text';
        inputLi.id = `${i},${j}`;
        inputLi.classList.add("inputHintLi");
        inputLi.classList.add("centrePositionW");
        inputLi.value = localStorage.getItem(`${localStorage.getItem("currentLanguage")}:Reading:${i},${j}`)

        questionUl.appendChild(inputLi);
    }
}

for (let i = 0; i < lessonNameData.length; ++i) {
    for (let j = 0; j < lessonJSONData[i].length; ++j) {
        const affectedInput = document.getElementById(`${i},${j}`);
        affectedInput.addEventListener("change", function () {
            localStorage.setItem(`${localStorage.getItem("currentLanguage")}:Reading:${i},${j}`, affectedInput.value);
        });
    }
}