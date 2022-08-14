const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const name_List = document.getElementById('text');
const amount_List = document.getElementById('amount');


const dataTransaction = [
  { id:1 ,text:"ค่าขนม",amount:-100 },
  { id:2 ,text:"เงินเดือน",amount:+15000.50 },
  { id:3 ,text:"ค่าห้อง",amount:-5000 }
]

let transactions = dataTransaction;


function init(){
  list.innerHTML='';
  transactions.forEach(addDatatoList);
  calculateMoney();
}


function addDatatoList(transactions){
  const symbol = transactions.amount < 0 ?'-':'+';
  const status = transactions.amount < 0 ?'minus':'plus';
  const item =document.createElement('li');
  // item.innerHTML =`ค่าซ่อมรถ <span>-400</span> <button class="btn-delete">X</button>`;
  item.classList.add(status);
  item.innerHTML=`${transactions.text}<span>${symbol}${Math.abs(transactions.amount)}</span> <button class="btn-delete" onclick="removeData(${transactions.id})">X</button>`;
  list.appendChild(item);
}


function calculateMoney(){
  const amounts = transactions.map((transactions)=>transactions.amount);
  // console.log(amounts);
  const Totalmoney = amounts.reduce((sum,item)=>(sum+=item),0).toFixed(2);
  // console.log(Totalmoney);
  //รายรับ
  const income = amounts.filter(item =>item > 0).reduce((sum,item)=>(sum+=item),0).toFixed(2);
  // console.log(income);
  //รายจ่าย
  const outcome = amounts.filter(item =>item < 0).reduce((sum,item)=>(sum+=item),0).toFixed(2);
  // console.log(outcome);


  // balance.innerHTML=`฿${Totalmoney}`
  balance.innerText = `฿` + numberWithCommas(Totalmoney);
  money_plus.innerText= `฿`+numberWithCommas(income);
  money_minus.innerText=`฿` +numberWithCommas(outcome);
}

function numberWithCommas(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function addTransaction(e){
  e.preventDefault();
  if(name_List.value.trim() === '' || amount_List.value.trim() === ''){
    alert("ห้ามช่องว่าง");
  }else{
    const data = {
      id:generateID(),
      text:name_List.value,
      amount:parseFloat(amount_List.value)
    }
    transactions.push(data);
    addDatatoList(data);
    // console.log(transactions);
    calculateMoney();
    name_List.value='';
    amount_List.value='';
  }
}
function removeData(id){
  // console.log("delete data")
  transactions= transactions.filter(transaction => transaction.id !== id);
  init();
}

function generateID(){
  return Math.floor(Math.random()*100000);
}

form.addEventListener('submit',addTransaction);
init();



