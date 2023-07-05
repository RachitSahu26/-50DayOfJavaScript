let  inputBox=document.getElementById("input-box");
 let showWaring=document.getElementById("show-waring");
let  viewPass=document.getElementById("view-pass");



const  show=()=>{
    if(inputBox.type=="password"){
        inputBox.type="text";
        viewPass.src="view.png";
        
    }
    else{
        inputBox.type="password";
        viewPass.src="hide.png";

    }




 
}



