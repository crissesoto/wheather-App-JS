const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  // get city input value
  let searchedCity = form.city.value.trim();
  form.reset();

  // update UI
  updateUI();
});
