const form = document.querySelector("form");
const card = document.querySelector(".card");
const weatherDetails = document.querySelector(".details");
const daytime = document.querySelector(".daytime");
const icon = document.querySelector(".icon img");
const updateUI = object => {
  const cityDetails = object.cityKey;
  const weather = object.currentWeather;

  console.log(cityDetails, weather);

  // remove d-none class if it's present

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  // update details div template

  weatherDetails.innerHTML = `
  <h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${Math.floor(weather.Temperature.Metric.Value)}</span>
    <span>&deg;C</span>
  </div>
  `;
};

const updateCity = async city => {
  const cityKey = await getCity(city);

  const currentWeather = await getCurrentWeather(cityKey.Key);

  return {
    cityKey: cityKey,
    currentWeather: currentWeather
  };
};

form.addEventListener("submit", e => {
  e.preventDefault();

  // get city input value
  let searchedCity = form.city.value.trim();
  form.reset();

  // update UI
  updateCity(searchedCity)
    .then(object => updateUI(object))
    .catch(error => console.log("rejected:", error));
});
