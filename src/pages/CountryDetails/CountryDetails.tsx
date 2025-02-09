import { useParams, Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../pages/Countries/hooks/useFetch';
import { CountryDetails } from '@types/types';
import { Toast } from '@/components/Toast/Toast';
import { LoadingOverlay } from '@/components/LoadingOverlay/LoadingOverlay';

import './CountryDetails.scss';

export function CountryDetail() {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const {
    data: country,
    loading,
    error,
  } = useFetch<CountryDetails>(
    `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,population,region,subregion,capital,flags,cca3,borders,currencies,languages,tld`
  );

  return (
    <>
      {
        <LoadingOverlay
          isLoading={loading}
          message="Loading country details..."
        />
      }

      {error && (
        <Toast
          message={`Error: ${error.message}`}
          type="error"
          duration={null}
        />
      )}
      {!country && !loading && (
        <Toast
          message="no country found"
          type="warning"
          duration={null}
        />
      )}

      <article className="country-details">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        {country && (
          <section className="country-content">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="country-flag"
            />

            <div className="country-info">
              <h1 className="country-name">{country.name.common}</h1>

              <section className="country-details-grid">
                <div>
                  <p className="detail-item">
                    <span className="detail-label">Population: </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p className="detail-item">
                    <span className="detail-label">Region: </span>
                    {country.region}
                  </p>
                  <p className="detail-item">
                    <span className="detail-label">Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p className="detail-item">
                    <span className="detail-label">Capital: </span>
                    {country.capital}
                  </p>
                </div>
              </section>

              {country.borders && country.borders.length > 0 ? (
                <section className="borders-section">
                  <h2 className="borders-title">Border Countries:</h2>
                  <div className="borders-grid">
                    {country.borders.map((border) => (
                      <Link
                        key={border}
                        to={`/country/${border}`}
                        className="border-link"
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <section className="borders-section">
                  <h2 className="borders-title">
                    Border Countries:{' '}
                  </h2>
                  <p className="detail-item">{`${country.name.common} has no bordering countries`}</p>
                </section>
              )}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
