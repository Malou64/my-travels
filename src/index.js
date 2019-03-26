import React from "react";
import ReactDOM from "react-dom";
import Travel from "./Travel";

const InfoTravels = {
    destination: "New-York",
    country: "Etats-Unis",
    photo: "http://getwallpapers.com/wallpaper/full/2/c/5/619418.jpg",
    distance: "5785 km"
};

const InfoTravels2 = {
    destination: "Corse",
    country: "France",
    photo: "https://www.kuoni.fr/wp-content/uploads/2017/12/Corse-Croisiere-iStock-586199376_sam74100.jpg",
    distance: "1099 km"
};

const App = () => (
    <div>
        <Travel {...InfoTravels} />
        <Travel {...InfoTravels2} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
