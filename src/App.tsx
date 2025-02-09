import { Countries } from './pages/Countries/Countries';
import { CountryDetail } from './pages/CountryDetails/CountryDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderThemeContainer } from './components/HeaderThemeContainer/HeaderThemeContainer';

function App() {
  return (
    <>
      <HeaderThemeContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route
            path="/country/:countryCode"
            element={<CountryDetail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
