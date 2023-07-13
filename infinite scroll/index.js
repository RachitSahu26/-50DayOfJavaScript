
// 0=>
// decleration for access 
const card = document.getElementById("card");
const container = document.getElementById("container");
const showMore = document.getElementById("show-more");

// 1=>
// when i will click show more buttton then code will be started here 



showMore.addEventListener("click", function () {
// 2=>
   //   now code will be redirect getImage function
   getImage();

})


function getRandomNumber() {
   return Math.floor(Math.random() * 300) + 2
}



// 3=>
// now in third step data will be get from this API
async function getImage() {
   fetch(`https://rickandmortyapi.com/api/character/${getRandomNumber()}`)
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         console.log(data);
         // 4=>
         // through fetch Api i got all data so i pash the data as argument in addItem
         addItem(data);
      })
}


// 5=>
// now data will be show in created div 
const addItem = (data) => {
   let storDiv = document.createElement("div");
   storDiv.classList.add("item")
   storDiv.innerHTML = (`   <div class="card" id="card" style="width: 18rem;">

   <img  src=${data.image} />
 
 
   <div class="card-body">
       <h5 class="card-title">${data.name}</h5>
       <p class="card-text">${data.id}</p>
       <a href="#" class="btn btn-warning">Go somewhere</a>
   </div>


</div>
`)

   container.appendChild(storDiv)


}