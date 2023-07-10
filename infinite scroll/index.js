// fetch("https://fakestoreapi.com/products?limit=150")
//    .then((res)=>{
// // console.log(res);
// return res.json();
//    })
//    .then((Objectdata)=>{
// console.log(Objectdata);
// let objectdatastore='';
// Objectdata.map((values)=>{
//     objectdatastore+=` <div class="card" style="width: 18rem;">
//     <img src=${values.image} class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${values.category} </h5>
//       <p class="card-text">${values.description}</p>
//       <a href="#" class="btn btn-primary">${values.title}</a>
//     </div>`;
//     document.getElementById("store").innerHTML= objectdatastore;
// })



//    })

fetch("https://fakestoreapi.com/products?limit=150")
.then((res)=>{
   return res.json();
}).then((storedata)=>{
   console.log(storedata);
rachitdata='';
  storedata.map((rachit)=>{
rachitdata+=`
<div class="card" style="width: 18rem;">
<h1>${rachit.id} </h1>
<img src=${rachit.image} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${rachit.title} </h5>
  <p class="card-text">${rachit.description} </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${rachit.price} </li>
  <li class="list-group-item">${rachit.rating} </li>

</ul>

`

document.getElementById("store").innerHTML=rachitdata;
  }) 
})