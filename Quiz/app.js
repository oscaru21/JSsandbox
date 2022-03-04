const correctAnswers = ['A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //check user answers
    for(let i = 0; i < correctAnswers.length; i++){
        if(userAnswers[i] === correctAnswers[i]){
            score += 25;
        }
    }
    //display score on screen
    result.classList.remove('d-none');
    scrollTo(0,0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },30);
    
});



