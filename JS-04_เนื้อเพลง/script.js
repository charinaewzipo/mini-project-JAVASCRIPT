const form =document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const list_more = document.getElementById('list-more');

const apiUrl='https://api.lyrics.ovh/'
// const apiUrl2='https://genius.p.rapidapi.com/artists/16775/songs';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ad9cc2a283mshfc1289905ce7065p1b22b1jsn59fde455fcf1',
// 		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
// 	}
// };

form.addEventListener('submit',e=>{
  e.preventDefault();
  const songTxt=search.value.trim();
  if(!songTxt){
    alert('กรอกชื่อเพลงซะ')
  }else{
    searchLyrics(songTxt);
  }

})

async function searchLyrics(songText){
  const res = await fetch(`${apiUrl}/suggest/${songText}`);
  const allsong = await res.json();
  showData(allsong);
}

function showData(songs){
  console.log(songs);
  result.innerHTML=`
  <ul class="songs">
      ${songs.data.map(song=>
          `<li>
          <span>
              <strong>${song.artist.name}</strong> - ${song.title}
          </span>
          <button class="btn"
            data-artist="${song.artist.name}"
            data-song="${song.title}">เนื้อเพลง</button>
          </li>`
      ).join("")}
  </ul>
`;

if(songs.next || songs.prev){
    list_more.innerHTML=`
    ${songs.prev ? `<button class="btn" onclick="getMoresongs('${songs.prev}')">ก่อนหน้า</button>`: '' }
    ${songs.next ? `<button class="btn" onclick="getMoresongs('${songs.next}')">ถัดไป</button>`: '' }
    `
}else{
  list_more.innerHTML="";
}
}
async function getMoresongs(songsUrl){
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${songsUrl}`);
  const allsong = await res.json();
  showData(allsong);

}

result.addEventListener('click',e=>{
  const clickEle=e.target;
  if(clickEle.tagName=="BUTTON"){
    const artist = clickEle.getAttribute('data-artist');
    const songname = clickEle.getAttribute('data-song');
    
    getLyrics(artist,songname);
  }
 
})

async function getLyrics(artist,songname){
  const res = await fetch(`${apiUrl}/v1/${artist}/${songname}`);
  console.log(res);
  const lyrics = await res.json();
  console.log(lyrics);
}