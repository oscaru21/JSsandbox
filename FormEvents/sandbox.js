const form = document.querySelector('form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
   //validation
   const username = form.username.value;
   
   if(usernamePattern.test(username)){
       feedback.textContent = "that username is valid";
   }else{
       feedback.textContent = "username is not valid!";
   }
})

//live feedback

form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        e.target.setAttribute('class', 'success');
    }else{
        e.target.setAttribute('class', 'error');
    }
})
