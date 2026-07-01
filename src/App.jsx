import { useState, useEffect } from "react";
import Header from "./components/Header";
import SocialCard from "./components/SocialCard";
import OverviewSection from "./components/OverviewSection";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [socialMediaData, setSocialMediaData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);

  /************** FETCHING SOCIAL MEDIA DATA *************/
  useEffect(() => {
    fetch("/data/socialMediaData.json")
      .then((res) => res.json())
      .then((data) => setSocialMediaData(data))
      .catch((error) => console.log(error));
  }, []);

  /************* FETCHING OVERVIEW DATA **************/
  useEffect(() => {
    fetch("/data/overviewData.json")
      .then((res) => res.json())
      .then((data) => setOverviewData(data))
      .catch((error) => console.log(error));
  }, []);

  /******* ADDING THEME STYLES TO BODY ***********/
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "app dark-theme" : "app light-theme"}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="social-card-container">
        {socialMediaData.map((card) => (
          <SocialCard key={card.id} cardData={card} />
        ))}
      </div>

      <OverviewSection overviewData={overviewData} />
    </div>
  );
}

export default App;
