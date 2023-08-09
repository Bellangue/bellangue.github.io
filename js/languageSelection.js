const flag = document.getElementsByClassName("flag");
const currentFlag = document.getElementById("currentFlag");
currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`;

for(let i = 0; i<flag.length; ++i)
{
    flag[i].addEventListener("click", function() {
        localStorage.setItem("currentLanguage", flag[i].id);
        currentFlag.innerHTML = `<img class="centrePositionW stickyTop" src="../images/Flags/${localStorage.getItem("currentLanguage")}.png"/>`;
    });
}