import ThemeToggle from "./ThemeToggle";

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header id="header">
      <div className="app-info">
        <h1 className="app-title"> Social Media Dashboard</h1>
        <p className="total-followers">Total Followers: 23,004</p>
      </div>

      <div className="separator"></div>

      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </header>
  );
}

export default Header;
