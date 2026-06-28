import OverviewCard from "./overviewCard";

function OverviewSection({ overviewData }) {
  return (
    <div className="overview-section">
      <h3>Overview - Today</h3>

      <div className="overview-card-container">
        {overviewData.map((card) => {
          return <OverviewCard key={card.id} cardData={card} />;
        })}
      </div>
    </div>
  );
}

export default OverviewSection;
