
const APP_ID = '357ce6601c5edde073e99fe6329ea6dc';
const DEFAULT_VALUE = '--';

const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const feelLike = document.querySelector('.feel-like');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');



searchInput.addEventListener('change', (e) => {
    //console.log('[SearchInput]', e);
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&q=${e.target.value}&units=metric&lang=fr`)
        .then(async res => {
            const data = await res.json();
            console.log('[searchInput]', data);

            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            feelLike.innerHTML = Math.round(data.main.feels_like) || DEFAULT_VALUE;

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML =  moment.unix(data.sys.sunset).format('H:mm')|| DEFAULT_VALUE;
            humidity.innerHTML =  data.main.humidity|| DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed*3.6).toFixed(2) || DEFAULT_VALUE;
        });
});