
const input=document.getElementById('input');
const searchBtn=document.getElementById('search-btn');
searchBtn.addEventListener("click",()=>{
    getWeatherDetail();
})
 const getWeatherDetail=()=>{
    const apiKey='6cbac7aff8c1b6b59caf5e560d50f464';
    let countryName =input.value;
    const apiURl=`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;

    fetch(apiKey).then((response)=>{
         return response.json()
    })
    .then((data)=>{
console.log(data);
    })
}
