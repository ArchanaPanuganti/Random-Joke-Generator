const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");

var URL = "https://api.chucknorris.io/jokes/random";

//var URL = 'https://api.api-ninjas.com/v1/jokes?limit={}';

//var URL = " https://geek-jokes.sameerkumar.website/api?format=json";

btnEl.addEventListener("click",getMethod);

async function getMethod(){
    
    jokeEl.classList.remove("fade");

    const data = await fetch(URL).then((e) => e.json());

    if(data){
        console.log(data);
        jokeEl.innerHTML = data.joke;
        jokeEl.classList.add("fade");
    }

}