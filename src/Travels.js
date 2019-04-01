import React from "react";
import Travel from "./Travel";

const travelsInfos = [
	{
		destination: "New-York",
		country: "Etats-Unis",
		photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
		distance: "5785 km",
	},

	{
		destination: "Corse",
		country: "France",
		photo: "https://www.kuoni.fr/wp-content/uploads/2017/12/Corse-Croisiere-iStock-586199376_sam74100.jpg",
		distance: "1099 km",
	},

	{
		destination: "Bilbil",
		country: "Anywhere",
		photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
		distance: "1000000 km",
	},

	{
		destination: "Corse",
		country: "France",
		photo: "https://www.kuoni.fr/wp-content/uploads/2017/12/Corse-Croisiere-iStock-586199376_sam74100.jpg",
		distance: "1099 km",
	},

	{
		destination: "New-York",
		country: "Etats-Unis",
		photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
		distance: "5785 km",
	},
];

const Travels = () => (
	<div>
		{travelsInfos.map(travel => (
			<Travel {...travel} />
		))}
	</div>
);

export default Travels;
