import { useEffect, useState } from "react"
import { CountriesContext } from "./CountriesContext";
import { getCountries } from "../api/CountriesApi";

const CountriesProvider = ({children}) => {
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);

    const [filter, setFilter] = useState({
        name: "",
        region: ""
    });

    useEffect(() => {
        (async () => {
            const countries = await getCountries(['name', 'region', 'capital', 
                'cca3', 'flags', 'population']);
            setCountries(countries);
            setRegions([...new Set(countries.map(x => x.region))]);
        })();

        return () => {};
    }, []);

    const value = {
        countries: countries.filter(cnt => {
            const hasRegion = filter.region.length == 0
                || cnt.region === filter.region;

            const hasName = filter.name.length == 0 
                || cnt.name.official.toLowerCase()
                    .includes(filter.name.trim().toLowerCase());

            return hasName && hasRegion;
        }),
        regions: regions,
        filter: filter,
        setFilter: setFilter
    };

    return (
        <CountriesContext.Provider value={value}>
            {children}
        </CountriesContext.Provider>
    );
}

export default CountriesProvider;