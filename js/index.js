if (localStorage.getItem("username") === null) {
    localStorage.setItem("username", "Bellangue Gardener");
}

if (localStorage.getItem("caterpillar") === null) {
    localStorage.setItem("caterpillar", 0);
}

if (sessionStorage.getItem("combo") === null) {
    sessionStorage.setItem("combo", 0);
}

if (localStorage.getItem("currentLanguage") === null) {
    localStorage.setItem("currentLanguage", "fr");
}

if (localStorage.getItem("streak") === null) {
    localStorage.setItem("streak", 0);
}

if (localStorage.getItem("streak") === null) {
    localStorage.setItem("streak", 0);
}

//dos

if (localStorage.getItem("nldos") === null) {
    localStorage.setItem("nldos", 0);
}
let nldos = +localStorage.getItem("nldos")

if (localStorage.getItem("frdos") === null) {
    localStorage.setItem("frdos", 0);
}
let frdos = +localStorage.getItem("frdos")

// if (localStorage.getItem("dedos") === null) {
//     localStorage.setItem("dedos", 0);
// }
// let dedos = +localStorage.getItem("dedos")

if (localStorage.getItem("ptdos") === null) {
    localStorage.setItem("ptdos", 0);
}
let ptdos = +localStorage.getItem("ptdos")

if (localStorage.getItem("rzdos") === null) {
    localStorage.setItem("rzdos", 0);
}
let rzdos = +localStorage.getItem("rzdos")

//tree
//nl
if (localStorage.getItem("nlreading") === null) {
    localStorage.setItem("nlreading", 0);
}

if (localStorage.getItem("nlspeaking") === null) {
    localStorage.setItem("nlspeaking", 0);
}

if (localStorage.getItem("nllistening") === null) {
    localStorage.setItem("nllistening", 0);
}

if (localStorage.getItem("nlvocabulary") === null) {
    localStorage.setItem("nlvocabulary", 0);
}

if (localStorage.getItem("nlwriting") === null) {
    localStorage.setItem("nlwriting", 0);
}

//fr
if (localStorage.getItem("frreading") === null) {
    localStorage.setItem("frreading", 0);
}
if (localStorage.getItem("frspeaking") === null) {
    localStorage.setItem("frspeaking", 0);
}
if (localStorage.getItem("frlistening") === null) {
    localStorage.setItem("frlistening", 0);
}

if (localStorage.getItem("frvocabulary") === null) {
    localStorage.setItem("frvocabulary", 0);
}

if (localStorage.getItem("frwriting") === null) {
    localStorage.setItem("frwriting", 0);
}

// //de
// if (localStorage.getItem("dereading") === null) {
//     localStorage.setItem("dereading", 0);
// }

//pt
if (localStorage.getItem("ptreading") === null) {
    localStorage.setItem("ptreading", 0);
}
if (localStorage.getItem("ptspeaking") === null) {
    localStorage.setItem("ptspeaking", 0);
}
if (localStorage.getItem("ptlistening") === null) {
    localStorage.setItem("ptlistening", 0);
}

if (localStorage.getItem("ptvocabulary") === null) {
    localStorage.setItem("ptvocabulary", 0);
}

if (localStorage.getItem("ptwriting") === null) {
    localStorage.setItem("ptwriting", 0);
}

//rz
if (localStorage.getItem("rzreading") === null) {
    localStorage.setItem("rzreading", 0);
}
if (localStorage.getItem("rzspeaking") === null) {
    localStorage.setItem("rzspeaking", 0);
}
if (localStorage.getItem("rzlistening") === null) {
    localStorage.setItem("rzlistening", 0);
}

if (localStorage.getItem("rzvocabulary") === null) {
    localStorage.setItem("rzvocabulary", 0);
}

if (localStorage.getItem("rzwriting") === null) {
    localStorage.setItem("rzwriting", 0);
}
const caterpillarul = document.getElementById("caterpillarul")
const KatieLengthHeader = document.getElementById("KatieLengthHeader")

KatieLengthHeader.textContent = `Katie is ${+localStorage.getItem("caterpillar") + 1} segments tall!`

for (let i = 0; i < localStorage.getItem("caterpillar"); ++i) {
    var li = document.createElement('li');
    li.innerHTML = `<img src="images/katieseg.png"/>`
    li.classList.add("caterpillar");
    caterpillarul.appendChild(li);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    li.style.backgroundColor = `#${randomColor}`
    li.style.borderRadius = "50%"
    li.style.border = "5px solid #000"
}

currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`;

const dosNames = ["Dutch", "French", "Portuguese", "ruz"]
const dosValues = [nldos, frdos, ptdos, rzdos]
const sortedIndices = sortWithIndeces(dosValues);
const dosValueElements = document.getElementsByClassName("dosValue");
const dosNameElements = document.getElementsByClassName("dosName");
const dosResetElements = document.getElementsByClassName("dosReset");
for (let i = 0; i < dosValueElements.length - 1; ++i) {
    dosValueElements[i + 1].textContent = dosValues[i];
    dosNameElements[i + 1].textContent = `${dosNames[sortedIndices.sortIndices[i]]} Drops of Sunlight:`;
}
dosValueElements[0].textContent = dosValues.reduce((a, b) => a + b, 0);


for (let i = 0; i < dosResetElements.length; ++i) {
    dosResetElements[i].addEventListener("click", function () {
        dosResetElements[i].textContent = "Reload the Page"
        dosValues[i] = 0;
        if (i === 0) {
            localStorage.clear();
        }
        if (dosNames[sortedIndices.sortIndices[i - 1]] === "Dutch") {
            localStorage.setItem("nldos", 0);
        }
        else if (dosNames[sortedIndices.sortIndices[i - 1]] === "French") {
            localStorage.setItem("frdos", 0);
        }
        else if (dosNames[sortedIndices.sortIndices[i - 1]] === "Portuguese") {
            localStorage.setItem("ptdos", 0);
        }
        else if (dosNames[sortedIndices.sortIndices[i - 1]] === "ruz") {
            localStorage.setItem("rzdos", 0);
        }
    });
}

//counters
if (localStorage.getItem("frreadingcounter") === null) {
    localStorage.setItem("frreadingcounter", 0);z
}

const nameInput = document.getElementById("nameInput");
nameInput.value = localStorage.getItem("username");

nameInput.addEventListener("change", function () {
    localStorage.setItem("username", nameInput.value);
});


function sortWithIndeces(toSort) {
    for (var i = 0; i < toSort.length; i++) {
        toSort[i] = [toSort[i], i];
    }
    toSort.sort(function (left, right) {
        return left[0] > right[0] ? -1 : 1;
    });
    toSort.sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
        toSort.sortIndices.push(toSort[j][1]);
        toSort[j] = toSort[j][0];
    }
    return toSort;
}
