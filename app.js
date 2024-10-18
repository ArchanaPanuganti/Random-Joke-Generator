// const URL = "https://api.chucknorris.io/jokes/random";
const URL = "https://v2.jokeapi.dev/joke/Any?type=single&amount=1";
const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke-fade");

const getMethod = async () => {
   console.log("getting data....");
   let response = await fetch(URL);
   console.log(response);
   let data = await response.json();
   jokeEl.innerHTML = data.joke;

};



btnEl.addEventListener("click",getMethod);

