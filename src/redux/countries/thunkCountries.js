import getCountriesByNamesAPI from '../../api/countriesAPI';
import { getCountriesAction } from '../actions/countriesAction';

const countriesThunk = (countriesNames) => async (dispatch) => {
  const countries = await getCountriesByNamesAPI(countriesNames);
  const validCountries = [];
  countries.forEach((country) => {
    validCountries.push({
      country: country.country,
      cases: country.cases,
      flag: country.countryInfo.flag,
    });
  });
  dispatch(getCountriesAction(validCountries));
};

export default countriesThunk;
