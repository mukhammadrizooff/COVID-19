const baseCountriesAPINames = async (countriesNames) => {
  const data = await fetch(`https://corona.lmao.ninja/v2/countries/${countriesNames}`)
    .then((responce) => responce.json());
  return data;
};

export default baseCountriesAPINames;
