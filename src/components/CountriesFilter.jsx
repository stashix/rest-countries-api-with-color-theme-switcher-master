import { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";

const CountriesFilter = () => {
    const {regions, filter, setFilter} = useContext(CountriesContext);

    const handleRegionChange = (event) =>
        setFilter({...filter, region: event.target.value});

    const handleNameChange = (event) => {
        setFilter({...filter, name: event.target.value});
    }

    return (
        <section role="search">
            <div>
                <input type="search" name="country-name-search" 
                    placeholder="Search for a country..." 
                    value={filter.name} onChange={handleNameChange}/>
            </div>
            <div>
                <select onChange={handleRegionChange} value={filter.region}>
                    <option value={''}>Filter by Region</option>
                    {regions.map(region => (
                        <option key={region}>{region}</option>
                    ))}
                </select>
            </div>
        </section>
    );
}

export default CountriesFilter;