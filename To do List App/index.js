let inputBox = document.getElementById("input-box");
let addBtn = document.getElementById("add-btn");
let listArea = document.getElementById("list-area");




const AddTask = () => {
    if (inputBox.value === "") {

        alert("you must write here");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        listArea.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }



    inputBox.value = "";
    saveData();
}



listArea.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();


    }



});

const saveData=()=>{
localStorage.setItem("data",listArea.innerHTML);
}
const getData=()=>{
    listArea.innerHTML=localStorage.getItem("data");
}

getData();