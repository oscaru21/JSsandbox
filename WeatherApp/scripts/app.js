//Responsible of all the DOM interaction and showing content
const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const forecast = new Forecast();

const updateUI = data => {
    //destructure syntax
    const {cityDetails, weather} = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.LocalizedName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //update time image
    let timeSrc = null;
    timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    //remove d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const city = e.target.city.value.trim();  
    form.reset();

    //update the UI with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});