const searchClick = document.getElementById("search-btn");


const showingResult = document.querySelector('imag-box1');

let keyword = '';
let page = 1;
async function getImage() {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}office&client_id=7IlCKWs7Wf9DKbGFpQ2zbftDTRzzfbQydwSECbfear4`;

    const response = await fetch(url)
    const data = await response.json();
  
    const results = data.results;
    results.map((result) => {
        let image = document.createElement('img')
        image.src = result.urls.small;
        showingResult.appendChild(image);
    })


}
searchClick.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;

    getImage()
})