import React from 'react';
import { SearchInput } from './components/SearchInput/SearchInput';
import { CountriesList } from './components/CountriesList/CountriesList';
import { RegionFilter } from './components/RegionFilter/RegionFilter';
import { useFetchCountries } from './hooks/useFetchCountries';
import { Toast } from '@/components/Toast/Toast';

import './CountriesDisplay.scss';
import { LoadingOverlay } from '@/components/LoadingOverlay/LoadingOverlay';

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
      {
        <LoadingOverlay
          isLoading={loading}
          message="Loading countries..."
        />
      }
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
        <Toast
          message="Error: There is no Country matching a searching value"
          type="error"
          duration={null}
        />
      )}

      <section className="country-card-grid">
        <CountriesList countries={filteredCountries} />
      </section>
    </>
  );
}
