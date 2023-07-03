if(localStorage.getItem("username") === null){
    localStorage.setItem("username", "Bellangue Gardener");
}

if(localStorage.getItem("streak") === null){
    localStorage.setItem("streak", 0);
}

if(localStorage.getItem("streak") === null){
    localStorage.setItem("streak", 0);
}

//dos
if(localStorage.getItem("totaldos") === null){
    localStorage.setItem("totaldos", 0);
}

if(localStorage.getItem("frdos") === null){
    localStorage.setItem("frdos", 0);
}

//counters
if(localStorage.getItem("frreadingcounter") === null){
    localStorage.setItem("frreadingcounter", 0);
}

const nameInput = document.getElementById("nameInput");
nameInput.value = localStorage.getItem("username");

nameInput.addEventListener("change", function(){
    localStorage.setItem("username", nameInput.value);
});