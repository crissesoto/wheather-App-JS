// https://developer.accuweather.com/
const key = "nrOGV86jnhxLczGGEhNruxAGVr6rcdGA";

// get weather info
const getCurrentWeather = async cityKey => {
  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${cityKey}?apikey=${key}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

// get city info
const getCity = async cityname => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${cityname}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};
