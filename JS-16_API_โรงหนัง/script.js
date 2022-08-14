const apiKey = "d6554d14ef8c8bf80327be0048eecde7"
let years="2022"
let apiUrl  = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${years}&with_watch_monetization_types=flatrate`;
const imgUrl = `https://image.tmdb.org/t/p/w500/`;
const container = document.getElementById('container');
const selectyears = document.getElementById('years');

async function displayMovie(url){
   const response =  await fetch(url);
   const moviesData = await response.json();
  //  console.log(moviesData);

  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
   moviesData.results.forEach(data => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    img.src = `${imgUrl}${data.backdrop_path}`
    title.innerText=data.title;
    movieEl.appendChild(title);
    movieEl.appendChild(img);
    container.appendChild(movieEl);
   });
}

selectyears.addEventListener('change',(e)=>{
  years=+e.target.value;
  const updateapiUrl  = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${years}&with_watch_monetization_types=flatrate`;
  displayMovie(updateapiUrl);
})
displayMovie(apiUrl);