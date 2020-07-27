// init store
const store = new Store();
// get stored location data
const wLocation = store.getLocationData();
// init weather
const weather = new Weather(wLocation.city, wLocation.country);
// init ui
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city');
	const country = document.getElementById('country');

	weather.changeLocation(city.value, country.value);

	// set location in LS
	store.setLocationData(city.value, country.value);

	// get and display weather
	getWeather();

	// close modal
	$('#locModal').modal('hide');
	city.value = '';
	country.value = '';
});

function getWeather() {
	weather
		.getWeather()
		.then((results) => {
			console.log(results);
			ui.paint(results);
		})
		.catch((err) => console.log(err));
}
