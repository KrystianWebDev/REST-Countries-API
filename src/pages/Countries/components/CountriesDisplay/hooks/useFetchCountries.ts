import { Country } from '@interfaces/types';
import { useFetch } from '../../../hooks/useFetch.ts';
import { useDebounce } from '../../../hooks/useDebounce.ts';
const apiConfig = {
  BASE_URL: 'https://restcountries.com/v3.1',
  ENDPOINTS: {
    ALL: 'all',
    BY_NAME: 'name',
  },
  FIELDS: 'name,population,region,capital,flags,cca3',
} as const;

export function useFetchCountries(searchValue: string) {
  const debouncedSearch = useDebounce(searchValue);

  const getApiUrl = (search: unknown) => {
    const endpoint = search
      ? `${apiConfig.ENDPOINTS.BY_NAME}/${search}`
      : apiConfig.ENDPOINTS.ALL;
    return `${apiConfig.BASE_URL}/${endpoint}?fields=${apiConfig.FIELDS}`;
  };
  const {
    data: countries,
    loading,
    error: fetchError,
  } = useFetch<Country[]>(getApiUrl(debouncedSearch), {
    initialValue: [],
  });
  return { countries, loading, fetchError };
}
