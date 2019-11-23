const key = "hF5ZltzAF206HAFuqG2kmIMkrAHXUuds";

const getCurrentWeather = async cityKey => {
  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${cityKey}?apikey=${key}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
  //console.log(data[0]);
};

const getCity = async cityname => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${cityname}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0].Key;

  //console.log(data[0].Key);
};

getCity("bruges")
  .then(cityKey => {
    return getCurrentWeather(cityKey);
  })
  .then(currentWeather => {
    console.log(currentWeather);
  })
  .catch(error => {
    console.log("rejected:", error);
  });
