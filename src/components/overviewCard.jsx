function OverviewCard({ cardData, isDarkMode }) {
  return (
    <article className="overview-card">
      <div className="page-views">
        <p>{cardData.metric}</p>
        <h4>{cardData.value}</h4>
      </div>

      <div className="percentage-change">
        <div className="platform">
          <img src={cardData.platform} alt="social media icon" />
        </div>

        <div
          className={
            cardData.isPositive
              ? "overview-metrics metric-positive"
              : "overview-metrics metric-negative"
          }
        >
          <div className="percentage-value-arrow">
            <img
              src={
                cardData.isPositive
                  ? "/images/icon-up.svg"
                  : "/images/icon-down.svg"
              }
              alt="arrow icon"
            />
          </div>

          <p>{cardData.percentage}%</p>
        </div>
      </div>
    </article>
  );
}

export default OverviewCard;
