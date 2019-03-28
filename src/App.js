import React from "react";
import Travel from "./Travel";
// import logo from "./logo.svg";
// import "./App.css";

const InfoTravels = {
	destination: "New-York",
	country: "Etats-Unis",
	photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
	distance: "5785 km",
};

const InfoTravels2 = {
	destination: "Corse",
	country: "France",
	photo: "https://www.kuoni.fr/wp-content/uploads/2017/12/Corse-Croisiere-iStock-586199376_sam74100.jpg",
	distance: "1099 km",
};

const InfoTravels3 = {
	destination: "Bilbil",
	country: "Anywhere",
	photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
	distance: "1000000 km",
};

const InfoTravels4 = {
	destination: "Corse",
	country: "France",
	photo: "https://www.kuoni.fr/wp-content/uploads/2017/12/Corse-Croisiere-iStock-586199376_sam74100.jpg",
	distance: "1099 km",
};

const InfoTravels5 = {
	destination: "New-York",
	country: "Etats-Unis",
	photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
	distance: "5785 km",
};

const App = () => (
	<div>
		<Travel {...InfoTravels} />
		<Travel {...InfoTravels2} />
		<Travel {...InfoTravels3} />
		<Travel {...InfoTravels4} />
		<Travel {...InfoTravels5} />
	</div>
);

export default App;
