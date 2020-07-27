class Store {
	constructor() {
		this.city;
		this.country;
		this.defaultCity = 'Karachi';
		this.defaultCountry = 'PK';
	}

	getLocationData() {
		const city = localStorage.getItem('city');
		const country = localStorage.getItem('country');
		if (city === null) {
			this.city = this.defaultCity;
		} else {
			this.city = city;
		}
		if (country === null) {
			this.country = this.defaultCountry;
		} else {
			this.country = country;
		}

		return {
			city: this.city,
			country: this.country,
		};
	}

	setLocationData(city, country) {
		localStorage.setItem('city', city);
		localStorage.setItem('country', country);
	}
}
