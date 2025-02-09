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
    <>
      <button
        onClick={toggleTheme}
        value={theme}
        className="theme-toggle"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  );
}
