const PasswordInput = document.getElementById( "input-password");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Number = "1234567890";
const Symboles = "!@#$%^&*()_+?:{}[]~|()";
const lenght = 12;


const allChars = UpperCase + LowerCase + Number + Symboles;

function generated (){


    let Password = "";
    Password += UpperCase[Math.floor(Math.random()* UpperCase.length)];
    Password += LowerCase[Math.floor(Math.random()* LowerCase.length)];
    Password += Number[Math.floor(Math.random()* Number.length)];
    Password += Symboles[Math.floor(Math.random()* Symboles.length)];
    while (lenght > Password.length) {


        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    PasswordInput.value = Password;
}
const CopyItem=document.getElementById("copy-item");
CopyItem.addEventListener("click",copy=()=>{
    PasswordInput.select();
document.execCommand("copy");
})