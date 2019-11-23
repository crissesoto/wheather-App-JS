const key = "L6gtFl47bvHJUf6TJHb6jWgAwQ3z7MBK";

const getCurrentWeather = async cityKey => {
  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${cityKey}?apikey=${key}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

const getCity = async cityname => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${cityname}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};
