const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.busy');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let price = +movieSelect.value;

container.addEventListener('click',e=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('busy')){
    e.target.classList.toggle('selected');
    updateSelected();
  }
});
movieSelect.addEventListener('change',e=>{
  price=+e.target.value;
  setMovieData(e.target.selectedIndex,e.target.value);
  updateSelected();
})
function updateSelected(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const countseat=selectedSeats.length;
  const seatsIndex=[...selectedSeats].map((seat)=>[...seats].indexOf(seat));
  localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));
  count.innerText=countseat;
  total.innerText=countseat*price;
}
function setMovieData(MovieIndex,MoviePrice){
  localStorage.setItem("movieIndex",MovieIndex);
  localStorage.setItem("moviePrice",MoviePrice);
}
function loadData(){
  const selectseats=JSON.parse(localStorage.getItem("selectedSeats"));
  const movieIndex = localStorage.getItem("movieIndex");

  seats.forEach((seat,index)=>{
    if(selectseats.indexOf(index)>-1){
      seat.classList.add('selected');
    }
  })

  if(movieIndex!==null){
    movieSelect.selectedIndex=movieIndex;
  }
}

loadData();
updateSelected();