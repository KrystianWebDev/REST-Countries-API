import './ThemeToggle.scss';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export function ThemeToggle({
  theme,
  toggleTheme,
}: ThemeToggleProps) {
  return (
    <section className="theme-toggle-container">
      <h1 className="h1-header">Where in The World?</h1>
      <button
        onClick={toggleTheme}
        value={theme}
        className="theme-toggle"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </section>
  );
}
