const CountryCard = ({country}) => {
    return (
        <div className="card">
            <div className="card_images">
                <img className="backdrop-blur" src={country.flags.svg} alt=""></img>
                <img src={country.flags.svg} alt={country.flags.alt}></img>
            </div>
            <div className="card__info">
                <h2>{country.name.official}</h2>
                <ul>
                    <li><span>Population: </span>{country.population.toLocaleString()}</li>
                    <li><span>Region: </span>{country.region}</li>
                    <li><span>Capital: </span>{country.capital}</li>
                </ul>
            </div>
        </div>
    );
}

export default CountryCard;