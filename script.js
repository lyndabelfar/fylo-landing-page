const span = document.querySelector('span');
const input = document.querySelector('#email-input');
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', ValidateEmail)


function ValidateEmail() {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
        span.classList.remove('active')
  
    } else {
        span.classList.add('active')

    }
  
  }