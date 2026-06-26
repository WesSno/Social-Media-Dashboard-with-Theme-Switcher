function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="theme">
      <div className="theme-name">{isDarkMode ? "Light" : "Dark"} Mode</div>

      <label htmlFor="theme-selector" className="switch">
        <input
          id="theme-selector"
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ThemeToggle;
