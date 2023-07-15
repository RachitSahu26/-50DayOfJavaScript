const btn = document.getElementById("btn");
const showResult = document.getElementById("show-result");

const inputBox = document.getElementById("input-box");

btn.addEventListener("click", () => {


    let country = inputBox.value;
    let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            createShowArea(data);
        })


})


const createShowArea = (data) => {
const container = document.getElementById("container");

const showed = document.getElementById("showed");
  let shoWed=document.createElement('div');
  shoWed.classList.add("showed")

    shoWed.innerHTML = (`
    
    
    <div class="show-result" id="show-result">
    <img src=${data.flags.svg}>
    
    
    <h2> Capital: <span>${data.capital}</span></h2>
    <h2> Continent: <span>${data.continents}</span></h2>
    <h2> Population: <span>${data.population}</span></h2>
    <h2> Curreny: <span>${data.currencies}</span></h2>
    <h2> Comman Language: <span>${data.languages}</span></h2>
    </div>
`)
container.appendChild(shoWed)




}