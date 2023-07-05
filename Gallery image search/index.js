const input = document.getElementById("input");
const searchForm = document.getElementById("search-form");
const showingResult = document.getElementById("showing-result");
const searchBtn= document.getElementById("search-btn");

const accessKey = "7IlCKWs7Wf9DKbGFpQ2zbftDTRzzfbQydwSECbfear4";
let keyword = "";
let page = 1;
async function searchImage() {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=
    ${page}&query=${keyword}&client-id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    // const results = data.results;


console.log(data);


}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;

     searchImage();
})


    // results.map((result) => {
    //     const image = document.createElement('img');
    //     image.src = results.urls.small;
    //     const achorLink = document.createElement('a');

    //     achorLink.href = results.links.html;

    //     achorLink.target = "_blank";
    //     image.appendChild(achorLink);
    //     showingResult.appendChild(image);


    // })





