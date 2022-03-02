const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.close');

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e =>{
    console.log(e.target.classList)
    if(e.target.classList[0] === 'popup-wrapper'){
        popup.style.display = 'none';
    }
});

button.addEventListener('click', () => {
    popup.style.display = 'block';
});