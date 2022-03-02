const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const pattern = /^[a-z]{6,}$/;
    if(!pattern.test(form.username.value)){
        form.username.style.borderColor = 'red';
    }else{
        form.username.style.borderColor = 'black';
    }
    console.log(form.username.value);
    console.log(form.password.value);
})

//testing regular expressions
