const music_container = document.getElementById('music-container');
const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_container = document.getElementById('progress-container');
const cover = document.getElementById('cover');
const title = document.getElementById('title');

const songs = ["If I Ain't Got You","ROSÉ - Viva La Vida (Coldplay)","Stuck with U"];
let index=0;
function loadSong(song){
  title.innerHTML=`เพลง : ${song}`;
  cover.src=`cover/${song}.jpg`
  audio.src=`song/${song}.mp3`
}
loadSong(songs[index]);

playbtn.addEventListener('click',()=>{
  const statusPlay = music_container.classList.contains('play');
  if(statusPlay){
    pauseSong();
  }else{
    playSong();
  }
})
prevbtn.addEventListener('click',()=>{
  index--;
  if(index<0){
    index=songs.length-1;
  }
  loadSong(songs[index]);
  playSong();
})
nextbtn.addEventListener('click',()=>{
  nextSong();
})
function nextSong(){
  index++;
  if(index>songs.length-1){
    index=0;
  }
  loadSong(songs[index]);
  playSong();
}
function playSong(){
  music_container.classList.add('play');
  playbtn.querySelector('i.fa-solid').classList.remove('fa-play');
  playbtn.querySelector('i.fa-solid').classList.add('fa-pause');
  audio.play();
}
function pauseSong(){
  music_container.classList.remove('play');
  playbtn.querySelector('i.fa-solid').classList.add('fa-play');
  playbtn.querySelector('i.fa-solid').classList.remove('fa-pause');
  audio.pause();
}

audio.addEventListener('timeupdate',updateProgress);

function updateProgress(e){
  const {duration,currentTime} = e.srcElement;
  const progressPercent= (currentTime/duration)*100;
  progress.style.width=`${progressPercent}%`;
}

progress_container.addEventListener('click',setProgress);
function setProgress(e){
  const width=this.clientWidth;
  const clickX=e.offsetX;
  const duration=audio.duration;
  audio.currentTime=(clickX/width)*duration;

}
audio.addEventListener('ended',nextSong);