import { API } from "../constants/Constants"

export const getCountries = async (fieldsFilter) => {
    const localCopy = JSON.parse(window.localStorage.getItem(API.STORAGE_KEY));

    if(localCopy != null && localCopy.timeStamp > Date.now())
        return localCopy.countries;
    
    const url = applyFieldsFilter('all', fieldsFilter);

    const response = await fetch(url);
    const countries = await response.json();

    window.localStorage.setItem(API.STORAGE_KEY, JSON.stringify({
        countries: countries,
        timeStamp: Date.now() + 10 * 60 * 1000
    }));

    console.log(countries);
    return countries;
}

const applyFieldsFilter = (path, fieldsFilter) => {
    const url = `${API.BASE_URI}/${path}`;

    if(fieldsFilter == null || fieldsFilter.length == 0)
        return url;

    return `${url}?fields=${fieldsFilter.join(',')}`;
}