const accessKey = '7IlCKWs7Wf9DKbGFpQ2zbftDTRzzfbQydwSECbfear4';
const imagShowing = document.getElementById('image-showing');
const searchForm = document.getElementById('search-form');

const inputValue = document.getElementById("input");
const showImage = async (userProviderValue) => {
    const url = `https://api.unsplash.com/photos/?query=${userProviderValue}&per_page=28&client_id=${accessKey}`;


    const response = await fetch(url)
    const data = await response.json()


    data.forEach(photo => {
        const imagebox = document.createElement('div')
        imagebox.classList.add("img-card")
        imagebox.innerHTML = `<img src="${photo.urls.regular}">`
        imagShowing.appendChild(imagebox);
    });


}

searchForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const userProviderValue = inputValue.value.trim();
    if (userProviderValue !== '') {
        showImage(userProviderValue);

    } else {


        imagShowing.innerHTML = `<h1>Please Enter a Query.</h1>`;

    }
});