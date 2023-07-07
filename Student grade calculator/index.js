
const showBtn = document.getElementById("btn-show");

const finalResult = document.getElementById("final-result");

const flieldsInput = document.getElementById("flields-input");
showBtn.addEventListener("click", show = () => {
    
    let total;
    let  percentage;
    let  grade;
    let mathMaks = document.getElementById("math-maks").value;
    let physicMaks = document.getElementById("physic-maks").value;
    let chemistryMaks = document.getElementById("chemistry-maks").value;
    let englishMaks = document.getElementById("english-maks").value;

    total = parseFloat(physicMaks)
        + parseFloat(chemistryMaks)
        + parseFloat(englishMaks)
        + parseFloat(mathMaks);
        console.log(total);

        
        percentage=(total/400)*100;
console.log(percentage);
        
        
        if(percentage<=100 && percentage>=80 ){
            
            grade='A';
        }
        else if(percentage<=79 && percentage>=60){
            grade='B';

}
 
else if(percentage<=59 && percentage>=40){
    grade='c';
    
}else if(percentage<=39 && percentage>=35){
    grade='d';
    
}
else {
    grade='f';
    
}
console.log(grade);



finalResult.innerHTML=`Student Total Number ${total}.
,grade ${grade} and percentage ${percentage} `; 

})





