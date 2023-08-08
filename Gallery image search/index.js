
//1=> intialize all useful Elements
const accessKey = '7IlCKWs7Wf9DKbGFpQ2zbftDTRzzfbQydwSECbfear4';
const imagShowing = document.getElementById('image-showing');
const searchForm = document.getElementById('search-form');

const moreBtn = document.getElementById('more-btn');

const  noHead= document.getElementById("no-head");


const inputValue = document.getElementById("input");

let page= 1;
//=> function for images fetch
const showImage = async (userProviderValue,pageNo) => {
if(page===1){
    showImage.innerHTML='';
}
    const url = `https://api.unsplash.com/photos/?query=${userProviderValue}&per_page=28&page=${pageNo}&client_id=${accessKey}`;


    const response = await fetch(url)
    const data = await response.json()


  
    if(  data.length>0){
        data.forEach(photo => {
            const imagebox = document.createElement('div')
            imagebox.classList.add("img-card")
            imagebox.innerHTML = `<img src="${photo.urls.full}">`
            imagShowing.appendChild(imagebox);
    
    
        });
    
    }
    else{
        noHead.innerHTML = `<h1 class="msg-query">No Result Found.</h1>`;
    }

}









// addEventListener for search images
searchForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const userProviderValue = inputValue.value.trim();
    if (userProviderValue !== '') {
        page=1;
        showImage(userProviderValue,page);


    } else {
    
        noHead.innerHTML = `<h1 class="msg-query">Please Enter a Query.</h1>`;

    }
});

moreBtn.addEventListener("click",()=>{
    showImage(inputValue.value.trim(),++page);
})