// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select an element (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, chnage text, disable
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (input, search, list)
const input = document.querySelector("#keyword");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on search button
submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  // 2.5 Fetch the OMDBApi
  const keyword = input.value;
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.Search);
      results.innerHTML = "";
      const movies = data.Search;
      movies.forEach((movie) => {
        // 3. Display the movie data
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src="${movie.Poster}">
            <p>${movie.Title}</p>
          </li>`
        );
      });
    })
  console.log("Outside the fetch");
});



// //////////////////////
// HTTP POST request
// //////////////////////

const searchAlgoliaPlaces = (event) => {
  const url = "https://places-dsn.algolia.net/1/places/query";
  const bodyData = { query: event.currentTarget.value };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const search = document.querySelector("#search");
search.addEventListener("keyup", searchAlgoliaPlaces);