let inputBox = document.getElementById("input-box");
let showWaring = document.getElementById("show-waring");
let viewPass = document.getElementById("view-pass");

let passMsg = document.getElementById("pass-msg");
let stre = document.getElementById("stre");


const show = () => {
    if (inputBox.type == "password") {
        inputBox.type = "text";
        viewPass.src = "view.png";

    }
    else {
        inputBox.type = "password";
        viewPass.src = "hide.png";

    }





}



inputBox.addEventListener("input", check = () => {
    if (inputBox.value.length > 0) {
        passMsg.style.display = "block";
    }
    else {
        passMsg.style.display = "none";

    }

    if (inputBox.value.length >= 1 && inputBox.value.length<=4) {
        passMsg.style.display = "block";
        stre.innerHTML = "Very Weak"
  stre.style.color="red";
    }
    else if (inputBox.value.length >= 5 && inputBox.value.length < 7 ) {

        // passMsg.style.display = "block";
        stre.innerHTML = "good but little weak";
  stre.style.color="#f79319s";
    
    }

    else if (inputBox.value.length > 8) {

        // passMsg.style.display = "block";
        stre.innerHTML = "strong";
        stre.style.color="green";
  
    }



})