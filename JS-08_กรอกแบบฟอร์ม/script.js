const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('re-password');


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkInput([username,email,password1,password2])
  // console.log("hello")
  if(!validEmail(email.value)){
    showError(email,'email ไม่ถูกต้อง')
  }else{
    showSuccess(email);
  }
  checkPassword(password1,password2);
  checkInputLength(username,5,10);
  checkInputLength(password1,5,12);
  checkInputLength(password2,5,12);
})

function showError(input,message){
  const formControl = input.parentElement;
  formControl.className ='form-control error'
  const small = formControl.querySelector('small');
  small.innerHTML=message;
}
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className ='form-control success'
}

function validEmail(email){
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}

function checkInput(inputArray){
  inputArray.forEach((input)=>{
    if(input.value.trim() === ''){
      showError(input,`กรุณาป้อนข้อมูล ${getInputCase(input)}`)
    }else{
      showSuccess(input);
    }
  })
}
function getInputCase(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkPassword(password1,password2){
  if(password1.value.trim() !== password2.value.trim()){
    showError(password2,'รหัสผ่านไม่ตรงกัน')
  }
}
function checkInputLength(input,min,max){
  if(input.value.length<=min){
    showError(input,`${getInputCase(input)} ต้องมากกว่า ${min} ตัวอักษร`)
  }else if (input.value.length>=max){
    showError(input,`${getInputCase(input)} ต้องไม่เกิน ${max} ตัวอักษร`)
  }else{
    showSuccess(input);
  }
}