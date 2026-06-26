import OverviewCard from "./overviewCard";

function OverviewSection({ overviewData }) {
  return (
    <div className="overview-section">
      <h3>Overview - Today</h3>

      {overviewData.map((card) => {
        return <OverviewCard key={card.id} cardData={card} />;
      })}
    </div>
  );
}

export default OverviewSection;
