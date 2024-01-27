import { useContext } from "react";
import CountryCard from "./CountryCard"
import { CountriesContext } from "../contexts/CountriesContext";

const CountriesGrid = () => {
    const {countries} = useContext(CountriesContext);

    return (
        <div className="card-grid">
            {countries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

export default CountriesGrid;