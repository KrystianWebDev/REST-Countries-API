import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { Countries } from './pages/Countries/Countries';
import React from 'react';

function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Countries />
    </>
  );
}

export default App;
