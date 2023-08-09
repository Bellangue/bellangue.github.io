if (localStorage.getItem("username") === null) {
    localStorage.setItem("username", "Bellangue Gardener");
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

if (localStorage.getItem("ptdos") === null) {
    localStorage.setItem("ptdos", 0);
}
let ptdos = +localStorage.getItem("ptdos")

if (localStorage.getItem("rzdos") === null) {
    localStorage.setItem("rzdos", 0);
}
let rzdos = +localStorage.getItem("rzdos")

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
    dosResetElements[i].addEventListener("click", function(){
        dosResetElements[i].textContent = "Reload the Page"
        dosValues[i] = 0;
        console.log(dosNames[sortedIndices.sortIndices[i]] );
        if(dosNames[sortedIndices.sortIndices[i]] === "Dutch"){
            localStorage.setItem("nldos", 0);
        }
        else if(dosNames[sortedIndices.sortIndices[i]] === "French"){
            localStorage.setItem("frdos", 0);
        }
        else if(dosNames[sortedIndices.sortIndices[i]] === "Portuguese"){
            localStorage.setItem("ptdos", 0);
        }
    });
}

//counters
if (localStorage.getItem("frreadingcounter") === null) {
    localStorage.setItem("frreadingcounter", 0);
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
