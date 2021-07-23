console.log('success');

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btnSign = document.querySelector('.btnSign')
let btnLogin = document.querySelector('.btnLogin')

btnSign.addEventListener('click',signUp)
btnLogin.addEventListener('click',logIn)

let user = {}

function getValue(){
  user = {
    email: email.value,
    password: password.value,
  }
}


function signUp(){
  getValue()

  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',user)
  .then(res => {
    console.log(res.data)
    alert(res.data.message)
  })
  .catch(err => {
    console.error(err); 
  })
}


function logIn(){
  getValue()

  axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',user)
  .then(res => {
    console.log(res.data)
    alert(res.data.message)
  })
  .catch(err => {
    console.error(err); 
  })
}


