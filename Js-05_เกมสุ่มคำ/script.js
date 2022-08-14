const wordEl = document.getElementById('word');
const textEl = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const gameoverEl = document.getElementById('gameover');

const btn = document.getElementById('level-btn');
const settings = document.getElementById('settings');
const levelform = document.getElementById('level-form');
const levelEl = document.getElementById('level');

const words=["ดินสอ","ไม้","รองเท้า","กระเป๋า","ยุง"];
let randomword;
let score=0;
let time=0; // easy=>15 , medium 10 , hard 5 

let level="medium";

function getRandomWord(){
  return words[Math.floor(Math.random()*words.length)];
}
function displayWordtoUi(){
  randomword=getRandomWord();
  wordEl.innerHTML=randomword;
  const getMode=localStorage.getItem('mode') !==null ? localStorage.getItem('mode') :'medium'
  levelEl.value=getMode;

  if(getMode == 'easy'){
    time=15;
  }else if(getMode == 'medium'){
    time=10;
  }else time=5;
}

textEl.addEventListener('input',(e)=>{
  // console.log(e.target.value);
  const inputText = e.target.value;
  if(inputText === randomword){
    time+=2;
    displayWordtoUi();
    updateScore();
    e.target.value='';
  }
})

function updateScore(){
  score+=10;
  scoreEl.innerHTML=`${score} คะแนน`;
  // console.log(scoreEl)
}

const timeInterval = setInterval(updateTime,1000);
function updateTime(){
  if(time === 0){
    clearInterval(timeInterval);
    gameover();
  }
  time--;
  timeEl.innerHTML=`${time} วินาที`;
}
function gameover(){
  gameoverEl.style.display='flex';
  gameoverEl.innerHTML=`<button onclick="location.reload()">เล่นอีกครั้ง</button>`
}


//cursorไปที่textEL เลย
textEl.focus();

btn.addEventListener('click',()=>{
  settings.classList.toggle('hide')
})
levelEl.addEventListener('change',(e)=>{
  level=e.target.value;
  localStorage.setItem("mode",level);

})

displayWordtoUi();