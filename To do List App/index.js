
let InputBox = document.getElementById("input-box");
let UlArea = document.getElementById("ul-area")
let EmptyMark = document.getElementById("empty-mark")
let ItemSelect = document.getElementById("spn");
   


const Added = () => {
    if (InputBox.value === '') {

        alert("Hey, You Must Write here")


    } else {
        let LiAdded = document.createElement("div");
        LiAdded.innerHTML = `
<div class="ul-box">

                    <img src="./bx-checkbox.svg" id="empty-mark" onclick="Crossed()">
                    <span id="spn">${InputBox.value}</span>
                    <img src="./x-mark.png" id="cross-mark">
                    
                </div>
`
        UlArea.appendChild(LiAdded)

    }


    InputBox.value = "";

}





const Crossed=()=> {
    // ItemSelect.classList.add("#spnLine");
    
    EmptyMark.src="";





}



