import { Country } from '@interfaces/types';
import React from 'react';
import CountryFlag from './components/CountryFlag/CountryFlag';
import { useCountriesFilter } from '../../hooks/useCountriesFilter';
import { countriesData } from './CountriesDisplay.const';
function CountriesDisplay() {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const arrayFlags = React.useMemo(() => {
    const cokolwiek = searchValue;
    const arrayFlags: Country[] = countriesData.map((country) => ({
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital || 'No capital',
      numericCode: country.numericCode,
      flag: country.flags.svg,
      cokolwiek: cokolwiek,
    }));
    return arrayFlags;
  }, [searchValue]);

  const filteredCountries = useCountriesFilter(
    arrayFlags,
    searchValue
  );

  return (
    <>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
      {filteredCountries.map((country) => (
        <CountryFlag
          key={country.numericCode}
          {...country}
        ></CountryFlag>
      ))}
    </>
  );
}

export default CountriesDisplay;
