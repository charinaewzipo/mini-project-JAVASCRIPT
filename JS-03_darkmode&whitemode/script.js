const swith_theme = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image01');
const image2 = document.getElementById('image02');
const image3 = document.getElementById('image03');

function swithMode(e){
  if(e.target.checked){
    document.documentElement.setAttribute('theme','dark');
    darkMode();
  }
  else{
    document.documentElement.setAttribute('theme','light');
    lightMode();
  }
}

function darkMode(){
  toggleIcon.children[0].textContent="โหมดกลางคืน";
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  nav.style.backgroundColor='rgba(0, 0, 0, 0.5)';
  imageSwithMode('dark');
}
function lightMode(){
  toggleIcon.children[0].textContent="โหมดกลางวัน";
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  nav.style.backgroundColor='rgba(255, 152, 33, 0.5)';
  imageSwithMode('light');
}

function imageSwithMode(mode){
  image1.src=`img/web-${mode}.svg`
  image2.src=`img/game-${mode}.svg`
  image3.src=`img/freelance-${mode}.svg`
}
swith_theme.addEventListener('change',swithMode);