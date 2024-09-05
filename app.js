const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single';
const jokeEl = document.querySelector('.joke');
const btn = document.querySelector('#btn');




const getJoke = () => {
    fetch(url)
    .then(
        data => data.json()
    )
   .then(
    item => 
    {
        jokeEl.textContent = `${item.joke}`;
    }
   )
}
btn.addEventListener('click', getJoke);
getJoke();
