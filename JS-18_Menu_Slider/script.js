const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('create-account');
const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');
togglebtn.addEventListener('click',()=>{
  document.body.classList.toggle('show-nav');
});
openbtn.addEventListener('click',()=>{
  modal.classList.add('show-modal');
});
closebtn.addEventListener('click',()=>{
  modal.classList.remove('show-modal');
});

window.addEventListener('click',(e)=>{
  // e.target == modal ? modal.classList.remove('show-modal') : true
  if(e.target == modal)
  modal.classList.remove('show-modal')
})