// const btn = document.getElementById("btn");
let jokesContainer = document.getElementById("jokes-container");


// btn.addEventListener("click", function(){

// });



async function getjokes() {

    fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            jokesContainer.innerHTML = data.joke;
        })
}








const btn = document.getElementById('btn');

const handleClick = function() {
  console.log('Button clicked!');

  getjokes()
};

btn.addEventListener('click', handleClick);