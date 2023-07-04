let  inputBox=document.getElementById("input-box");
 let showWaring=document.getElementById("show-waring");
let  viewPass=document.getElementById("view-pass");



const  show=()=>{
    if(inputBox.type=="password"){
        inputBox.type="text";
        viewPass.src="hide.png";
        let hFour=document.createElement("h4");
        hFour.textContent='Password is showing';
        showWaring.appendChild(hFour);
    }
    else{
        inputBox.type="password";
        viewPass.src="view.png";

    }




 
}



