import { Country } from '@interfaces/types';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useDebounce } from '../../hooks/useDebounce';
import { SearchInput } from './components/SearchInput/SearchInput';
import { CountriesList } from './components/CountriesList/CountriesList';
import { RegionFilter } from './components/RegionFilter/RegionFilter';
import './CountriesDisplay.css';
export function CountriesDisplay() {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [selectedRegion, setSelectedRegion] =
    React.useState<string>('');
  const debouncedSearch = useDebounce(searchValue, 500);
  const {
    data: countries,
    loading,
    error: fetchError,
  } = useFetch<Country[]>(
    !debouncedSearch
      ? 'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3'
      : `https://restcountries.com/v3.1/name/${debouncedSearch}?fields=name,population,region,capital,flags,cca3`,
    { initialValue: [] }
  );

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
        ></SearchInput>
        <RegionFilter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        ></RegionFilter>
      </section>
      {fetchError && (
        <p>
          Błąd: Nie znaleziono Państwa, które pasuje do wyszukiwania
        </p>
      )}
      {loading && <p>Ładowanie danych...</p>}

      <section className="country-card-grid">
        <CountriesList countries={filteredCountries}></CountriesList>
      </section>
    </>
  );
}
