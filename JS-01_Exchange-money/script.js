const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

const rateText=document.getElementById('rate');

const btn = document.getElementById('swap-btn');


function calculateMoney(){
  const one=currency_one.value;
  const two=currency_two.value
  let url = `https://v6.exchangerate-api.com/v6/662239ff5ca6bbaafc6aeaaa/latest/${one}`
  // console.log(url);

  fetch(url).then(res=>res.json())
  .then(data=>{
    amount_two.value = amount_one.value*data.conversion_rates[two]
    rateText.innerHTML= `1 ${one} = ${data.conversion_rates[two]} ${two}`
  })
}

function swap_currency(){
  let temp = currency_two.value;
  currency_two.value=currency_one.value;
  currency_one.value=temp;
  calculateMoney();
}

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);
amount_one.addEventListener('input',calculateMoney);
amount_two.addEventListener('input',calculateMoney);
btn.addEventListener('click',swap_currency);
calculateMoney();