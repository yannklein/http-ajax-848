// console.log("Hi everyone!!!");

// //////////////////////
// Rehearsal
// //////////////////////

// 1. Select the button
// const button = document.querySelector("#click-me");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   // 3. Change the DOM ( innerText, disabled)
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements: input, search btn, list
const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const list = document.querySelector("#results");

// 2. Listen to a click on search btn
search.addEventListener("click", (event) => {
  console.log(event);
  // to prevent default page refresh after click
  event.preventDefault();

  // 2.5 Fetch the OMDb API, get the input value (=keyword) and search for movies corresponding to the keyword
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  console.log("clicked");
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data.Search);
      // 3. Change the DOM: display the movies in the list!
      console.log("data arrived!");

      const movies = data.Search;
      list.innerHTML = "";
      movies.forEach((movie) => {
        list.insertAdjacentHTML(
          "beforeend", 
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>`
        );
      });
    })
  console.log("after fetch");
});


// //////////////////////
// HTTP POST request
// //////////////////////

const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  const data = JSON.stringify(
    {
      "email": emailValue, 
      "password": passwordValue
    })

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: data
  }

  fetch("https://reqres.in/api/register", options)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp);
