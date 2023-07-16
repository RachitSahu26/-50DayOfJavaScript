const btn = document.getElementById("btn");
const showResult = document.getElementById("show-result");



// .show.
let Capital = document.getElementById(" Capital");
let Continent = document.getElementById("Continent");
let Population = document.getElementById("Population");
let CommanLanguage= document.getElementById("Comman-Language");
let Curreny = document.getElementById("Curreny");
let flags=document.getElementById("flags");


const inputBox = document.getElementById("input-box");

btn.addEventListener("click", () => {


    let country = inputBox.value;
    let url = `https://restcountries.com/v3.1/name/${country}`;
   

    fetch( url )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            showResult.style.display='block';
            countryData=data[0]
console.log(countryData)
            flags.src= countryData.flags.svg;
            Continent.innerHTML= countryData.continents
            Population.innerHTML= countryData.population
            Curreny.innerHTML=countryData.currencies[Object.keys(countryData.currencies)].name 
            Capital.innerHTML= countryData.capital

            CommanLanguage.innerHTML=Object.values(countryData.languages).toString().split(',').join(',');

        })


})




