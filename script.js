const apiKey = 'f5f96041abac3fd82b7d92c053cc2764';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector('.app').style.display = 'none';
    document.querySelector('.error').style.display = 'block';
  } else {
    const data = await response.json();

    const weatherIcon = document.querySelector('#weather-icon');
    const weatherStatue = data.weather[0].main;
    weatherIcon.src = `./images/${weatherStatue.toLowerCase()}.png`;

    document.querySelector('.temperature-number').innerHTML = Math.round(
      data.main.temp
    );
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.Wind-Speed-number').innerHTML =
      data.wind.speed + ' km/h';
    document.querySelector('.Humidity-number').innerHTML =
      data.main.humidity + '%';

    document.querySelector('.app').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
}

const searchBox = document.querySelector('#search');
const searchBtn = document.querySelector('#search-button');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkWeather(searchBox.value);
});
