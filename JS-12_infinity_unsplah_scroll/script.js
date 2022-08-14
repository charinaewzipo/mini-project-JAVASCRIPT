const count =10;
const apiKey='rNB-nwQQLXiix_HGCVp_omN9SyDCrqsvlq8Uxa_du2Q';
const apiUrl=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


const imageContainer = document.getElementById('container');

let photoArrays = [];
async function getPhoto(){
  try{
    const response = await fetch(apiUrl);
    photoArrays=await response.json();
    displayImage();
    console.log(photoArrays);
  }catch(err){
    throw(err);
  }
}
function displayImage(){
  photoArrays.forEach((photo)=>{
    const item = document.createElement('a');
    item.setAttribute('href',photo.links.html);
    item.setAttribute('target','_blank');
    const img = document.createElement('img');
    img.setAttribute('src',photo.urls.regular);
    img.setAttribute('title',photo.alt_description);
    img.setAttribute('alt',photo.alt_description);
    item.appendChild(img);
    imageContainer.appendChild(item);
  })
}
getPhoto();

window.addEventListener('scroll',()=>{
  if(window.innerHeight+window.screenY>=document.body.offsetHeight-100){
    //ดึงภาพมาแสดงผล
    alert("hello");
    getPhoto();
  }
});