import React from 'react';
import { SearchInput } from './components/SearchInput/SearchInput';
import { CountriesList } from './components/CountriesList/CountriesList';
import { RegionFilter } from './components/RegionFilter/RegionFilter';
import { useFetchCountries } from './hooks/useFetchCountries';

import './CountriesDisplay.css';

export function CountriesDisplay() {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [selectedRegion, setSelectedRegion] =
    React.useState<string>('');
  const { countries, loading, fetchError } =
    useFetchCountries(searchValue);

  const filteredCountries = React.useMemo(() => {
    if (!countries) return [];
    return countries.filter(
      (country) =>
        !selectedRegion || country.region === selectedRegion
    );
  }, [countries, selectedRegion]);

  return (
    <>
      <section className="controls-container">
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <RegionFilter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </section>
      {fetchError && (
        <p>
          Błąd: Nie znaleziono Państwa, które pasuje do wyszukiwania
        </p>
      )}
      {loading && <p>Ładowanie danych...</p>}

      <section className="country-card-grid">
        <CountriesList countries={filteredCountries} />
      </section>
    </>
  );
}
