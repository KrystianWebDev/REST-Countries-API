import React from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

import './HeaderThemeContainer.scss';

export function HeaderThemeContainer() {
  const [theme, setTheme] = React.useState('dark');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="header-theme-container">
      <h1 className="h1-header">Where in The World?</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}
