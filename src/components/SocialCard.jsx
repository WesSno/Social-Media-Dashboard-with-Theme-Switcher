function SocialCard({ cardData, isDarkMode }) {
  return (
    <article
      className="social-card"
      style={{
        "--top-border": cardData.borderColor,
      }}
    >
      <div className="bio">
        <div className="platform-icon">
          <img src={cardData.platform} alt="user platform" />
        </div>
        <p>{cardData.username}</p>
      </div>

      <div className="followers">
        <h2>{cardData.followers}</h2>
        <p>{cardData.label}</p>
      </div>

      <div
        className={
          cardData.isPositive
            ? "social-metrics metric-positive"
            : "social-metrics metric-negative"
        }
      >
        <div className="change-arrow">
          <img
            src={
              cardData.isPositive
                ? "./images/icon-up.svg"
                : "./images/icon-down.svg"
            }
            alt="arrow icon"
          />
        </div>
        <p>{cardData.todayChange} Today</p>
      </div>
    </article>
  );
}

export default SocialCard;
