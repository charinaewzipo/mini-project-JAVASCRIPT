
const items = document.querySelectorAll('.weapon');
const equipSlot1 = document.querySelector('#equip-slot1');
const equipSlot2 = document.querySelector('#equip-slot2');
const equipSlot3 = document.querySelector('#equip-slot3');
const equipSlot4 = document.querySelector('#equip-slot4');

const equipWeapon1 = document.querySelector('#equip-weapon1');
const equipWeapon2 = document.querySelector('#equip-weapon2');
const equipWeapon3 = document.querySelector('#equip-weapon3');
const equipWeapon4 = document.querySelector('#equip-weapon4');
const removebtn =document.getElementById('remove-btn');
const dropitem = document.getElementById('dropitem');

const div1 = document.getElementById('items');
const div2 = document.getElementById('dropitem');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var id = document.getElementById(data);
  ev.target.appendChild(id);
}

function dropItem(e){
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  var id = document.getElementById(data);
  div2.appendChild(id);

}
items.forEach((item)=>{
  item.addEventListener('dragstart',drag);
})
div1.addEventListener('drop',drop);
div1.addEventListener('dragover',allowDrop);
div2.addEventListener('drop',drop);
div2.addEventListener('dragover',allowDrop);

removebtn.addEventListener('drop',dropItem);
removebtn.addEventListener('dragover',allowDrop);


equipSlot1.addEventListener('drop',dropWeapon);
equipSlot1.addEventListener('dragover',allowDrop);

equipSlot2.addEventListener('drop',dropWeapon2);
equipSlot2.addEventListener('dragover',allowDrop);

equipSlot3.addEventListener('drop',dropWeapon3);
equipSlot3.addEventListener('dragover',allowDrop);

equipSlot4.addEventListener('drop',dropWeapon4);
equipSlot4.addEventListener('dragover',allowDrop);


// function dragOverWeapon(e){
//   e.preventDefault();
// }
function dropWeapon(e){
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const image = document.querySelector('#'+data);
  equipWeapon1.src = image.src;
}
function dropWeapon2(e){
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const image = document.querySelector('#'+data);
  equipWeapon2.src = image.src;
}
function dropWeapon3(e){
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const image = document.querySelector('#'+data);
  equipWeapon3.src = image.src;
}
function dropWeapon4(e){
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const image = document.querySelector('#'+data);
  equipWeapon4.src = image.src;
}


const inventory_btn = document.getElementById('inventory-btn');
const inventory = document.getElementById('inventory');
function openInventory(){
  inventory.classList.toggle("hide");
}
inventory_btn.addEventListener('click',openInventory);

const show_bag = document.getElementById('add-inventory-btn');
const upgrade_bag = document.getElementById('upgrade-bag');
function openBag(){
  console.log("hello")
  upgrade_bag.classList.toggle("hide");
}

show_bag.addEventListener('click',openBag);


function dropbag(e){
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  var id = document.getElementById(data);

  e.target.appendChild(id);
  
}

const bags = document.querySelectorAll(".bag");
const span = document.querySelector("#mySPAN");
bags.forEach((bag)=>{
  if(bag.contains(span)){
    bag.addEventListener('click',()=>{
      let text = "Want to unlock ?";
      if (confirm(text)){
        bag.removeChild(bag.lastChild);
        bag.addEventListener('drop',dropbag);
        bag.addEventListener('dragover',allowDrop);
      }else{
        console.log("false");
      }
    })
  }else{
    bag.addEventListener('drop',dropbag);
    bag.addEventListener('dragover',allowDrop);
  }
})
