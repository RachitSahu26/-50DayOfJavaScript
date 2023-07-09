fetch("https://fakestoreapi.com/products?limit=150")
   .then((res)=>{
// console.log(res);
return res.json();
   })
   .then((Objectdata)=>{
console.log(Objectdata);
let objectdatastore='';
Objectdata.map((value)=>{
    objectdatastore+=`<tr>
    <th scope="row">${value.id}</th>
    <td>${value.title}</td>
    <td>${value.description}</td>
    <td>${value.image}</td>
  </tr>`;
    document.getElementById("table-area").innerHTML= objectdatastore;
})



   })